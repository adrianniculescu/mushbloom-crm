import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import {
  ArrowRight, CheckCircle, Bot, Search, BarChart3, Zap, Workflow,
  Globe, Sparkles, Target, Users, Settings, FileText, TrendingUp
} from 'lucide-react';

const PAGE_URL = 'https://mushbloom.uk/agency';
const META_TITLE = 'AI Automation Agency for Founders, Operators, and Growing Teams';
const META_DESCRIPTION = 'Mushbloom builds AI automation, LLM SEO, analytics, and search visibility systems for founders, operators, and growing businesses.';

const services = [
  { icon: Bot, title: 'AI Automation', desc: 'Custom agents and workflows that remove repetitive work across sales, ops, and content.' },
  { icon: Search, title: 'LLM SEO', desc: 'Optimize for ChatGPT, Perplexity, Google AI Overviews, and traditional search at the same time.' },
  { icon: Globe, title: 'Search Indexing', desc: 'Proper sitemap, canonical, and crawl setup so the site is actually discoverable.' },
  { icon: BarChart3, title: 'Analytics Setup', desc: 'GA4, Search Console, and event tracking wired to real business decisions, not vanity metrics.' },
  { icon: Workflow, title: 'Lead-Gen Workflows', desc: 'Forms, routing, enrichment, and follow-up that turn traffic into qualified conversations.' },
  { icon: Zap, title: 'Website Optimization', desc: 'Structure, speed, and conversion fixes on the actual site — not slide decks.' },
];

const audiences = [
  { icon: Sparkles, label: 'Founders' },
  { icon: Users, label: 'Agencies' },
  { icon: Target, label: 'B2B service businesses' },
  { icon: Settings, label: 'Operators' },
  { icon: TrendingUp, label: 'Small teams that need leverage' },
];

const steps = [
  { n: '01', title: 'Audit the site', desc: 'Map technical issues, content gaps, indexing problems, and tracking blind spots.' },
  { n: '02', title: 'Fix technical issues', desc: 'Headings, schema, canonicals, sitemaps, page structure, performance.' },
  { n: '03', title: 'Set up tracking', desc: 'GA4, Search Console, conversion events, and dashboards that match how you sell.' },
  { n: '04', title: 'Improve discoverability', desc: 'LLM SEO and traditional search work together, not in conflict.' },
  { n: '05', title: 'Publish useful content', desc: 'Answer-shaped pages, topical clusters, and resources that get cited by AI platforms.' },
  { n: '06', title: 'Build repeatable systems', desc: 'Automations, templates, and SOPs so the work compounds instead of resetting every quarter.' },
];

const relatedReads = [
  { href: '/wiki/bing-webmaster-tools-setup', label: 'Bing Webmaster Tools setup' },
  { href: '/wiki/submit-sitemap-bing-google-guide', label: 'Submitting sitemaps to Bing and Google' },
  { href: '/wiki/ga4-search-console-setup-lovable', label: 'Adding GA4 and Search Console to a Lovable site' },
  { href: '/wiki/get-cited-chatgpt-perplexity-llm-platforms', label: 'How to get cited in ChatGPT and Perplexity' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Mushbloom',
  url: PAGE_URL,
  description: META_DESCRIPTION,
  areaServed: 'Global',
  serviceType: ['AI Automation', 'LLM SEO', 'Search Visibility', 'Analytics Setup', 'Lead Generation'],
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
    { '@type': 'ListItem', position: 2, name: 'AI Automation Agency', item: PAGE_URL },
  ],
};

const AiAutomationAgencyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{META_TITLE} | Mushbloom</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content="AI automation agency, LLM SEO agency, AI automation for founders, search visibility for businesses" />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title" content={META_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
            <Sparkles className="h-3 w-3" /> AI Automation Agency
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">
            AI Automation Agency for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Founders, Operators, and Growing Teams
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">
            Mushbloom helps founders and teams build systems that save time, improve visibility, and create more reliable growth. Not generic “AI for everything.” Practical automation, search visibility, and implementation.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="agency_hero"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Book a Free Call <ArrowRight className="h-5 w-5" />
            </a>
            <Link
              to="/wiki"
              className="border border-white/15 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              Browse Knowledge Hub
            </Link>
          </div>
        </section>

        {/* What we do */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">What we do</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Six disciplines, one integrated system. Each one is implemented on your actual site and stack.</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">Who it is for</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">If you sell something real and need leverage, this fits.</p>
          <div className="flex flex-wrap gap-3">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.label} className="glass-effect border border-white/10 rounded-full px-5 py-3 inline-flex items-center gap-2">
                  <Icon className="h-4 w-4 text-green-400" />
                  <span className="text-gray-200 text-sm font-medium">{a.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* What makes it different */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">What makes it different</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              This is not just strategy or content. It is implementation. We work on the actual site, the actual tracking, the actual indexing, and the actual outputs.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Most businesses do not need more tools. They need systems that work together: site structure, analytics, search visibility, content, and automation — connected, not siloed.
            </p>
          </div>
        </section>

        {/* How we approach projects */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">How we approach projects</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A repeatable process so every engagement compounds instead of resetting.</p>
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
              { stat: '37%', label: 'operational cost reduction guarantee within 90 days' },
              { stat: '3–90 days', label: 'from kickoff to live automations and visibility wins' },
              { stat: '1 team', label: 'site, tracking, content, and automation — under one roof' },
            ].map((t) => (
              <div key={t.label} className="glass-effect rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent font-['Space_Grotesk'] mb-2">{t.stat}</div>
                <div className="text-gray-400 text-sm">{t.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Related reads */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">Related reads</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">Practical guides from our knowledge hub on the exact systems we implement.</p>
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

        {/* Conclusion + CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
              Turn search and automation into business assets
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              The goal is not noise. The goal is leverage. Book a free call and we will map the highest-impact systems to ship first.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-gray-400">
              {['No pitch deck', 'No fluff', 'Implementation-first'].map((b) => (
                <span key={b} className="inline-flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" /> {b}
                </span>
              ))}
            </div>
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="agency_footer"
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

export default AiAutomationAgencyPage;
