import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import LeadStreamsTable from '@/components/leadgen/LeadStreamsTable';
import DataCoverageTable from '@/components/leadgen/DataCoverageTable';
import LeadQualificationForm from '@/components/leadgen/LeadQualificationForm';
import { VERTICAL_CARDS, CARD_DISCLAIMER } from '@/data/leadStreams';

const CANONICAL = 'https://mushbloom.uk/lead-generation-data';

const scrollToForm = () => {
  document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
};

const Section: React.FC<{ id: string; title: string; kicker?: string; children: React.ReactNode }> = ({
  id,
  title,
  kicker,
  children,
}) => (
  <section id={id} className="py-16 border-t border-white/5 scroll-mt-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {kicker && <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">{kicker}</p>}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 font-['Space_Grotesk']">{title}</h2>
      {children}
    </div>
  </section>
);

const STEPS = [
  {
    title: 'Understand your offer and audience',
    body: 'We start with what you sell, who buys it and which channel you plan to use — because the right data depends entirely on the campaign behind it.',
  },
  {
    title: 'Match you to available streams',
    body: 'We map your requirement to the verticals, geographies and delivery frequencies that are actually available at the volume you need.',
  },
  {
    title: 'Agree scope, fields and compliance',
    body: 'We confirm the data fields, delivery format and frequency, and check that your intended use is lawful in your market and the markets you contact.',
  },
  {
    title: 'Deliver, review and refine',
    body: 'Data is delivered on the agreed schedule. We review performance with you and adjust the stream, filters or volume as your campaign matures.',
  },
];

const FORMATS = [
  'Consumer databases by country',
  'Business and B2B databases',
  'Decision-maker and owner records',
  'Phone and mobile datasets',
  'Domain and WHOIS-based business data',
  'Social-platform identifier exports',
  'Intent and engagement segments',
  'Custom-built lists to your specification',
];

const PACKAGES = [
  {
    name: 'Single Stream',
    price: 'From $750',
    body: 'One vertical, one geography, delivered on an agreed schedule. Suited to teams testing a single offer.',
  },
  {
    name: 'Multi-Stream Bundle',
    price: 'Tailored',
    body: 'Several verticals or markets running together, with shared filters and a combined delivery schedule.',
  },
  {
    name: 'Custom Data Programme',
    price: 'Tailored',
    body: 'Bespoke sourcing, field specification and ongoing volume, built around your CRM and outbound stack.',
  },
];

const CHECKLIST = [
  'Confirm the lawful basis for contacting the people in any list you buy.',
  'Check whether your intended channel — email, SMS, calling or advertising — is permitted in each target market.',
  'Honour suppression, do-not-call and unsubscribe registers before every send.',
  'Keep records of where data came from and when it was obtained.',
  'Apply your own verification and hygiene before contacting anyone.',
  'Limit the data you keep to what your campaign actually needs.',
  'Store and transfer data securely, with access limited to the people who need it.',
  'Be transparent about who you are and how someone can opt out.',
  'Take independent legal advice for regulated sectors and cross-border campaigns.',
];

const FAQS = [
  {
    q: 'What kind of leads and data does Mushbloom provide?',
    a: 'We provide access to recurring lead streams and database solutions across consumer and business verticals, in a wide range of geographies. Availability, volume, fields and permitted use vary by source, so every requirement is scoped individually.',
  },
  {
    q: 'Are the volumes shown on this page guaranteed?',
    a: 'No. The figures on this page are indicative availability ranges supplied by our sources. They describe typical availability, not a committed delivery volume. Current availability is confirmed at the point of quoting.',
  },
  {
    q: 'Can I use this data for cold email, SMS or calling?',
    a: 'That depends entirely on your jurisdiction, the markets you contact and the source of the records. Some data is suitable for certain channels only. We will tell you what a given source is and is not suitable for, but you remain responsible for the lawfulness of your campaign.',
  },
  {
    q: 'Is the data GDPR compliant?',
    a: 'Compliance is not a property of a list on its own — it depends on your lawful basis, your channel, your market and how you handle the data. We share what we know about each source and we expect buyers to operate a compliant consent and suppression framework. We do not provide legal advice.',
  },
  {
    q: 'How much does it cost?',
    a: 'Single streams start from $750. Multi-stream bundles and custom data programmes are quoted on scope — vertical, geography, volume, fields and frequency all affect price. There is no checkout; every engagement is quoted after a qualification call.',
  },
  {
    q: 'How quickly can data be delivered?',
    a: 'Many streams run daily, some weekly or monthly, and one-time database deliveries are also possible. Timing is confirmed when we agree scope, and depends on the vertical and market you need.',
  },
  {
    q: 'What if my request is not something you can support?',
    a: 'We will tell you plainly. If a vertical, geography or intended use falls outside what we can responsibly supply, we decline the request rather than working around it.',
  },
];

const LeadGenerationDataPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Lead Generation Streams & Data Solutions',
        serviceType: 'Lead generation and data supply',
        provider: {
          '@type': 'ProfessionalService',
          name: 'Mushbloom',
          url: 'https://mushbloom.uk',
          email: 'office@mushbloom.co.uk',
          telephone: '+40 725 388 605',
        },
        areaServed: 'Worldwide',
        url: CANONICAL,
        description:
          'Recurring lead streams and custom database solutions across consumer and business verticals, scoped to your channel, market and compliance framework.',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
          { '@type': 'ListItem', position: 2, name: 'Lead Generation Streams & Data Solutions', item: CANONICAL },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-gray-300">
      <Helmet>
        <title>Lead Generation Streams &amp; Data Solutions · Mushbloom</title>
        <meta
          name="description"
          content="Recurring lead streams and custom database solutions across 15+ verticals and global markets. Scoped to your channel, market and compliance framework — request a tailored quote."
        />
        <link rel="canonical" href={CANONICAL} />
        <meta property="og:title" content="Lead Generation Streams & Data Solutions · Mushbloom" />
        <meta
          property="og:description"
          content="Recurring lead streams and custom database solutions across 15+ verticals and global markets, scoped to your channel and compliance framework."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CANONICAL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <header className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-blue-400 mb-4">
            Mushbloom Growth Infrastructure
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Space_Grotesk'] max-w-4xl">
            Lead Generation Streams &amp; Data Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            Recurring lead streams and custom database solutions across consumer and business
            verticals worldwide — scoped to your offer, your channel and your compliance framework.
            Every engagement starts with a qualification conversation, not a checkout.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Request Your Lead Strategy
            </button>
            <a
              href="#verticals"
              className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              Explore Available Verticals
            </a>
          </div>

          {/* Trust strip */}
          <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Global consumer and business coverage',
              'Daily, weekly and one-time delivery options',
              'Scoped to your channel and jurisdiction',
              'Clear answers — including when we decline',
            ].map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-gray-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Section id="how-it-works" kicker="Process" title="How it works">
        <ol className="grid md:grid-cols-2 gap-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <span className="text-sm font-semibold text-blue-400">Step {i + 1}</span>
              <h3 className="text-lg font-semibold text-white mt-2 mb-2 font-['Space_Grotesk']">
                {s.title}
              </h3>
              <p className="text-sm text-gray-300">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="verticals" kicker="Coverage" title="Recurring lead streams">
        <p className="text-gray-300 max-w-3xl mb-8">
          Streams run across the categories below. Each is sourced separately, so what is available
          — and what it may lawfully be used for — differs between them.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VERTICAL_CARDS.map((v) => (
            <article key={v.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="text-base font-semibold text-white mb-2 font-['Space_Grotesk']">
                {v.name}
              </h3>
              <p className="text-sm text-gray-300 mb-3">{v.examples}</p>
              <p className="text-xs text-gray-500">{CARD_DISCLAIMER}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="availability"
        kicker="Reference"
        title="Indicative availability ranges — not guaranteed volumes"
      >
        <p className="text-gray-300 max-w-3xl mb-8">
          The table below reflects typical availability reported by our sources. Treat it as a
          starting point for a conversation: real availability is confirmed at the point of quoting
          and can change without notice.
        </p>
        <LeadStreamsTable />
      </Section>

      <Section id="data-solutions" kicker="Databases" title="Custom data solutions">
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-1">
            <p className="text-gray-300 mb-5">
              Beyond recurring streams, we can assemble one-time or ongoing database deliveries in
              the following formats:
            </p>
            <ul className="space-y-2 text-sm text-gray-300 list-disc pl-5">
              {FORMATS.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500">
              Not every dataset is suitable for every channel. Some records support research or
              advertising audiences only, not direct outreach. We will tell you which applies before
              you commit.
            </p>
          </div>
          <div className="lg:col-span-2">
            <DataCoverageTable />
          </div>
        </div>
      </Section>

      <Section id="pricing" kicker="Commercials" title="Commercial options">
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col">
              <h3 className="text-lg font-semibold text-white font-['Space_Grotesk']">{p.name}</h3>
              <p className="text-2xl font-bold text-blue-400 mt-2 mb-4">{p.price}</p>
              <p className="text-sm text-gray-300 flex-1">{p.body}</p>
              <button
                onClick={scrollToForm}
                className="mt-6 w-full px-5 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Request a tailored quote
              </button>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-400">
          There is no online checkout. Pricing depends on vertical, geography, volume, fields and
          frequency, and is confirmed after a qualification conversation.
        </p>
      </Section>

      <Section id="lead-form" kicker="Get started" title="Tell us what you need">
        <p className="text-gray-300 max-w-3xl mb-10">
          The more detail you give us here, the faster we can tell you what is available, what it
          costs and whether we can support the campaign at all.
        </p>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
          <LeadQualificationForm />
        </div>
      </Section>

      <Section id="responsible-use" kicker="Compliance" title="Responsible data use">
        <p className="text-gray-300 max-w-3xl mb-6">
          Buying data does not transfer responsibility for how it is used. Before you run a campaign
          on any purchased list, work through the following:
        </p>
        <ul className="grid md:grid-cols-2 gap-3 text-sm text-gray-300 list-disc pl-5 max-w-4xl">
          {CHECKLIST.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-gray-400 max-w-3xl">
          Mushbloom does not provide legal advice. Nothing on this page is a statement that a given
          dataset is lawful for your use case. If your campaign touches regulated sectors or
          multiple jurisdictions, take independent legal advice first.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link className="text-blue-400 underline" to="/legal/privacy-policy">Privacy Policy</Link>
          <Link className="text-blue-400 underline" to="/legal/terms">Terms &amp; Conditions</Link>
          <Link className="text-blue-400 underline" to="/legal/acceptable-use">Acceptable Use Policy</Link>
          <Link className="text-blue-400 underline" to="/legal/data-processing">Data Processing Addendum</Link>
          <a className="text-blue-400 underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>
        </div>
      </Section>

      <Section id="faq" kicker="Questions" title="Frequently asked questions">
        <div className="space-y-5 max-w-4xl">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              <h3 className="text-base font-semibold text-white mb-2 font-['Space_Grotesk']">{f.q}</h3>
              <p className="text-sm text-gray-300">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Need a Better Lead Pipeline?
          </h2>
          <p className="text-gray-300 mb-8">
            Tell us your vertical, market and channel. We will come back with what is available,
            what it costs and what you need in place to use it properly.
          </p>
          <button
            onClick={scrollToForm}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Request Your Best Lead Deal
          </button>
        </div>
      </section>

      <div className="border-t border-white/5 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            Mushbloom provides access to third-party lead streams and data sources. Availability,
            volumes, data fields and permitted uses vary by source and change over time. Figures
            shown on this page are indicative and are not guaranteed delivery volumes. Buyers are
            responsible for ensuring their use of any data complies with all applicable data
            protection, marketing and communications laws. Mushbloom does not provide legal advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationDataPage;
