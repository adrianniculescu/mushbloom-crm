import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import {
  ArrowRight, Linkedin, Target, Users, MessageSquare,
  Handshake, CheckCircle, ShieldCheck, TrendingUp,
} from 'lucide-react';

const PAGE_URL = 'https://mushbloom.uk/services/linkedin-sales-machine';
const LEGIIT_URL = 'https://legiit.com/mushbloom/turn-your-linkedin-into-a-sales-machine';
const META_TITLE = 'Turn Your LinkedIn Into a Sales Machine';
const META_DESCRIPTION = 'A focused service to optimise your LinkedIn profile and activity so it consistently attracts and converts your ideal B2B buyers. Delivered via Legiit.';

const deliverables = [
  {
    icon: Target,
    title: 'Profile that sells',
    desc: 'We turn your LinkedIn profile from a static CV into a clear, buyer-focused sales asset. Your headline, About section and Featured area will speak directly to your ideal client and guide them to a next step.',
  },
  {
    icon: MessageSquare,
    title: 'Clear positioning and offer',
    desc: 'We clarify who you help, what outcome you deliver and how you do it, then express that in simple, business language across your profile and content.',
  },
  {
    icon: TrendingUp,
    title: 'Activity that generates leads',
    desc: 'We outline a practical LinkedIn activity plan: who to connect with, how to engage, and how to turn conversations into booked calls or opportunities—without sounding spammy.',
  },
  {
    icon: Handshake,
    title: 'Done-with-you implementation',
    desc: 'You keep full ownership of your account. We guide the changes, provide copy and structure, and help you implement so your profile and routine actually reflect the strategy.',
  },
];

const audiences = [
  'Founders, consultants and B2B service providers who rely on LinkedIn for visibility and leads',
  'Sales professionals who want a repeatable, ethical LinkedIn prospecting routine',
  'Businesses that already sell to other businesses and want LinkedIn to work as a consistent pipeline channel',
  'People who prefer practical, business-first advice over generic "post more" tips',
];

const steps = [
  {
    n: '01',
    title: 'Assessment',
    desc: 'We review your current LinkedIn profile, target market and offer. We identify the biggest gaps between how buyers see you and how you want to be seen.',
  },
  {
    n: '02',
    title: 'Profile & positioning overhaul',
    desc: 'We rewrite and restructure your headline, About section and Featured area so they clearly state who you help, what outcome you deliver and what to do next.',
  },
  {
    n: '03',
    title: 'LinkedIn activity plan',
    desc: 'We define a simple, sustainable routine for connections, engagement and content that supports your sales goals without overwhelming your schedule.',
  },
  {
    n: '04',
    title: 'Implementation support',
    desc: 'We guide you through applying the changes, provide example posts and messages, and help you set up a basic tracking rhythm so you can see what’s working.',
  },
];

const differentiators = [
  {
    title: 'Business-first, not vanity metrics',
    desc: 'The focus is on qualified conversations and opportunities, not just impressions or followers.',
  },
  {
    title: 'Buyer-centric profile design',
    desc: 'Every section is written from the buyer’s perspective, not as a traditional CV.',
  },
  {
    title: 'Practical, sustainable routine',
    desc: 'We design an activity plan you can actually maintain alongside running your business or hitting sales targets.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Turn Your LinkedIn Into a Sales Machine',
  serviceType: 'LinkedIn Profile Optimisation & B2B Lead Generation',
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
    { '@type': 'ListItem', position: 3, name: 'LinkedIn Sales Machine', item: PAGE_URL },
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

const LinkedInSalesMachinePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{META_TITLE} | Mushbloom</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content="LinkedIn lead generation, LinkedIn profile optimisation, B2B social selling, LinkedIn sales machine, LinkedIn for founders" />
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
            <Linkedin className="h-3 w-3" /> LinkedIn Sales Machine
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">
            Turn Your LinkedIn Into a{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Sales Machine
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
            A focused service to optimise your LinkedIn profile and activity so it consistently attracts and converts your ideal B2B buyers.
          </p>
          <div className="flex flex-wrap gap-4">
            <LegiitButton id="linkedin_hero">Get the service on Legiit</LegiitButton>
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
              client comment publicly. This LinkedIn Sales Machine service is offered through Legiit as a focused,
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
              Ready to turn LinkedIn into a sales channel?
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8">
              If you want a LinkedIn profile and routine that consistently supports your sales goals, this service gives
              you a clear strategy, rewritten profile sections and an actionable plan—delivered through Legiit.
            </p>
            <div className="flex justify-center">
              <LegiitButton id="linkedin_footer_cta">Get the service on Legiit</LegiitButton>
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

export default LinkedInSalesMachinePage;
