import { supabase } from '@/integrations/supabase/client';

export const ADMIN_EMAIL = 'adrian@mushbloom.co.uk';

/** Server-checked admin role (user_roles table), never a client-side flag. */
export async function isCurrentUserAdmin(): Promise<boolean> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase.rpc('has_role', { _user_id: user.id, _role: 'admin' });
  return data === true;
}

export const AI_TOOLS = [
  { id: 'lead_diagnosis', name: 'Lead diagnosis', hint: 'Paste an enquiry or brief. Get classification, workflow map, opportunities, risks and questions — for your approval.' },
  { id: 'market_research', name: 'Market research', hint: 'Describe the business, market or competitors to research.' },
  { id: 'marketing_growth', name: 'Marketing & growth', hint: 'CRO, copy, SEO / AI-search, offers and launch plans.' },
  { id: 'humanise_copy', name: 'No AI slop rewrite', hint: 'Paste copy, an email or a post to make it sound human.' },
  { id: 'pitch_deck', name: 'Deck & proposal outline', hint: 'Describe the deck or proposal you need.' },
  { id: 'legal_triage', name: 'Legal first-pass', hint: 'Paste a contract or NDA. Summary and issue spotting only — not legal advice.' },
] as const;

export type AiToolId = typeof AI_TOOLS[number]['id'];

export async function runAiTool(tool: AiToolId, input: string, projectId?: string | null): Promise<string> {
  const { data, error } = await supabase.functions.invoke('admin-ai', { body: { tool, input, projectId: projectId ?? null } });
  if (error) {
    let msg = error.message;
    try { const body = await (error as { context?: Response }).context?.json(); if (body?.error) msg = body.error; } catch { /* keep */ }
    throw new Error(msg);
  }
  if (data?.error) throw new Error(data.error);
  return data.output as string;
}
