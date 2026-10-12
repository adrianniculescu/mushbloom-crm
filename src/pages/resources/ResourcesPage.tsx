import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Library } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import referenceImage from '@/assets/resources-reference.jpg';
import { glossaryTerms } from '@/data/searchGlossary';
import { myths } from '@/data/aeoGeoMyths';

export default function ResourcesPage() {
  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title="AI Search & Automation Resources | Mushbloom" description="Explore Mushbloom’s practical reference library, starting with an original AEO, GEO and SEO glossary with definitions, examples and sources." path="/resources" schema={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Mushbloom Resources', url: 'https://mushbloom.uk/resources', mainEntity: { '@type': 'ItemList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'AEO, GEO & SEO Glossary', url: 'https://mushbloom.uk/resources/aeo-geo-seo-glossary' }] } }} />
    <Navigation />
    <main className="max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20">
      <div className="flex items-center gap-2 text-primary text-sm mb-5"><Library className="h-4 w-4" /> Mushbloom reference library</div>
      <h1 className="text-4xl sm:text-5xl font-bold font-['Space_Grotesk']">Resources</h1>
      <p className="text-muted-foreground text-lg mt-5 max-w-2xl">Clear explanations for better decisions about AI search, visibility and business automation.</p>
      <article className="grid md:grid-cols-2 gap-8 mt-12 border-y border-border py-8">
        <Link to="/resources/aeo-geo-seo-glossary" className="block"><img src={referenceImage} alt="Reference books and a glass prism with blue and green blocks" width={1200} height={630} className="w-full aspect-[1200/630] object-cover rounded-md" /></Link>
        <div className="flex flex-col justify-center">
          <p className="text-primary text-xs uppercase tracking-wider">Resource 01 · Glossary · {glossaryTerms.length} terms</p>
          <h2 className="text-3xl font-bold mt-4 mb-4 font-['Space_Grotesk']"><Link to="/resources/aeo-geo-seo-glossary">The AEO, GEO & SEO glossary</Link></h2>
          <p className="text-muted-foreground leading-relaxed">60 original guides from answer engines to agentic commerce: definitions, analogies, business examples, how each works, comparisons and FAQs.</p>
          <Button asChild className="mt-6 self-start"><Link to="/resources/aeo-geo-seo-glossary"><BookOpen /> Explore the glossary <ArrowRight /></Link></Button>
        </div>
      </article>
      <article className="border-b border-border py-8">
        <p className="text-primary text-xs uppercase tracking-wider">Resource 02 · Fact-checks · {myths.length} claims</p>
        <h2 className="text-3xl font-bold mt-4 mb-4 font-['Space_Grotesk']"><Link to="/resources/aeo-geo-myths">AEO & GEO myths: {myths.length} fact-checked claims</Link></h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">Common AI search claims from sales decks and social posts, checked against Google, Bing, OpenAI and published research — with a clear verdict and what to do instead.</p>
        <Button asChild className="mt-6"><Link to="/resources/aeo-geo-myths">Read the fact-checks <ArrowRight /></Link></Button>
      </article>
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
        <div><h2 className="text-xl font-semibold">Go deeper into the methods</h2><p className="text-muted-foreground mt-2">Long-form guides on AI visibility, workflows and growth.</p></div>
        <Button asChild variant="outline"><Link to="/wiki">Visit the Wiki <ArrowRight /></Link></Button>
      </div>
    </main>
  </div>;
}