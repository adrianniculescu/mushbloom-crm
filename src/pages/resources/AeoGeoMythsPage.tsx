import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { myths, mythPillars, mythSources, verdictLabel, mythsPath, type Verdict } from '@/data/aeoGeoMyths';

const verdictClass: Record<Verdict, string> = {
  myth: 'bg-destructive/15 text-destructive border-destructive/30',
  nuanced: 'bg-accent/15 text-accent-foreground border-accent/30',
  true: 'bg-primary/15 text-primary border-primary/30',
};

export default function AeoGeoMythsPage() {
  const [q, setQ] = useState('');
  const [pillar, setPillar] = useState('all');
  const [verdict, setVerdict] = useState<'all' | Verdict>('all');
  const counts = { myth: myths.filter(m => m.verdict === 'myth').length, nuanced: myths.filter(m => m.verdict === 'nuanced').length, true: myths.filter(m => m.verdict === 'true').length };
  const list = useMemo(() => myths.filter(m => (pillar === 'all' || m.pillar === pillar) && (verdict === 'all' || m.verdict === verdict) && (m.claim + m.reality).toLowerCase().includes(q.toLowerCase())), [q, pillar, verdict]);
  const url = `https://mushbloom.uk${mythsPath}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: `AEO & GEO Myths: ${myths.length} Fact-Checked Claims`, url, datePublished: '2026-10-12', dateModified: '2026-10-12', author: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' }, publisher: { '@type': 'Organization', name: 'Mushbloom' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Resources', item: 'https://mushbloom.uk/resources' }, { '@type': 'ListItem', position: 2, name: 'AEO & GEO Myths', item: url }] },
  ] };

  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title={`AEO & GEO Myths: ${myths.length} Fact-Checked Claims | Mushbloom`} description={`${myths.length} common AEO, GEO and AI search claims checked against official Google, Bing, OpenAI and research documentation, with practical advice for SMEs.`} path={mythsPath} schema={schema} />
    <Navigation />
    <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground">← Resources</Link>
      <p className="text-primary text-xs uppercase tracking-wider mt-6">{myths.length} claims fact-checked · AI search research</p>
      <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mt-3">AEO & GEO myths: <span className="text-primary">{myths.length} fact-checks</span></h1>
      <p className="text-muted-foreground text-lg mt-5 max-w-3xl">Separating evidence from sales-deck folklore. Each claim is checked against official Google, Bing and AI-provider documentation or published research, with a plain verdict and what a small business should do instead. See also our <Link className="text-primary underline" to="/resources/aeo-geo-seo-glossary">60-term glossary</Link>.</p>
      <dl className="flex flex-wrap gap-8 mt-8 border-y border-border py-5 text-sm">
        <div><dt className="text-muted-foreground">Claims evaluated</dt><dd className="text-2xl font-bold">{myths.length}</dd></div>
        <div><dt className="text-muted-foreground">Debunked</dt><dd className="text-2xl font-bold text-destructive">{counts.myth}</dd></div>
        <div><dt className="text-muted-foreground">Nuanced</dt><dd className="text-2xl font-bold">{counts.nuanced}</dd></div>
        <div><dt className="text-muted-foreground">Verified</dt><dd className="text-2xl font-bold text-primary">{counts.true}</dd></div>
      </dl>

      <h2 className="text-primary text-sm uppercase tracking-wider mt-12">Fact-check pillars</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {mythPillars.map((p, i) => <button key={p.id} onClick={() => setPillar(pillar === p.id ? 'all' : p.id)} className={`text-left rounded-lg border p-4 transition-colors ${pillar === p.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}>
          <div className="flex justify-between text-xs text-muted-foreground"><span>Pillar {String(i + 1).padStart(2, '0')}</span><span>{myths.filter(m => m.pillar === p.id).length} claims</span></div>
          <h3 className="font-semibold mt-2">{p.name}</h3>
          <p className="text-sm text-muted-foreground mt-2">{p.summary}</p>
          <Link to={`${mythsPath}/${p.id}`} onClick={e => e.stopPropagation()} className="inline-block text-sm text-primary underline mt-3">Read the pillar report →</Link>
        </button>)}
      </div>

      <div className="flex flex-col md:flex-row gap-3 mt-10">
        <div className="relative flex-1"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input aria-label="Search claims" placeholder="Search claims, e.g. llms.txt, schema, backlinks" value={q} onChange={e => setQ(e.target.value)} className="pl-9" /></div>
        <div className="flex gap-2 flex-wrap">{(['all', 'myth', 'nuanced', 'true'] as const).map(v => <Button key={v} size="sm" variant={verdict === v ? 'default' : 'outline'} onClick={() => setVerdict(v)}>{v === 'all' ? 'All verdicts' : verdictLabel[v]}</Button>)}</div>
      </div>
      <p className="text-sm text-muted-foreground mt-3">{list.length} of {myths.length} claims shown</p>

      {mythPillars.map(p => {
        const items = list.filter(m => m.pillar === p.id);
        if (!items.length) return null;
        return <section key={p.id} id={p.id} className="mt-10">
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">{p.name}</h2>
          <div className="mt-4 space-y-4">
            {items.map(m => <article key={m.id} id={m.id} className="rounded-lg border border-border p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold max-w-3xl">“{m.claim}”</h3>
                <span className={`text-xs font-semibold uppercase tracking-wide rounded-full border px-3 py-1 ${verdictClass[m.verdict]}`}>{verdictLabel[m.verdict]}</span>
              </div>
              <p className="mt-3 text-muted-foreground"><strong className="text-foreground">Reality: </strong>{m.reality}</p>
              <p className="mt-2 text-muted-foreground"><strong className="text-foreground">What to do: </strong>{m.action}</p>
              <a href={mythSources[m.source].url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-primary underline">Source: {mythSources[m.source].name}</a>
            </article>)}
          </div>
        </section>;
      })}

      <section className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8">
        <h2 className="text-2xl font-bold font-['Space_Grotesk']">Want to know which of these actually affect your business?</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl">A free 20-minute audit checks your crawlability, entity signals and enquiry path. No rankings or AI citations are guaranteed — we show you what the evidence supports.</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Button asChild data-cta="myths-audit"><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer">Book a free audit <ArrowRight /></a></Button>
          <Button asChild variant="outline"><Link to="/llmboost">Explore LLMboost</Link></Button>
          <Button asChild variant="outline"><a href="/resources/aeo-geo-myths.txt">Plain-text edition</a></Button>
        </div>
      </section>
      <p className="text-xs text-muted-foreground mt-8">Published and updated 12 October 2026 by Mushbloom. Verdicts reflect public documentation at the time of writing; AI products change frequently.</p>
    </main>
  </div>;
}
