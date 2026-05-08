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
  { id: 'real-problem', title: 'The real problem in Web3' },
  { id: 'what-is', title: 'What a company brain is' },
  { id: 'why-now', title: 'Why it matters now' },
  { id: 'what-achieves', title: 'What it can achieve' },
  { id: 'why-web3', title: 'Why Web3 needs this more than most' },
  { id: 'hidden-value', title: 'The hidden value' },
  { id: 'how-we-help', title: 'How we help' },
  { id: 'final-thought', title: 'Final thought' },
  { id: 'contact', title: 'Contact Mushbloom' },
];

const Web3CompanyBrainGuide = () => {
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

  const url = 'https://mushbloom.uk/guides/web3-company-brain';
  const title = 'Why Blockchain, Crypto, and Web3 Companies Need More Than a Team: They Need a Company Brain';
  const description =
    'How blockchain, crypto, and Web3 companies can build a central AI-powered knowledge layer that captures institutional memory, connects information, and helps the business scale intelligently.';

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
    datePublished: '2026-05-08T10:00:00+00:00',
    dateModified: '2026-05-08T10:00:00+00:00',
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
              A practical guide to building a central AI-powered knowledge layer that captures institutional memory and helps Web3 businesses scale intelligently.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>10 min read</span></div>
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
                  Most blockchain, crypto, and Web3 companies are not short on ambition. They have smart people,
                  fast-moving teams, strong communities, and big ideas. What they often lack is a company brain: a central
                  AI-powered layer that captures knowledge, connects information, and helps the business think, respond,
                  and scale more intelligently.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  In Web3, speed matters, but speed without memory creates chaos. Teams grow quickly, product cycles change
                  fast, communities ask endless questions, and critical knowledge gets trapped in Slack threads, Notion pages,
                  Discord messages, investor decks, and people's heads. A company brain solves that by turning scattered
                  information into a living system that the entire organization can use.
                </p>
              </div>

              <Section id="real-problem" title="The real problem in Web3">
                <p>
                  Blockchain and crypto companies operate in one of the most complex business environments in tech. They have
                  to explain technical products, manage token narratives, support users, educate communities, coordinate
                  partnerships, and keep internal teams aligned, often all at once. On top of that, the industry changes
                  constantly, which means yesterday's answer may already be outdated today.
                </p>
                <p>
                  That is why many Web3 companies feel organized on the surface but fragmented underneath. The team may be
                  talented, but if knowledge is scattered, every new hire has to relearn what the company already knows,
                  every support question takes longer to answer, and every strategic decision requires digging through
                  multiple systems. A company brain gives the business a single source of truth and makes that truth
                  accessible instantly.
                </p>
              </Section>

              <Section id="what-is" title="What a company brain is">
                <p>
                  A company brain is not just a chatbot on a website. It is an AI-powered internal intelligence system
                  trained on the company's own materials: product documentation, technical specs, tokenomics, FAQs, support
                  history, community content, SOPs, investor updates, strategy notes, and internal workflows. Its job is to
                  help the team find answers, summarize knowledge, reduce repetition, and preserve institutional memory.
                </p>
                <p>
                  In practical terms, it becomes the place where the company's knowledge lives and works. Instead of asking
                  five people the same question, a team member can ask the company brain. Instead of spending hours onboarding
                  someone, the brain can surface the right context quickly. Instead of losing information when someone leaves,
                  the company keeps the knowledge.
                </p>
              </Section>

              <Section id="why-now" title="Why it matters now">
                <p>
                  AI and blockchain are increasingly being discussed as complementary technologies, but the most useful idea
                  for operators is simpler: blockchain helps create trust, while AI helps create intelligence. In a Web3
                  company, that combination is powerful because the business needs both credibility and speed.
                </p>
                <p>
                  A company brain gives you speed without losing structure. It helps teams operate more like a
                  high-functioning intelligence network and less like a collection of disconnected departments. That matters
                  even more in distributed companies, where founders, builders, marketers, community managers, and advisors
                  are often working across different time zones and systems.
                </p>
              </Section>

              <Section id="what-achieves" title="What it can achieve">
                <p>
                  The business benefits are immediate and compounding. A company brain can reduce onboarding time, improve
                  internal communication, speed up support, make sales and partnerships more consistent, and give leadership
                  faster access to company knowledge. It can also help preserve the quality of decision-making as the company
                  grows.
                </p>
                <p>
                  For example, a new team member can ask, "What is our token utility explanation for investors?" or "How do
                  we describe this product to non-technical users?" and get a contextual answer instantly. A community manager
                  can use it to respond more accurately. A founder can use it to retrieve key details before a call. Over
                  time, this kind of system becomes an operational advantage, not just a convenience.
                </p>
              </Section>

              <Section id="why-web3" title="Why Web3 needs this more than most industries">
                <p>
                  Web3 companies move in public, and they move fast. Product changes, governance decisions, token updates,
                  ecosystem integrations, and community messaging all happen under scrutiny. That means the cost of confusion
                  is high, because inconsistent answers can weaken trust very quickly.
                </p>
                <p>
                  A company brain helps create consistency across every touchpoint. It keeps messaging aligned, ensures the
                  team is working from the same knowledge, and makes it easier to maintain quality as the organization scales.
                  In an industry where trust is everything, that consistency is not optional — it is a competitive advantage.
                </p>
              </Section>

              <Section id="hidden-value" title="The hidden value">
                <p>
                  The biggest value is not just efficiency. It is memory. Companies do not only lose time when knowledge is
                  scattered; they lose insight, context, and continuity. A company brain protects against that by capturing
                  what the business knows and making it usable every day.
                </p>
                <p>
                  It also creates a foundation for future automation. Once knowledge is structured and connected, it becomes
                  much easier to build AI agents, workflow automation, internal assistants, onboarding systems, and support
                  layers on top of it. In other words, the company brain is not the final product — it is the operating layer
                  that makes everything else smarter.
                </p>
              </Section>

              <Section id="how-we-help" title="How we help">
                <p>
                  This is exactly where we come in. We help blockchain, crypto, and Web3 companies build their own AI-powered
                  company brain: a system that organizes internal knowledge, improves team execution, and turns scattered
                  information into a strategic asset. Our work is designed for companies that want to move faster, scale
                  cleaner, and operate with more clarity.
                </p>
                <p>
                  If your company is growing and knowledge is starting to slip through the cracks, this is the moment to
                  build the brain before the problem gets bigger. The best time to organize company intelligence is before
                  your team becomes too large, too distributed, or too fast-moving to manage it manually.
                </p>
              </Section>

              <Section id="final-thought" title="Final thought">
                <p>
                  Every serious Web3 company needs more than a team. It needs a brain that remembers, learns, responds, and
                  scales with the business.
                </p>
                <p>
                  If your blockchain, crypto, or Web3 company is ready to build that brain, we should talk.
                </p>
              </Section>

              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Contact Mushbloom
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    If your blockchain, crypto, or Web3 company is ready to build an AI-powered company brain, Mushbloom
                    can help with strategy, architecture, and implementation.
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

export default Web3CompanyBrainGuide;
