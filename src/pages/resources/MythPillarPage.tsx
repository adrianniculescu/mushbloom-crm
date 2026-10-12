import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import { myths, mythPillars, mythSources, verdictLabel, mythsPath, type Verdict } from '@/data/aeoGeoMyths';

const verdictClass: Record<Verdict, string> = {
  myth: 'bg-destructive/15 text-destructive border-destructive/30',
  nuanced: 'bg-accent/15 text-accent-foreground border-accent/30',
  true: 'bg-primary/15 text-primary border-primary/30',
};

export default function MythPillarPage() {
  const { pillar: id } = useParams();
  const index = mythPillars.findIndex(p => p.id === id);
  if (index < 0) return <Navigate to={mythsPath} replace />;
  const pillar = mythPillars[index];
  const items = myths.filter(m => m.pillar === pillar.id);
  const n = (v: Verdict) => items.filter(m => m.verdict === v).length;
  const num = (i: number) => String(i + 1).padStart(2, '0');
  const path = `${mythsPath}/${pillar.id}`;
  const url = `https://mushbloom.uk${path}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: `${pillar.name}: ${items.length} AEO & GEO claims fact-checked`, url, datePublished: '2026-10-12', dateModified: '2026-10-12', author: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' } },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Resources', item: 'https://mushbloom.uk/resources' },
      { '@type': 'ListItem', position: 2, name: 'AEO & GEO Myths', item: `https://mushbloom.uk${mythsPath}` },
      { '@type': 'ListItem', position: 3, name: pillar.name, item: url }] },
  ] };

  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title={`${pillar.name}: ${items.length} AI Search Claims Fact-Checked | Mushbloom`} description={`${pillar.summary} ${items.length} claims checked against official documentation: ${n('myth')} debunked, ${n('nuanced')} nuanced, ${n('true')} verified.`} path={path} schema={schema} />
    <Navigation />
    <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
      <aside className="hidden lg:block">
        <nav aria-label="In this pillar" className="sticky top-24 rounded-lg border border-border p-4 text-sm max-h-[calc(100vh-8rem)] overflow-y-auto">
          <p className="font-semibold text-primary mb-3">{pillar.name}</p>
          <a href="#matrix" className="flex gap-3 py-1.5 text-muted-foreground hover:text-foreground"><span className="w-7 text-xs">EX</span>Executive matrix</a>
          {items.map((m, i) => <a key={m.id} href={`#${m.id}`} className="flex gap-3 py-1.5 text-muted-foreground hover:text-foreground"><span className="w-7 text-xs shrink-0">#{num(i)}</span><span className="truncate">{m.claim}</span></a>)}
          <a href="#related" className="flex gap-3 py-1.5 text-muted-foreground hover:text-foreground"><span className="w-7 text-xs">NAV</span>Related pillars</a>
        </nav>
      </aside>
      <main>
        <Link to={mythsPath} className="text-sm text-muted-foreground hover:text-foreground">← All {myths.length} myths</Link>
        <p className="text-primary text-xs uppercase tracking-wider mt-6">Pillar {num(index)} · {items.length} fact-checked claims</p>
        <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk'] mt-3">{pillar.name}</h1>
        <p className="text-muted-foreground text-lg mt-5">{pillar.summary}</p>
        <p className="text-muted-foreground text-lg mt-4">Our review of {items.length} claims in this pillar found {n('myth')} unsupported myths, {n('nuanced')} that are partly true or context-dependent, and {n('true')} that are verified by official documentation or research.</p>
        <div className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-5 flex gap-3">
          <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-1" />
          <p className="text-sm text-muted-foreground">Cross-reference these verdicts with our <Link className="text-primary underline" to="/resources/aeo-geo-seo-glossary">60-term AEO, GEO & SEO glossary</Link> and the full <Link className="text-primary underline" to={mythsPath}>{myths.length} AEO & GEO myths hub</Link>.</p>
        </div>

        <section id="matrix" className="mt-12 scroll-mt-24">
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">Executive matrix</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground border-b border-border"><tr><th className="p-3">#</th><th className="p-3">Claim</th><th className="p-3">Verdict</th></tr></thead>
              <tbody>{items.map((m, i) => <tr key={m.id} className="border-b border-border last:border-0"><td className="p-3 text-muted-foreground">{num(i)}</td><td className="p-3"><a href={`#${m.id}`} className="hover:text-primary">{m.claim}</a></td><td className="p-3"><span className={`text-xs font-semibold uppercase rounded-full border px-2 py-0.5 ${verdictClass[m.verdict]}`}>{verdictLabel[m.verdict]}</span></td></tr>)}</tbody>
            </table>
          </div>
        </section>

        {items.map((m, i) => <section key={m.id} id={m.id} className="mt-12 pt-10 border-t border-border scroll-mt-24">
          <p className="text-primary text-xs uppercase tracking-wider">Claim #{num(i)}</p>
          <h2 className="text-2xl font-bold font-['Space_Grotesk'] mt-2">“{m.claim}”</h2>
          <span className={`inline-block mt-4 text-xs font-semibold uppercase tracking-wide rounded-full border px-3 py-1 ${verdictClass[m.verdict]}`}>Verdict: {verdictLabel[m.verdict]}</span>
          <h3 className="font-semibold mt-6">The claim</h3>
          <p className="text-muted-foreground mt-1">This is a common statement in AI search advice: “{m.claim}”</p>
          <h3 className="font-semibold mt-5">What the evidence shows</h3>
          <p className="text-muted-foreground mt-1">{m.reality}</p>
          <h3 className="font-semibold mt-5">What to do instead</h3>
          <p className="text-muted-foreground mt-1">{m.action}</p>
          <h3 className="font-semibold mt-5">Source</h3>
          <a href={mythSources[m.source].url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline">{mythSources[m.source].name}</a>
        </section>)}

        <section id="related" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">Related pillars</h2>
          <div className="grid sm:grid-cols-2 gap-3 mt-4">{mythPillars.filter(p => p.id !== pillar.id).map(p => <Link key={p.id} to={`${mythsPath}/${p.id}`} className="rounded-lg border border-border p-4 hover:border-primary/50"><span className="font-semibold">{p.name}</span><span className="block text-sm text-muted-foreground mt-1">{myths.filter(m => m.pillar === p.id).length} claims</span></Link>)}</div>
        </section>

        <section className="mt-16 rounded-lg border border-primary/30 bg-primary/5 p-8">
          <h2 className="text-2xl font-bold font-['Space_Grotesk']">Check which of these affect your site</h2>
          <p className="text-muted-foreground mt-3">A free 20-minute audit reviews your crawlability, entity signals and enquiry path. No rankings or AI citations are guaranteed.</p>
          <Button asChild className="mt-6" data-cta="myth-pillar-audit"><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer">Book a free audit <ArrowRight /></a></Button>
        </section>
      </main>
    </div>
  </div>;
}
