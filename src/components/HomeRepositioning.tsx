import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Handshake,
  House,
  MessageSquareMore,
  RefreshCw,
  ShoppingBag,
  Sparkles,
  Wrench,
} from 'lucide-react';

const BOOKING_URL = 'https://tidycal.com/adrianniculescu';

const problems = [
  'Leads arrive from your website, ads, phone or WhatsApp, but responses are slow or inconsistent. Some slip through entirely.',
  'You send quotes, but follow-up depends on memory and mood. Good opportunities go cold.',
  'Your team loses hours to status updates, reminders, payment chasing and copying data between tools.',
  'You know AI could help, but you do not want another complicated platform or a pitch full of jargon.',
];

const outcomes = [
  {
    icon: MessageSquareMore,
    title: 'Capture and convert more leads',
    text: 'We set up systems that answer enquiries instantly, qualify them and book appointments automatically—24/7, across web, phone, email or messaging apps.',
  },
  {
    icon: RefreshCw,
    title: 'Follow up like a professional sales team',
    text: 'Every quote, enquiry and lead gets a clear follow-up sequence. No more forgotten messages or “I’ll reply later” that never happens.',
  },
  {
    icon: Clock3,
    title: 'Save hours on admin, every week',
    text: 'We automate reminders, status updates, review requests, payment chases and basic customer questions. Your team keeps its time back.',
  },
];

const steps = [
  ['Discovery call', 'We ask simple questions about your day-to-day. Where is time lost? Where do leads drop off? What is costing you money now?'],
  ['Map your lead-to-payment pipeline', 'We review every step from first enquiry to payment and identify the one or two changes likely to create the biggest impact.'],
  ['Build a minimum viable AI solution', 'Using affordable, proven no-code tools, we build one simple system for enquiry handling, qualification, booking, follow-up or admin.'],
  ['Prove value, then scale', 'You see the system working in real life. Once it delivers, we formalise it with a clear fee and ongoing support.'],
];

const audiences = [
  { icon: Wrench, label: 'Trades and home services' },
  { icon: House, label: 'Local service providers and contractors' },
  { icon: BriefcaseBusiness, label: 'Professional and business services' },
  { icon: ShoppingBag, label: 'eCommerce and product businesses' },
  { icon: Building2, label: 'SMEs with lead, sales or admin bottlenecks' },
];

const reasons = [
  ['No jargon, just outcomes', "We don't talk about 'LLMs', 'agents' or 'stacks'. We talk about revenue, saved time and clearer cash flow."],
  ['Built for real workflows, not demos', 'Our systems are designed around how your business actually works: enquiries, quotes, site visits, deliveries, payments.'],
  ['Fast to implement, easy to live with', "Most core systems go live in days, not months. Your team doesn't need training marathons to use them."],
  ['International team, agency delivery', 'UK-based with an international team. All work is done by our agency (operating since 2014). Clear scope, clear fees, no surprises.'],
  ['Flexible engagement models', 'From productised offers via Legiit to custom projects and retainers—choose the level that fits your budget and goals.'],
];

const supportingServices = [
  { to: '/services/ai-workflows', title: 'AI Workflows', text: 'Identify and implement one high-value workflow inside the tools you already use.' },
  { to: '/services/linkedin-sales-machine', title: 'LinkedIn Sales Machine', text: 'Turn your profile and activity into a consistent B2B sales asset.' },
  { to: '/llmboost', title: 'LLMboost', text: 'Improve how your business is discovered and cited in AI-powered search.' },
  { to: '/lead-generation-data', title: 'Lead Generation & Data', text: 'Build targeted, responsible lead streams for your sales process.' },
  { to: '/newswire', title: 'Mushbloom Newswire', text: 'Distribute announcements through specialist industry publications.' },
  { to: '/services/lovable-development', title: 'No-Code Development', text: 'Launch practical websites and applications without a long development cycle.' },
];

const HomeRepositioning = () => (
  <>
    <section className="py-20 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase text-green-400 mb-4">The everyday problem</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] leading-tight">
              If you run an SME or owner-run business, this probably sounds familiar
            </h2>
          </div>
          <div className="space-y-4">
            {problems.map((problem) => (
              <div key={problem} className="flex gap-4 border-b border-white/10 py-5">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-400 flex-none" />
                <p className="text-lg text-gray-300 leading-relaxed">{problem}</p>
              </div>
            ))}
            <p className="text-2xl text-white font-semibold pt-4">That is exactly what we fix.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="services" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase text-blue-400 mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] mb-5">What we do, in plain English</h2>
          <p className="text-xl text-gray-300">We do not sell “AI projects”. We sell outcomes: more money in, less money wasted and less time lost to admin.</p>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map(({ icon: Icon, title, text }) => (
            <article key={title} className="glass-effect rounded-lg p-7 border border-white/10">
              <Icon className="h-7 w-7 text-green-400 mb-8" />
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-900 to-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase text-green-400 mb-4">A practical process</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] mb-5">How it works</h2>
          <p className="text-xl text-gray-300">One clear system that saves time and makes money—then replicate what works across your business.</p>
        </header>
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
          {steps.map(([title, text], index) => (
            <article key={title} className="bg-gray-950 p-7 md:p-9">
              <span className="text-sm font-bold text-blue-400">0{index + 1}</span>
              <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] mt-5 mb-3">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-5">Who we help</h2>
            <p className="text-lg text-gray-300 mb-8">We focus on businesses where every missed enquiry or slow follow-up directly hits revenue.</p>
            <div className="space-y-3">
              {audiences.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 py-3 border-b border-white/10 text-gray-200">
                  <Icon className="h-5 w-5 text-green-400" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-8">Why work with us</h2>
            <div className="space-y-7">
              {reasons.map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <CheckCircle2 className="h-5 w-5 text-blue-400 flex-none mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                    <p className="text-gray-400 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 border-y border-white/10 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl mb-10">
          <p className="text-sm font-semibold uppercase text-blue-400 mb-4">Specialist capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-4">More ways we support growth</h2>
          <p className="text-lg text-gray-300">Start with the bottleneck. We bring in the right specialist capability only when it supports the outcome.</p>
        </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportingServices.map((service) => (
            <Link key={service.to} to={service.to} className="group border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400 mb-5 leading-relaxed">{service.text}</p>
              <span className="text-sm text-blue-400 inline-flex items-center gap-2">Explore <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-green-400 mb-5"><Globe2 className="h-5 w-5" /><span className="text-sm font-semibold uppercase">International delivery</span></div>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] mb-6">Experience you can rely on</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-5">Mushbloom has supported businesses with digital marketing, conversion strategy, sales funnels, lead generation and workflow automation since 2014.</p>
            <p className="text-lg text-gray-300 leading-relaxed">The AI systems we build for SMEs draw on that same commercial focus: clear process, measurable impact and practical implementation.</p>
          </div>
          <div className="border-l-2 border-green-400 pl-7 py-2">
            <Handshake className="h-8 w-8 text-blue-400 mb-6" />
            <p className="text-xl text-white leading-relaxed mb-5">Every system comes with documentation, simple operating rules and a clear handover, so you are not dependent on us forever.</p>
            <p className="text-gray-400">Much of our work touches confidential commercial processes, so we do not publish every project publicly.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-blue-400/30 bg-blue-500/5 rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-400 mb-4"><Sparkles className="h-5 w-5" /><span className="text-sm font-semibold uppercase">Low-risk starting point</span></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-['Space_Grotesk'] mb-5">Start with a clear, low-risk audit</h2>
              <p className="text-lg text-gray-300 mb-6">We begin with a focused 20–30 minute audit of your current lead and admin process. You'll leave with:</p>
              <ul className="space-y-2 text-gray-300">
                {["A clear view of where you're losing time and money", 'One or two high-impact AI opportunities specific to your business', 'A simple plan to implement them, with indicative costs and timelines'].map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-green-400 flex-none" />{item}</li>)}
              </ul>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="audit_section" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-7 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap">
              Book a free 20‑minute audit <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-7">No pressure sales call. Just a practical working session to identify where automation can create clear business value.</p>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-gray-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-['Space_Grotesk'] mb-6">Ready to turn AI into a real business system?</h2>
        <p className="text-lg text-gray-300 mb-8">If you want a simple AI system that captures more leads, follows up consistently and saves hours—without adding headcount or complexity—let's talk.</p>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="final_cta" className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-7 py-4 rounded-lg font-semibold inline-flex items-center justify-center gap-2">
          Book a free 20‑minute audit <ArrowRight className="h-5 w-5" />
        </a>
        <p className="text-gray-400 mt-6">Or email us at <a href="mailto:office@mushbloom.co.uk" className="text-blue-400 hover:underline">office@mushbloom.co.uk</a> with a short description of your business and biggest bottleneck.</p>
        <p className="text-sm text-gray-500 mt-3">Prefer a productised start? See our <Link to="/partners" className="text-green-400 hover:underline">partners</Link>.</p>
      </div>
    </section>
  </>
);

export default HomeRepositioning;