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
  { id: 'real-problem', title: 'The real SaaS problem' },
  { id: 'what-is', title: 'What a company brain is' },
  { id: 'why-saas', title: 'Why SaaS companies need it' },
  { id: 'what-achieves', title: 'What it can achieve' },
  { id: 'why-now', title: 'Why this matters now' },
  { id: 'hidden-advantage', title: 'The hidden advantage' },
  { id: 'how-we-help', title: 'What we help build' },
  { id: 'final-thought', title: 'Final thought' },
  { id: 'contact', title: 'Contact Mushbloom' },
];

const SaasCompanyBrainGuide = () => {
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

  const url = 'https://mushbloom.uk/guides/saas-company-brain';
  const title = 'Why SaaS Companies Need More Than a Team: They Need a Company Brain';
  const description =
    'How SaaS companies can build a central AI-powered knowledge layer that captures institutional memory, reduces internal friction, and helps the business scale intelligently.';

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
    datePublished: '2026-05-08T12:00:00+00:00',
    dateModified: '2026-05-08T12:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'AI Strategy & Operations',
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
              How SaaS companies can build a central AI-powered knowledge layer that captures institutional memory and helps the business scale intelligently.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>11 min read</span></div>
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
                  Most SaaS companies do not fail because they lack talent. They fail because their knowledge does not
                  scale as fast as their product does.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  A SaaS business can have a strong team, a great product, and a growing customer base, but still struggle
                  internally. Product knowledge gets scattered across docs, support tickets, Slack messages, recorded calls,
                  onboarding decks, and people's heads. As the company grows, that fragmentation becomes expensive. A company
                  brain solves that by turning company knowledge into an AI-powered internal system that helps the business
                  remember, respond, and scale more intelligently.
                </p>
              </div>

              <Section id="real-problem" title="The real SaaS problem">
                <p>
                  SaaS companies live in a constant state of growth, iteration, and customer pressure. New features get
                  launched, customers ask the same questions repeatedly, support teams get overloaded, sales teams need better
                  answers, and leadership needs visibility into what is really happening across the business.
                </p>
                <p>
                  The result is often a familiar pattern. The team works hard, but information is hard to find. One department
                  knows something another department needs. A customer success manager has useful context that never reaches
                  product. A founder has strategic insights trapped in meetings. A new hire spends weeks learning what the
                  company already knows. The business is moving, but its memory is fragmented.
                </p>
                <p>
                  That is why many SaaS companies become operationally slower as they grow. They do not lack effort. They lack
                  a system for preserving and distributing knowledge.
                </p>
              </Section>

              <Section id="what-is" title="What a company brain is">
                <p>
                  A company brain is more than a chatbot or an internal search bar. It is an AI-powered knowledge layer built
                  on top of the company's own information: product documentation, FAQs, customer support history, SOPs, sales
                  materials, onboarding workflows, customer feedback, internal updates, and strategic notes.
                </p>
                <p>
                  Its role is to make company knowledge accessible, useful, and actionable. Instead of asking five people the
                  same question, team members can ask the company brain. Instead of digging through folders and old threads,
                  they can get the right answer instantly. Instead of losing context when someone leaves, the company retains
                  what it has learned.
                </p>
                <p>
                  For SaaS companies, this is especially valuable because the product, the customer experience, and the internal
                  workflows are all tightly connected. When knowledge is centralized, execution becomes cleaner across the entire
                  business.
                </p>
              </Section>

              <Section id="why-saas" title="Why SaaS companies need it">
                <p>
                  SaaS businesses depend on speed, consistency, and trust. Customers expect fast support, clear onboarding, and
                  accurate answers. Sales teams need to explain the product well. Customer success teams need context. Product
                  teams need feedback. Leadership needs data and clarity.
                </p>
                <p>
                  A company brain improves all of that.
                </p>
                <p>
                  It reduces the time spent searching for answers. It makes onboarding easier for new employees. It helps support
                  teams answer questions more accurately. It gives sales teams better access to product knowledge. It helps
                  customer success teams respond with more context. It supports leadership by making company knowledge easier to
                  retrieve and use.
                </p>
                <p>
                  In a SaaS company, small inefficiencies compound quickly. If every team is repeating work, rediscovering
                  information, or relying on tribal knowledge, the business becomes slower than it should be. A company brain
                  helps eliminate that drag.
                </p>
              </Section>

              <Section id="what-achieves" title="What it can achieve">
                <p>
                  The benefits go beyond convenience. A company brain can materially improve how a SaaS business operates.
                </p>
                <p>
                  It can shorten onboarding time for new hires by giving them immediate access to internal knowledge. It can
                  reduce support pressure by helping teams answer common questions faster and more consistently. It can improve
                  sales performance by making product explanations clearer and more aligned. It can support customer success by
                  surfacing relevant account context and past interactions. It can also improve decision-making by making company
                  knowledge easier for leadership to access when needed.
                </p>
                <p>
                  Over time, this creates a business that runs with more memory and less friction. The team stops depending so
                  heavily on who happens to know what. Instead, knowledge becomes part of the company's operating system.
                </p>
              </Section>

              <Section id="why-now" title="Why this matters now">
                <p>
                  AI has changed what is possible inside modern companies. Businesses are no longer limited to static
                  documentation or manual knowledge sharing. They can now build intelligent systems that learn from their own
                  data and help teams act faster.
                </p>
                <p>
                  For SaaS companies, this is especially important because complexity keeps increasing. Products become more
                  advanced, customer expectations rise, support demands grow, and teams become more distributed. Without a
                  central knowledge layer, the company spends more time managing confusion than creating value.
                </p>
                <p>
                  A company brain gives SaaS businesses a way to stay organized while they scale. It creates consistency across
                  teams and helps the company behave more like a coordinated intelligence system than a collection of disconnected
                  functions.
                </p>
              </Section>

              <Section id="hidden-advantage" title="The hidden advantage">
                <p>
                  The biggest advantage of a company brain is not just efficiency. It is continuity.
                </p>
                <p>
                  SaaS companies lose a huge amount of value when knowledge stays locked in people's heads or scattered across
                  too many tools. When someone leaves, a customer changes, a process evolves, or the product shifts, companies
                  can easily lose context. A company brain preserves that context and makes it reusable.
                </p>
                <p>
                  That means the business becomes more resilient. It is easier to train new people, easier to maintain quality,
                  easier to align teams, and easier to scale without chaos. In a SaaS business, that is a serious advantage.
                </p>
              </Section>

              <Section id="how-we-help" title="What we help build">
                <p>
                  This is exactly the kind of system we help companies create.
                </p>
                <p>
                  We work with SaaS businesses that want to turn scattered knowledge into a real company brain — one that helps
                  teams find information faster, work smarter, and scale with more clarity. Instead of leaving knowledge trapped
                  across documents, tickets, calls, and internal chats, we help transform it into an AI-powered layer the whole
                  company can use.
                </p>
                <p>
                  If your SaaS company is growing and the internal chaos is starting to show, this is the right time to build
                  the system before the problem gets bigger. The goal is not just to add another tool. The goal is to create the
                  brain that helps the entire business operate better.
                </p>
              </Section>

              <Section id="final-thought" title="Final thought">
                <p>
                  SaaS companies do not just need more tools. They need a company brain that helps the whole organization
                  remember, respond, and scale.
                </p>
                <p>
                  If your business is ready to build that brain, this is where the conversation starts.
                </p>
              </Section>

              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Contact Mushbloom
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    If your SaaS company is ready to build an AI-powered company brain, Mushbloom can help with strategy,
                    architecture, and implementation.
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

export default SaasCompanyBrainGuide;
