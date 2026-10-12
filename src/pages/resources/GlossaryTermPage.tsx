import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import { glossarySources, glossaryTerms, termPath, glossaryPath } from '@/data/searchGlossary';
import { getGuide, guideSections } from '@/data/glossaryGuides';
import NotFound from '@/pages/NotFound';

export default function GlossaryTermPage() {
  const { slug } = useParams();
  const id = slug?.replace(/^what-is-/, '').replace(/\.html$/, '') ?? '';
  const guide = getGuide(id);
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  if (!guide) return <NotFound />;
  const { term, detail, title, faqs } = guide;
  const agentTopic = term.category === 'AI agents' || term.category === 'LLMs & knowledge';
  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title={`${title} | Mushbloom`} description={term.definition.slice(0, 157).replace(/\s+\S*$/, '') + '…'} path={guide.path} schema={guide.schema} />
    <Navigation />
    <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
      <Link to={glossaryPath} className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2"><ArrowLeft className="h-4 w-4" /> AEO, GEO & SEO glossary</Link>
      <header className="mt-8 mb-10 border-b border-border pb-8">
        <p className="text-primary text-xs uppercase tracking-wider mb-4">{term.category}</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl break-words">{title}</h1>
        <p className="mt-6 text-sm text-muted-foreground">By Mushbloom · Published and updated <time dateTime="2026-10-12">12 October 2026</time> · Original reference guide</p>
      </header>
      <div className="grid lg:grid-cols-[230px_minmax(0,1fr)] gap-10">
        <aside className="lg:sticky lg:top-24 self-start">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2"><BookOpen className="h-4 w-4" /> In this guide</h2>
          <nav aria-label="In this guide" className="flex flex-wrap lg:flex-col gap-1">{guideSections.map(s => <Button variant="ghost" asChild className="justify-start whitespace-normal h-auto py-2 text-left" key={s.id}><a href={`#${s.id}`}>{s.name}</a></Button>)}</nav>
          <a href={`/resources/glossary/what-is-${id}.txt`} className="text-sm text-primary underline block mt-5">Plain-text edition</a>
        </aside>
        <article className="min-w-0">
          <section id="definition" className="scroll-mt-24 pb-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Definition & overview</h2><p className="text-lg leading-relaxed">{term.definition}</p></section>
          <section id="analogy" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Analogy & mental model</h2><p className="leading-relaxed text-muted-foreground">{term.analogy}</p><p className="mt-4 leading-relaxed">{term.practical}</p></section>
          <section id="why-it-matters" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Why {term.name.split(' — ')[0]} matters</h2><p className="leading-relaxed">{detail.why}</p></section>
          <section id="example" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Practical business example</h2><p className="leading-relaxed">{detail.example}</p><p className="text-xs text-muted-foreground mt-4">Illustrative scenario, not a client case study or promised result.</p></section>
          <section id="how-it-works" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">How {term.name.split(' — ')[0]} works</h2><ol className="list-decimal pl-5 space-y-4 leading-relaxed">{detail.steps.map(step => <li key={step}>{step}</li>)}</ol></section>
          <section id="components" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Core components & mechanisms</h2><ul className="list-disc pl-5 space-y-3">{detail.components.map(c => <li key={c}>{c}</li>)}</ul><p className="mt-5 text-muted-foreground leading-relaxed">{detail.caveat}</p></section>
          <section id="comparison" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">{term.name.split(' — ')[0]} vs {detail.comparison.name}</h2><p className="leading-relaxed">{detail.comparison.distinction}</p></section>
          <section id="faq" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Frequently asked questions</h2>{faqs.map(f => <div key={f.question} className="mb-6"><h3 className="text-lg font-semibold mb-2">{f.question}</h3><p className="leading-relaxed text-muted-foreground">{f.answer}</p></div>)}</section>
          <section id="sources" className="scroll-mt-24 py-8 border-b border-border"><h2 className="text-2xl font-bold mb-5">Sources & further reading</h2><a className="text-primary underline" href={glossarySources[term.source].url} target="_blank" rel="noopener noreferrer">{glossarySources[term.source].name}</a><p className="text-sm leading-relaxed text-muted-foreground mt-4">Mushbloom’s original explanation and illustrative examples. The reference supports the underlying topic, not every business recommendation. Industry terminology and product capabilities can change; check current documentation before implementation.</p><div className="flex flex-wrap gap-3 mt-5">{term.related.map(r => <Link key={r} to={termPath(r)} className="text-primary hover:underline">{glossaryTerms.find(t => t.id === r)?.name.split(' — ')[0]} →</Link>)}</div></section>
          <section className="py-10"><h2 className="text-2xl font-bold">Turn the concept into a practical decision</h2><p className="text-muted-foreground leading-relaxed mt-4 mb-6">{agentTopic ? 'Discuss one workflow, its data and approval boundaries before choosing an AI tool or implementation.' : 'Discuss how your website can answer real customer questions and connect useful visibility to qualified enquiries.'}</p><div className="flex flex-wrap gap-3"><Button asChild><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" data-cta="glossary_guide_audit">Book a free 20-minute audit <ArrowRight /></a></Button><Button asChild variant="outline"><Link to={agentTopic ? '/ai-workforce' : '/llmboost'}>{agentTopic ? 'AI Workforce Systems' : 'Explore LLMboost'}</Link></Button></div><p className="text-xs text-muted-foreground mt-5">No rankings, AI citations or commercial outcomes are guaranteed.</p></section>
        </article>
      </div>
    </main>
  </div>;
}