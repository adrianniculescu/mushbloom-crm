import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { ArrowRight, ChevronRight, BookOpen, Clock, Sparkles, Workflow } from 'lucide-react';

const LEGIIT_URL = 'https://legiit.com/mushbloom/ai-workflows-to-save-time-and-grow-revenue';
const SERVICE_PATH = '/services/ai-workflows';

const sections = [
  { id: 'what-is', title: 'What is an AI workflow?' },
  { id: 'value', title: 'Where AI workflows create real value' },
  { id: 'first-workflow', title: 'How to choose your first AI workflow' },
  { id: 'well-designed', title: 'What a well-designed AI workflow looks like' },
  { id: 'mistakes', title: 'Common mistakes with AI workflows' },
  { id: 'mushbloom', title: 'How Mushbloom implements this' },
  { id: 'final-thought', title: 'Start with one workflow' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'get-started', title: 'How to get started' },
];

const AiWorkflowsGuide = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const url = 'https://mushbloom.uk/guides/ai-workflows';
  const title = 'AI Workflows to Save Time and Grow Revenue: A Practical Guide for SMBs';
  const seoTitle = 'AI Workflows to Save Time and Grow Revenue: A Practical Guide for SMBs';
  const description =
    'A practical guide for small and mid-sized businesses: what AI workflows are, where they create real value, how to choose the right first workflow to automate, and how to implement it inside your existing tools.';

  const faqs = [
    { q: 'What is an AI workflow?', a: 'A specific, repeatable process where a trigger starts the workflow (a form submission, email, ticket or scheduled time), AI performs one or more steps (classify, summarise, draft, enrich, decide based on rules), the result is written back to your tools (CRM, spreadsheet, project board, email), and humans stay in control of key decisions and exceptions.' },
    { q: 'Where do AI workflows create the most value in a small business?', a: 'The best candidates happen frequently, follow consistent steps, involve low to medium judgment, and cause delays or errors when done manually. Common high-impact areas are lead capture and follow-up, sales and CRM hygiene, onboarding and client operations, support and customer success, and content and marketing operations.' },
    { q: 'How do I choose the first workflow to automate with AI?', a: 'List your top 10 recurring tasks that feel repetitive. For each, note frequency, average time per instance, and how much judgment is required. Highlight tasks that are frequent, time-consuming and low/medium judgment, then pick the one most closely tied to revenue or client experience.' },
    { q: 'What does a well-designed AI workflow include?', a: 'Clear ownership, documented steps (trigger, steps and outcomes), human approval points, error handling for when AI is unsure or data is missing, and metrics such as time saved, conversion rate, response time or error rate. The workflow design is primary; the tool is secondary.' },
    { q: 'What are the most common mistakes with AI workflows?', a: 'Automating a broken process, letting AI act with no human oversight, trying to automate an entire end-to-end process in the first version, ignoring change management with your team, and never measuring whether the workflow actually saves time or improves outcomes.' },
    { q: 'Can someone implement an AI workflow for my business?', a: 'Yes. Mushbloom’s “AI Workflows to Save Time and Grow Revenue” service covers a 30–45 minute assessment, an optional workflow blueprint, the build inside your existing tools, and handover documentation. You keep full ownership of your accounts and data; the work is delivered as a focused, productised engagement via Legiit.' },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      alternativeHeadline: seoTitle,
      description,
      image: 'https://mushbloom.uk/og-image.jpg',
      author: { '@type': 'Organization', name: 'Mushbloom Team', url: 'https://mushbloom.uk' },
      publisher: { '@type': 'Organization', name: 'Mushbloom', logo: { '@type': 'ImageObject', url: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png' } },
      datePublished: '2026-09-24T09:00:00+00:00',
      dateModified: '2026-09-24T09:00:00+00:00',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      articleSection: 'AI & Automation',
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      keywords: ['AI workflows', 'AI workflow automation', 'AI for small business', 'business process automation', 'AI implementation for SMBs', 'automate lead follow-up', 'CRM automation with AI'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

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
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
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
            <span className="text-blue-400">Guide</span>
          </nav>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">AI &amp; Automation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              Most small and mid-sized businesses don’t have an AI problem. They have a workflow problem. Here’s how to
              fix it — one well-designed workflow at a time.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>9 min read</span></div>
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
                    <a key={s.id} href={`#${s.id}`}
                      className={`block py-2 pl-3 border-l-2 text-sm transition-colors ${activeId === s.id ? 'border-blue-400 text-white font-medium' : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'}`}>
                      <span className="text-gray-600 mr-2">{String(i + 1).padStart(2, '0')}</span>{s.title}
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
                  An AI workflow is a clear, automated sequence where AI handles specific steps in a business process —
                  classifying a lead, drafting a response, updating a CRM, generating a report — while humans stay in
                  control of key decisions. The best first workflows happen frequently, follow consistent steps,
                  involve low to medium judgment, and cause delays or errors when done manually. Start with one
                  workflow tied to revenue or client experience, design it with clear ownership, human approval points
                  and metrics, prove the value, then repeat.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/40 pl-6 mb-16 space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>Teams are stuck copying data between tools, chasing the same types of requests, writing similar emails over and over, and losing hours every week to repetitive tasks. AI doesn’t fix that by itself. But AI workflows can.</p>
                <p>This guide explains what AI workflows are (and what they’re not), where they actually create value in SMBs, how to choose the right first workflow to automate, and how Mushbloom’s <Link to={SERVICE_PATH} className="text-blue-400 hover:underline">AI Workflows to Save Time and Grow Revenue</Link> service implements this for you.</p>
              </div>

              <Section id="what-is" title="What is an AI workflow?">
                <p>An AI workflow is not a chatbot you embed on your site. It’s not a vague promise to “use AI more”. It’s a specific, repeatable process where:</p>
                <BulletList items={[
                  'A trigger starts the workflow (new form submission, email, ticket, scheduled time, etc.)',
                  'AI performs one or more steps (classify, summarise, draft, enrich, decide based on rules)',
                  'The result is written back to your tools (CRM, spreadsheet, project board, email, messaging app)',
                  'Humans stay in control of key decisions and exceptions',
                ]} />
                <p>Example:</p>
                <BulletList items={[
                  'A lead fills in a form',
                  'AI scores and tags the lead based on your criteria',
                  'The lead is added to your CRM with notes',
                  'A personalised follow-up email is drafted and sent (or queued for review)',
                  'A task is created for a sales rep if the lead meets certain conditions',
                ]} />
                <p className="text-white font-medium">That’s an AI workflow: clear trigger, defined steps, measurable outcome.</p>
              </Section>

              <Section id="value" title="Where AI workflows create real value in SMBs">
                <p>The best candidates for AI workflows share a few traits:</p>
                <BulletList items={[
                  'They happen frequently (daily or weekly)',
                  'They follow consistent steps',
                  'They involve low to medium judgment',
                  'They cause delays or errors when done manually',
                ]} />
                <p>Common high-impact areas:</p>
                <Numbered n={1} title="Lead capture and follow-up">New inquiries from forms, ads or social channels; AI classifies intent, fits to your ideal customer profile and routes to the right person; automated, personalised follow-up messages are sent within minutes instead of hours or days. Impact: faster response times, higher conversion rates, fewer leads falling through the cracks.</Numbered>
                <Numbered n={2} title="Sales and CRM hygiene">Calls and meetings logged automatically; AI summarises call notes and extracts action items; CRM fields are updated without manual data entry. Impact: cleaner pipeline data, more accurate forecasting, less admin for sales reps.</Numbered>
                <Numbered n={3} title="Onboarding and client operations">New client information collected via forms or emails; AI generates onboarding documents, checklists and initial plans; tasks and projects are created in your ops tool automatically. Impact: faster time-to-value for clients, fewer missed steps, smoother internal handovers.</Numbered>
                <Numbered n={4} title="Support and customer success">Incoming requests classified by topic and urgency; AI drafts responses or suggests solutions from your knowledge base; complex cases are escalated to humans with full context. Impact: faster resolution times, more consistent answers, better client experience.</Numbered>
                <Numbered n={5} title="Content and marketing operations">Blog posts or core content repurposed into social posts, emails and short updates; AI generates first drafts, variations and summaries for review; publishing schedules and task boards are updated automatically. Impact: more consistent content output with less manual effort.</Numbered>
              </Section>

              <Section id="first-workflow" title="How to choose your first AI workflow">
                <p>Don’t try to automate everything at once. Start with one workflow that:</p>
                <BulletList items={[
                  'Wastes a lot of time or causes frequent frustration',
                  'Has a clear trigger and outcome',
                  'Is low-risk if something needs correction later',
                ]} />
                <p>A simple way to prioritise:</p>
                <Numbered n={1} title="List">List your top 10 recurring tasks that feel repetitive.</Numbered>
                <Numbered n={2} title="Note">For each, note: frequency, average time per instance, and how much judgment is required.</Numbered>
                <Numbered n={3} title="Highlight">Highlight tasks that are frequent, time-consuming and low/medium judgment.</Numbered>
                <Numbered n={4} title="Pick">Pick the one most closely tied to revenue or client experience.</Numbered>
                <p className="text-white font-medium">That’s your first AI workflow.</p>
              </Section>

              <Section id="well-designed" title="What a well-designed AI workflow looks like">
                <p>A strong AI workflow has:</p>
                <BulletList items={[
                  'Clear ownership: Someone is responsible for the workflow and its results.',
                  'Documented steps: A simple diagram or written description of trigger, steps and outcomes.',
                  'Human approval points: Places where a person reviews or approves before something goes out or changes state.',
                  'Error handling: What happens if AI is unsure, or if data is missing or inconsistent.',
                  'Metrics: How you’ll know it’s working (time saved, conversion rate, response time, error rate, etc.)',
                ]} />
                <p>This is where many AI projects fail: they focus on the tool, not the process. The tool is secondary. The workflow design is primary.</p>
              </Section>

              <Section id="mistakes" title="Common mistakes with AI workflows">
                {[
                  ['Automating a broken process', 'If the manual workflow is unclear or dysfunctional, automating it just creates faster chaos.'],
                  ['No human oversight', 'Letting AI act without any review or exception handling leads to embarrassing errors and lost trust.'],
                  ['Too much scope in the first version', 'Trying to automate an entire end-to-end process in one go. Start small, prove value, then expand.'],
                  ['Ignoring change management', 'Not explaining to the team why this exists, how to use it, or what to do when something looks wrong.'],
                  ['No measurement', 'Implementing a workflow and never checking whether it actually saves time or improves outcomes.'],
                ].map(([t, d]) => (
                  <div key={t} className="pl-5 border-l-2 border-red-500/40">
                    <h3 className="text-white font-semibold text-lg font-['Space_Grotesk']">{t}</h3>
                    <p className="text-gray-400 text-base">{d}</p>
                  </div>
                ))}
                <p>Good AI workflow design anticipates these risks and builds in guardrails from the start.</p>
              </Section>

              <Section id="mushbloom" title="How Mushbloom implements this: “AI Workflows to Save Time and Grow Revenue”">
                <p>Mushbloom’s <Link to={SERVICE_PATH} className="text-blue-400 hover:underline">AI Workflows to Save Time and Grow Revenue</Link> service takes this entire approach and implements it with you, step by step.</p>
                <Numbered n={1} title="AI Workflow Assessment (30–45 min)">We clarify your business model, current workflows and priorities, then identify the highest-value AI opportunity and outline scope, timeline and investment.</Numbered>
                <Numbered n={2} title="Workflow Blueprint (optional)">For selected opportunities, we map the current process, define the AI-enhanced workflow, specify tools and integrations, and document approval points and operating rules.</Numbered>
                <Numbered n={3} title="Workflow Build & Handover">We configure the workflow in your existing stack, test it with real scenarios, and provide clear handover documentation and guidance.</Numbered>
                <Numbered n={4} title="Iterate as You Grow">As your business evolves, we refine and extend workflows to new processes, teams or markets.</Numbered>
                <p>You keep full ownership of your accounts and data. The work is delivered as a focused, productised engagement via Legiit.</p>
                <p className="text-white font-medium">Who this is for:</p>
                <BulletList items={[
                  'Established small and mid-sized businesses with clear commercial goals',
                  'Teams already using tools like GoHighLevel, HubSpot, Monday, Notion, QuickBooks, Excel, or similar',
                  'Leaders who want practical AI that supports revenue, operations or client experience—not experiments',
                  'Businesses that value clear process, documentation and human oversight over “magic button” promises',
                ]} />
                <p>If you’d rather have one concrete workflow that saves time and grows revenue than another theoretical AI discussion, this is built for you.</p>
              </Section>

              <Section id="final-thought" title="Final thought: start with one workflow, not a grand “AI strategy”">
                <p>You don’t need a 50-page AI roadmap. You need one workflow that:</p>
                <BulletList items={[
                  'Saves measurable time',
                  'Reduces errors or delays',
                  'Improves a key metric (response time, conversion, onboarding speed, etc.)',
                ]} />
                <p>Do that well, document it, and then repeat. Over time, those individual workflows become a real AI operating system for your business: less busywork, more capacity, and more focus on the work that actually grows revenue.</p>
                <p>If you want help choosing and implementing that first workflow, the <Link to={SERVICE_PATH} className="text-blue-400 hover:underline">AI Workflows to Save Time and Grow Revenue</Link> service is the fastest path: a focused engagement that moves from assessment to a live, documented workflow inside your existing tools.</p>
              </Section>

              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-4">
                  {faqs.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                      <summary className="cursor-pointer text-white font-semibold list-none flex justify-between gap-4">
                        {f.q}<ChevronRight className="h-5 w-5 shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-gray-300 text-base">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Section>

              <section id="get-started" className="scroll-mt-28 mb-16">
                <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-green-500/10 p-8 md:p-10">
                  <Workflow className="h-8 w-8 text-blue-400 mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">How to get started</h2>
                  <p className="text-gray-300 mb-6">If you’d like a done-with-you implementation of a high-impact AI workflow, you can use Mushbloom’s dedicated service on Legiit. On the service page you’ll find what the service delivers, how the process works, who it’s designed for, and direct links to order via Legiit.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={LEGIIT_URL} target="_blank" rel="noopener noreferrer" data-cta="ai_workflows_guide_legiit"
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                      Get the service on Legiit <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link to={SERVICE_PATH} data-cta="ai_workflows_guide_service"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                      See full service details
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-6">Prefer to talk first? <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Book a call</a> or use the form below.</p>
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
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex-shrink-0" />
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

export default AiWorkflowsGuide;
