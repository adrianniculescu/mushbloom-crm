import { useState, type FormEvent } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowDown, Check, Loader2, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { trackGenerateLead } from '@/lib/analytics';

const url = 'https://mushbloom.uk/automate';
const title = 'Tell Us What You Want to Automate | Mushbloom';
const description = 'Describe what is slowing your business down. Mushbloom maps the workflow, identifies what can be automated and builds the system that makes it work better.';
const BOOKING_URL = 'https://tidycal.com/adrianniculescu';

const helps = [
  'Automate sales, lead qualification, and follow-up.',
  'Build internal tools and AI-powered MVPs.',
  'Improve websites, landing pages, and conversion journeys.',
  'Research markets, competitors, and customer demand.',
  'Create content and improve visibility in AI search.',
  'Produce investor decks, sales presentations, and product demos.',
  'Connect CRM, email, forms, databases, and reporting systems.',
  'Review workflows and recommend where AI agents can save time.',
  'Create repeatable operating systems for marketing and operations.',
];

const areas = ['Sales and lead generation', 'Marketing and content', 'Operations', 'Customer support', 'Product development', 'Research and intelligence', 'Fundraising or investor communication', 'Other'];
const nextSteps = ['Audit', 'Blueprint', 'Prototype', 'Full implementation', 'Not sure yet'];
const budgets = ['Under £5,000', '£5,000 – £15,000', '£15,000 – £50,000', '£50,000+', 'Not sure yet'];

const inputCls = 'w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 outline-none';

export const AutomateForm = () => {
  const [f, setF] = useState({ name: '', company: '', email: '', website: '', goal: '', area: '', tools: '', today: '', frequency: '', success: '', budget: '', next: '' });
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !f.email.trim() || !f.goal.trim()) return;
    setState('sending');
    const id = crypto.randomUUID();
    const message = [
      `What to automate or improve:\n${f.goal.trim()}`,
      f.company && `Company: ${f.company}`,
      f.website && `Website: ${f.website}`,
      f.area && `Area: ${f.area}`,
      f.tools && `Current tools: ${f.tools}`,
      f.today && `What happens today:\n${f.today}`,
      f.frequency && `How often: ${f.frequency}`,
      f.success && `Successful result:\n${f.success}`,
      f.next && `Preferred next step: ${f.next}`,
    ].filter(Boolean).join('\n\n');
    const { error } = await supabase.from('contact_inquiries').insert({
      id, name: f.name.trim(), email: f.email.trim(), budget: f.budget || null,
      service_interest: 'Automation intake', message: message.slice(0, 10000),
    });
    if (error) { setState('error'); return; }
    supabase.functions.invoke('notify-new-lead', { body: { leadId: id } }).catch(() => {});
    trackGenerateLead('automation_intake', { service_interest: f.area || undefined, budget: f.budget || undefined });
    setState('done');
  };

  if (state === 'done') {
    return (
      <div className="glass-effect rounded-2xl p-8 border border-white/10 text-center">
        <Check className="h-10 w-10 text-green-400 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-white mb-2">Thanks — we've got it.</h3>
        <p className="text-gray-300">We'll review your workflow and reply within one working day. Prefer to talk now? <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">Book an automation discovery call</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="glass-effect rounded-2xl p-6 md:p-8 border border-white/10 grid gap-4 md:grid-cols-2" data-cta="automation_intake_form">
      <input required className={inputCls} placeholder="Name *" value={f.name} onChange={set('name')} maxLength={120} />
      <input className={inputCls} placeholder="Company" value={f.company} onChange={set('company')} maxLength={160} />
      <input required type="email" className={inputCls} placeholder="Email *" value={f.email} onChange={set('email')} maxLength={200} />
      <input className={inputCls} placeholder="Website" value={f.website} onChange={set('website')} maxLength={200} />
      <textarea required rows={4} className={`${inputCls} md:col-span-2`} placeholder="What would you like to automate or improve? *" value={f.goal} onChange={set('goal')} maxLength={3000} />
      <select className={inputCls} value={f.area} onChange={set('area')}>
        <option value="">Which area is most relevant?</option>
        {areas.map((a) => <option key={a} className="bg-gray-900">{a}</option>)}
      </select>
      <input className={inputCls} placeholder="What tools are you currently using?" value={f.tools} onChange={set('tools')} maxLength={500} />
      <textarea rows={3} className={inputCls} placeholder="What happens today?" value={f.today} onChange={set('today')} maxLength={2000} />
      <textarea rows={3} className={inputCls} placeholder="What would a successful result look like?" value={f.success} onChange={set('success')} maxLength={2000} />
      <input className={inputCls} placeholder="How often does the process occur?" value={f.frequency} onChange={set('frequency')} maxLength={200} />
      <select className={inputCls} value={f.budget} onChange={set('budget')}>
        <option value="">Approximate project budget</option>
        {budgets.map((b) => <option key={b} className="bg-gray-900">{b}</option>)}
      </select>
      <select className={`${inputCls} md:col-span-2`} value={f.next} onChange={set('next')}>
        <option value="">Preferred next step</option>
        {nextSteps.map((n) => <option key={n} className="bg-gray-900">{n}</option>)}
      </select>
      {state === 'error' && <p className="text-red-400 text-sm md:col-span-2">Something went wrong. Please try again or email office@mushbloom.co.uk.</p>}
      <div className="md:col-span-2 flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={state === 'sending'}>
          {state === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Tell us what you want to automate
        </Button>
        <p className="text-xs text-gray-500">We only use your details to reply to this request. See our privacy policy.</p>
      </div>
    </form>
  );
};

const AutomateIntakePage = () => (
  <div className="min-h-screen bg-black text-white">
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Service', name: 'Automation Discovery', url,
        provider: { '@type': 'ProfessionalService', name: 'Mushbloom', url: 'https://mushbloom.uk' }, description,
      })}</script>
    </Helmet>
    <Navigation />
    <main className="pt-28 pb-20 px-4">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-blue-400 mb-4">From workflow audit to working system</p>
        <h1 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] mb-6">Tell us what you want to automate</h1>
        <p className="text-lg text-gray-300 mb-4">Every business has repetitive work, disconnected tools, and processes that depend too heavily on one person.</p>
        <p className="text-gray-400 mb-8">Describe what you want to improve—whether it is lead handling, content production, customer support, internal reporting, product development, research, or fundraising preparation. We'll map the workflow, identify the highest-value opportunities, and build the right solution using AI, automation, no-code tools, and custom integrations.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg"><a href="#describe" data-cta="automate_hero">Describe your challenge <ArrowDown className="h-4 w-4" /></a></Button>
          <Button asChild size="lg" variant="outline"><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" data-cta="automate_booking">Book an automation discovery call</a></Button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">We can help you</h2>
        <ul className="grid md:grid-cols-3 gap-4">
          {helps.map((h) => <li key={h} className="glass-effect border border-white/10 rounded-xl p-4 text-gray-300 flex gap-2"><Check className="h-5 w-5 text-green-400 shrink-0" />{h}</li>)}
        </ul>
        <p className="text-center text-xl font-semibold mt-8">You bring the business challenge. We design and build the system.</p>
      </section>

      <section id="describe" className="max-w-4xl mx-auto scroll-mt-28">
        <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-2">Describe your challenge</h2>
        <p className="text-gray-400 mb-6">No need to know anything about AI tools. Just tell us what's happening today and what you'd like instead.</p>
        <AutomateForm />
      </section>
    </main>
  </div>
);

export default AutomateIntakePage;
