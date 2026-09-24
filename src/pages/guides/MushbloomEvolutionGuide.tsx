import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Clock, History, Sparkles, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

const PAGE_URL = 'https://mushbloom.uk/wiki/mushbloom-ai-automation-evolution';
const BOOKING_URL = 'https://tidycal.com/adrianniculescu';

const sections = [
  { id: 'foundations', title: '2014–2018: Classical digital marketing foundations' },
  { id: 'from-traffic-to-systems', title: '2018–2021: From traffic to systems' },
  { id: 'automation-no-code-early-ai', title: '2021–2024: Automation, no-code and early AI' },
  { id: 'ai-native-workflow-first', title: '2024–2026: AI-native, workflow-first agency' },
  { id: 'capabilities', title: 'Current Mushbloom capabilities' },
  { id: 'what-hasnt-changed', title: "What hasn't changed since 2014" },
  { id: 'ties-together', title: 'How the current concept ties everything together' },
  { id: 'for-clients-today', title: 'What this means for clients today' },
  { id: 'final-thought', title: 'Final thought: evolution, not reinvention' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'get-started', title: 'Work with Mushbloom' },
];

const faqs = [
  {
    q: 'When did Mushbloom start working with AI?',
    a: 'Mushbloom began as a classical digital marketing agency in 2014. Between 2021 and 2024, early AI use cases such as content generation, lead scoring, email drafting and basic triage became part of client workflows. By 2024, AI had become a core layer of delivery, applied only where it clearly improves a workflow.',
  },
  {
    q: 'What does Mushbloom do today?',
    a: 'Mushbloom is an international AI automation agency for SMEs and owner-run businesses. It designs and implements simple, no-code AI systems that make or save money—focused on outcomes like booked jobs, saved hours, faster follow-up and clearer cash flow, not on technology for its own sake.',
  },
  {
    q: 'Does Mushbloom still offer marketing services?',
    a: 'The marketing foundation remains, but the focus has expanded from traffic and lead volume to the full lead-to-payment workflow: enquiry handling, qualification, booking, delivery, follow-up and payment. Specialist capabilities such as LLM SEO and niche PR distribution continue as supporting services.',
  },
  {
    q: 'What does "workflow-first, tool-second" mean?',
    a: 'Every engagement starts with understanding the actual process—enquiry to quote to booking to delivery to payment. AI and automation are applied only after the workflow is clear, using affordable, proven no-code tools that integrate with what clients already use.',
  },
  {
    q: 'How does a typical Mushbloom engagement start?',
    a: 'Engagements start with a conversation about how the business actually works, not a technology pitch. Mushbloom identifies the workflow where AI can create the clearest value, builds one minimum viable system, proves the value, then scales from there.',
  },
  {
    q: 'What has stayed the same since 2014?',
    a: 'Commercial focus, a commitment to SMEs and owner-run businesses, practical implementation over theory, long-term client relationships, and confidentiality. The tools and labels have changed; the underlying mission—helping smaller businesses grow by improving the systems behind their revenue—has not.',
  },
];

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'From Classical Marketing to AI Automation: How Mushbloom Evolved Since 2014',
    description: 'How Mushbloom evolved from a classical digital marketing agency in 2014 into an international AI automation agency for SMEs and owner-run businesses.',
    image: 'https://mushbloom.uk/og-image.jpg',
    author: { '@type': 'Organization', name: 'Mushbloom Team', url: 'https://mushbloom.uk' },
    publisher: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-09-24T08:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    url: PAGE_URL,
    articleSection: 'About Mushbloom',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    keywords: ['Mushbloom history', 'AI automation agency', 'SME AI automation', 'no-code AI systems', 'workflow automation agency', 'AI agency since 2014'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 3, name: 'Mushbloom Evolution Since 2014', item: PAGE_URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  },
];

const MushbloomEvolutionGuide = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveId(entry.target.id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const title = 'From Classical Marketing to AI Automation: How Mushbloom Evolved Since 2014';
  const description = 'How Mushbloom evolved from a classical digital marketing agency in 2014 into an international AI automation agency for SMEs and owner-run businesses—focused on the workflows that drive revenue, cost and capacity.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>From Marketing to AI Automation: Mushbloom Since 2014</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Mushbloom Team" />
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/wiki" className="hover:text-white transition-colors">Wiki</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-blue-400">Mushbloom Since 2014</span>
          </nav>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <History className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">About Mushbloom</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              How a traditional digital marketing agency became an international AI automation agency for SMEs and owner-run businesses—focused on the workflows that drive revenue, cost and capacity.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min read</span>
              <span>•</span>
              <span>By the Mushbloom Team</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">On this page</p>
                <nav className="space-y-1">
                  {sections.map((section, index) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block py-2 pl-3 border-l-2 text-sm transition-colors ${activeId === section.id ? 'border-blue-400 text-white font-medium' : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'}`}
                    >
                      <span className="text-gray-600 mr-2">{String(index + 1).padStart(2, '0')}</span>{section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-green-400" />
                  <span className="text-xs uppercase tracking-wider text-green-400 font-medium">In short</span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Mushbloom started in 2014 as a classical digital marketing agency: websites, SEO, paid ads, content, funnels and lead generation. Over more than a decade, one question—"Where do our clients actually get stuck, and how can we solve that in the most direct, commercial way possible?"—shifted the agency from marketing campaigns to end-to-end workflows, and finally to simple, no-code AI systems that make or save money for SMEs and owner-run businesses.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/40 pl-6 mb-16 space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>Mushbloom didn't start as an "AI agency". It started as a fairly traditional digital marketing agency in 2014: websites, SEO, paid ads, content, funnels, lead generation.</p>
                <p>This article explains that evolution, what Mushbloom is capable of now, and how the current concept ties everything together.</p>
              </div>

              <Section id="foundations" title="2014–2018: Classical digital marketing foundations">
                <p>In its early years, Mushbloom operated like many other digital agencies:</p>
                <BulletList items={[
                  'Websites and landing pages – design, copy, conversion-focused layouts',
                  'SEO and content – keyword research, on-page optimisation, blog posts, link building',
                  'Paid media – Google Ads, social ads, retargeting',
                  'Funnels and lead generation – lead magnets, email sequences, CRM integrations',
                  'Analytics and reporting – dashboards, tracking, basic attribution',
                ]} />
                <p>This period built core competencies that still matter today:</p>
                <BulletList items={[
                  'Understanding how customers find businesses online',
                  'Designing offers and messages that convert',
                  'Connecting marketing activity to leads, opportunities and revenue',
                  'Working with small and mid-sized businesses across different sectors',
                ]} />
                <p>The focus was largely acquisition: getting more traffic, more leads, more visibility.</p>
              </Section>

              <Section id="from-traffic-to-systems" title="2018–2021: From traffic to systems">
                <p>As clients grew, a pattern emerged:</p>
                <BulletList items={[
                  "More traffic didn't always mean more revenue.",
                  'Leads were generated, but follow-up was slow or inconsistent.',
                  "Marketing worked, but operations couldn't keep up.",
                  'Owners and their teams were drowning in admin: copying data between tools, chasing payments, manually updating spreadsheets and CRMs.',
                ]} />
                <p>Mushbloom's work started to shift:</p>
                <BulletList items={[
                  'From "get more leads" to "make sure you convert and service them properly"',
                  'From isolated campaigns to end-to-end customer journeys',
                  'From purely marketing tools to ops, sales and service workflows',
                ]} />
                <p>This is when the agency began to think in systems, not just channels:</p>
                <BulletList items={[
                  'How does a lead become a booked job?',
                  'Where do deals get stuck?',
                  'What repetitive tasks consume the most time?',
                  'Which processes, if improved, would free up the most capacity?',
                ]} />
                <p>The marketing foundation remained, but the conversation expanded to workflow, process and operational clarity.</p>
              </Section>

              <Section id="automation-no-code-early-ai" title="2021–2024: Automation, no-code and early AI">
                <p>Three major shifts happened in this period:</p>
                <Numbered n={1} title="No-code and low-code tools matured">Platforms like Zapier, Make, GoHighLevel, Airtable and others made it possible to connect tools and automate workflows without heavy development.</Numbered>
                <Numbered n={2} title="Clients asked for simplicity">Most SMEs didn't want another complex platform or a custom-built system they couldn't maintain. They wanted something that worked, quickly, on top of what they already used.</Numbered>
                <Numbered n={3} title="AI moved from experiment to utility">First in copy and content, then in classification, summarisation, drafting and basic decision logic. AI stopped being a "nice to have" and started being a practical component of workflows.</Numbered>
                <p>Mushbloom's capabilities expanded to include:</p>
                <BulletList items={[
                  'Workflow mapping – documenting current processes end to end',
                  'Automation design – deciding what should be manual, rule-based or AI-assisted',
                  'No-code implementation – connecting CRM, email, forms, calendars, messaging apps, finance and ops tools',
                  'Early AI use cases – content generation, lead scoring, email drafting, basic chat and triage',
                ]} />
                <p className="text-white font-medium">"We don't just bring you more leads. We help you run the business behind those leads more effectively."</p>
              </Section>

              <Section id="ai-native-workflow-first" title="2024–2026: AI-native, workflow-first agency">
                <p>By 2024, two things were clear:</p>
                <BulletList items={[
                  'AI was becoming a core layer in business operations, not just a marketing add-on.',
                  'Most AI pitches were too technical for typical SME owners: full of "LLMs", "agents", "stacks" and vague promises.',
                ]} />
                <p>Mushbloom made a deliberate choice:</p>
                <BulletList items={[
                  'Stop leading with technology.',
                  'Start leading with business outcomes: revenue, cost, capacity, cash flow.',
                  'Use AI only where it clearly improves a workflow, not as a selling point in itself.',
                ]} />
                <p className="text-white font-medium">Mushbloom is an international AI automation agency for SMEs and owner-run businesses. We design and implement simple, no-code AI systems that make or save money—focused on outcomes, not technology.</p>
                <p>Key characteristics of this phase:</p>
                <Benefit title="Workflow-first, tool-second">Every engagement starts with understanding the actual process: enquiry → quote → booking → delivery → payment. AI and automation are applied only after the workflow is clear.</Benefit>
                <Benefit title="No-jargon communication">Conversations are about booked jobs, saved hours, faster follow-up and clearer cash flow—not about model types or token counts.</Benefit>
                <Benefit title="Minimum viable solutions">Instead of massive transformations, we build one high-impact system, prove value, then scale. This reduces risk, cost and time to value.</Benefit>
                <Benefit title="Productised and custom options">Through partnerships like Legiit, we offer fixed-scope, fixed-price services (e.g., LinkedIn optimisation, single-workflow AI builds). For larger needs, we run custom projects and retainers.</Benefit>
                <Benefit title="International delivery, agency accountability">UK-based with an international team, operating as a single agency. All work is delivered by Mushbloom, with clear scope, secured payments and guaranteed delivery.</Benefit>
              </Section>

              <Section id="capabilities" title="Current Mushbloom capabilities">
                <p>Today, Mushbloom's capabilities span three layers: strategy, workflow and implementation.</p>
                <h3 className="text-2xl font-semibold text-white font-['Space_Grotesk']">1. Strategy and diagnosis</h3>
                <BulletList items={[
                  'Business and workflow audits – mapping how you currently generate leads, book work, deliver and get paid; identifying bottlenecks and leakage',
                  'Opportunity prioritisation – deciding which workflows to automate first based on impact (revenue, cost, time) and feasibility',
                  'Offer and positioning support – clarifying what you sell, to whom, and how it\'s communicated, so automation supports a clear commercial story',
                ]} />
                <h3 className="text-2xl font-semibold text-white font-['Space_Grotesk']">2. Workflow design</h3>
                <BulletList items={[
                  'Lead-to-payment pipeline design – from first enquiry (website, phone, messaging apps, ads) through qualification, quote, booking, delivery and payment',
                  'Sales and follow-up systems – structured sequences for quotes, proposals, no-shows, reactivation and reviews',
                  'Operations and admin workflows – onboarding, status updates, reminders, payment chases, basic support questions, internal handovers',
                  'Human-in-the-loop design – defining where humans must review or approve, and where full automation is safe and appropriate',
                ]} />
                <h3 className="text-2xl font-semibold text-white font-['Space_Grotesk']">3. Implementation (no-code + AI)</h3>
                <BulletList items={[
                  'Missed-enquiry and call handling – instant responses across channels, qualification questions, booking links, escalations to humans when needed',
                  'Lead qualification and routing – scoring and tagging leads, assigning to the right person or team, triggering tailored follow-up',
                  'Booking and scheduling automation – integrating with calendars and scheduling tools to turn qualified enquiries into booked appointments automatically',
                  'Follow-up sequences – email, SMS and messaging app sequences for quotes, proposals, abandoned carts, no-shows and reactivation',
                  'Content and communication support – AI-assisted drafting of emails, messages, proposals, status updates and basic documentation',
                  'Reporting and visibility – simple dashboards and summaries so owners can see what\'s working: response times, conversion rates, follow-up activity, revenue impact',
                ]} />
                <p>All of this is built on affordable, proven no-code tools and integrated with the platforms clients already use (CRM, marketing, ops, finance, support). Our <Link to="/services/ai-workflows" className="text-blue-400 hover:underline">AI Workflows service</Link> is a productised starting point for exactly this kind of implementation.</p>
              </Section>

              <Section id="what-hasnt-changed" title="What hasn't changed since 2014">
                <p>Despite the shift in positioning, some core principles have remained constant:</p>
                <Benefit title="Commercial focus">Every recommendation is tied to a business outcome: more revenue, lower cost, saved time, better client experience.</Benefit>
                <Benefit title="SME and owner-run business focus">Mushbloom has always worked primarily with smaller, agile businesses where the owner's time and attention are critical constraints.</Benefit>
                <Benefit title="Practical implementation">Ideas are only valuable if they're implemented. The agency has always emphasised execution over theory.</Benefit>
                <Benefit title="Long-term relationships">Many client relationships have evolved over years, from one-off projects to ongoing support and multiple initiatives.</Benefit>
                <Benefit title="Confidentiality and discretion">Much of the work involves sensitive commercial processes, so Mushbloom doesn't publish every project or client publicly.</Benefit>
                <p className="text-white font-medium">The tools and labels have changed. The underlying mission has not: help smaller businesses grow and run more smoothly by improving the systems behind their revenue.</p>
              </Section>

              <Section id="ties-together" title="How the current concept ties everything together">
                <p>The current positioning—AI automation for SMEs and owner-run businesses—is not a departure from Mushbloom's history. It's a consolidation of it. Everything the agency has done since 2014 feeds into this:</p>
                <BulletList items={[
                  'Marketing and conversion expertise – understanding how leads are generated and converted informs how AI systems should capture, qualify and follow up',
                  'Funnel and journey design – experience with customer journeys makes it easier to map and automate real end-to-end workflows',
                  'Data and analytics discipline – tracking and measurement habits ensure AI systems are evaluated on business impact, not just activity',
                  'No-code and automation practice – years of connecting tools and designing workflows mean AI is added where it genuinely helps, not as a gimmick',
                  'Agency delivery model – clear scope, documented processes and handover guidance mean clients get systems they can actually live with',
                ]} />
                <p>The result is a simple story:</p>
                <BulletList items={[
                  "We've been doing this work in different forms since 2014.",
                  'AI and automation are the latest, most powerful expressions of that work.',
                  'We use them conservatively, commercially and in service of real business outcomes.',
                ]} />
              </Section>

              <Section id="for-clients-today" title="What this means for clients today">
                <p>If you engage with Mushbloom now, you can expect:</p>
                <Numbered n={1} title="A workflow-first conversation">We start by understanding how your business actually works, not by pitching a specific technology.</Numbered>
                <Numbered n={2} title="Clear, jargon-free language">Discussions focus on revenue, cost, time and capacity—not on model architectures or technical specs.</Numbered>
                <Numbered n={3} title="One high-impact system at a time">We prioritise the workflow where AI can create the clearest value, implement it, then expand from there.</Numbered>
                <Numbered n={4} title="Flexible engagement models">From productised services via Legiit (e.g., LinkedIn optimisation, single-workflow AI builds) to custom projects and ongoing support.</Numbered>
                <Numbered n={5} title="Agency accountability">All work is delivered by the Mushbloom team, with defined scope, documentation and handover.</Numbered>
                <p>In practical terms, that might look like:</p>
                <BulletList items={[
                  'A missed-enquiry system that answers instantly, qualifies and books appointments 24/7',
                  'A follow-up engine that ensures no quote or lead goes cold',
                  'An admin automation that saves hours every week on reminders, updates and payment chases',
                  'A LinkedIn profile and activity system that consistently supports sales goals',
                ]} />
                <p>All built on simple, affordable tools, integrated with what you already use. See how this works in practice in our guides to <Link to="/guides/ai-workflows" className="text-blue-400 hover:underline">AI workflows for SMBs</Link> and the <Link to="/guides/linkedin-sales-machine" className="text-blue-400 hover:underline">LinkedIn Sales Machine</Link>.</p>
              </Section>

              <Section id="final-thought" title="Final thought: evolution, not reinvention">
                <p>Mushbloom's evolution from a classical digital marketing agency to an AI automation partner isn't a reinvention. It's a natural response to how business has changed:</p>
                <BulletList items={[
                  'More channels, more data, more complexity',
                  'Higher expectations for speed and responsiveness',
                  'Greater need for operational clarity and efficiency',
                ]} />
                <p>AI and automation are simply the latest tools in a long line of methods used to solve the same fundamental problem: how can a smaller business compete effectively, grow sustainably and run without constant fire-fighting?</p>
                <p>The answer today includes AI—but it's still rooted in the same principles Mushbloom started with in 2014:</p>
                <BulletList items={[
                  'Understand the business.',
                  'Find the bottlenecks.',
                  'Design clear systems.',
                  'Implement pragmatically.',
                  'Measure what matters.',
                ]} />
                <p className="text-white font-medium">That's the essence of Mushbloom now, and it's the foundation for everything the agency will build next.</p>
              </Section>

              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                      <summary className="cursor-pointer text-white font-semibold list-none flex justify-between gap-4">
                        {faq.q}<ChevronRight className="h-5 w-5 shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-gray-300 text-base">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </Section>

              <section id="get-started" className="scroll-mt-28 mb-16">
                <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-green-500/10 p-8 md:p-10">
                  <TrendingUp className="h-8 w-8 text-blue-400 mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">Work with Mushbloom</h2>
                  <p className="text-gray-300 mb-6">Start with a free 20-minute audit of your current lead and admin process. We'll identify where time or money is being lost and outline one or two practical opportunities—with indicative costs and timelines.</p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="evolution_guide_audit" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                      Book a free 20-minute audit <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link to="/agency" className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">Explore the agency</Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-6">Prefer a fixed-scope start? See our productised services on <Link to="/partners" className="text-blue-400 hover:underline">our Partners page</Link>, or use the form below.</p>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <div id="contact-form"><Contact /></div>
    </div>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tight">{title}</h2>
    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">{children}</div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 my-4">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-gray-300 text-base">
        <CheckCircle2 className="mt-1 h-4 w-4 text-green-400 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Numbered = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <div className="pl-6 border-l-2 border-gray-800">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-sm font-semibold text-blue-400">{String(n).padStart(2, '0')}</span>
      <h3 className="text-xl font-semibold text-white font-['Space_Grotesk']">{title}</h3>
    </div>
    <p className="text-gray-300 text-base">{children}</p>
  </div>
);

const Benefit = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="pl-5 border-l-2 border-green-500/40">
    <h3 className="text-white font-semibold text-lg font-['Space_Grotesk']">{title}</h3>
    <p className="text-gray-400 text-base">{children}</p>
  </div>
);

export default MushbloomEvolutionGuide;
