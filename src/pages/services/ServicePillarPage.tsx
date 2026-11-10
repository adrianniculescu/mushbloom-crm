import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { pillars, SITE } from '@/data/servicePillars';

const ServicePillarPage = ({ slug }: { slug: string }) => {
  const p = pillars.find((x) => x.slug === slug)!;
  const url = `${SITE}${p.path}`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: p.h1, serviceType: p.serviceType, url, description: p.description, areaServed: ['United Kingdom', 'Worldwide'],
      provider: { '@type': 'ProfessionalService', name: 'Mushbloom', url: SITE, email: 'office@mushbloom.co.uk', address: { '@type': 'PostalAddress', addressCountry: 'GB' } } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: p.navName, item: url } ] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
  ];
  const others = pillars.filter((x) => x.slug !== slug);
  const cta = (id: string) => (
    <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" data-cta={`${slug}_${id}`}
      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2">
      {p.cta} <ArrowRight className="h-5 w-5" />
    </a>
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{p.title}</title>
        <meta name="description" content={p.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={p.title} />
        <meta property="og:description" content={p.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta name="twitter:title" content={p.title} />
        <meta name="twitter:description" content={p.description} />
        {schema.map((s, i) => <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>)}
      </Helmet>
      <Navigation />
      <main className="pt-24 pb-16">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">{p.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-6">{p.h1}</h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mb-8">{p.intro}</p>
          <div className="flex flex-wrap gap-4">{cta('hero')}
            <a href="#contact" className="border border-white/15 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition-colors">Send an enquiry</a>
          </div>
        </section>
        {p.sections.map((s) => (
          <section key={s.heading} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-['Space_Grotesk'] mb-4">{s.heading}</h2>
              <p className="text-gray-300 leading-relaxed">{s.body}</p>
              {s.points && <ul className="mt-5 space-y-3">{s.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-gray-300"><CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />{pt}</li>))}</ul>}
            </div>
          </section>
        ))}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-['Space_Grotesk'] mb-6">Frequently asked questions</h2>
          <div className="space-y-4">{p.faqs.map((f) => (
            <div key={f.q} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.q}</h3><p className="text-gray-400">{f.a}</p></div>))}</div>
        </section>
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="text-3xl font-bold text-white font-['Space_Grotesk'] mb-4">Ready to start?</h2>
          <p className="text-gray-300 mb-6">Mushbloom is a UK AI automation agency working with clients in the UK and internationally.</p>
          {cta('closing')}
          <nav aria-label="Related services" className="mt-10 flex flex-wrap justify-center gap-3">
            {others.map((o) => <Link key={o.slug} to={o.path} className="text-sm text-blue-400 hover:text-blue-300 border border-white/10 rounded-full px-4 py-2">{o.anchor}</Link>)}
          </nav>
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default ServicePillarPage;
