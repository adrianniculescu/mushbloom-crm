import { useEffect, useState } from 'react';
import { Loader2, Copy, History } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { AI_TOOLS, runAiTool, type AiToolId } from '@/lib/admin';
import { toast } from '@/hooks/use-toast';

interface Run { id: string; tool: string; input: string; output: string | null; status: string; created_at: string }

const AiToolsPanel = () => {
  const [tool, setTool] = useState<AiToolId>('lead_diagnosis');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [runs, setRuns] = useState<Run[]>([]);

  const loadRuns = async () => {
    const { data } = await supabase.from('ai_runs').select('*').order('created_at', { ascending: false }).limit(20);
    setRuns((data as Run[]) || []);
  };
  useEffect(() => { loadRuns(); }, []);

  const run = async () => {
    if (!input.trim()) return;
    setBusy(true); setError(''); setOutput('');
    try { setOutput(await runAiTool(tool, input)); loadRuns(); }
    catch (e) { setError((e as Error).message); }
    finally { setBusy(false); }
  };

  const current = AI_TOOLS.find((t) => t.id === tool)!;

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto grid lg:grid-cols-[1fr_280px] gap-8">
      <div>
        <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-1">AI Tools</h2>
        <p className="text-gray-400 text-sm mb-5">Internal helpers that use the Mushbloom Brain as context. Every output is a draft for your review — nothing is sent or published automatically.</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {AI_TOOLS.map((t) => (
            <button key={t.id} onClick={() => setTool(t.id)} className={`px-3 py-1.5 rounded-md text-sm ${tool === t.id ? 'bg-blue-500 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}>{t.name}</button>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">{current.hint}</p>
        <textarea value={input} onChange={(e) => setInput(e.target.value)} rows={10} className="w-full rounded-lg bg-white/5 border border-white/10 p-4 text-white text-sm outline-none focus:border-blue-500" placeholder="Paste or describe here…" />
        <button onClick={run} disabled={busy || !input.trim()} className="mt-3 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2.5 rounded-lg font-semibold disabled:opacity-50 inline-flex items-center gap-2">
          {busy && <Loader2 className="h-4 w-4 animate-spin" />} {busy ? 'Working… (can take a minute)' : `Run ${current.name}`}
        </button>
        {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}
        {output && (
          <div className="mt-6 glass-effect rounded-xl border border-white/10 p-6">
            <div className="flex justify-end mb-2"><button onClick={() => { navigator.clipboard.writeText(output); toast({ title: 'Copied' }); }} className="text-gray-400 hover:text-white inline-flex items-center gap-1 text-xs"><Copy className="h-3 w-3" /> Copy</button></div>
            <pre className="whitespace-pre-wrap text-gray-200 text-sm font-sans leading-relaxed">{output}</pre>
          </div>
        )}
      </div>
      <aside>
        <h3 className="text-white font-semibold mb-3 inline-flex items-center gap-2"><History className="h-4 w-4" /> Activity log</h3>
        <ul className="space-y-2">
          {runs.length === 0 && <li className="text-gray-500 text-sm">No runs yet.</li>}
          {runs.map((r) => (
            <li key={r.id}>
              <button onClick={() => { setInput(r.input); setOutput(r.output || ''); setTool(r.tool as AiToolId); }} className="w-full text-left bg-white/5 hover:bg-white/10 rounded-lg p-3">
                <div className="text-xs text-blue-400">{AI_TOOLS.find((t) => t.id === r.tool)?.name ?? r.tool}{r.status === 'failed' && <span className="text-red-400"> · failed</span>}</div>
                <div className="text-xs text-gray-400 truncate">{r.input}</div>
                <div className="text-[10px] text-gray-600">{new Date(r.created_at).toLocaleString()}</div>
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default AiToolsPanel;
