import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { ArrowRight, ChevronRight, BookOpen, Clock, Sparkles, Linkedin } from 'lucide-react';

const LEGIIT_URL = 'https://legiit.com/mushbloom/turn-your-linkedin-into-a-sales-machine';
const SERVICE_PATH = '/services/linkedin-sales-machine';

const sections = [
  { id: 'why-linkedin', title: 'Why LinkedIn matters for B2B sales' },
  { id: 'problem', title: 'The problem with most profiles' },
  { id: 'sales-machine', title: 'What a sales machine profile looks like' },
  { id: 'headline', title: 'Step 1: Rewrite your headline' },
  { id: 'about', title: 'Step 2: Turn About into a sales page' },
  { id: 'featured', title: 'Step 3: Use Featured strategically' },
  { id: 'routine', title: 'Step 4: A sustainable activity routine' },
  { id: 'sales-process', title: 'Step 5: Align with your sales process' },
  { id: 'mistakes', title: 'Common mistakes to avoid' },
  { id: 'mushbloom', title: 'How Mushbloom implements this' },
  { id: 'faq', title: 'Frequently asked questions' },
  { id: 'get-started', title: 'How to get started' },
];

const LinkedInSalesMachineGuide = () => {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach((s) => { const el = document.getElementById(s.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const url = 'https://mushbloom.uk/guides/linkedin-sales-machine';
  const title = 'How to Turn Your LinkedIn Profile Into a Sales Machine (Without Spam or Hype)';
  const seoTitle = 'How to Turn Your LinkedIn Profile Into a Sales Machine';
  const description =
    'A practical guide for founders and B2B sellers: rewrite your LinkedIn headline, About and Featured sections for buyers, and build a simple activity routine that consistently creates qualified conversations.';

  const faqs = [
    { q: 'What should my LinkedIn headline say?', a: 'Write it for buyers, not recruiters. A simple structure: “I help [who] achieve [outcome] by [how].” Be specific and outcome-oriented instead of listing job titles, certifications or buzzwords.' },
    { q: 'How should I structure my LinkedIn About section?', a: 'Treat it as a sales page, not a biography: open with the buyer’s problem or goal, state who you help and the outcome you deliver, explain your approach briefly, add proof without hype, and end with a clear call to action.' },
    { q: 'How often should I post on LinkedIn to generate leads?', a: 'You don’t need to post daily. A practical baseline for many founders and sellers is 2–3 short posts per week plus 10–15 minutes of thoughtful daily engagement, targeted connection requests and a simple follow-up system. Consistency matters more than virality.' },
    { q: 'What should go in my LinkedIn Featured section?', a: 'Use it as your proof and next-step hub: a link to book a call, a case study or example of your work, a flagship post explaining your approach, and a lead magnet or resource if you have one.' },
    { q: 'Why isn’t my LinkedIn activity producing sales conversations?', a: 'Usually because of an unclear offer, weak profile positioning, no clear next step for interested buyers, or inconsistent and random activity. Fix those and LinkedIn starts working as a real pipeline channel.' },
    { q: 'Can someone implement this for me?', a: 'Yes. Mushbloom’s “Turn Your LinkedIn Into a Sales Machine” service covers a profile audit, positioning and profile rewrite, an activity plan and implementation support. You keep full ownership of your account; the work is delivered as a productised engagement via Legiit.' },
  ];

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      alternativeHeadline: seoTitle,
      description,
      image: 'https://mushbloom.uk/og-image.jpg',
      author: { '@type': 'Organization', name: 'Mushbloom Team', url: 'https://mushbloom.uk' },
      publisher: { '@type': 'Organization', name: 'Mushbloom', logo: { '@type': 'ImageObject', url: 'https://mushbloom.uk/lovable-uploads/a393711c-b940-4619-8101-fb5159650972.png' } },
      datePublished: '2026-09-24T09:00:00+00:00',
      dateModified: '2026-09-24T09:00:00+00:00',
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      url,
      articleSection: 'Sales & LinkedIn',
      inLanguage: 'en-GB',
      isAccessibleForFree: true,
      keywords: ['LinkedIn sales machine', 'LinkedIn profile optimisation', 'LinkedIn headline for B2B', 'LinkedIn About section examples', 'LinkedIn lead generation for founders', 'B2B social selling', 'LinkedIn activity routine'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Wiki', item: 'https://mushbloom.uk/wiki' },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Helmet>
        <title>{seoTitle} | Mushbloom</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://mushbloom.uk/og-image.jpg" />
        <meta property="og:site_name" content="Mushbloom" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Mushbloom Team" />
        {schemas.map((s, i) => (
          <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
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
            <span className="text-blue-400">Guide</span>
          </nav>

          <header className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <BookOpen className="h-3 w-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Sales &amp; LinkedIn</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk'] leading-[1.1] tracking-tight">{title}</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
              How founders and B2B sellers turn a digital CV into a profile and routine that consistently attract,
              qualify and convert ideal buyers — without spammy outreach or empty “post every day” advice.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /><span>11 min read</span></div>
              <span>•</span>
              <span>By the Mushbloom Team</span>
            </div>
          </header>

          <div className="grid lg:grid-cols-[260px_1fr] gap-12">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-4 font-medium">On this page</p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <a key={s.id} href={`#${s.id}`}
                      className={`block py-2 pl-3 border-l-2 text-sm transition-colors ${activeId === s.id ? 'border-blue-400 text-white font-medium' : 'border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600'}`}>
                      <span className="text-gray-600 mr-2">{String(i + 1).padStart(2, '0')}</span>{s.title}
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
                  A LinkedIn profile becomes a sales machine when it is written for buyers, not recruiters. It must
                  answer four questions fast: who you help, what outcome you deliver, how you do it, and what to do
                  next. Put those answers in your headline (“I help [who] achieve [outcome] by [how]”), your About
                  section and your Featured section, then support them with a sustainable routine — 2–3 short posts
                  a week, 10–15 minutes of daily engagement, targeted connections and simple follow-up tracking.
                </p>
              </div>

              <div className="border-l-2 border-blue-500/40 pl-6 mb-16 space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>Most founders and B2B sellers treat LinkedIn like a digital CV: a place to list roles, skills and achievements. That’s useful for recruiters. It’s not useful for sales.</p>
                <p>Your ideal buyer doesn’t care about your career timeline. They care about one question:</p>
                <p className="text-white text-xl italic">“Can this person help me solve my problem?”</p>
                <p>If your profile doesn’t answer that clearly in the first few seconds, you lose the opportunity before any conversation starts.</p>
              </div>

              <Section id="why-linkedin" title="Why LinkedIn matters for B2B sales">
                <p>LinkedIn is one of the few places where:</p>
                <BulletList items={['Buyers actively research people before meetings', 'Decision-makers spend time every day', 'You can build credibility publicly, at scale']} />
                <p>For many B2B businesses, LinkedIn is already part of the buying process:</p>
                <BulletList items={[
                  'A prospect hears about you → checks your profile → decides whether to engage',
                  'You send a connection request → they review your headline and About section → accept or ignore',
                  'You post or comment → they judge your expertise based on what you share and how you write',
                ]} />
                <p>If your profile looks like a generic CV, you blend in. If it reads like a clear, buyer-focused sales asset, you stand out and create opportunities.</p>
              </Section>

              <Section id="problem" title="The problem with most LinkedIn profiles">
                <p>Open any random LinkedIn profile and you’ll often see:</p>
                <BulletList items={[
                  'A headline that lists job titles or buzzwords, not outcomes',
                  'An About section written in the third person, full of vague claims',
                  'No clear statement of who they help or what to do next',
                  'Activity that’s either non-existent or purely promotional',
                ]} />
                <p>From a buyer’s perspective, this creates friction:</p>
                <BulletList items={['“I’m not sure what they actually do.”', '“I don’t know if they work with companies like mine.”', '“I don’t see why I should message them.”']} />
                <p className="text-white font-medium">Friction kills deals. Clarity creates them.</p>
              </Section>

              <Section id="sales-machine" title="What a “sales machine” LinkedIn profile actually looks like">
                <p>A sales-focused profile is designed around the buyer, not the seller. It answers four questions quickly and clearly:</p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  {[
                    ['Who do you help?', 'Specific enough that your ideal client recognises themselves.'],
                    ['What outcome do you deliver?', 'In business terms: revenue, cost, risk, time, capacity, certainty.'],
                    ['How do you do it?', 'Your approach, framework or model — without jargon.'],
                    ['What should I do next?', 'Book a call, view a case study, download a resource, message you.'],
                  ].map(([q, a]) => (
                    <div key={q} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <h3 className="text-white font-semibold mb-2 font-['Space_Grotesk']">{q}</h3>
                      <p className="text-gray-400 text-base">{a}</p>
                    </div>
                  ))}
                </div>
                <p>These answers show up in three key places: your <strong className="text-white">headline</strong>, your <strong className="text-white">About section</strong> and your <strong className="text-white">Featured section</strong>. Everything else — experience, recommendations, posts — supports this core story.</p>
              </Section>

              <Section id="headline" title="Step 1: Rewrite your headline for buyers, not recruiters">
                <p>Your headline is the most visible part of your profile. It appears in search results, connection requests, comments and messages. Most people waste it on “Founder &amp; CEO | Helping businesses grow | Speaker | Consultant” or long lists of certifications and buzzwords.</p>
                <p>A buyer-focused headline is specific and outcome-oriented. For example:</p>
                <Quote>“I help B2B SaaS founders turn LinkedIn into a consistent demo pipeline”</Quote>
                <Quote>“Operations consultant for 7–8 figure agencies: cut chaos, improve margins, free up founder time”</Quote>
                <Quote>“Fractional CFO for tech services: clearer numbers, better decisions, stronger cash flow”</Quote>
                <p>Structure you can use:</p>
                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5 text-white text-xl font-['Space_Grotesk']">“I help [who] achieve [outcome] by [how].”</div>
                <p>That’s it. No need to cram every skill or title into one line.</p>
              </Section>

              <Section id="about" title="Step 2: Turn your About section into a sales page">
                <p>Your About section is not a biography. It’s your sales page. Most About sections start with “John has over 15 years of experience…”, focus on the person rather than the buyer, and use vague language like “passionate about helping businesses grow”.</p>
                <p>A sales-focused About section starts with the buyer’s problem or goal, describes the outcome in concrete terms, explains your approach briefly and ends with a clear call to action. A simple structure you can adapt:</p>
                <Numbered n={1} title="Hook — name the problem or goal">“If you run a B2B service business, you already know: visibility doesn’t automatically become revenue.”</Numbered>
                <Numbered n={2} title="Who you help and what outcome you deliver">“I work with founders and sales leaders who want LinkedIn to generate qualified conversations, not just impressions.”</Numbered>
                <Numbered n={3} title="How you do it">“We clarify your offer, rewrite your profile around the buyer, and set up a simple, sustainable activity routine.”</Numbered>
                <Numbered n={4} title="Proof or credibility (without hype)">“Mushbloom has supported businesses with marketing, conversion and lead generation since 2014.”</Numbered>
                <Numbered n={5} title="Call to action">“If you’d like a profile that consistently supports your sales goals, message me or book a call via the link below.”</Numbered>
                <p>Keep paragraphs short. Write in plain business language. Avoid buzzwords and exaggerated claims.</p>
              </Section>

              <Section id="featured" title="Step 3: Use your Featured section strategically">
                <p>Many people leave Featured empty or fill it with random links. Treat it as your proof and next-step hub:</p>
                <BulletList items={['A link to book a call or discovery session', 'A case study or example of your work', 'A flagship post or article that explains your approach', 'A lead magnet or resource (if you have one)']} />
                <p>Each item should support your core message: “This is who I help.” “This is what working with me looks like.” “This is how to take the next step.” If a visitor clicks nothing else, they should still understand your offer and know what to do next.</p>
              </Section>

              <Section id="routine" title="Step 4: Design a simple, sustainable LinkedIn activity routine">
                <p>A great profile creates potential. Activity turns that potential into pipeline. You don’t need to post daily. You do need a repeatable routine that keeps you visible, builds trust over time and creates reasons for prospects to engage.</p>
                <div className="grid sm:grid-cols-2 gap-4 my-6">
                  <RoutineCard title="Weekly rhythm" items={['2–3 short posts per week', 'One insight about your niche or offer', 'One story or lesson from client work (anonymised if needed)', 'One simple framework or checklist']} />
                  <RoutineCard title="Daily engagement (10–15 min)" items={['Comment thoughtfully on posts from ideal clients, partners and peers', 'Share useful perspectives, not generic “Great post!”']} />
                  <RoutineCard title="Connection strategy" items={['Send targeted requests to people in your ideal market', 'Include a short, human note referencing something specific']} />
                  <RoutineCard title="Follow-up system" items={['Move promising conversations to DMs, then to a call or email', 'Track new connections, conversations started, calls booked']} />
                </div>
                <p>The goal is consistency, not virality. You’re building a sales channel, not a media brand.</p>
              </Section>

              <Section id="sales-process" title="Step 5: Align LinkedIn with your overall sales process">
                <p>LinkedIn should not live in isolation. It must connect to your broader sales workflow:</p>
                <BulletList items={[
                  'Offer clarity: you must know what you sell, to whom, and at what price.',
                  'Lead capture: where do LinkedIn conversations go? Calendar link? Email? CRM?',
                  'Follow-up: how do you track and nurture leads that start on LinkedIn?',
                  'Content feedback loop: which topics generate the most interest? Double down on those.',
                ]} />
                <p>If LinkedIn activity doesn’t lead to real conversations, the problem is usually an unclear offer, weak profile positioning, no clear next step for interested buyers, or inconsistent activity. Fix those, and LinkedIn starts working as a true pipeline channel.</p>
                <p>Need somewhere for those leads to land? See our <Link to="/lead-generation-data" className="text-blue-400 hover:underline">lead generation &amp; data solutions</Link> or <Link to="/agency" className="text-blue-400 hover:underline">AI automation services</Link>.</p>
              </Section>

              <Section id="mistakes" title="Common mistakes that kill LinkedIn as a sales channel">
                {[
                  ['Writing for peers instead of buyers', 'Content that impresses other marketers or consultants but confuses clients.'],
                  ['Over-promising results', 'Claims like “guaranteed 10x pipeline in 30 days” that sound unrealistic.'],
                  ['Copying viral formats without substance', 'Hooks and structures without real insight or relevance to your niche.'],
                  ['Treating LinkedIn as a broadcast channel only', 'Posting without engaging, commenting or building relationships.'],
                  ['No clear call to action', 'People read your profile or posts and think, “That’s interesting… now what?”'],
                ].map(([t, d]) => (
                  <div key={t} className="pl-5 border-l-2 border-red-500/40">
                    <h3 className="text-white font-semibold text-lg font-['Space_Grotesk']">{t}</h3>
                    <p className="text-gray-400 text-base">{d}</p>
                  </div>
                ))}
                <p>Every element should move a qualified buyer closer to a conversation with you.</p>
              </Section>

              <Section id="mushbloom" title="How Mushbloom implements this: “Turn Your LinkedIn Into a Sales Machine”">
                <p>Mushbloom’s <Link to={SERVICE_PATH} className="text-blue-400 hover:underline">Turn Your LinkedIn Into a Sales Machine</Link> service takes this entire approach and implements it with you, step by step.</p>
                <Numbered n={1} title="Profile audit and gap analysis">We review your current profile, target market and offer to identify the biggest gaps between how buyers see you and how you want to be seen.</Numbered>
                <Numbered n={2} title="Positioning and profile rewrite">We clarify who you help, what outcome you deliver and how you do it, then rewrite your headline, About section and Featured area in clear, business language.</Numbered>
                <Numbered n={3} title="LinkedIn activity plan">We define a simple, sustainable routine for connections, engagement and content that supports your sales goals without overwhelming your schedule.</Numbered>
                <Numbered n={4} title="Implementation support">We guide you through applying the changes, provide example posts and messages, and help you set up a basic tracking rhythm.</Numbered>
                <p>You keep full ownership of your LinkedIn account. The work is delivered as a focused, productised engagement via Legiit.</p>
                <p className="text-white font-medium">Who this is for:</p>
                <BulletList items={[
                  'Founders, consultants and B2B service providers who rely on LinkedIn for visibility and leads',
                  'Sales professionals who want a repeatable, ethical LinkedIn prospecting routine',
                  'Businesses that already sell to other businesses and want LinkedIn to work as a consistent pipeline channel',
                ]} />
                <p>If you prefer practical, business-first advice over generic “post more” tips, this is built for you.</p>
              </Section>

              <Section id="faq" title="Frequently asked questions">
                <div className="space-y-4">
                  {faqs.map((f) => (
                    <details key={f.q} className="group rounded-xl border border-white/10 bg-white/5 p-5">
                      <summary className="cursor-pointer text-white font-semibold list-none flex justify-between gap-4">
                        {f.q}<ChevronRight className="h-5 w-5 shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-gray-300 text-base">{f.a}</p>
                    </details>
                  ))}
                </div>
              </Section>

              <section id="get-started" className="scroll-mt-28 mb-16">
                <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-green-500/10 p-8 md:p-10">
                  <Linkedin className="h-8 w-8 text-blue-400 mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">How to get started</h2>
                  <p className="text-gray-300 mb-6">If you’d like a done-with-you implementation of everything in this article, use Mushbloom’s dedicated service. On the service page you’ll find what it delivers, how the process works, who it’s designed for, and direct links to order via Legiit.</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={LEGIIT_URL} target="_blank" rel="noopener noreferrer" data-cta="linkedin_guide_legiit"
                      className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform inline-flex items-center justify-center gap-2">
                      Get the service on Legiit <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link to={SERVICE_PATH} data-cta="linkedin_guide_service"
                      className="border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
                      See full service details
                    </Link>
                  </div>
                  <p className="text-gray-400 text-sm mt-6">Prefer to talk first? <a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Book a call</a> or use the form below.</p>
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
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
        <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-green-400 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const Quote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="border-l-2 border-blue-500/50 pl-5 my-3 text-white/90 italic">{children}</blockquote>
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

const RoutineCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5">
    <h3 className="text-white font-semibold mb-2 font-['Space_Grotesk']">{title}</h3>
    <BulletList items={items} />
  </div>
);

export default LinkedInSalesMachineGuide;
