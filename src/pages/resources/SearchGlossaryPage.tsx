import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Link as LinkIcon, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { glossaryCategories, glossarySources, glossaryTerms, termPath } from '@/data/searchGlossary';

const base = 'https://mushbloom.uk/resources/aeo-geo-seo-glossary';
const schema = { '@context': 'https://schema.org', '@graph': [
  { '@type': 'DefinedTermSet', '@id': base, name: 'The AEO, GEO & SEO Glossary', url: base, description: 'Original definitions, analogies and practical examples for AI search and business automation.', inLanguage: 'en-GB', publisher: { '@id': 'https://mushbloom.uk/#organization' }, dateModified: '2026-10-12', hasDefinedTerm: glossaryTerms.map(t => ({ '@type': 'DefinedTerm', '@id': `https://mushbloom.uk${termPath(t.id)}#term`, url: `https://mushbloom.uk${termPath(t.id)}`, name: t.name, description: t.definition, inDefinedTermSet: base })) },
  { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' }, { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://mushbloom.uk/resources' }, { '@type': 'ListItem', position: 3, name: 'AEO, GEO & SEO Glossary', item: base }] },
] };

export default function SearchGlossaryPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All terms');
  const [copied, setCopied] = useState('');
  const { hash } = useLocation();
  useEffect(() => { if (hash) { setQuery(''); setCategory('All terms'); requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView()); } }, [hash]);
  const terms = glossaryTerms.filter(t => (category === 'All terms' || category === t.category) && `${t.name} ${t.definition} ${t.practical}`.toLowerCase().includes(query.trim().toLowerCase()));
  const letters = [...new Set(terms.map(t => t.name[0]))];
  const reset = () => { setQuery(''); setCategory('All terms'); };
  async function copyTerm(id: string) {
    try { await navigator.clipboard.writeText(`${base}#${id}`); setCopied(id); window.setTimeout(() => setCopied(''), 2000); } catch { setCopied(''); }
  }
  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title="AEO, GEO & SEO Glossary: 60 Expert Guides | Mushbloom" description="Explore 60 original guides to AEO, GEO, SEO and AI agents: definitions, examples, how each works, comparisons, FAQs and primary sources." path="/resources/aeo-geo-seo-glossary" schema={schema} />
    <Navigation />
    <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
      <Link to="/resources" className="inline-flex gap-2 items-center text-muted-foreground text-sm hover:text-primary"><ArrowLeft className="h-4 w-4" /> Resources</Link>
      <header className="mt-7 mb-10">
        <p className="text-primary text-xs uppercase tracking-wider mb-4">Mushbloom glossary · AI search & business systems</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] leading-tight max-w-3xl">The AEO, GEO & SEO glossary</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl">What the terms mean. How they differ. Why they matter to your business.</p>
        <p className="mt-5 text-sm text-muted-foreground">By Mushbloom · Original explanations · Updated <time dateTime="2026-10-12">12 October 2026</time> · {glossaryTerms.length} terms</p>
      </header>
      <section aria-labelledby="difference" className="border-y border-border py-6 mb-8">
        <h2 id="difference" className="text-xl font-semibold mb-4">SEO, AEO and GEO: the short answer</h2>
        <div className="grid sm:grid-cols-3 gap-6 text-sm leading-relaxed">
          <p><a href="#seo" className="text-primary font-semibold">SEO</a> helps search engines discover and present useful pages.</p>
          <p><a href="#aeo" className="text-primary font-semibold">AEO</a> makes information useful when systems answer specific questions.</p>
          <p><a href="#geo" className="text-primary font-semibold">GEO</a> focuses on discoverability in generated answers. The practices overlap.</p>
        </div>
        <p className="mt-5 text-muted-foreground text-sm">No glossary, markup or crawler permission guarantees AI citations, rankings or enquiries. Google says its existing SEO guidance applies to AI features; no special AI schema is required. <a className="text-primary underline" href={glossarySources.ai.url} target="_blank" rel="noopener noreferrer">Read Google’s guidance</a>.</p>
      </section>
      <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10">
        <aside className="lg:sticky lg:top-24 self-start">
          <label htmlFor="glossary-search" className="text-sm font-semibold">Find a term</label>
          <div className="relative mt-3"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input id="glossary-search" placeholder="Search definitions…" value={query} onChange={e => setQuery(e.target.value)} className="pl-9" /></div>
          <nav aria-label="Glossary categories" className="mt-5 flex flex-wrap lg:flex-col gap-1">{glossaryCategories.map(c => <Button key={c} variant={category === c ? 'secondary' : 'ghost'} onClick={() => setCategory(c)} aria-pressed={category === c} className="justify-start h-9">{c}</Button>)}</nav>
          <nav aria-label="Alphabetical index" className="mt-6 flex flex-wrap gap-1">{letters.map(letter => <Button asChild key={letter} variant="ghost" size="icon" className="w-8 h-8"><a href={`#${terms.find(t => t.name[0] === letter)?.id}`}>{letter}</a></Button>)}</nav>
          <a href="/resources/aeo-geo-seo-glossary.txt" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-2 mt-6"><FileText className="h-4 w-4" /> Plain-text reference</a>
        </aside>
        <div className="min-w-0">
          <p aria-live="polite" className="text-muted-foreground text-sm pb-5 border-b border-border">{terms.length} of {glossaryTerms.length} terms</p>
          {terms.length === 0 && <div className="py-12"><h2 className="text-xl font-semibold">No matching terms</h2><p className="text-muted-foreground mt-2 mb-4">Try another phrase or category.</p><Button variant="outline" onClick={reset}>Clear filters</Button></div>}
          {terms.map(t => <article key={t.id} id={t.id} className="scroll-mt-24 py-8 border-b border-border">
            <div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="text-xs text-primary mb-2">{t.category}</p><h2 className="text-2xl font-bold font-['Space_Grotesk'] break-words"><a href={`#${t.id}`}>{t.name}</a></h2></div><Button variant="ghost" size="icon" className="shrink-0" onClick={() => copyTerm(t.id)} aria-label={`Copy link to ${t.name}`} title={copied === t.id ? 'Copied' : 'Copy term link'}><LinkIcon /></Button></div>
            {copied === t.id && <p role="status" className="text-primary text-xs mt-2">Link copied</p>}
            <p className="mt-4 leading-relaxed">{t.definition}</p>
            <Link to={termPath(t.id)} className="inline-flex items-center gap-2 text-primary mt-4 font-medium hover:underline">Read the full guide <ArrowRight className="h-4 w-4" /></Link>
            <dl className="mt-5 grid sm:grid-cols-2 gap-5 text-sm leading-relaxed"><div><dt className="font-semibold mb-1">Think of it this way</dt><dd className="text-muted-foreground">{t.analogy}</dd></div><div><dt className="font-semibold mb-1">For your business</dt><dd className="text-muted-foreground">{t.practical}</dd></div></dl>
            <p className="mt-5 text-xs text-muted-foreground">Reference: <a className="underline hover:text-primary" href={glossarySources[t.source].url} target="_blank" rel="noopener noreferrer">{glossarySources[t.source].name}</a></p>
            <p className="text-sm mt-4 flex flex-wrap gap-x-4 gap-y-2"><span className="text-muted-foreground">Related:</span>{t.related.map(id => <Link key={id} to={`#${id}`} onClick={reset} className="text-primary hover:underline">{glossaryTerms.find(x => x.id === id)?.name.split(' — ')[0]}</Link>)}</p>
          </article>)}
          <section className="py-10 border-b border-border"><h2 className="text-2xl font-semibold">About this reference</h2><p className="mt-4 text-muted-foreground leading-relaxed">These definitions and analogies are Mushbloom’s original explanations, not copied from another glossary. Linked references support the underlying concepts; industry labels such as AEO, GEO, LLM SEO and Share of Model do not have universally agreed definitions. Business examples are illustrative, not client results.</p></section>
          <section className="pt-10"><h2 className="text-2xl font-semibold">Make visibility useful to your business</h2><p className="text-muted-foreground mt-4 mb-6">Discuss your website’s discoverability and the path from a visitor’s question to a qualified enquiry.</p><div className="flex flex-wrap gap-3"><Button asChild><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" data-cta="glossary_audit">Book a free 20-minute audit <ArrowRight /></a></Button><Button asChild variant="outline"><Link to="/llmboost">Explore LLMboost</Link></Button></div><p className="mt-6"><Link className="text-primary hover:underline" to="/guides/saas-ai-search-visibility">Read the AI search visibility guide →</Link></p></section>
        </div>
      </div>
    </main>
  </div>;
}