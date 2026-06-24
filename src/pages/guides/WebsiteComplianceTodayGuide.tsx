import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { ArrowRight, ChevronRight, Mail, MessageCircle, Globe, BookOpen, Clock, DollarSign } from 'lucide-react';

interface Section { id: string; title: string; }

const sections: Section[] = [
  { id: 'why-it-matters', title: 'Why website compliance matters today' },
  { id: 'risks', title: 'The risks of a non-compliant website' },
  { id: 'gdpr', title: 'GDPR and privacy beyond the cookie banner' },
  { id: 'cookies', title: 'Cookie consent done properly' },
  { id: 'accessibility', title: 'Accessibility and WCAG 2.2' },
  { id: 'eaa', title: 'The European Accessibility Act explained' },
  { id: 'international', title: 'What international compliance actually means' },
  { id: 'layers', title: 'The five layers of website compliance' },
  { id: 'hard', title: 'Why this is harder to implement than it sounds' },
  { id: 'audit', title: 'A practical compliance audit you can run today' },
  { id: 'roadmap', title: 'A 30-60-90 day remediation roadmap' },
  { id: 'measure', title: 'How to measure compliance over time' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'pricing', title: 'Typical pricing for compliance work' },
  { id: 'help', title: 'How Mushbloom can help' },
  { id: 'contact', title: 'Need help? Contact Mushbloom' },
];

const WebsiteComplianceTodayGuide = () => {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const url = 'https://mushbloom.uk/guides/website-compliance-today';
  const title = 'Website Compliance Today: GDPR, Accessibility and International Standards for Growing Brands';
  const description =
    'A practical guide to website compliance: GDPR and ePrivacy, cookie consent, WCAG 2.2 accessibility, the European Accessibility Act, and an actionable audit and remediation roadmap.';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: 'https://mushbloom.uk/og-image.jpg',
    author: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' },
    publisher: {
      '@type': 'Organization',
      name: 'Mushbloom',
      logo: { '@type': 'ImageObject', url: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png' },
    },
    datePublished: '2025-01-15T09:00:00+00:00',
    dateModified: '2025-01-15T09:00:00+00:00',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    articleSection: 'Compliance & Trust',
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    keywords: [
      'website compliance today',
      'GDPR website compliance',
      'cookie consent UK',
      'WCAG 2.2 AA',
      'European Accessibility Act',
      'accessibility statement',
      'privacy policy implementation',
      'ePrivacy cookies',
      'website audit',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
      { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://mushbloom.uk/wiki' },
      { '@type': 'ListItem', position: 4, name: title, item: url },
    ],
  };

  const faqs = [
    {
      q: 'Is a cookie banner enough to be GDPR compliant?',
      a: 'No. A banner is only the visible layer. UK and EU guidance requires that non-essential cookies and trackers are blocked until a user gives consent, that rejecting is as easy as accepting, that the privacy and cookie policies reflect actual processing, and that the consent choice can be withdrawn at any time.',
    },
    {
      q: 'What accessibility standard should we follow?',
      a: 'WCAG 2.2 at Level AA is the current international baseline used by regulators, public-sector procurement and most accessibility statements. Many brands also commit to ongoing conformity rather than treating it as a single audit.',
    },
    {
      q: 'Does the European Accessibility Act apply to my website?',
      a: 'The European Accessibility Act covers in-scope consumer digital products and services placed on the EU market from 28 June 2025. Many ecommerce, banking, ticketing, transport and SaaS websites fall in scope. Take legal advice on your specific situation.',
    },
    {
      q: 'Do we need an accessibility statement?',
      a: 'Yes, in most cases. An accessibility statement should describe the standard you target, the journeys you have audited, any known limitations and a contact route for users to report problems.',
    },
    {
      q: 'Are accessibility overlay widgets a valid solution?',
      a: 'No. Most regulators, advocacy groups and accessibility experts recommend against overlays. They do not fix underlying code, often interfere with assistive technology and have been cited in litigation. Real accessibility comes from semantic markup, keyboard support, contrast and content quality.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{title} | Mushbloom Research</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Research by Mushbloom</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              A clear, practical playbook for getting your website compliant across GDPR, cookie consent,
              WCAG 2.2 accessibility and international standards — without breaking your brand or conversions.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>16 min read</span></div>
              <span>•</span>
              <span>Updated January 2025</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">On this page</p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`block py-2 pl-3 border-l-2 text-sm transition-colors ${
                        activeId === s.id
                          ? 'border-blue-400 text-white font-medium'
                          : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      <span className="text-gray-600 mr-2">{String(i + 1).padStart(2, '0')}</span>
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="max-w-3xl">
              <div className="border-l-2 border-blue-500/40 pl-6 mb-16">
                <p className="text-lg text-gray-300 leading-relaxed">
                  A non-compliant website can quietly create legal exposure, reduce trust, weaken conversions
                  and block growth opportunities long before a formal complaint ever arrives. For modern brands,
                  compliance is no longer limited to a privacy policy page or a cookie banner — it spans consent
                  management, data transparency, accessibility and the ongoing quality of how the site is built.
                </p>
              </div>

              <Section id="why-it-matters" title="Why website compliance matters today">
                <p>
                  Businesses serving users across the UK, Europe and other regulated markets increasingly need a
                  website that handles privacy correctly, remains accessible to a wider range of users and stands
                  up to scrutiny from partners, clients and customers. Compliance has moved from a one-off legal
                  task to a continuous quality standard for the whole site.
                </p>
                <p>
                  Three forces are converging today: stricter cookie and privacy enforcement, the European
                  Accessibility Act now in force for in-scope services, and rising buyer expectations around
                  transparency and trust. Sites that lag on any of these dimensions lose credibility well before
                  they ever attract a regulator&#39;s attention.
                </p>
              </Section>

              <Section id="risks" title="The risks of a non-compliant website">
                <p>
                  Many websites look polished on the surface while still failing where it matters. Optional
                  cookies load before consent. Forms collect more data than they need. Legal notices do not
                  match real processing. Key journeys remain difficult or impossible to use with a keyboard or
                  assistive technology. Each of these creates a different kind of risk.
                </p>
                <BulletList items={[
                  'Privacy risk — UK and EU guidance requires clear information about cookies and a genuine means of consenting where they are not strictly necessary.',
                  'Accessibility risk — WCAG 2.2 is the recognised international baseline; failing it can mean lost users, complaints and, in some markets, formal action.',
                  'Commercial risk — intrusive banners, broken forms and unclear notices damage trust with serious buyers and reduce conversion.',
                  'Operational risk — as you add analytics, CRMs, embeds, newsletter tools and plugins, compliance becomes a systems issue rather than a content task.',
                  'Procurement risk — enterprise and public-sector buyers increasingly require evidence of accessibility and privacy practices before signing.',
                ]} />
              </Section>

              <Section id="gdpr" title="GDPR and privacy beyond the cookie banner">
                <p>
                  A large share of website owners still believe GDPR compliance starts and ends with a cookie
                  banner. In reality, privacy compliance is broader and depends on how the site behaves in
                  practice. Visitors must be told that cookies are used and, where cookies are not strictly
                  necessary, given a proper way to agree before they are set.
                </p>
                <p>A real implementation usually includes:</p>
                <BulletList items={[
                  'A Privacy Policy that explains what data is collected, why, how long it is kept and who it is shared with.',
                  'A Cookie Policy that reflects the technologies actually in use on the site.',
                  'Prior blocking of non-essential cookies and scripts until consent is given.',
                  'A consent management setup that lets users reject and withdraw non-essential consent as easily as they grant it.',
                  'Form-level privacy notices and clean marketing opt-in logic that does not bundle consent with other agreements.',
                  'A review of analytics, embeds, forms, tag managers and third-party tools that introduce privacy implications.',
                ]} />
                <p>
                  This is where implementation gets more complex than most businesses expect. A site may carry
                  analytics tags, embedded media, CRM scripts, booking tools, email capture, chat widgets and CMS
                  plugins that each change the picture in their own way.
                </p>
              </Section>

              <Section id="cookies" title="Cookie consent done properly">
                <p>
                  Good cookie consent is invisible until it needs to be visible, and respectful when it appears.
                  The current baseline most legal teams converge on includes:
                </p>
                <BulletList items={[
                  'Block all non-essential scripts before a choice is made, including analytics, marketing pixels and embeds.',
                  'Offer "Accept all" and "Reject all" with equal prominence — no dark patterns, no hidden reject button.',
                  'Provide a granular preferences panel for analytics, marketing and personalisation.',
                  'Persist the user choice for a defined period (commonly 6–12 months) with a clear way to change it.',
                  'Expose a permanent "Privacy settings" link in the footer so consent can be withdrawn.',
                  'Log the consent record (timestamp, version, categories) for accountability.',
                ]} />
                <p>
                  Anything less risks both regulatory exposure and the brand damage of feeling slightly off to
                  more sophisticated visitors.
                </p>
              </Section>

              <Section id="accessibility" title="Accessibility and WCAG 2.2">
                <p>
                  Accessibility is not a niche concern and it is not just a public-sector issue. WCAG 2.2 is the
                  current W3C standard for making web content more accessible and provides the baseline framework
                  for building sites that are more usable for people with a wide range of disabilities and access
                  needs.
                </p>
                <p>In practice, accessibility work usually includes:</p>
                <BulletList items={[
                  'Improving heading hierarchy, landmarks, labels and semantic HTML.',
                  'Ensuring menus, filters, tabs, modals and forms work fully by keyboard.',
                  'Fixing colour contrast, visible focus states and error messaging that does not rely on colour alone.',
                  'Reviewing embedded media, PDFs and interactive components for real usability.',
                  'Publishing an accessibility statement with a contact method for reporting barriers.',
                ]} />
                <p>
                  The four WCAG principles — perceivable, operable, understandable, robust — are a useful
                  shorthand. If a section of your site fails any of them for a meaningful group of users, it is a
                  compliance and quality problem at the same time.
                </p>
              </Section>

              <Section id="eaa" title="The European Accessibility Act explained">
                <p>
                  For businesses serving users in Europe, the European Accessibility Act has raised expectations
                  for in-scope consumer digital services from 28 June 2025 onward. The practical themes are
                  consistent with WCAG: content should be perceivable, operable, understandable and robust;
                  navigation and forms should work without a mouse; and businesses should provide an accessibility
                  statement and maintain ongoing conformity rather than treating accessibility as a one-time patch.
                </p>
                <p>
                  Even where the Act does not directly apply, it is rapidly becoming the procurement and brand
                  benchmark across Europe. Aligning to it future-proofs the site against both regulation and
                  buyer expectations.
                </p>
              </Section>

              <Section id="international" title="What international compliance actually means">
                <p>
                  International compliance is not a single badge or certification. It is the practical process of
                  making sure a website meets the expectations created by privacy rules, accessibility standards
                  and user-facing transparency across the territories it serves. For most brands the most useful
                  baseline is a combination of GDPR-grade privacy implementation, strong cookie consent handling,
                  WCAG-oriented accessibility work and clear documentation of what the site is doing.
                </p>
              </Section>

              <Section id="layers" title="The five layers of website compliance">
                <p>
                  The real work usually sits across five layers. Treating any one of them in isolation is what
                  leads to partial fixes that fall apart on the next redesign or integration.
                </p>
                <div className="overflow-x-auto rounded-lg border border-white/10 my-6">
                  <table className="min-w-full text-sm">
                    <thead className="bg-white/5 text-white">
                      <tr>
                        <th className="text-left p-3">Layer</th>
                        <th className="text-left p-3">What usually needs attention</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-t border-white/10 align-top">
                        <td className="p-3 font-medium">Privacy</td>
                        <td className="p-3">Cookie consent, privacy notices, data collection logic, vendor visibility, lawful processing explanations.</td>
                      </tr>
                      <tr className="border-t border-white/10 align-top">
                        <td className="p-3 font-medium">Accessibility</td>
                        <td className="p-3">Keyboard access, structure, labels, contrast, focus states, responsive behaviour, media usability.</td>
                      </tr>
                      <tr className="border-t border-white/10 align-top">
                        <td className="p-3 font-medium">Content</td>
                        <td className="p-3">Legal pages, form notices, accessible content formatting, clear headings, readable interaction guidance.</td>
                      </tr>
                      <tr className="border-t border-white/10 align-top">
                        <td className="p-3 font-medium">Technical stack</td>
                        <td className="p-3">Tag managers, embedded media, analytics, chat tools, CMS plugins, redirects, templates, scripts.</td>
                      </tr>
                      <tr className="border-t border-white/10 align-top">
                        <td className="p-3 font-medium">Governance</td>
                        <td className="p-3">Reviews after redesigns, new campaigns, new integrations and updated standards or legal expectations.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Section>

              <Section id="hard" title="Why this is harder to implement than it sounds">
                <p>
                  On paper, the checklist looks simple. In reality, proper implementation requires someone who
                  understands how legal requirements, code behaviour, content structure, consent logic and UX
                  patterns intersect on the live site. That is why so many businesses delay it, partially patch
                  it, or assume they are covered when they are not.
                </p>
                <p>Even a relatively simple website can hide complexity in places like:</p>
                <BulletList items={[
                  'Analytics or marketing scripts firing before consent.',
                  'Duplicate or unclear form consent language.',
                  'Broken keyboard flows in navigation, popups or enquiry forms.',
                  'Accessibility issues introduced by plugins, themes, page builders or embeds.',
                  'Policy pages that do not reflect actual site behaviour.',
                  'Newsletter and CRM integrations that store more data than disclosed.',
                ]} />
                <p>
                  That complexity is one of the main reasons many businesses prefer external support rather than
                  trying to interpret, scope and implement everything internally.
                </p>
              </Section>

              <Section id="audit" title="A practical compliance audit you can run today">
                <p>
                  Before commissioning a formal audit, you can sanity-check most websites in an afternoon. Open
                  a private browser window, disable extensions and walk through these checks.
                </p>
                <Step n={1} title="Inspect what loads before consent">
                  Open developer tools, clear storage, load the homepage and look at the Network and Application
                  tabs. Any third-party analytics, advertising or marketing requests firing before you click
                  Accept indicate a consent gap.
                </Step>
                <Step n={2} title="Check the banner symmetry">
                  Is &quot;Reject all&quot; as visible and as easy to reach as &quot;Accept all&quot;? Does the banner reappear in
                  another session if you reject? Can you withdraw consent later?
                </Step>
                <Step n={3} title="Test keyboard-only navigation">
                  Unplug your mouse. Try to use the main menu, open a modal, fill in the contact form and reach
                  the footer using Tab, Shift+Tab and Enter. Every focus stop should be visible.
                </Step>
                <Step n={4} title="Read the policies against reality">
                  Compare your Privacy Policy and Cookie Policy with the trackers, forms and third-party tools
                  the site actually uses. Mismatches are the most common finding in real audits.
                </Step>
                <Step n={5} title="Run accessibility checks">
                  Use a tool such as Lighthouse or axe DevTools on the top ten pages. Treat the results as
                  signals, not verdicts, and prioritise issues that block real user journeys.
                </Step>
                <Step n={6} title="Verify the accessibility statement">
                  If you publish one, confirm it names the standard you target, the date of the last review and a
                  contact route for users to report problems.
                </Step>
              </Section>

              <Section id="roadmap" title="A 30-60-90 day remediation roadmap">
                <p>
                  Once the audit is done, sequencing matters. A typical remediation programme looks like this:
                </p>
                <Step n={1} title="Days 1–30: foundations">
                  Implement a compliant consent manager that blocks non-essential scripts by default. Rewrite or
                  refresh the Privacy Policy, Cookie Policy, Terms and Accessibility Statement. Fix critical
                  keyboard and contrast issues on the highest-traffic pages.
                </Step>
                <Step n={2} title="Days 31–60: structural fixes">
                  Refactor navigation, modals and forms for proper semantics and keyboard support. Add labels,
                  ARIA where appropriate, focus management and skip links. Re-test analytics behaviour against
                  consent categories. Standardise form-level privacy notices.
                </Step>
                <Step n={3} title="Days 61–90: governance and proof">
                  Document the stack, vendors and lawful basis for each processing activity. Set up a quarterly
                  review cadence. Add accessibility and privacy checks to your release process so new pages do
                  not regress. Publish a clear accessibility statement and a contact route for issues.
                </Step>
              </Section>

              <Section id="measure" title="How to measure compliance over time">
                <p>
                  Compliance is not a one-off project; it is a steady-state quality. Useful signals to monitor:
                </p>
                <BulletList items={[
                  'Percentage of pages passing automated accessibility checks with no critical issues.',
                  'Consent acceptance and rejection rates, and whether they drift after design changes.',
                  'Number of third-party scripts loaded before consent (target: zero non-essential).',
                  'Time-to-resolution for reported accessibility or privacy issues.',
                  'Date of last review for each legal page and the accessibility statement.',
                  'Vendor list and processing register kept in sync with what the site actually does.',
                ]} />
              </Section>

              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-6">
                  {faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-white font-semibold mb-2 font-['Space_Grotesk']">{f.q}</h3>
                      <p className="text-gray-300 leading-relaxed">{f.a}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="pricing" title="Typical pricing for compliance work">
                <p>
                  Pricing depends on the CMS or website builder, the number of templates and forms involved, the
                  complexity of the tracking stack, the volume of third-party integrations, the target markets
                  served, and whether the need is audit-only or full implementation.
                </p>
                <p>
                  As a rough orientation, lightweight brochure sites tend to sit in the lower range, while
                  multi-template marketing sites with heavy tracking and ecommerce flows sit considerably higher.
                  We scope every engagement against the actual site rather than against a template.
                </p>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 my-8">
                  <h3 className="text-xl font-semibold text-white mb-6 font-['Space_Grotesk']">Indicative pricing</h3>
                  <div className="space-y-5">
                    {[
                      { label: 'Compliance audit and recommendations', range: '$500 to $1,200' },
                      { label: 'GDPR / cookie consent implementation', range: '$750 to $2,000' },
                      { label: 'Accessibility remediation for common issues', range: '$1,000 to $3,000' },
                      { label: 'Full website compliance implementation across privacy, accessibility, and international best-practice requirements', range: '$2,500 to $7,500+' },
                      { label: 'Ongoing monitoring, review, and maintenance', range: 'custom / quote-based' },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="mt-1 p-1.5 rounded-md bg-blue-500/10 border border-blue-500/20">
                          <DollarSign className="h-4 w-4 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-200 font-medium leading-snug">{item.label}</p>
                          <p className="text-gray-400 text-sm">from {item.range}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      All figures are indicative. The final scope is set after a brief review of your site, stack,
                      target markets and current compliance gaps.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-6">
                  <h3 className="text-lg font-semibold text-white mb-3 font-['Space_Grotesk']">Not sure what you need?</h3>
                  <p className="text-gray-300 mb-5 leading-relaxed">
                    Book a free compliance review. We will look at your current site, identify the highest-priority
                    gaps, and recommend a scoped engagement with a clear fixed or estimate-based price.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://tidycal.com/adrianniculescu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
                    >
                      Book a free compliance review <ArrowRight className="h-4 w-4" />
                    </a>
                    <a
                      href="mailto:office@mushbloom.co.uk?subject=Website%20compliance%20enquiry"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Mail className="h-4 w-4" /> Email us
                    </a>
                  </div>
                </div>
              </Section>

              <Section id="help" title="How Mushbloom can help">
                <p>
                  Mushbloom supports businesses that need website compliance work across GDPR and privacy,
                  cookie consent, WCAG 2.2 accessibility, and broader international best-practice requirements.
                  Engagements typically include audits, prioritised implementation recommendations, site-wide
                  remediation planning, form and consent reviews, legal-page alignment, accessibility
                  improvements and ongoing website governance.
                </p>
                <p>
                  The goal is not to make a site look compliant on the surface. It is to reduce risk, improve
                  trust, preserve conversion performance and make sure the website behaves correctly across the
                  user journeys that matter most. This service suits both existing Mushbloom clients and external
                  brands that need expert help improving their current website stack.
                </p>
              </Section>

              <section id="contact" className="scroll-mt-28 mt-20">
                <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-gray-900 to-green-500/10 border border-white/10 p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
                    Need help? Contact Mushbloom
                  </h2>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Talk to us about a compliance audit, a remediation roadmap, or full implementation across
                    GDPR, cookie consent and WCAG 2.2 accessibility.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <a href="mailto:office@mushbloom.co.uk" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">Email</div>
                        <div className="text-sm text-white truncate">office@mushbloom.co.uk</div>
                      </div>
                    </a>
                    <a href="https://wa.me/40725388605" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <MessageCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">WhatsApp</div>
                        <div className="text-sm text-white">+40 725 388 605</div>
                      </div>
                    </a>
                    <a href="https://mushbloom.uk" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <Globe className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-xs text-gray-400">Website</div>
                        <div className="text-sm text-white">mushbloom.uk</div>
                      </div>
                    </a>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://tidycal.com/adrianniculescu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
                    >
                      Book a Compliance Review <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      to="/legal/accessibility"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      See our Accessibility Statement
                    </Link>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>

      <Contact />
    </div>
  );
};

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-28 mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Space_Grotesk'] tracking-tight">
      {title}
    </h2>
    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">{children}</div>
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 my-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-300">
        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Step = ({ n, title, children }: { n: number; title: string; children: React.ReactNode }) => (
  <div className="mt-8 first:mt-0 pl-6 border-l-2 border-gray-800">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Step {n}</span>
      <h3 className="text-xl md:text-2xl font-semibold text-white font-['Space_Grotesk']">{title}</h3>
    </div>
    <div className="text-gray-300 leading-relaxed">{children}</div>
  </div>
);

export default WebsiteComplianceTodayGuide;
