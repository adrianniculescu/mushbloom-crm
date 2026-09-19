import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { LovableLink } from '@/components/LovableLink';
import { ArrowRight, ChevronRight, Mail, MessageCircle, Globe, BookOpen, Clock, Sparkles } from 'lucide-react';

interface SectionDef { id: string; title: string; }

const sections: SectionDef[] = [
  { id: 'problem-first', title: 'Start with the problem, not the app' },
  { id: 'one-customer', title: 'One customer, one job, one moment' },
  { id: 'talk-first', title: 'Talk to people before you build' },
  { id: 'commitment', title: 'Validate commitment, not attention' },
  { id: 'smallest-mvp', title: 'The smallest MVP that proves one thing' },
  { id: 'ai-build', title: 'Use AI to compress build time' },
  { id: 'offer', title: 'Build the offer and the product together' },
  { id: 'sprint', title: 'The 30-day founder sprint' },
  { id: 'help', title: 'Know when you need help' },
  { id: 'advantage', title: 'The corporate-founder advantage' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'contact', title: 'Ready to turn your experience into an MVP?' },
];

const NonTechnicalFounderMvpPlaybook = () => {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const url = 'https://mushbloom.uk/guides/non-technical-founder-mvp-playbook';
  const title = 'From Corporate Expert to Startup Founder: The Practical MVP Playbook for Non-Technical Builders';
  const seoTitle = 'How Non-Technical Founders Can Validate and Build an MVP with AI';
  const description =
    'A practical playbook for corporate professionals becoming founders: validate a problem, speak with customers, define the smallest viable product and launch an AI-enabled MVP without wasting months or a large development budget.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    alternativeHeadline: seoTitle,
    description,
    image: 'https://mushbloom.uk/og-image.jpg',
    author: {
      '@type': 'Organization',
      name: 'Mushbloom Team',
      url: 'https://mushbloom.uk',
      description:
        'Mushbloom helps non-technical founders turn real industry insight into validated offers, AI-enabled MVPs and early go-to-market systems.',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mushbloom',
      logo: { '@type': 'ImageObject', url: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png' },
    },
    datePublished: '2026-09-18T09:00:00+00:00',
    dateModified: '2026-09-18T09:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'Founders & MVPs',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    keywords: [
      'non-technical founder MVP',
      'how to validate a startup idea',
      'build an MVP with AI',
      'AI MVP development agency',
      'corporate to startup founder',
      'minimum viable product playbook',
      'customer discovery interviews',
      'paid pilot validation',
      'no-code MVP',
    ],
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

  const faqs = [
    {
      q: 'Do I need a technical co-founder to start?',
      a: 'No. Your first requirement is evidence that a specific group of people has a sufficiently painful problem and will make a real commitment to solve it. A technical co-founder, a development budget and leaving your job are not the starting conditions — customer evidence is. Technical judgment matters once you decide what to build, and that can be brought in.',
    },
    {
      q: 'How many customer interviews are enough before building?',
      a: 'Aim for 10 to 15 conversations with people in the same customer segment before drawing strong conclusions. You are looking for patterns: the same pain described independently, similar language, and time or money already spent on workarounds.',
    },
    {
      q: 'What counts as real validation?',
      a: 'A commitment that costs the potential customer something: a paid pilot, a pre-order, a letter of intent, a signed discovery agreement, access to data or systems, a meeting with the real budget owner, or a design-partner commitment. A €250 paid pilot is stronger evidence than 500 free waitlist sign-ups.',
    },
    {
      q: 'Can I build an MVP with AI tools instead of hiring developers?',
      a: 'AI-assisted tools can turn a clear brief into an early prototype far faster than a traditional build — landing pages, interface prototypes, basic workflows, internal dashboards and database-connected MVPs. They compress build time; they do not replace product judgment about what should be built.',
    },
    {
      q: 'Is AI-generated code safe for real users?',
      a: 'Not automatically. The more sensitive the product, the higher the bar. If you handle payments, personal data, health or financial information, user permissions or confidential company data, your MVP needs proper attention to authentication, access controls, secure data handling, backups, compliance obligations and code review.',
    },
    {
      q: 'What should my first MVP actually be?',
      a: 'The smallest credible product, prototype or service that tests your riskiest assumption — often a landing page with a paid-pilot offer, a clickable prototype of the key workflow, a concierge service delivered manually, or a lightweight portal solving one recurring task. Not a marketplace, mobile app or multi-sided platform.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{seoTitle} | Mushbloom</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Mushbloom Team" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Founders &amp; MVPs</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              How non-technical founders can validate a real problem, prove commitment and build an
              AI-enabled MVP — without a technical co-founder, a large budget or six months of guessing.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>15 min read</span></div>
              <span>•</span>
              <span>By the Mushbloom Team</span>
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
              {/* Quick answer block — the passage AI assistants most often lift */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-green-400" />
                  <span className="text-xs uppercase tracking-wider text-green-400 font-medium">In short</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A non-technical founder does not need a technical co-founder or a large development budget
                  to start. The first requirement is evidence: a narrow customer, a painful and expensive
                  problem, 10–15 discovery conversations, and a commitment that costs the buyer something —
                  a paid pilot, pre-order or letter of intent. Only then do you build the smallest credible
                  product that tests your riskiest assumption, using AI-assisted tools to compress build time
                  while keeping human product and security judgment in place.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/40 pl-6 mb-16 space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>You have spent years inside an industry.</p>
                <p>
                  You know where work gets stuck. You have seen customers wait too long, teams duplicate
                  effort, spreadsheets become unofficial operating systems and expensive software fail to
                  solve the problem people actually have.
                </p>
                <p>You may even have an idea you keep returning to: “There should be a better way to do this.”</p>
                <p>That is often where a strong startup begins.</p>
              </div>

              <Section id="problem-first" title="Start with the problem, not the app">
                <p>
                  Many corporate professionals do not move forward because they believe becoming a founder
                  requires one of three things they do not have: a technical co-founder, a large development
                  budget, or the confidence to leave a stable career before they know whether the idea will work.
                </p>
                <p>
                  None of those should be your first requirement. Your first requirement is evidence that a
                  specific group of people has a sufficiently painful problem — and will make a real commitment
                  to solve it.
                </p>
                <p>
                  AI-assisted product tools have changed the speed and cost of early prototyping. They have not
                  removed the need for customer understanding, a clear offer, sound product decisions or a
                  viable route to market. The opportunity is not to build an app faster for its own sake. It is
                  to learn faster, with less wasted capital and less founder risk.
                </p>
                <p>The most common early mistake is to begin with the solution: “I want to build a platform for…”</p>
                <p>That is usually too early. Start with a problem statement instead:</p>
                <Quote>
                  “We believe [a specific type of person] repeatedly struggles with [a specific job or pain]
                  because [a specific gap in the current process].”
                </Quote>
                <p>For example:</p>
                <Quote>
                  “We believe procurement managers at mid-sized construction companies struggle to track
                  supplier compliance because evidence is scattered across email, PDFs and spreadsheets.”
                </Quote>
                <p>This is better than: “We want to build a compliance platform.”</p>
                <p>
                  The first statement gives you something to investigate. The second commits you to a product
                  before you understand the buyer, the urgency, the existing workaround or the budget.
                </p>
                <p>
                  Your advantage as a corporate professional is not simply that you have an idea. It is that you
                  may understand an expensive problem from the inside. Use that advantage.
                </p>
              </Section>

              <Section id="one-customer" title="Choose one customer, one painful job and one moment">
                <p>
                  A market is not an ideal customer profile. “Small businesses,” “companies in finance” and
                  “HR teams” are not specific enough to build or sell to. The first version of your product
                  should serve a narrow group with a shared problem and a clear moment of pain.
                </p>
                <p>Define:</p>
                <BulletList items={[
                  'The user: who experiences the problem daily?',
                  'The buyer: who can approve or pay for a solution?',
                  'The job: what are they trying to achieve?',
                  'The moment: when does the pain become urgent?',
                  'The current workaround: what do they do instead?',
                  'The cost of inaction: what does the problem cost in time, money, risk or lost opportunity?',
                ]} />
                <p>A focused initial market is not a limitation. It is how you earn the right to expand.</p>
              </Section>

              <Section id="talk-first" title="Talk to people before you build">
                <p>Do not ask: “Would you use our app?” Most people will be polite. Politeness does not validate demand.</p>
                <p>Instead, ask questions about real behaviour:</p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 my-6">
                  <p className="text-xs uppercase tracking-wider text-blue-400 font-medium mb-4">Discovery interview questions</p>
                  <BulletList items={[
                    '“Tell us about the last time this happened.”',
                    '“What did you do to solve it?”',
                    '“What was difficult, slow or expensive about that?”',
                    '“Who else was involved?”',
                    '“What tools are you using now?”',
                    '“What does this problem cost you?”',
                    '“Have you ever paid to solve it?”',
                    '“What would need to be true for you to change your current process?”',
                  ]} />
                </div>
                <p>
                  Aim for 10–15 conversations with people in the same customer segment before drawing strong
                  conclusions. Record recurring phrases, objections and examples of the current workflow.
                </p>
                <p>You are looking for patterns, not compliments.</p>
                <p>
                  If several people independently describe the same pain, use similar language and already
                  invest time or money in workarounds, you have something worth testing. If they do not, revise
                  the problem before you build.
                </p>
              </Section>

              <Section id="commitment" title="Validate commitment, not attention">
                <p>
                  A landing-page waitlist can be useful. So can positive calls, LinkedIn likes and people
                  saying, “Keep us posted.” But none of these is the strongest evidence.
                </p>
                <p>Look for a commitment that costs the potential customer something:</p>
                <BulletList items={[
                  'A paid pilot',
                  'A pre-order',
                  'A letter of intent',
                  'A signed discovery agreement',
                  'Access to data or workflow systems',
                  'A meeting with the real budget owner',
                  'A commitment to introduce colleagues or become a design partner',
                ]} />
                <p>The commitment does not need to be large. It needs to be meaningful.</p>
                <p>
                  For a corporate buyer, a €250 paid pilot can be more valuable evidence than 500 free waitlist
                  sign-ups. It signals that the problem matters, the buyer sees a credible outcome and the
                  founder is talking to the right person.
                </p>
              </Section>

              <Section id="smallest-mvp" title="Create the smallest MVP that proves one thing">
                <p>
                  An MVP is not a smaller version of a complete product. It is the smallest credible product,
                  prototype or service that tests your riskiest assumption.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-6">
                    <p className="text-xs uppercase tracking-wider text-green-400 font-medium mb-4">Good first MVPs</p>
                    <BulletList items={[
                      'A landing page with a clear offer and paid-pilot call to action',
                      'A clickable prototype showing the key workflow',
                      'A concierge service delivered manually behind the scenes',
                      'A simple internal tool for one team',
                      'A lightweight portal that solves one recurring task',
                      'A spreadsheet and AI workflow packaged as a service before it becomes software',
                    ]} />
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <p className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-4">Do not start with</p>
                    <BulletList items={[
                      'A full marketplace',
                      'A mobile app for iOS and Android',
                      'A multi-sided platform',
                      'Complex dashboards',
                      'A custom CRM',
                      'A feature list copied from a larger competitor',
                    ]} />
                  </div>
                </div>
                <p>Start with the one workflow that creates the outcome your customer wants.</p>
                <p>
                  For example, a supplier-compliance founder does not initially need to build an enterprise
                  platform. The MVP may be a secure intake form, a document-processing workflow, a dashboard
                  for one compliance manager and an automated exception report. That may be enough to test
                  whether the buyer will pay for the outcome.
                </p>
              </Section>

              <Section id="ai-build" title="Use AI to compress build time, not replace product judgment">
                <p>
                  AI-assisted tools can now help founders turn a clear brief into an early product prototype
                  much faster than a traditional development process. At Mushbloom we build these MVPs with a
                  modern AI stack — <LovableLink /> for the product itself, plus tools such as ChatGPT, Claude
                  and Perplexity for research, requirements and content.
                </p>
                <p>They can support:</p>
                <BulletList items={[
                  'Product requirements and user-story definition',
                  'Landing pages and early demand testing',
                  'Interface prototypes',
                  'Basic application workflows',
                  'Internal dashboards',
                  'Database-connected MVPs',
                  'Content, onboarding and customer-support workflows',
                  'Early analytics and reporting',
                ]} />
                <p>But AI-generated code is not automatically production-ready. The more sensitive the product, the higher the bar.</p>
                <p>
                  If you are handling payments, personal data, health information, financial data, user
                  permissions or confidential company data, your MVP needs proper attention to authentication,
                  access controls, secure data handling, backups, compliance obligations and code review. Our{' '}
                  <Link to="/guides/website-compliance-today" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    website compliance guide
                  </Link>{' '}
                  covers the privacy and accessibility baseline before real users arrive.
                </p>
                <Quote>
                  Use AI to move from idea to learning faster. Use experienced product and technical judgment
                  to decide what should be built, tested and secured.
                </Quote>
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-6 my-8">
                  <p className="text-white font-medium mb-3">
                    Have a corporate insight but are unsure what to build first?
                  </p>
                  <a
                    href="https://tidycal.com/adrianniculescu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
                  >
                    Book an MVP Readiness Call <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </Section>

              <Section id="offer" title="Build the offer and the product together">
                <p>An MVP without a clear offer is not a business. Before you build, define:</p>
                <BulletList items={[
                  'The customer segment',
                  'The problem in the customer’s own words',
                  'The promised outcome',
                  'The initial scope',
                  'The pricing hypothesis',
                  'The sales motion',
                  'The call to action',
                  'The metric that tells you whether the test worked',
                ]} />
                <p>A useful offer structure is:</p>
                <Quote>“We help [specific customer] achieve [specific outcome] without [current pain or compromise].”</Quote>
                <p>For example:</p>
                <Quote>
                  “We help mid-sized construction companies keep supplier compliance evidence current without
                  chasing documents across email and spreadsheets.”
                </Quote>
                <p>
                  That message should appear on your landing page, in outreach and in your first conversations.
                  Product, positioning and distribution should reinforce each other from day one.
                </p>
              </Section>

              <Section id="sprint" title="Build a 30-day founder sprint">
                <p>
                  You do not need to resign from your role to begin. You need a focused testing period.
                </p>
                <Step n={1} title="Week one: define the hypothesis">
                  Write the problem statement, customer segment, buyer, job-to-be-done and current workaround.
                  Create a list of 30–50 relevant people you can contact.
                </Step>
                <Step n={2} title="Week two: conduct customer conversations">
                  Aim for 10–15 interviews. Do not pitch. Capture exact language, recurring problems, existing
                  spending and objections.
                </Step>
                <Step n={3} title="Week three: test the offer">
                  Create a simple landing page, short demo or clickable workflow. Offer a paid pilot, discovery
                  engagement or early-access opportunity. Begin focused outreach.
                </Step>
                <Step n={4} title="Week four: decide what to build">
                  Use the evidence to narrow the scope to one outcome, one workflow and one customer segment.
                  Write an MVP brief with features, exclusions, user flow, pricing and success metrics.
                </Step>
                <p className="mt-8">
                  At the end of the month, you may decide not to build. That is a successful outcome if the
                  evidence says the problem is not urgent enough. Or you may have several committed early
                  customers and a focused, fundable build plan. Both outcomes are better than spending six
                  months building in isolation.
                </p>
              </Section>

              <Section id="help" title="Know when you need help">
                <p>
                  You do not need to become a software engineer to become a successful technology founder. But
                  you do need to make good product, customer, commercial and technical decisions.
                </p>
                <p>Get support when you need help with:</p>
                <BulletList items={[
                  'Turning expertise into a testable problem hypothesis',
                  'Finding and interviewing the right early customers',
                  'Defining what belongs in the MVP — and what does not',
                  'Creating positioning, a landing page and a paid-pilot offer',
                  'Translating customer feedback into product requirements',
                  'Building a practical AI-enabled MVP',
                  'Designing the first acquisition and partnership channels',
                  'Reviewing security, privacy and data risks before real users arrive',
                ]} />
                <p>
                  The best time to bring in a product and growth partner is not after you have spent a large
                  budget building the wrong product. It is before the build, when the scope is still flexible
                  and every decision can reduce risk.
                </p>
                <p>
                  Related reading:{' '}
                  <Link to="/services/lovable-development" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Lovable development
                  </Link>
                  ,{' '}
                  <Link to="/agency" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    AI automation agency
                  </Link>{' '}
                  and{' '}
                  <Link to="/guides/saas-ai-search-visibility" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    AI search visibility for SaaS
                  </Link>
                  .
                </p>
              </Section>

              <Section id="advantage" title="The corporate-founder advantage">
                <p>
                  Leaving a corporation does not make you late to entrepreneurship. It can make you unusually
                  prepared — if you use your experience correctly.
                </p>
                <p>
                  You understand a real market. You have witnessed workflows that outsiders cannot see. You may
                  have access to early customers, channel partners and domain credibility that a first-time
                  founder needs years to build.
                </p>
                <p>
                  Your task is to translate that advantage into a narrow problem, a clear offer, evidence of
                  commitment and a small product that proves something important.
                </p>
                <p>
                  Do not wait until you feel technical enough. Become close enough to the customer problem that
                  you can make good decisions. Then build only what you need to learn.
                </p>
              </Section>

              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-6">
                  {faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">{f.q}</h3>
                      <p className="text-gray-300 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Ready to turn your experience into an MVP?
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    At Mushbloom, we work hands-on with selected non-technical founders who are leaving — or
                    building alongside — corporate careers. We help validate the problem, define the offer,
                    create the product brief, build a focused AI-enabled MVP and develop the first go-to-market
                    path. For early-stage founders with real domain insight and a willingness to do customer
                    discovery, we offer founder-friendly MVP build, coaching and mentoring engagements.
                  </p>
                  <p className="text-gray-300 mb-8">
                    Have a corporate insight but are unsure what to build first? Let’s turn it into a
                    customer-validated MVP plan.
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
                      Book an MVP Readiness Call <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact-form"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Send us your idea instead
                    </a>
                  </div>

                  <p className="text-gray-400 text-sm mt-6">
                    Come with an industry insight, not a polished app idea. Together, we will work out what is
                    worth building. — The Mushbloom Team
                  </p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <div id="contact-form">
        <Contact />
      </div>
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
      <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-blue-500/50 pl-5 my-5 text-white/90 italic">
    {children}
  </blockquote>
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

export default NonTechnicalFounderMvpPlaybook;
