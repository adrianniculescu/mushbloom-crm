import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import {
  ArrowRight, CheckCircle, Code, Search, BarChart3, Zap, Globe,
  Sparkles, Rocket, ShieldCheck, FileText, Workflow,
} from 'lucide-react';

const PAGE_URL = 'https://mushbloom.uk/services/lovable-development';
const META_TITLE = 'Lovable Development Agency – Build, SEO & Ship Lovable Sites';
const META_DESCRIPTION = 'Lovable development agency that ships production-ready Lovable websites with proper SEO, analytics, schema, and LLM visibility built in.';

const services = [
  { icon: Code, title: 'Lovable Build & Launch', desc: 'Production-grade Lovable sites: clean component structure, semantic HTML, fast performance, and proper deploy setup.' },
  { icon: Search, title: 'Lovable SEO', desc: 'Per-page titles, meta, canonicals, H1 hierarchy, sitemap, robots, JSON-LD schema — all wired correctly from day one.' },
  { icon: BarChart3, title: 'GA4 & Search Console', desc: 'Analytics, conversion events, and Search Console verification implemented in the Lovable codebase, not bolted on.' },
  { icon: Sparkles, title: 'LLM Visibility (GEO)', desc: 'Structured content, FAQ schema, and answer-shaped pages so ChatGPT, Perplexity, and Google AI Overviews can quote the site.' },
  { icon: Workflow, title: 'Backend & Automations', desc: 'Lovable Cloud / Supabase, edge functions, CMS, lead capture, transactional email — implemented inside the project, not in third-party silos.' },
  { icon: ShieldCheck, title: 'Audit & Rescue', desc: 'Take over an existing Lovable build, fix what is broken (indexing, structure, performance, conversions) and ship it.' },
];

const audiences = [
  'Founders shipping a Lovable MVP',
  'Agencies that need a Lovable implementation partner',
  'SaaS / B2B teams replacing Webflow or WordPress',
  'Operators who want one team for build + SEO + automation',
];

const steps = [
  { n: '01', title: 'Scope & site map', desc: 'Pages, routes, keyword targets, lead flow, and success metrics defined upfront.' },
  { n: '02', title: 'Build in Lovable', desc: 'Clean component architecture, design system, responsive UI, accessible markup.' },
  { n: '03', title: 'SEO & schema', desc: 'Unique meta per page, canonical URLs, JSON-LD, sitemap, robots, internal linking.' },
  { n: '04', title: 'Analytics & indexing', desc: 'GA4 events, Search Console + Bing Webmaster verification, conversion tracking.' },
  { n: '05', title: 'LLM optimization', desc: 'TL;DR blocks, FAQ schema, answer-shaped content so the site gets cited by AI.' },
  { n: '06', title: 'Ship & iterate', desc: 'Custom domain, monitoring, and a clear backlog of fixes and content to compound rankings.' },
];

const relatedReads = [
  { href: '/wiki/ga4-search-console-setup-lovable', label: 'Add GA4 and Search Console to a Lovable site' },
  { href: '/wiki/bing-webmaster-tools-setup', label: 'Set up Bing Webmaster Tools in 2026' },
  { href: '/wiki/submit-sitemap-bing-google-guide', label: 'Submit a sitemap to Bing and Google' },
  { href: '/wiki/fix-h1-tag-missing-bing-webmaster-tools', label: 'Fix "H1 tag missing" in Bing Webmaster Tools' },
  { href: '/wiki/get-cited-chatgpt-perplexity-llm-platforms', label: 'Get cited in ChatGPT and Perplexity' },
  { href: '/llmboost', label: 'LLM SEO Agency service' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mushbloom — Lovable Development Agency',
  url: PAGE_URL,
  description: META_DESCRIPTION,
  areaServed: 'Global',
  serviceType: ['Lovable Development', 'Web Development', 'Technical SEO', 'LLM SEO', 'Analytics Setup'],
  provider: {
    '@type': 'Organization',
    name: 'Mushbloom',
    url: 'https://mushbloom.uk',
    email: 'office@mushbloom.co.uk',
    telephone: '+40725388605',
    logo: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png',
  },
};

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://mushbloom.uk/agency' },
    { '@type': 'ListItem', position: 3, name: 'Lovable Development', item: PAGE_URL },
  ],
};

const faq = [
  { q: 'What is a Lovable development agency?', a: 'A team that builds production websites and apps on the Lovable platform — handling architecture, SEO, analytics, schema, backend, and deployment so the project ships as a real business asset, not just a prototype.' },
  { q: 'Do you only build new Lovable sites or do you also fix existing ones?', a: 'Both. We take over existing Lovable projects with broken SEO, indexing, conversion tracking, or structure and turn them into clean, ranking-ready sites.' },
  { q: 'How is this different from a generic web agency?', a: 'We work inside Lovable, not around it. Every SEO, analytics, schema, and LLM visibility decision is implemented in the codebase so it survives future edits.' },
  { q: 'How long does a Lovable build take?', a: 'A focused site goes live in 3–30 days. Larger builds with backend, CMS, automations, and content scale up from there.' },
  { q: 'Do you handle SEO and LLM visibility after launch?', a: 'Yes. We ship with proper schema, sitemaps, GA4, Search Console, and Bing Webmaster Tools configured, and we offer ongoing LLM SEO and content work to compound rankings.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const LovableDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{META_TITLE} | Mushbloom</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content="Lovable development agency, Lovable expert, Lovable developer, Lovable SEO, Lovable website agency, Lovable build" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
            <Rocket className="h-3 w-3" /> Lovable Development Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">
            Lovable Development Agency that ships{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              real businesses, not prototypes
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
            We build, optimize, and ship{' '}
            <a
              href="https://lovable.dev/invite/DW2DAYV"
              target="_blank"
              rel="noopener sponsored"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
            >
              Lovable
            </a>{' '}
            websites with proper SEO, analytics, schema, and LLM visibility wired in from day one — so the site actually ranks, tracks, and converts after launch.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="lovable_dev_hero"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book a Free Call <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/portfolio/websites"
              className="border border-white/15 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              See Lovable Builds
            </Link>
            <a
              href="https://lovable.dev/invite/DW2DAYV"
              target="_blank"
              rel="noopener sponsored"
              className="border border-blue-400/40 text-blue-300 hover:text-blue-200 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              Try Lovable
            </a>
          </div>
        </section>

        {/* What we do */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">What we build inside Lovable</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Build, SEO, analytics, and LLM visibility — all implemented in the Lovable codebase, not bolted on with third-party tools.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg inline-flex mb-4">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-6">Who hires us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {audiences.map((a) => (
              <div key={a} className="glass-effect border border-white/10 rounded-xl px-5 py-4 inline-flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What makes it different */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">Why a Lovable specialist matters</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Most agencies treat Lovable like a prototyping toy. We treat it like a production platform: semantic HTML, proper H1 hierarchy, JSON-LD schema, canonical URLs, sitemap, GA4 events, and edge functions — all implemented inside the project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The result is a Lovable site that Google, Bing, ChatGPT, and Perplexity can actually understand and recommend.
            </p>
          </div>
        </section>

        {/* Process */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">Our Lovable build process</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A repeatable six-step process so every engagement ships ranking-ready, not just visually finished.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {steps.map((s) => (
              <div key={s.n} className="glass-effect rounded-2xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 font-bold text-lg font-['Space_Grotesk'] mt-0.5">{s.n}</div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1 font-['Space_Grotesk']">{s.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust signals */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { stat: '3–30 days', label: 'from kickoff to live, SEO-ready Lovable site' },
              { stat: '100%', label: 'in-Lovable implementation — SEO, schema, GA4, automations' },
              { stat: '1 partner', label: 'build, SEO, analytics, and LLM visibility — one team' },
            ].map((t) => (
              <div key={t.label} className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-['Space_Grotesk'] mb-2">{t.stat}</div>
                <div className="text-gray-400 text-sm">{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="glass-effect rounded-2xl p-6 border border-white/10">
                <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{f.q}</h3>
                <p className="text-gray-300 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related reads */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-8">Related reads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedReads.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="glass-effect rounded-xl p-5 border border-white/10 hover:border-blue-500/30 transition-colors flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span className="text-white font-medium">{r.label}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
              Ship a Lovable site that actually ranks
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Book a free call and we will scope your Lovable build (or rescue) with a clear plan for SEO, analytics, and LLM visibility from day one.
            </p>
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="lovable_dev_footer"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book a Free Call <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default LovableDevelopmentPage;
