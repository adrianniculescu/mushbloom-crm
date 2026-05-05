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
  { id: 'what-is', title: 'What AI search visibility means' },
  { id: 'why-matters', title: 'Why AI search matters in this market' },
  { id: 'how-cite', title: 'How AI tools choose what to cite' },
  { id: 'content', title: 'What content crypto and Web3 projects need' },
  { id: 'technical', title: 'Technical foundations for visibility' },
  { id: 'authority', title: 'Authority signals beyond your website' },
  { id: 'action-plan', title: 'A step-by-step action plan' },
  { id: 'mistakes', title: 'Common mistakes to avoid' },
  { id: 'measure', title: 'How to measure success' },
  { id: 'checklist', title: 'Final checklist' },
  { id: 'contact', title: 'Contact Mushbloom' },
];

const CryptoWeb3AiSearchGuide = () => {
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

  const url = 'https://mushbloom.uk/guides/crypto-web3-ai-search-visibility';
  const title = 'How Blockchain, Crypto, and Web3 Companies Can Increase Traffic, Users, and Revenue with AI Search';
  const description =
    'A practical guide for blockchain, crypto, and Web3 teams to get cited, recommended, and discovered by ChatGPT, Perplexity, Gemini, and other AI search tools.';

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
    datePublished: '2026-05-05T10:00:00+00:00',
    dateModified: '2026-05-05T10:00:00+00:00',
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
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/wiki" className="hover:text-white transition-colors">Wiki</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">Guide</span>
          </nav>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Research by Mushbloom</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              A practical guide to getting cited, recommended, and discovered by the AI tools your ideal users already trust.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>13 min read</span></div>
              <span>•</span>
              <span>Updated May 2026</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
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

            <article className="max-w-3xl">
              <div className="border-l-2 border-blue-500/40 pl-6 mb-16">
                <p className="text-lg text-gray-300 leading-relaxed">
                  AI search is changing how blockchain, crypto, and Web3 companies get discovered. Instead of relying
                  only on traditional search results, users now ask ChatGPT, Perplexity, Gemini, and other AI tools
                  which projects to trust, which protocols solve a problem best, and which brands are worth exploring.
                  If your project is not visible in those answers, you are missing traffic, users, and revenue before
                  prospects even reach your site.
                </p>
              </div>

              <Section id="what-is" title="What AI search visibility means">
                <p>
                  AI search visibility is the ability for your brand, protocol, or product to appear in answers
                  generated by AI systems. That can include being cited, recommended, compared, or mentioned when
                  users ask questions about wallets, exchanges, DeFi, infrastructure, token ecosystems, or Web3
                  services.
                </p>
                <p>
                  For blockchain and crypto projects, this matters because buyers, investors, traders, developers, and
                  community members are increasingly using AI tools to evaluate options before clicking anything.
                </p>
              </Section>

              <Section id="why-matters" title="Why AI search matters in this market">
                <p>
                  AI search matters because it changes discovery behavior. Instead of browsing ten different pages,
                  people ask a tool for the fastest answer, the safest option, the most relevant protocol, or the best
                  project for a specific use case.
                </p>
                <p>If your project is not part of that answer, your competition gets the attention first.</p>
              </Section>

              <Section id="how-cite" title="How AI tools choose what to cite">
                <p>
                  AI systems tend to prefer content that is clear, structured, direct, and easy to reuse. They also
                  lean on third-party mentions, authoritative explanations, and pages that describe a project in
                  simple terms that are easy to extract and summarize.
                </p>
                <p>
                  In crypto and Web3 especially, trust signals matter. AI tools are more likely to mention projects
                  that look legitimate, consistent, and well documented across multiple sources.
                </p>
              </Section>

              <Section id="content" title="What content crypto and Web3 projects need">
                <p>Crypto and Web3 companies need content that answers real questions. That usually includes:</p>
                <BulletList items={[
                  'Project explainers',
                  'Protocol documentation',
                  'Comparison pages',
                  'Use-case pages',
                  'FAQ pages',
                  'Security and trust pages',
                  'Tokenomics or product economics explanations',
                  'Step-by-step onboarding guides',
                  'Alternative and "best for" pages',
                ]} />
                <p>
                  This type of content helps AI systems understand who you are, what you do, and when you should be
                  recommended.
                </p>
              </Section>

              <Section id="technical" title="Technical foundations for visibility">
                <p>
                  Your website should be easy for machines to read. That means crawlable HTML, a clean site structure,
                  fast-loading pages, and clear headings that explain the topic without ambiguity.
                </p>
                <p>
                  If your content lives mostly inside heavy JavaScript, hidden app screens, or scattered assets, it
                  becomes harder for AI systems to reliably understand and reuse it.
                </p>
              </Section>

              <Section id="authority" title="Authority signals beyond your website">
                <p>AI visibility is not only about your website. In crypto and Web3, authority also comes from:</p>
                <BulletList items={[
                  'Media mentions',
                  'Community discussions',
                  'Podcast appearances',
                  'Founder profiles',
                  'Ecosystem directories',
                  'GitHub repositories',
                  'Verified contracts',
                  'Signed announcements',
                  'Consistent brand references across the web',
                ]} />
                <p>
                  The more consistently your project is represented, the easier it is for AI systems to treat it as
                  credible.
                </p>
              </Section>

              <Section id="action-plan" title="A step-by-step action plan">
                <Step n={1} title="Clarify your category">
                  Make sure a visitor can instantly tell what your project is, who it is for, and what problem it
                  solves.
                </Step>
                <Step n={2} title="Build question-led pages">
                  <p className="mb-3">Create pages that answer questions like:</p>
                  <BulletList items={[
                    'What is the best wallet for X?',
                    'Which protocol solves Y?',
                    'How does this project compare to alternatives?',
                    'Is this product safe and trustworthy?',
                    'What problem does this token or protocol solve?',
                  ]} />
                </Step>
                <Step n={3} title="Add structured explanations">
                  Use short paragraphs, strong headings, tables, and FAQs. AI systems prefer pages that are easy to
                  summarize and cite.
                </Step>
                <Step n={4} title="Strengthen technical signals">
                  Make sure your site is crawlable, fast, and well structured. Add schema where relevant and keep
                  important information close to the top of the page.
                </Step>
                <Step n={5} title="Build trust beyond the website">
                  Get referenced in articles, interviews, communities, directories, and ecosystem content. Repetition
                  across the web strengthens your entity signals.
                </Step>
                <Step n={6} title="Measure visibility">
                  Track whether your brand appears in AI responses for relevant prompts. Test the same questions
                  regularly and watch for changes over time.
                </Step>
              </Section>

              <Section id="mistakes" title="Common mistakes to avoid">
                <p>The most common mistakes are:</p>
                <BulletList items={[
                  'Vague copy that does not define the project clearly',
                  'Whitepapers that are too technical for AI systems to reuse easily',
                  'Missing comparison pages',
                  'Weak trust signals',
                  'Inconsistent branding across channels',
                  'Content that is hard to crawl or extract',
                ]} />
                <p>These issues make it harder for AI systems to confidently cite or recommend your project.</p>
              </Section>

              <Section id="measure" title="How to measure success">
                <p>Success is not just traffic. It is:</p>
                <BulletList items={[
                  'More brand mentions in AI responses',
                  'More citations from relevant tools',
                  'More qualified visitors',
                  'More wallet signups, protocol users, or community members',
                  'Stronger branded search demand',
                  'Better conversion from AI-discovered users',
                ]} />
              </Section>

              <Section id="checklist" title="Final checklist">
                <p>Before publishing any crypto or Web3 AI search page, check that it:</p>
                <BulletList items={[
                  'Answers a real user question',
                  'Says exactly what the project is',
                  'Uses short, structured sections',
                  'Includes trust and security signals',
                  'Has clear comparisons or use cases',
                  'Is easy to crawl and summarize',
                  'Links to related documentation or resources',
                ]} />
              </Section>

              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Contact Mushbloom
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    If your blockchain, crypto, or Web3 project wants help getting cited, recommended, and discovered
                    by AI search, Mushbloom can help with strategy, content, and execution support.
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

export default CryptoWeb3AiSearchGuide;
