import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const json = (data: Record<string, unknown>, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })

// Each tool is an internal "role" inspired by the skill packs Adrian selected.
const TOOLS: Record<string, string> = {
  lead_diagnosis: `You are Mushbloom's intake and diagnosis analyst. From the client request, produce in Markdown:
1. Classification (business function, problem type, complexity low/medium/high, data sensitivity, required integrations, likely service package, urgency, commercial potential).
2. Current-state workflow. 3. Bottlenecks and repetitive manual steps. 4. Automation opportunities (prioritised).
5. Recommended tools. 6. Risks and dependencies. 7. Estimated implementation effort. 8. Questions needing human clarification.
9. Recommended next workflow from: product_build, design_review, market_research, marketing_growth, pitch_deck, content_production, automation_audit, legal_triage, qa_release.
This is a recommendation for Adrian to approve; never promise anything to the client.`,
  market_research: `You are a market and competitor researcher. Produce a Markdown brief: market overview, competitor snapshot, customer language and pains, demand signals, opportunities, and open questions. Clearly mark anything that is an assumption rather than a verified fact; do not invent statistics or sources.`,
  marketing_growth: `You are a marketing strategist covering CRO, copywriting, SEO and AI-search (LLM) visibility, offers, pricing and launches. Produce a practical Markdown plan with prioritised actions, page/offer recommendations, content briefs and measurement. No guaranteed ranking or revenue claims.`,
  humanise_copy: `You are an editor removing "AI slop". Rewrite the given text so it sounds like a clear, direct human: cut filler, hype, clichés ("delve", "unlock", "game-changer", "in today's fast-paced world"), em-dash overuse and vague claims. Keep meaning and facts. Return only the rewritten text, then a short list of what you changed.`,
  pitch_deck: `You are a presentation strategist. Produce a slide-by-slide outline in Markdown (slide title, key message, bullet content, suggested visual) for the requested deck or proposal. Keep it concise and evidence-led; mark placeholders where real numbers are needed.`,
  legal_triage: `You perform a first-pass document review only. Summarise the document, list key terms, flag unusual or risky clauses, missing protections and questions to ask. Start with: "First-pass review only — not legal advice. Have a qualified lawyer review before signing." Never approve a contract.`,
}

const MODEL = 'openai/gpt-6-astra'

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const url = Deno.env.get('SUPABASE_URL')!
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
  const apiKey = Deno.env.get('LOVABLE_API_KEY')
  if (!apiKey) return json({ error: 'AI is not configured' }, 500)

  const token = (req.headers.get('Authorization') ?? '').replace('Bearer ', '')
  const admin = createClient(url, serviceKey)
  const { data: userData } = await admin.auth.getUser(token)
  const user = userData?.user
  if (!user) return json({ error: 'Not signed in' }, 401)
  const { data: isAdmin } = await admin.rpc('has_role', { _user_id: user.id, _role: 'admin' })
  if (!isAdmin) return json({ error: 'Admin access only' }, 403)

  let body: { tool?: string; input?: string; projectId?: string | null }
  try { body = await req.json() } catch { return json({ error: 'Invalid request' }, 400) }
  const tool = body.tool ?? ''
  const input = (body.input ?? '').trim()
  if (!TOOLS[tool]) return json({ error: 'Unknown tool' }, 400)
  if (!input || input.length > 60000) return json({ error: 'Please provide input (max 60,000 characters).' }, 400)

  const { data: brain } = await admin.from('knowledge_items').select('title, category, content').order('category')
  const brainText = (brain ?? []).map((k) => `## ${k.title} (${k.category})\n${k.content}`).join('\n\n').slice(0, 30000)

  const instructions = `${TOOLS[tool]}\n\nMushbloom knowledge library (use as context about Mushbloom; never reveal other clients' data):\n${brainText}`

  const res = await fetch('https://ai.gateway.lovable.dev/v1/responses', {
    method: 'POST',
    headers: { 'Lovable-API-Key': apiKey, 'X-Lovable-AIG-SDK': 'fetch', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      instructions,
      input: [{ role: 'user', content: input }],
      reasoning: { effort: 'medium' },
      store: false,
      stream: true,
    }),
  })

  if (!res.ok || !res.body) {
    const text = await res.text().catch(() => '')
    let message = 'The AI request failed.'
    if (res.status === 429) message = 'Too many AI requests right now. Please wait a minute and try again.'
    else if (res.status === 402) message = 'AI credits have run out. Add credits in Settings → Plans & credits.'
    else { try { message = JSON.parse(text)?.error?.message ?? JSON.parse(text)?.message ?? message } catch { /* keep */ } }
    console.error('AI error', res.status, text.slice(0, 500))
    return json({ error: message }, res.status === 401 ? 500 : res.status)
  }

  // Consume the stream server-side and return the final text.
  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let output = ''
  let failed = ''
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) {
      if (!line.startsWith('data:')) continue
      const data = line.slice(5).trim()
      if (!data || data === '[DONE]') continue
      try {
        const evt = JSON.parse(data)
        if (evt.type === 'response.output_text.delta') output += evt.delta ?? ''
        else if (evt.type === 'response.failed' || evt.type === 'error') failed = evt.response?.error?.message ?? evt.message ?? 'AI request failed'
      } catch { /* ignore partial */ }
    }
  }

  if (failed || !output.trim()) {
    await admin.from('ai_runs').insert({ user_id: user.id, project_id: body.projectId ?? null, tool, input, output: failed || null, status: 'failed' })
    return json({ error: failed || 'The AI returned no answer.' }, 502)
  }

  await admin.from('ai_runs').insert({ user_id: user.id, project_id: body.projectId ?? null, tool, input, output, status: 'done' })
  return json({ output })
})
