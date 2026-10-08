import { useEffect, useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface Item { id: string; title: string; category: string; content: string }
const CATEGORIES = ['company', 'services', 'pricing', 'case-studies', 'processes', 'policy', 'notes'];
const empty = { id: '', title: '', category: 'notes', content: '' };

const KnowledgeManager = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [edit, setEdit] = useState<Item>(empty);

  const load = async () => {
    const { data } = await supabase.from('knowledge_items').select('id,title,category,content').order('category').order('title');
    setItems((data as Item[]) || []);
  };
  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!edit.title.trim() || !edit.content.trim()) return;
    const row = { title: edit.title.trim(), category: edit.category, content: edit.content.trim() };
    const { error } = edit.id
      ? await supabase.from('knowledge_items').update(row).eq('id', edit.id)
      : await supabase.from('knowledge_items').insert(row);
    if (error) { toast({ title: 'Could not save', description: error.message, variant: 'destructive' }); return; }
    toast({ title: 'Saved to the Brain' }); setEdit(empty); load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this entry?')) return;
    await supabase.from('knowledge_items').delete().eq('id', id);
    if (edit.id === id) setEdit(empty);
    load();
  };

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto grid lg:grid-cols-[320px_1fr] gap-8">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">Mushbloom Brain</h2>
          <button onClick={() => setEdit(empty)} className="text-blue-400 inline-flex items-center gap-1 text-sm"><Plus className="h-4 w-4" /> New</button>
        </div>
        <p className="text-gray-400 text-sm mb-4">Everything here is given to the AI tools as context. Don't store passwords or API keys.</p>
        <ul className="space-y-2">
          {items.map((i) => (
            <li key={i.id} className={`rounded-lg p-3 cursor-pointer ${edit.id === i.id ? 'bg-white/10' : 'bg-white/5 hover:bg-white/10'}`} onClick={() => setEdit(i)}>
              <div className="text-[10px] uppercase text-green-400">{i.category}</div>
              <div className="text-sm text-white">{i.title}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-effect rounded-xl border border-white/10 p-6 space-y-3 h-fit">
        <input value={edit.title} onChange={(e) => setEdit({ ...edit, title: e.target.value })} placeholder="Title" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white outline-none" />
        <select value={edit.category} onChange={(e) => setEdit({ ...edit, category: e.target.value })} className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white">
          {CATEGORIES.map((c) => <option key={c} className="bg-gray-900">{c}</option>)}
        </select>
        <textarea value={edit.content} onChange={(e) => setEdit({ ...edit, content: e.target.value })} rows={16} placeholder="Services, pricing, past projects, processes, tone of voice…" className="w-full rounded-lg bg-white/5 border border-white/10 p-4 text-white text-sm outline-none" />
        <div className="flex gap-3">
          <button onClick={save} className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-5 py-2 rounded-lg font-semibold inline-flex items-center gap-2"><Save className="h-4 w-4" /> Save</button>
          {edit.id && <button onClick={() => remove(edit.id)} className="text-red-400 inline-flex items-center gap-1 text-sm"><Trash2 className="h-4 w-4" /> Delete</button>}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeManager;
