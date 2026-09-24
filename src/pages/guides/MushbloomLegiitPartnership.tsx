import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle2, ChevronRight, Clock, Handshake, ShieldCheck, Sparkles } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';

const PAGE_URL = 'https://mushbloom.uk/wiki/mushbloom-legiit-partnership';
const LEGIIT_PROFILE = 'https://legiit.com/mushbloom';
const LINKEDIN_ORDER = 'https://legiit.com/mushbloom/turn-your-linkedin-into-a-sales-machine';
const WORKFLOWS_ORDER = 'https://legiit.com/mushbloom/ai-workflows-to-save-time-and-grow-revenue';

const sections = [
  { id: 'what-is-legiit', title: 'What is Legiit?' },
  { id: 'why-partnered', title: 'Why Mushbloom partnered with Legiit' },
  { id: 'for-clients', title: 'What this means for clients' },
  { id: 'featured-services', title: 'Featured services on Legiit' },
  { id: 'how-to-choose', title: 'How to choose how to engage' },
  { id: 'final-thought', title: 'Partnership as a force multiplier' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'get-started', title: 'Explore the partnership' },
];

const faqs = [
  {
    q: 'What is the Mushbloom × Legiit partnership?',
    a: 'Mushbloom uses Legiit as a secure, transparent storefront for selected productised services. All fulfilment remains with the Mushbloom agency team, while Legiit provides clear offers, escrow-secured payments and buyer protection.',
  },
  {
    q: 'Who delivers Mushbloom services ordered through Legiit?',
    a: 'The Mushbloom agency team delivers the work. Clients are not passed to an anonymous freelancer; Legiit provides the storefront and payment layer.',
  },
  {
    q: 'Which Mushbloom services are available on Legiit?',
    a: 'The current featured offers are Turn Your LinkedIn Into a Sales Machine and AI Workflows to Save Time and Grow Revenue.',
  },
  {
    q: 'How are payments handled on Legiit?',
    a: 'Payments are held in escrow until the work is delivered according to the published offer, giving buyers a clear scope and secure payment process.',
  },
  {
    q: 'Do clients retain ownership of their accounts and data?',
    a: 'Yes. Mushbloom works inside the client’s existing tools and platforms, while the client keeps full control of accounts and data.',
  },
  {
    q: 'Should I order through Legiit or contact Mushbloom directly?',
    a: 'A Legiit offer is best for a clear, narrow objective, fixed scope and a quick start. A direct Mushbloom engagement may suit broader transformations, multiple workflows, retainers or ongoing support.',
  },
];

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Mushbloom × Legiit: Delivering Specialist Services at Competitive Prices',
    description: 'How the Mushbloom and Legiit partnership combines agency delivery, transparent scopes, competitive pricing and escrow-secured payments for specialist business services.',
    image: 'https://mushbloom.uk/og-image.jpg',
    author: { '@type': 'Organization', name: 'Mushbloom Team', url: 'https://mushbloom.uk' },
    publisher: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
    datePublished: '2026-09-24T08:00:00+00:00',
    dateModified: '2026-09-24T08:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    url: PAGE_URL,
    articleSection: 'Partners & Platforms',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    keywords: ['Mushbloom Legiit partnership', 'Legiit services', 'agency services marketplace', 'secure freelance marketplace', 'AI workflows service', 'LinkedIn optimisation service'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 3, name: 'Mushbloom × Legiit Partnership', item: PAGE_URL },
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

const MushbloomLegiitPartnership = () => {
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

  const title = 'Mushbloom × Legiit: Delivering Specialist Services at Competitive Prices';
  const description = 'How Mushbloom and Legiit combine agency-level delivery, transparent scopes, competitive pricing and escrow-secured payments for specialist services.';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>Mushbloom × Legiit Partnership | Specialist Services</title>
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
            <span className="text-blue-400">Partnership</span>
          </nav>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Handshake className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Partners &amp; Platforms</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              How a specialist agency and an AI-powered marketing marketplace create a simpler, safer way for small and mid-sized businesses to buy focused services.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" />10 min read</span>
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
                  Mushbloom partners with Legiit to offer selected, clearly scoped services through a secure marketplace. Clients receive agency-level delivery from the Mushbloom team, transparent pricing and timelines, and escrow-secured payments. The current offers focus on LinkedIn positioning and practical AI workflow implementation, giving businesses a simple way to start small before expanding into broader work.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/40 pl-6 mb-16 space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>Mushbloom partners with selected platforms to make specialist services more accessible, transparent and affordable for small and mid-sized businesses. Our first strategic partnership is with Legiit, an AI-powered marketing and outsourcing platform.</p>
                <p>This partnership allows us to offer two of our most requested services—<Link to="/services/linkedin-sales-machine" className="text-blue-400 hover:underline">Turn Your LinkedIn Into a Sales Machine</Link> and <Link to="/services/ai-workflows" className="text-blue-400 hover:underline">AI Workflows to Save Time and Grow Revenue</Link>—at competitive, marketplace-friendly pricing, while keeping all delivery in-house with the Mushbloom agency team.</p>
              </div>

              <Section id="what-is-legiit" title="What is Legiit?">
                <p>Legiit is an AI-powered all-in-one marketing and outsourcing platform that connects businesses with vetted freelancers and specialist services across:</p>
                <BulletList items={['SEO', 'AI and automation', 'Development and design', 'Content, video and eCommerce', 'Other digital marketing disciplines']} />
                <h3 className="text-xl font-semibold text-white font-['Space_Grotesk']">How Legiit differs from generic freelance marketplaces</h3>
                <BulletList items={[
                  'It focuses heavily on marketing-related services.',
                  'It applies a rigorous vetting process before sellers can list offers.',
                  'It provides AI diagnostics and business tools alongside the marketplace.',
                  'It uses escrow-based payments and clear buyer protection mechanisms.',
                ]} />
                <div className="grid sm:grid-cols-2 gap-5 my-7">
                  <InfoBlock title="For buyers" items={['Transparent pricing and scope per gig', 'Visible seller ratings, completion rates and reviews', 'Secure payments held in escrow until delivery', 'A platform designed around growth, not just transactions']} />
                  <InfoBlock title="For sellers" items={['Lower fees than many traditional platforms', 'Tools to manage projects, performance and client relationships', 'A community and knowledge base focused on real-world execution']} />
                </div>
                <p>Legiit positions itself not just as a marketplace, but as a complete business growth platform that helps both buyers and sellers improve results over time.</p>
              </Section>

              <Section id="why-partnered" title="Why Mushbloom partnered with Legiit">
                <p>Mushbloom has operated since 2014, supporting businesses with digital marketing, conversion strategy, sales funnels, lead generation, startup messaging, content systems and AI-assisted workflows. Over time, we identified two recurring needs:</p>
                <Numbered n={1} title="An accessible entry point">Businesses want expert help without large retainers or complex proposals.</Numbered>
                <Numbered n={2} title="A transparent buying experience">Scope, pricing and delivery terms should be obvious before purchase.</Numbered>
                <p>Legiit solves both. It allows us to productise our services with clear scopes and prices, gives buyers escrow-secured payments, visible reviews and guaranteed delivery according to the published offer, and keeps the buying process simple: choose a service, order and receive the work as described.</p>
                <p className="text-white font-medium">All fulfilment remains with the Mushbloom agency team. You’re not hiring an anonymous freelancer; you’re working with our established agency, using Legiit as the storefront and payment layer.</p>
              </Section>

              <Section id="for-clients" title="What this means for clients">
                <Benefit title="Agency-level delivery at marketplace pricing">The same team that handles custom projects and retainers executes these productised offers.</Benefit>
                <Benefit title="Your payment is secured by escrow">Funds are held safely until the work is delivered according to the gig description.</Benefit>
                <Benefit title="Scope and timeline are clear up front">Each service page on Legiit describes what’s included, what’s not, and how delivery works.</Benefit>
                <Benefit title="You retain ownership of accounts and data">We work inside your existing tools and platforms; you keep full control.</Benefit>
                <Benefit title="You can start small and expand">These services are focused entry points. A successful engagement can extend into broader projects, retainers or additional workflows.</Benefit>
                <p>This model is especially useful for founders and operators who want a specific outcome without a long sales cycle, businesses testing a new channel before a larger investment, and teams that prefer fixed-scope, fixed-price engagements for certain initiatives.</p>
              </Section>

              <Section id="featured-services" title="Featured Mushbloom services on Legiit">
                <ServiceBlock
                  number="01"
                  title="Turn Your LinkedIn Into a Sales Machine"
                  description="A focused service to optimise your LinkedIn profile and activity so it consistently attracts and converts your ideal B2B buyers. The engagement includes a profile audit and rewrite—headline, About and Featured—positioning clarification, and a practical LinkedIn activity plan with implementation support."
                  servicePath="/services/linkedin-sales-machine"
                  orderUrl={LINKEDIN_ORDER}
                />
                <ServiceBlock
                  number="02"
                  title="AI Workflows to Save Time and Grow Revenue"
                  description="Identify, design and implement one high-value AI workflow inside your existing tools—so your team saves time and grows revenue. The engagement moves from a short assessment to a live, documented workflow in your stack, with clear handover and operating guidance."
                  servicePath="/services/ai-workflows"
                  orderUrl={WORKFLOWS_ORDER}
                />
              </Section>

              <Section id="how-to-choose" title="How to choose between direct engagements and Legiit offers">
                <p>Mushbloom continues to offer custom projects, retainers and advisory work outside of Legiit. The Legiit services are best when:</p>
                <BulletList items={[
                  'You have a clear, narrow objective, such as fixing your LinkedIn profile or automating one workflow.',
                  'You prefer fixed scope and price over an open-ended engagement.',
                  'You want to start quickly with minimal back-and-forth.',
                ]} />
                <p>For broader transformations, multi-workflow programmes or ongoing support, a direct Mushbloom engagement may be a better fit. In both cases, the underlying delivery standards and commercial focus remain the same.</p>
              </Section>

              <Section id="final-thought" title="Final thought: partnership as a force multiplier">
                <p>The Mushbloom × Legiit partnership is designed to make specialist expertise more accessible without compromising on quality or accountability. By combining Mushbloom’s agency experience since 2014 with Legiit’s secure, transparent marketplace infrastructure, we can offer:</p>
                <BulletList items={['Competitive, clearly priced services', 'Secured payments and guaranteed delivery', 'Agency-level execution with a simpler buying experience']} />
                <p>As we develop more productised offers, this article and our <Link to="/partners" className="text-blue-400 hover:underline">Partners section</Link> will be updated to reflect new platforms, ecosystems and distribution partnerships that help clients access the right level of support at the right price.</p>
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
                  <ShieldCheck className="h-8 w-8 text-blue-400 mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">Explore the partnership</h2>
                  <p className="text-gray-300 mb-6">Review Mushbloom’s Legiit profile, compare the two featured offers, or explore how we choose trusted partner platforms.</p>
                  <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                    <a href={LEGIIT_PROFILE} target="_blank" rel="noopener noreferrer" data-cta="partnership_guide_legiit" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                      Explore Mushbloom on Legiit <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link to="/partners" className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">View all partners</Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-6">Need a broader engagement? <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Book a call</a> or use the form below.</p>
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

const InfoBlock = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <h3 className="text-white font-semibold mb-3 font-['Space_Grotesk']">{title}</h3>
    <BulletList items={items} />
  </div>
);

const ServiceBlock = ({ number, title, description, servicePath, orderUrl }: { number: string; title: string; description: string; servicePath: string; orderUrl: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <span className="text-sm font-semibold text-blue-400">{number}</span>
    <h3 className="text-2xl font-bold text-white mt-2 mb-3 font-['Space_Grotesk']">{title}</h3>
    <p className="text-gray-300 text-base">{description}</p>
    <div className="flex flex-col sm:flex-row gap-3 mt-5">
      <Link to={servicePath} className="text-blue-400 font-medium text-sm hover:underline inline-flex items-center gap-1">View service details <ArrowRight className="h-4 w-4" /></Link>
      <a href={orderUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 font-medium text-sm hover:underline inline-flex items-center gap-1">Order on Legiit <ArrowRight className="h-4 w-4" /></a>
    </div>
  </div>
);

export default MushbloomLegiitPartnership;