import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { ArrowRight, ChevronRight, Mail, MessageCircle, Globe, BookOpen, Clock } from 'lucide-react';

interface Section {
  id: string;
  title: string;
}

const sections: Section[] = [
  { id: 'what-is', title: 'What is AI search visibility?' },
  { id: 'why-saas', title: 'Why AI search matters for SaaS' },
  { id: 'how-cite', title: 'How AI tools choose what to cite' },
  { id: 'content', title: 'What content SaaS companies need' },
  { id: 'technical', title: 'Technical foundations for visibility' },
  { id: 'authority', title: 'Authority signals beyond your website' },
  { id: 'action-plan', title: 'A step-by-step action plan' },
  { id: 'mistakes', title: 'Common mistakes to avoid' },
  { id: 'measure', title: 'How to measure success' },
  { id: 'checklist', title: 'Final checklist' },
  { id: 'contact', title: 'Need help? Contact Mushbloom' },
];

const SaasAiSearchGuide = () => {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const url = 'https://mushbloom.uk/guides/saas-ai-search-visibility';
  const title = 'How SaaS Companies Can Increase Traffic, Users, and Revenue with AI Search';
  const description =
    'A practical guide for SaaS teams to get cited, recommended, and discovered by ChatGPT, Perplexity, Gemini, and other AI search tools.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: 'https://mushbloom.uk/og-image.jpg',
    author: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
    publisher: {
      '@type': 'Organization',
      name: 'Mushbloom',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png',
      },
    },
    datePublished: '2026-05-05T09:00:00+00:00',
    dateModified: '2026-05-05T09:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'AI Search & Visibility',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 4, name: title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{title} | Mushbloom Research</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/wiki" className="hover:text-white transition-colors">Wiki</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">Guide</span>
          </nav>

          {/* Header */}
          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Research by Mushbloom</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              A practical guide to getting cited, recommended, and discovered by the AI tools your ideal users already use.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>14 min read</span></div>
              <span>•</span>
              <span>Updated May 2026</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            {/* Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">On this page</p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block py-2 pl-3 border-l-2 text-sm transition-colors ${
                        activeId === s.id
                          ? 'border-blue-400 text-white font-medium'
                          : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <span className="text-gray-600 mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Article Body */}
            <article className="max-w-3xl">
              {/* Intro */}
              <div className="border-l-2 border-blue-500/40 pl-6 mb-16">
                <p className="text-lg text-gray-300 leading-relaxed">
                  AI search is changing how SaaS buyers discover products. Instead of relying only on Google results,
                  prospects now ask ChatGPT, Perplexity, Gemini, and other AI tools for recommendations, comparisons,
                  and next steps. If your SaaS is not visible in those answers, you are missing traffic, users, and
                  revenue before people even reach your site.
                </p>
              </div>

              <Section id="what-is" title="What is AI search visibility?">
                <p>
                  AI search visibility is the ability for your brand, content, or product to appear in answers
                  generated by AI tools. That includes citation, recommendation, mention, and comparison visibility
                  across systems like ChatGPT, Perplexity, and Google's AI features.
                </p>
                <p>
                  For SaaS companies, this matters because buyers are increasingly asking AI tools which products to
                  trust, which tools compare best, and which solution is right for a specific use case.
                </p>
              </Section>

              <Section id="why-saas" title="Why AI search matters for SaaS">
                <p>
                  AI search matters because it changes discovery. Instead of scrolling through search results and
                  clicking multiple pages, users get direct summaries and recommendations from the AI tool itself.
                </p>
                <p>
                  If your SaaS does not show up in those answers, you lose visibility at the exact moment a buyer is
                  forming their shortlist.
                </p>
              </Section>

              <Section id="how-cite" title="How AI tools choose what to cite">
                <p>
                  AI tools tend to favor content that is clear, structured, specific, and backed by credible signals.
                </p>
                <p>
                  They also pay attention to third-party validation, brand mentions across trusted sources, and pages
                  that directly answer questions in a readable format.
                </p>
              </Section>

              <Section id="content" title="What content SaaS companies need">
                <p>SaaS companies need content that maps to buyer intent. That usually includes:</p>
                <BulletList items={[
                  'Comparison pages',
                  '"Best tools" pages',
                  'Use case pages',
                  'Alternative pages',
                  'FAQ pages',
                  'Step-by-step guides',
                  'Implementation checklists',
                ]} />
                <p>
                  This type of content makes it easier for AI systems to understand what your product does, who it is
                  for, and when it should be recommended.
                </p>
              </Section>

              <Section id="technical" title="Technical foundations for visibility">
                <p>
                  A SaaS site should be easy to crawl, fast to load, and structured in a way machines can understand.
                  That includes clean page architecture, schema markup, internal linking, and direct answers in the
                  page copy.
                </p>
                <p>
                  If the site is slow, blocked, or poorly structured, even great content will struggle to appear in AI
                  search answers.
                </p>
              </Section>

              <Section id="authority" title="Authority signals beyond your website">
                <p>
                  AI systems do not rely only on your site. They also look for authority signals on third-party
                  platforms, including social proof, review sites, community mentions, podcasts, and expert references.
                </p>
                <p>
                  For SaaS brands, this means your visibility improves faster when your positioning is repeated
                  consistently across the web.
                </p>
              </Section>

              <Section id="action-plan" title="A step-by-step action plan">
                <Step n={1} title="Clarify your category">
                  Make it obvious what your SaaS is, who it is for, and what problem it solves. AI tools need clear
                  positioning to recommend you correctly.
                </Step>
                <Step n={2} title="Build question-led pages">
                  <p className="mb-3">Create pages that answer real buyer questions, such as:</p>
                  <BulletList items={[
                    'What is the best tool for X?',
                    'Which SaaS solves Y?',
                    'How do I choose Z?',
                    'What is the difference between A and B?',
                  ]} />
                </Step>
                <Step n={3} title="Add structured content">
                  Use short paragraphs, strong headings, bullet points, tables, and FAQs. Make every section easy to
                  extract and summarize.
                </Step>
                <Step n={4} title="Strengthen technical signals">
                  Improve page speed, schema, crawlability, and internal linking so AI systems can understand the
                  content efficiently.
                </Step>
                <Step n={5} title="Build third-party authority">
                  Get mentioned in communities, directories, interviews, podcasts, and relevant comparisons. AI search
                  visibility compounds when your brand is visible in multiple places.
                </Step>
                <Step n={6} title="Measure your visibility">
                  Track which prompts mention your brand, how often you are cited, and what pages get referenced most
                  often. Re-test the same prompts regularly so you can measure progress over time.
                </Step>
              </Section>

              <Section id="mistakes" title="Common mistakes to avoid">
                <p>The most common mistakes are:</p>
                <BulletList items={[
                  'Writing vague marketing copy',
                  'Burying the answer too far down the page',
                  'Ignoring comparison and alternative pages',
                  'Forgetting technical SEO basics',
                  'Relying only on your own website',
                  'Publishing content without a clear query target',
                ]} />
                <p>These issues reduce the chance that AI tools will confidently cite or recommend your brand.</p>
              </Section>

              <Section id="measure" title="How to measure success">
                <p>You should measure:</p>
                <BulletList items={[
                  'Brand mentions in AI responses',
                  'Citations to your content',
                  'Referral traffic from AI tools',
                  'Branded search growth',
                  'Lead quality from AI-discovered visitors',
                  'Conversions from AI-assisted discovery',
                ]} />
                <p>
                  A good AI search strategy should improve both visibility and business results, not just impressions.
                </p>
              </Section>

              <Section id="checklist" title="Final checklist">
                <p>Before publishing any AI search page, confirm that it:</p>
                <BulletList items={[
                  'Answers a real buyer question',
                  'Has a clear title and subtitle',
                  'Includes short, structured sections',
                  'Uses examples and action steps',
                  'Supports easy scanning',
                  'Links to related content',
                  'Includes a contact or CTA block',
                ]} />
              </Section>

              {/* Contact / CTA */}
              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Need help? Contact Mushbloom
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    If your SaaS company wants help turning AI search visibility into traffic, users, and revenue,
                    Mushbloom can help with strategy, execution, and content support.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <a href="mailto:office@mushbloom.co.uk" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">Email</div>
                        <div className="text-sm text-white truncate">office@mushbloom.co.uk</div>
                      </div>
                    </a>
                    <a href="https://wa.me/40725388605" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">WhatsApp</div>
                        <div className="text-sm text-white">+40 725 388 605</div>
                      </div>
                    </a>
                    <a href="https://mushbloom.uk" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Globe className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">Website</div>
                        <div className="text-sm text-white">mushbloom.uk</div>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://tidycal.com/adrianniculescu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
                    >
                      Book a Free Strategy Call <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      to="/llmboost"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Explore LLMboost
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tight">
      {title}
    </h2>
    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">{children}</div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 my-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-300">
        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <div className="mt-8 first:mt-0 pl-6 border-l-2 border-gray-800">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Step {n}</span>
      <h3 className="text-xl md:text-2xl font-semibold text-white font-['Space_Grotesk']">{title}</h3>
    </div>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </div>
);

export default SaasAiSearchGuide;
