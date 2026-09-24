import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BadgeCheck, Bot, BriefcaseBusiness, CheckCircle2, Handshake, LockKeyhole } from 'lucide-react';
import Navigation from '@/components/Navigation';

const PAGE_URL = 'https://mushbloom.uk/partners';
const LEGIIT_PROFILE = 'https://legiit.com/mushbloom';

const services = [
  {
    icon: BriefcaseBusiness,
    title: 'Turn Your LinkedIn Into a Sales Machine',
    description: 'A focused service to optimise your LinkedIn profile and activity so it consistently attracts and converts your ideal B2B buyers.',
    pageUrl: '/services/linkedin-sales-machine',
    orderUrl: 'https://legiit.com/mushbloom/turn-your-linkedin-into-a-sales-machine',
  },
  {
    icon: Bot,
    title: 'AI Workflows to Save Time and Grow Revenue',
    description: 'Identify, design and implement one high-value AI workflow inside your existing tools—so your team saves time and grows revenue.',
    pageUrl: '/services/ai-workflows',
    orderUrl: 'https://legiit.com/mushbloom/ai-workflows-to-save-time-and-grow-revenue',
  },
];

const partnerSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Partners | Mushbloom',
  url: PAGE_URL,
  description: 'Trusted platforms Mushbloom partners with to deliver specialist marketing and AI services with transparent pricing and secure payments.',
  about: {
    '@type': 'Organization',
    name: 'Legiit',
    url: 'https://legiit.com',
    description: 'AI-powered marketing and outsourcing platform connecting businesses with vetted freelancers and specialist services.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
    { '@type': 'ListItem', position: 2, name: 'Partners', item: PAGE_URL },
  ],
};

const PartnersPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
    <Helmet>
      <title>Partners | Mushbloom</title>
      <meta name="description" content="Meet the trusted platforms Mushbloom partners with to deliver specialist AI and marketing services at competitive, transparent prices." />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Partners | Mushbloom" />
      <meta property="og:description" content="Trusted platforms that extend Mushbloom's specialist AI and marketing services with transparent pricing and secure payments." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={PAGE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(partnerSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>

    <Navigation />

    <main className="pt-16">
      <section className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold uppercase mb-6">
            <Handshake className="h-4 w-4" /> Trusted ecosystems
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-['Space_Grotesk'] leading-none mb-7">Partners</h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl">
            Mushbloom partners with trusted platforms to deliver specialist services at competitive, transparent prices. All work is executed by our agency team, with secured payments and guaranteed delivery.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center border border-blue-400/30 bg-blue-500/10 mb-6">
              <span className="text-xl font-bold text-blue-400">L</span>
            </div>
            <p className="text-green-400 text-sm font-semibold uppercase mb-3">First partner</p>
            <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
              Legiit – AI-powered marketing and outsourcing platform
            </h2>
          </div>

          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>Legiit is an AI-powered all-in-one marketing and outsourcing platform that connects businesses with vetted freelancers and specialist services across SEO, AI, development, design, content, video, eCommerce and more. Unlike generic freelance marketplaces, Legiit focuses on marketing-related services and applies a rigorous vetting process before sellers can list offers.</p>
            <p>The platform combines AI diagnostics, business tools and a curated marketplace so buyers can find the right expertise quickly, compare offers transparently and pay securely through escrow. For sellers, Legiit provides a growth-oriented environment with lower fees than many traditional platforms and tools to manage projects and performance in one place.</p>
            <p>Mushbloom has partnered with Legiit to offer two of our most requested services at competitive, marketplace-friendly pricing:</p>
            <ul className="space-y-3 py-1">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-1" /><span>Turn Your LinkedIn Into a Sales Machine</span></li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-1" /><span>AI Workflows to Save Time and Grow Revenue</span></li>
            </ul>
            <p>All delivery is handled by the Mushbloom agency team (operating since 2014). Payments are secured by Legiit’s escrow system and every order comes with guaranteed delivery according to the published scope.</p>
            <a href={LEGIIT_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 px-6 py-3 font-semibold rounded-lg hover:scale-105 transition-transform">
              Explore Mushbloom on Legiit <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 border-y border-white/10 mt-16">
          <div className="flex items-center gap-3 py-5 sm:pr-5"><BadgeCheck className="h-5 w-5 text-blue-400" /><span className="text-sm text-gray-300">Vetted specialist services</span></div>
          <div className="flex items-center gap-3 py-5 sm:px-5 sm:border-x border-white/10"><LockKeyhole className="h-5 w-5 text-green-400" /><span className="text-sm text-gray-300">Secure escrow payments</span></div>
          <div className="flex items-center gap-3 py-5 sm:pl-5"><Handshake className="h-5 w-5 text-blue-400" /><span className="text-sm text-gray-300">Delivered by Mushbloom</span></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <p className="text-blue-400 text-sm font-semibold uppercase mb-3">Available now</p>
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] mb-10">Featured services delivered via Legiit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description, pageUrl, orderUrl }) => (
              <article key={title} className="border border-white/10 bg-black/20 p-7 md:p-8">
                <Icon className="h-7 w-7 text-green-400 mb-8" />
                <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-4">{title}</h3>
                <p className="text-gray-300 leading-relaxed mb-8">{description}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-3">
                  <Link to={pageUrl} className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300">View service page <ArrowUpRight className="h-4 w-4" /></Link>
                  <a href={orderUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 font-medium hover:text-green-300">Order on Legiit <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <p className="text-lg text-gray-400 leading-relaxed">As we add more partners, this page will highlight the platforms and ecosystems we trust to extend Mushbloom’s reach while keeping delivery in-house and accountable.</p>
      </section>
    </main>
  </div>
);

export default PartnersPage;