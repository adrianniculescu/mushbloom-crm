import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import {
  ArrowRight, Workflow, Target, Layers, TrendingUp,
  FileText, CheckCircle, ShieldCheck, Users,
} from 'lucide-react';

const PAGE_URL = 'https://mushbloom.uk/services/ai-workflows';
const LEGIIT_URL = 'https://legiit.com/mushbloom/ai-workflows-to-save-time-and-grow-revenue';
const META_TITLE = 'AI Workflows to Save Time and Grow Revenue';
const META_DESCRIPTION = 'A focused service to identify, design and implement one high-value AI workflow inside your existing tools, for small and mid-sized businesses. Delivered via Legiit.';

const deliverables = [
  { icon: Target, title: 'One high-impact workflow, implemented', desc: 'We identify the single workflow where AI can create the clearest business value—lead capture, follow-up, onboarding, reporting, content, or operations—and implement it end to end.' },
  { icon: Layers, title: 'Built inside your existing stack', desc: "We work with the tools you already use (CRM, marketing, ops, finance, support, etc.) so you don't need another disconnected platform or complex new subscription." },
  { icon: TrendingUp, title: 'Clear time savings and revenue impact', desc: 'The goal is measurable: hours saved per week, faster response times, more qualified opportunities, or improved client experience—tied to a real business metric.' },
  { icon: FileText, title: 'Documentation and handover', desc: 'You receive a documented workflow, operating guidance and a clear handover so your team can run and extend the system independently.' },
];

const audiences = [
  'Established small and mid-sized businesses with clear commercial goals',
  'Teams already using tools like GoHighLevel, HubSpot, Monday, Notion, QuickBooks, Excel, or similar',
  'Leaders who want practical AI that supports revenue, operations or client experience—not experiments',
  'Businesses that value clear process, documentation and human oversight over "magic button" promises',
];

const steps = [
  { n: '01', title: 'AI Workflow Assessment (30–45 min)', desc: 'We clarify your business model, current workflows and priorities, then identify the workflow where AI can create the clearest business value.' },
  { n: '02', title: 'Workflow design', desc: 'We map the chosen workflow step by step inside your existing tools, agree the business metric it should move, and define where human review stays in the loop.' },
  { n: '03', title: 'Implementation', desc: 'We build and test the workflow end to end in your stack, so it runs on real data rather than as a demo.' },
  { n: '04', title: 'Documentation & handover', desc: 'You receive the documented workflow and operating guidance, and we walk your team through running and extending it independently.' },
];

const differentiators = [
  { title: 'Business value first', desc: 'We start from a commercial goal—time saved, faster response, more qualified opportunities—not from a tool.' },
  { title: 'Your stack, not another platform', desc: 'The workflow lives inside the tools your team already uses every day.' },
  { title: 'Human oversight built in', desc: 'Clear process and documentation instead of "magic button" promises.' },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: META_TITLE,
  serviceType: 'AI Workflow Automation for SMBs',
  url: PAGE_URL,
  description: META_DESCRIPTION,
  areaServed: 'Global',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Mushbloom',
    url: 'https://mushbloom.uk',
    email: 'office@mushbloom.co.uk',
    telephone: '+40725388605',
    logo: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png',
  },
  offers: {
    '@type': 'Offer',
    url: LEGIIT_URL,
    availability: 'https://schema.org/InStock',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mushbloom.uk/agency' },
    { '@type': 'ListItem', position: 3, name: 'AI Workflows', item: PAGE_URL },
  ],
};

const LegiitButton = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <a
    href={LEGIIT_URL}
    target="_blank"
    rel="noopener noreferrer"
    data-cta={id}
    className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
  >
    {children} <ArrowRight className="h-5 w-5" />
  </a>
);

const AiWorkflowsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{META_TITLE} | Mushbloom</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content="AI workflow automation, AI for small business, business process automation, AI implementation service, HubSpot AI workflow, GoHighLevel automation" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={`${META_TITLE} | Mushbloom`} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
            <Workflow className="h-3 w-3" /> AI Workflows
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">
            AI Workflows to Save Time and{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Grow Revenue
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
            A focused service to identify, design and implement one high-value AI workflow inside your existing tools—so your team spends less time on repetitive work and more time on revenue.
          </p>
          <div className="flex flex-wrap gap-4">
            <LegiitButton id="ai_workflows_hero">Get the service on Legiit</LegiitButton>
            <a
              href="#how-it-works"
              className="border border-white/15 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              See how it works
            </a>
          </div>
        </section>

        {/* What this service delivers */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-10">
            What this service delivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {deliverables.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg inline-flex mb-4">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{d.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who this is for */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-10">Who this is for</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audiences.map((a) => (
              <li key={a} className="flex items-start gap-3 glass-effect rounded-xl p-5 border border-white/10">
                <Users className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                <span className="text-gray-300 leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-10">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="glass-effect rounded-2xl p-6 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-['Space_Grotesk'] mb-3">
                  {s.n}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What makes this different */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-10">
            What makes this different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {differentiators.map((d) => (
              <div key={d.title} className="glass-effect rounded-2xl p-6 border border-white/10">
                <CheckCircle className="h-5 w-5 text-green-400 mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{d.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proof & credibility */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-6">Proof &amp; credibility</h2>
          <div className="glass-effect rounded-2xl p-8 border border-white/10">
            <ShieldCheck className="h-6 w-6 text-blue-400 mb-4" />
            <p className="text-gray-300 leading-relaxed">
              Mushbloom has supported businesses with digital marketing, conversion strategy, sales funnels, lead
              generation, startup messaging, content systems and AI-assisted workflows since 2014. Much of this work
              involves confidential commercial processes and internal operations, so we do not publish every project or
              client comment publicly. This AI Workflows service is offered through Legiit as a focused,
              productised engagement.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              All work is delivered with clear documentation, example copy and practical guidance so you can continue
              using the system independently.
            </p>
          </div>
        </section>

        {/* CTA / purchase */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-2xl p-10 border border-blue-500/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
              Ready to put AI to work in your business?
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              If you want one practical AI workflow that saves your team time and supports revenue, this service gives
              you an assessment, an implemented workflow and a documented handover—delivered through Legiit.
            </p>
            <div className="flex justify-center">
              <LegiitButton id="ai_workflows_footer_cta">Get the service on Legiit</LegiitButton>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              You’ll be taken to Legiit to review the full scope, pricing and ordering details.
            </p>
          </div>
        </section>

        <div id="contact-form">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default AiWorkflowsPage;
