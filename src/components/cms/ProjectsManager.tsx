import { useEffect, useState } from 'react';
import { Plus, Loader2, CheckCircle2, Sparkles as _unused, Trash2, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { runAiTool } from '@/lib/admin';
import { toast } from '@/hooks/use-toast';

export interface Project {
  id: string; title: string; area: string | null; status: string; brief: string | null;
  diagnosis: string | null; diagnosis_approved: boolean; milestones: string | null; notes: string | null;
  client_id: string | null; inquiry_id: string | null; created_at: string;
}
interface Client { id: string; name: string; company: string | null; email: string | null }

const STATUSES = ['intake', 'diagnosis', 'approved', 'build', 'delivery', 'done', 'on hold'];

const ProjectsManager = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [sel, setSel] = useState<Project | null>(null);
  const [busy, setBusy] = useState(false);
  const [newClient, setNewClient] = useState({ name: '', company: '', email: '' });

  const load = async () => {
    const [{ data: p }, { data: c }] = await Promise.all([
      supabase.from('projects').select('*').order('created_at', { ascending: false }),
      supabase.from('clients').select('id,name,company,email').order('name'),
    ]);
    setProjects((p as Project[]) || []); setClients((c as Client[]) || []);
  };
  useEffect(() => { load(); }, []);

  const create = async () => {
    const { data, error } = await supabase.from('projects').insert({ title: 'New project' }).select().single();
    if (error) return toast({ title: 'Error', description: error.message, variant: 'destructive' });
    await load(); setSel(data as Project);
  };

  const save = async (patch: Partial<Project> = {}) => {
    if (!sel) return;
    const next = { ...sel, ...patch };
    const { error } = await supabase.from('projects').update({
      title: next.title, area: next.area, status: next.status, brief: next.brief, diagnosis: next.diagnosis,
      diagnosis_approved: next.diagnosis_approved, approved_at: next.diagnosis_approved ? new Date().toISOString() : null,
      milestones: next.milestones, notes: next.notes, client_id: next.client_id,
    }).eq('id', sel.id);
    if (error) return toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setSel(next); toast({ title: 'Saved' }); load();
  };

  const diagnose = async () => {
    if (!sel?.brief?.trim()) return toast({ title: 'Add a brief first' });
    setBusy(true);
    try {
      const out = await runAiTool('lead_diagnosis', sel.brief, sel.id);
      await save({ diagnosis: out, diagnosis_approved: false, status: sel.status === 'intake' ? 'diagnosis' : sel.status });
    } catch (e) { toast({ title: 'AI error', description: (e as Error).message, variant: 'destructive' }); }
    finally { setBusy(false); }
  };

  const addClient = async () => {
    if (!newClient.name.trim()) return;
    const { data, error } = await supabase.from('clients').insert({ name: newClient.name.trim(), company: newClient.company || null, email: newClient.email || null }).select().single();
    if (error) return toast({ title: 'Error', description: error.message, variant: 'destructive' });
    setNewClient({ name: '', company: '', email: '' }); await load();
    if (sel) setSel({ ...sel, client_id: (data as Client).id });
  };

  const remove = async () => {
    if (!sel || !confirm('Delete this project?')) return;
    await supabase.from('projects').delete().eq('id', sel.id); setSel(null); load();
  };

  const field = 'w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white text-sm outline-none focus:border-blue-500';

  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="lg:w-80 border-r border-white/10 overflow-y-auto">
        <button onClick={create} className="w-full px-5 py-3 text-left text-blue-400 inline-flex items-center gap-2 border-b border-white/10"><Plus className="h-4 w-4" /> New project</button>
        {projects.map((p) => (
          <button key={p.id} onClick={() => setSel(p)} className={`w-full text-left px-5 py-3 border-b border-white/5 hover:bg-white/5 ${sel?.id === p.id ? 'bg-white/10' : ''}`}>
            <div className="text-sm text-white">{p.title}</div>
            <div className="text-[11px] text-gray-500">{p.status}{p.diagnosis_approved && ' · diagnosis approved'}</div>
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        {!sel ? <p className="text-gray-500">Select or create a project. Tip: open an enquiry and click "Create project".</p> : (
          <div className="max-w-3xl space-y-4">
            <input className={`${field} text-lg font-semibold`} value={sel.title} onChange={(e) => setSel({ ...sel, title: e.target.value })} />
            <div className="grid sm:grid-cols-3 gap-3">
              <select className={field} value={sel.status} onChange={(e) => setSel({ ...sel, status: e.target.value })}>{STATUSES.map((s) => <option key={s} className="bg-gray-900">{s}</option>)}</select>
              <input className={field} placeholder="Area (e.g. Sales)" value={sel.area ?? ''} onChange={(e) => setSel({ ...sel, area: e.target.value })} />
              <select className={field} value={sel.client_id ?? ''} onChange={(e) => setSel({ ...sel, client_id: e.target.value || null })}>
                <option value="" className="bg-gray-900">No client</option>
                {clients.map((c) => <option key={c.id} value={c.id} className="bg-gray-900">{c.name}{c.company ? ` (${c.company})` : ''}</option>)}
              </select>
            </div>
            <details className="text-sm text-gray-400"><summary className="cursor-pointer">Add a new client</summary>
              <div className="grid sm:grid-cols-4 gap-2 mt-2">
                <input className={field} placeholder="Name" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} />
                <input className={field} placeholder="Company" value={newClient.company} onChange={(e) => setNewClient({ ...newClient, company: e.target.value })} />
                <input className={field} placeholder="Email" value={newClient.email} onChange={(e) => setNewClient({ ...newClient, email: e.target.value })} />
                <button onClick={addClient} className="bg-white/10 rounded-lg text-white">Add</button>
              </div>
            </details>
            <label className="block text-sm text-gray-300">Brief / client request</label>
            <textarea className={field} rows={7} value={sel.brief ?? ''} onChange={(e) => setSel({ ...sel, brief: e.target.value })} />
            <div className="flex items-center gap-3">
              <button onClick={diagnose} disabled={busy} className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2 disabled:opacity-50">{busy && <Loader2 className="h-4 w-4 animate-spin" />} {busy ? 'Diagnosing…' : 'Run AI diagnosis'}</button>
              <span className="text-xs text-gray-500">Recommendation only — approve before promising anything.</span>
            </div>
            <label className="block text-sm text-gray-300">Diagnosis</label>
            <textarea className={field} rows={14} value={sel.diagnosis ?? ''} onChange={(e) => setSel({ ...sel, diagnosis: e.target.value, diagnosis_approved: false })} />
            <button onClick={() => save({ diagnosis_approved: !sel.diagnosis_approved, status: !sel.diagnosis_approved ? 'approved' : sel.status })} disabled={!sel.diagnosis}
              className={`px-4 py-2 rounded-lg text-sm inline-flex items-center gap-2 ${sel.diagnosis_approved ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white'} disabled:opacity-40`}>
              <CheckCircle2 className="h-4 w-4" /> {sel.diagnosis_approved ? 'Approved by Adrian (click to revoke)' : 'Approve diagnosis'}
            </button>
            <label className="block text-sm text-gray-300">Milestones & tasks</label>
            <textarea className={field} rows={5} value={sel.milestones ?? ''} onChange={(e) => setSel({ ...sel, milestones: e.target.value })} />
            <label className="block text-sm text-gray-300">Internal notes</label>
            <textarea className={field} rows={4} value={sel.notes ?? ''} onChange={(e) => setSel({ ...sel, notes: e.target.value })} />
            <div className="flex gap-4">
              <button onClick={() => save()} className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2.5 rounded-lg font-semibold inline-flex items-center gap-2"><Save className="h-4 w-4" /> Save</button>
              <button onClick={remove} className="text-red-400 text-sm inline-flex items-center gap-1"><Trash2 className="h-4 w-4" /> Delete</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsManager;
