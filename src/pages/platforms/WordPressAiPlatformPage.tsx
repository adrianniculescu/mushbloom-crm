import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import {
  ArrowRight, CheckCircle, Sparkles, Rocket, ShieldCheck, Workflow,
  Zap, Globe, Brain, Layers, ShoppingCart, Search, Server, Users, Crown,
} from 'lucide-react';

const PAGE_URL = 'https://mushbloom.uk/platforms/wordpress-and-ai';
const META_TITLE = 'WordPress + AI Platform – SaaS with Agency-Grade Execution';
const META_DESCRIPTION = 'A SaaS platform for WordPress + AI websites, backed by agency intelligence. Self-serve speed, with optional done-for-you build, migration, SEO, and optimization.';

const features = [
  { icon: Brain, title: 'AI-Assisted Website Creation', desc: 'Generate full WordPress sites — structure, copy, design system, and on-brand content — in minutes, then refine with AI co-pilots inside the platform.' },
  { icon: Layers, title: 'Real WordPress Flexibility', desc: 'Built on the WordPress ecosystem you already trust. Themes, plugins, custom post types, and developer overrides — without lock-in.' },
  { icon: Zap, title: 'Launch in Hours, Not Weeks', desc: 'Project setup, design, content scaffolding, and SEO foundations are pre-wired. Go from blank canvas to live site the same day.' },
  { icon: Search, title: 'Built-in SEO & LLM Foundations', desc: 'Schema markup, sitemaps, canonical URLs, semantic structure, and llms.txt — configured at the platform layer so every site ships ranking-ready.' },
  { icon: ShoppingCart, title: 'Ecommerce & Business Ready', desc: 'WooCommerce, lead capture, booking, memberships, and content sites — all production-grade out of the box.' },
  { icon: Server, title: 'Managed Infrastructure', desc: 'Hosting, backups, security, CDN, and updates handled. You focus on growth; the platform keeps the lights on.' },
];

const serviceLayers = [
  { icon: Rocket, title: 'Custom Build', desc: 'Our team builds the entire site for you, on the platform, to a brief.' },
  { icon: Workflow, title: 'Setup & Migration', desc: 'Move from Webflow, Wix, Squarespace, Shopify, or legacy WordPress without losing rankings.' },
  { icon: Sparkles, title: 'Customization', desc: 'Custom blocks, themes, integrations, and workflows tailored to your business model.' },
  { icon: Search, title: 'SEO & Content', desc: 'Keyword strategy, on-page SEO, AI search optimization, and ongoing content production.' },
  { icon: ShieldCheck, title: 'Optimization & Management', desc: 'Performance, conversion, analytics, and continuous iteration handled by our team.' },
];

const audiences = [
  'Founders launching a new venture or product site',
  'Operators consolidating brand, blog, and ecommerce in one stack',
  'Agencies that need a white-label WordPress + AI delivery layer',
  'Established businesses migrating from rigid builders or legacy WordPress',
];

const tiers = [
  {
    name: 'Self-Serve',
    icon: Zap,
    price: 'Platform access',
    desc: 'Use the SaaS platform directly. AI-assisted build, hosting, SEO foundations, and updates included.',
    bullets: ['AI site generation', 'Managed hosting & backups', 'Built-in SEO & schema', 'Standard support'],
    cta: 'Join the waitlist',
    highlight: false,
  },
  {
    name: 'Done-With-You',
    icon: Users,
    price: 'Platform + advisory',
    desc: 'Self-serve in the platform with strategic guidance, design reviews, and SEO direction from our team.',
    bullets: ['Everything in Self-Serve', 'Strategy & design reviews', 'SEO & content roadmap', 'Priority support'],
    cta: 'Request access',
    highlight: true,
  },
  {
    name: 'Done-For-You',
    icon: Crown,
    price: 'Full agency delivery',
    desc: 'We build, migrate, optimize, and manage the entire site for you on the platform.',
    bullets: ['Custom build & migration', 'SEO & content production', 'Ongoing optimization', 'Dedicated team'],
    cta: 'Book a strategy call',
    highlight: false,
  },
];

const steps = [
  { n: '01', title: 'Brief & strategy', desc: 'Goals, audience, keywords, and success metrics defined upfront — by you in the platform, or with our team.' },
  { n: '02', title: 'AI-assisted build', desc: 'Generate the site structure, design system, and content scaffolding inside the platform in minutes.' },
  { n: '03', title: 'SEO & schema layer', desc: 'Per-page meta, canonical URLs, structured data, sitemaps, and llms.txt are wired automatically.' },
  { n: '04', title: 'Customize or hand off', desc: 'Refine in the platform with AI co-pilots, or hand off to our team for done-for-you delivery.' },
  { n: '05', title: 'Launch & monitor', desc: 'Custom domain, analytics, performance monitoring, and AI visibility tracking from day one.' },
  { n: '06', title: 'Grow & iterate', desc: 'Continuous content, SEO, and conversion optimization — self-serve or fully managed.' },
];

const faq = [
  { q: 'Is this just another website builder?', a: 'No. It is a SaaS platform engineered for WordPress + AI websites, backed by a real agency that can build, migrate, and optimize for you when needed. Self-serve speed with done-for-you depth available on demand.' },
  { q: 'Why WordPress and not a closed builder?', a: 'WordPress powers over 40% of the web. It gives you ecosystem flexibility, no vendor lock-in, and access to the largest plugin and theme economy. Our platform layer handles the complexity so you only see the speed.' },
  { q: 'How is AI used in the platform?', a: 'AI assists site generation, content drafting, SEO optimization, design refinement, and ongoing growth recommendations. You stay in control; AI removes the manual lift.' },
  { q: 'Can I migrate my existing site?', a: 'Yes. Our team handles migrations from Webflow, Wix, Squarespace, Shopify, and legacy WordPress installs with zero ranking loss when done as a managed service.' },
  { q: 'What is included in done-for-you?', a: 'Custom build, design, content, migration, SEO, performance optimization, and ongoing management. Essentially a senior agency team operating inside the platform on your behalf.' },
  { q: 'When can I get access?', a: 'Early access is rolling out now. Join the waitlist or book a call to be among the first users and lock in founder pricing.' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mushbloom WordPress + AI Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: PAGE_URL,
  description: META_DESCRIPTION,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'USD',
  },
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
    { '@type': 'ListItem', position: 2, name: 'Platforms', item: 'https://mushbloom.uk/platforms/wordpress-and-ai' },
    { '@type': 'ListItem', position: 3, name: 'WordPress + AI', item: PAGE_URL },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const WordPressAiPlatformPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{META_TITLE} | Mushbloom</title>
        <meta name="description" content={META_DESCRIPTION} />
        <meta name="keywords" content="WordPress AI platform, AI website builder, WordPress SaaS, AI WordPress, managed WordPress, WordPress agency, AI website creation, vibe coding WordPress" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="h-3 w-3" /> Early Access · WordPress + AI Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">
            Build smarter with a SaaS platform powered by{' '}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              agency-grade execution
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-4">
            Create WordPress + AI websites faster, with the flexibility of a platform and the support of a real service team behind it.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mb-8">
            Self-serve when you want speed. Work with our team when you want strategy, customization, and done-for-you delivery.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="wp_ai_hero_call"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Request Early Access <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#tiers"
              className="border border-white/15 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors inline-flex items-center gap-2"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['SaaS platform', 'Agency intelligence', 'Done-for-you available', 'WordPress flexibility', 'AI-assisted'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Positioning */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
              More than a builder. A platform with a team behind it.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Most website tools force a choice: cheap DIY or expensive agency. Our WordPress + AI platform gives you both — a premium self-serve product with a real service layer ready when you need it.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Launch in hours, customize at the depth WordPress allows, and call in our team for strategy, migration, SEO, and optimization the moment the project demands it.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">What the platform delivers</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A premium product feel — not a generic template tool. Every site ships production-ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((s) => {
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

        {/* Service layers */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">Optional service layers</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Self-serve when it makes sense. Bring in our team when you want senior execution.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceLayers.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-colors">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg inline-flex mb-4">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2 font-['Space_Grotesk']">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tiers */}
        <section id="tiers" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">Three ways to use the platform</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Start self-serve and upgrade to done-for-you whenever the business calls for it.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.name}
                  className={`glass-effect rounded-2xl p-6 border ${t.highlight ? 'border-blue-500/50 ring-1 ring-blue-500/30' : 'border-white/10'} relative flex flex-col`}
                >
                  {t.highlight && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg inline-flex mb-4 self-start">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-1 font-['Space_Grotesk']">{t.name}</h3>
                  <div className="text-blue-300 text-sm font-medium mb-3">{t.price}</div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{t.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://tidycal.com/adrianniculescu"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta={`wp_ai_tier_${t.name.toLowerCase()}`}
                    className={`${t.highlight ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' : 'border border-white/15 text-white hover:bg-white/5'} px-5 py-2.5 rounded-lg font-semibold transition-all text-center`}
                  >
                    {t.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* Who it's for */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-6">Who it's built for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {audiences.map((a) => (
              <div key={a} className="glass-effect border border-white/10 rounded-xl px-5 py-4 inline-flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-3">From idea to live site</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">A clear path that works whether you self-serve or hand the whole project to us.</p>
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
              { stat: 'Hours', label: 'from blank canvas to live, SEO-ready WordPress site' },
              { stat: '40%+', label: 'of the web runs WordPress — no vendor lock-in' },
              { stat: '1 partner', label: 'platform, agency execution, and ongoing growth — one team' },
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

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border border-blue-500/30 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
              <Globe className="h-3 w-3" /> Be among the first users
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">
              Get early access to the WordPress + AI platform
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Founder pricing, priority onboarding, and direct access to our team. Book a 20-minute call to lock your spot.
            </p>
            <a
              href="https://tidycal.com/adrianniculescu"
              target="_blank"
              rel="noopener noreferrer"
              data-cta="wp_ai_footer"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2"
            >
              Request Early Access <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <Contact />
    </div>
  );
};

export default WordPressAiPlatformPage;
