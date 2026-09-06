import { createClient } from 'npm:@supabase/supabase-js@2'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

const TEMPLATE_NAME = 'new-lead-notification'
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function jsonResponse(data: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment variables')
    return jsonResponse({ error: 'Server configuration error' }, 500)
  }

  // Only a lead id is accepted from the browser — every value that ends up in
  // the email is read back from the stored row, never trusted from the client.
  let leadId: string
  try {
    const body = await req.json()
    leadId = String(body?.leadId ?? body?.lead_id ?? '')
  } catch {
    return jsonResponse({ error: 'Invalid JSON in request body' }, 400)
  }

  if (!UUID_RE.test(leadId)) {
    return jsonResponse({ error: 'A valid leadId is required' }, 400)
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  const { data: lead, error: leadError } = await supabase
    .from('contact_inquiries')
    .select('id, name, email, phone, service_interest, budget, message, created_at')
    .eq('id', leadId)
    .maybeSingle()

  if (leadError) {
    console.error('Failed to load lead', { error: leadError })
    return jsonResponse({ error: 'Failed to load lead' }, 500)
  }

  if (!lead) {
    return jsonResponse({ error: 'Lead not found' }, 404)
  }

  // Rate limit: only notify for freshly created leads (guards replay of old ids).
  const createdAt = lead.created_at ? new Date(lead.created_at).getTime() : 0
  if (createdAt && Date.now() - createdAt > 10 * 60 * 1000) {
    return jsonResponse({ success: false, reason: 'lead_too_old' })
  }

  const recipient = 'office@mushbloom.co.uk'

  try {
    const result = await sendTemplateEmail(TEMPLATE_NAME, recipient, {
      idempotencyKey: `new-lead-${lead.id}`,
      replyTo: lead.email ?? undefined,
      templateData: {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service_interest: lead.service_interest,
        budget: lead.budget,
        message: lead.message,
      },
    })

    if (!result.sent) {
      const { error: logError } = await supabase.from('email_send_log').insert({
        template_name: TEMPLATE_NAME,
        recipient_email: recipient,
        status: 'suppressed',
      })
      if (logError) console.error('Failed to write email_send_log', { error: logError })
      console.log('Lead notification suppressed')
      return jsonResponse({ success: false, reason: 'recipient_suppressed' })
    }

    const { error: logError } = await supabase.from('email_send_log').insert({
      template_name: TEMPLATE_NAME,
      recipient_email: recipient,
      status: 'sent',
    })
    if (logError) console.error('Failed to write email_send_log', { error: logError })

    console.log('Lead notification sent')
    return jsonResponse({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Failed to send lead notification', { message })
    const { error: logError } = await supabase.from('email_send_log').insert({
      template_name: TEMPLATE_NAME,
      recipient_email: recipient,
      status: 'failed',
      error_message: message,
    })
    if (logError) console.error('Failed to write email_send_log', { error: logError })
    return jsonResponse({ error: 'Failed to send notification' }, 500)
  }
})
