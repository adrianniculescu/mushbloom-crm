import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Plus, Trash2, FileText, Save, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

interface Post {
  id: string;
  slug: string;
  title: string;
  category: string | null;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  read_time: string | null;
  seo_keywords: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

const empty: Partial<Post> = {
  slug: '', title: '', category: '', excerpt: '', content: '',
  cover_image_url: '', read_time: '5 min read', seo_keywords: '',
  meta_title: '', meta_description: '', status: 'draft',
};

const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

const PostsManager = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Post> | null>(null);
  const [saving, setSaving] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase.from('cms_posts').select('*').order('updated_at', { ascending: false });
    setPosts((data as Post[]) || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const save = async () => {
    if (!editing?.title || !editing.slug) {
      toast({ title: 'Title and slug are required', variant: 'destructive' });
      return;
    }
    setSaving(true);
    const payload: any = {
      slug: editing.slug,
      title: editing.title,
      category: editing.category || null,
      excerpt: editing.excerpt || null,
      content: editing.content || '',
      cover_image_url: editing.cover_image_url || null,
      read_time: editing.read_time || null,
      seo_keywords: editing.seo_keywords || null,
      meta_title: editing.meta_title || null,
      meta_description: editing.meta_description || null,
      status: editing.status || 'draft',
      published_at:
        editing.status === 'published'
          ? editing.published_at || new Date().toISOString()
          : null,
    };
    const { error } = editing.id
      ? await supabase.from('cms_posts').update(payload).eq('id', editing.id)
      : await supabase.from('cms_posts').insert(payload);
    setSaving(false);
    if (error) {
      toast({ title: 'Save failed', description: error.message, variant: 'destructive' });
      return;
    }
    toast({ title: 'Saved' });
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm('Delete this post?')) return;
    await supabase.from('cms_posts').delete().eq('id', id);
    load();
  };

  const togglePublish = async (p: Post) => {
    const next = p.status === 'published' ? 'draft' : 'published';
    await supabase.from('cms_posts').update({
      status: next,
      published_at: next === 'published' ? (p.published_at || new Date().toISOString()) : null,
    }).eq('id', p.id);
    load();
  };

  if (editing) {
    return (
      <div className="max-w-4xl mx-auto p-6 lg:p-10">
        <button onClick={() => setEditing(null)} className="text-gray-400 hover:text-white inline-flex items-center gap-2 text-sm mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to posts
        </button>

        <h2 className="text-2xl font-bold text-white font-['Space_Grotesk'] mb-6">
          {editing.id ? 'Edit post' : 'New post'}
        </h2>

        <div className="space-y-4">
          <Field label="Title">
            <input
              value={editing.title || ''}
              onChange={(e) => {
                const t = e.target.value;
                setEditing({ ...editing, title: t, slug: editing.slug || slugify(t) });
              }}
              className={inputCls}
              placeholder="My great article"
            />
          </Field>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Slug (URL)">
              <input
                value={editing.slug || ''}
                onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })}
                className={inputCls}
                placeholder="my-great-article"
              />
            </Field>
            <Field label="Category">
              <input value={editing.category || ''} onChange={(e) => setEditing({ ...editing, category: e.target.value })} className={inputCls} placeholder="AI Strategy" />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Read time">
              <input value={editing.read_time || ''} onChange={(e) => setEditing({ ...editing, read_time: e.target.value })} className={inputCls} placeholder="5 min read" />
            </Field>
            <Field label="Cover image URL">
              <input value={editing.cover_image_url || ''} onChange={(e) => setEditing({ ...editing, cover_image_url: e.target.value })} className={inputCls} placeholder="https://..." />
            </Field>
          </div>

          <Field label="Excerpt / short description">
            <textarea value={editing.excerpt || ''} onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })} className={`${inputCls} min-h-[80px]`} />
          </Field>

          <Field label="Content (Markdown / plain text — use blank lines to separate paragraphs, '- ' for bullets)">
            <textarea value={editing.content || ''} onChange={(e) => setEditing({ ...editing, content: e.target.value })} className={`${inputCls} min-h-[400px] font-mono text-sm`} />
          </Field>

          <details className="border border-white/10 rounded-lg p-4">
            <summary className="text-white font-semibold cursor-pointer">SEO</summary>
            <div className="space-y-4 mt-4">
              <Field label="Meta title"><input value={editing.meta_title || ''} onChange={(e) => setEditing({ ...editing, meta_title: e.target.value })} className={inputCls} /></Field>
              <Field label="Meta description"><textarea value={editing.meta_description || ''} onChange={(e) => setEditing({ ...editing, meta_description: e.target.value })} className={`${inputCls} min-h-[60px]`} /></Field>
              <Field label="Keywords (comma separated)"><input value={editing.seo_keywords || ''} onChange={(e) => setEditing({ ...editing, seo_keywords: e.target.value })} className={inputCls} /></Field>
            </div>
          </details>

          <Field label="Status">
            <select value={editing.status || 'draft'} onChange={(e) => setEditing({ ...editing, status: e.target.value })} className={inputCls}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </Field>

          <div className="flex gap-3 pt-4">
            <button onClick={save} disabled={saving} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              Save
            </button>
            <button onClick={() => setEditing(null)} className="px-6 py-3 rounded-lg text-gray-300 hover:text-white border border-white/10">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white font-['Space_Grotesk']">Posts</h2>
        <button onClick={() => setEditing({ ...empty })} className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
          <Plus className="h-4 w-4" /> New post
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20"><Loader2 className="h-6 w-6 animate-spin text-gray-400" /></div>
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <FileText className="h-12 w-12 mb-3" />
          <p>No posts yet — click "New post" to write your first article.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((p) => (
            <div key={p.id} className="glass-effect border border-white/10 rounded-xl p-5 flex items-start justify-between gap-4">
              <button onClick={() => setEditing(p)} className="text-left flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${p.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                    {p.status}
                  </span>
                  {p.category && <span className="text-xs text-blue-400">{p.category}</span>}
                  <span className="text-xs text-gray-500">/wiki/{p.slug}</span>
                </div>
                <h3 className="text-white font-semibold truncate">{p.title}</h3>
                {p.excerpt && <p className="text-gray-400 text-sm mt-1 line-clamp-2">{p.excerpt}</p>}
                <p className="text-xs text-gray-500 mt-2">Updated {format(new Date(p.updated_at), 'MMM d, yyyy')}</p>
              </button>
              <div className="flex flex-col gap-2 shrink-0">
                <button onClick={() => togglePublish(p)} className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white" title={p.status === 'published' ? 'Unpublish' : 'Publish'}>
                  {p.status === 'published' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
                <button onClick={() => remove(p.id)} className="p-2 rounded-lg hover:bg-red-500/20 text-gray-400 hover:text-red-400">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const inputCls = "w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-blue-400";

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1.5 block">{label}</span>
    {children}
  </label>
);

export default PostsManager;
