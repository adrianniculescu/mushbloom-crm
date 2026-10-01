import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowDown, Check, ShieldCheck, Send, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { trackGenerateLead } from '@/lib/analytics';

const url = 'https://mushbloom.uk/ai-workforce';
const title = 'AI Workforce Systems for Business | Mushbloom';
const description = 'Mushbloom designs and deploys supervised AI workforce systems for sales, marketing, customer service and operations. Practical AI implementation for growing businesses.';

const teams = [
  { label: '01 / Sales & lead response', name: 'Never lose the thread on a new enquiry.', text: 'Capture new enquiries, qualify leads, summarise conversations, suggest next actions, update your CRM and prepare follow-ups.', agents: 'Lead Intake · Qualification · CRM Update · Follow-Up Drafting · Meeting Preparation' },
  { label: '02 / Marketing', name: 'Make more of the knowledge you already have.', text: 'Plan campaigns, draft content, repurpose long-form material, prepare newsletters and monitor performance.', agents: 'Content Strategy · Social Content · Email Campaign · SEO & LLM Visibility · Campaign Reporting' },
  { label: '03 / Customer service', name: 'Respond consistently, escalate intelligently.', text: 'Answer common questions from approved knowledge, classify requests, route complex issues and prepare responses for review.', agents: 'FAQ Assistant · Support Triage · Escalation · Knowledge Base · Customer Follow-Up' },
  { label: '04 / Operations', name: 'Give your team more time for the real work.', text: 'Organise documents, summarise meetings, prepare reports, monitor tasks and identify bottlenecks.', agents: 'Operations Coordinator · Document Analysis · Meeting Summary · Reporting · Workflow Monitoring' },
];

const process = [
  { title: 'Assess', text: 'Identify where your team loses time, misses opportunities or repeats manual work.' },
  { title: 'Design', text: 'Map the workflow, define agent roles, select knowledge sources and set access and approval rules.' },
  { title: 'Deploy', text: 'Connect approved tools, test real scenarios and launch the first supervised agent team.' },
  { title: 'Improve', text: 'Review outputs, refine instructions and add workflows as your business gains confidence.' },
];

const examples = [
  { type: 'Local service company', flow: 'New enquiry → qualification → CRM record → booking suggestion → human-approved follow-up' },
  { type: 'Real estate agency', flow: 'Property details → listing draft → lead capture → qualification → agent assignment → follow-up reminders' },
  { type: 'SaaS business', flow: 'Website visitor → qualification → CRM update → personalised draft → sales notification → meeting preparation' },
  { type: 'Professional-services firm', flow: 'Client enquiry → service classification → document collection → proposal draft → approval → follow-up schedule' },
  { type: 'Marketing agency', flow: 'Client brief → campaign plan → content drafts → approval queue → publishing schedule → reporting' },
];

const packages = [
  { name: 'AI Opportunity Assessment', price: 'From £250', detail: 'Approx. AED 1,160', items: ['Business and workflow review', 'Three to five AI opportunities', 'Recommended agent architecture', 'Tool and integration review', 'Risk and approval recommendations', 'Written implementation roadmap'] },
  { name: 'AI Workforce Sprint', price: 'From £1,500', detail: 'Approx. AED 6,940', items: ['One defined business workflow', 'One or two configured agents', 'Business knowledge setup', 'One approved integration', 'Testing, launch and team training', '14–30 days of post-launch refinement'] },
  { name: 'AI Workforce System', price: 'From £5,000', detail: 'Approx. AED 18,360', items: ['Multiple coordinated agents and workflows', 'CRM, website, email or other integrations', 'Approval and permissions architecture', 'Dashboard and activity monitoring', 'Team onboarding', '30–90 days of optimisation'] },
  { name: 'Ongoing Support', price: 'From £299/month', detail: 'Approx. AED 1,100/month', items: ['Monitoring and maintenance', 'Prompt and workflow refinement', 'Knowledge-base updates', 'Monthly performance review', 'Minor workflow changes', 'Support for approved integrations'] },
];

const faqs = [
  { q: 'What is an AI workforce system?', a: 'A coordinated group of specialised AI agents, each with a defined role, approved knowledge, controlled access and measurable tasks. It supports your team rather than replacing it.' },
  { q: 'Can agents make decisions without human approval?', a: 'We design human review for sensitive actions and clear escalation rules. Financial, legal and other high-risk decisions are not made automatically.' },
  { q: 'Do we need to replace our existing tools?', a: 'No. We review your existing business systems and connect approved tools where appropriate. The scope depends on your workflow and integration requirements.' },
  { q: 'What is the difference between the free audit and the paid assessment?', a: 'The free 20-minute audit is an initial conversation about your bottleneck. The paid AI Opportunity Assessment includes a business and workflow review, opportunity shortlist, recommended architecture and written implementation roadmap.' },
  { q: 'How much does implementation cost?', a: 'The AI Workforce Sprint starts from £1,500 and the broader AI Workforce System starts from £5,000. Final pricing depends on the number of workflows, agents, integrations, users and approval requirements.' },
];

const schema = [
  { '@context': 'https://schema.org', '@type': 'Service', name: 'AI Workforce Systems', serviceType: 'Supervised AI agent implementation', url, description, provider: { '@type': 'ProfessionalService', name: 'Mushbloom', url: 'https://mushbloom.uk', email: 'office@mushbloom.co.uk' }, offers: packages.map(({ name, price }) => ({ '@type': 'Offer', name, priceSpecification: { '@type': 'PriceSpecification', minPrice: Number(price.replace(/[^\d]/g, '')), priceCurrency: 'GBP' } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mushbloom.uk/' }, { '@type': 'ListItem', position: 2, name: 'AI Workforce Systems', item: url }] },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
];

function AssessmentForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workflow, setWorkflow] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !workflow.trim()) return;
    setStatus('sending');
    const leadId = crypto.randomUUID();
    try {
      const { error } = await supabase.from('contact_inquiries').insert({ id: leadId, name: name.trim(), email: email.trim(), message: workflow.trim(), service_interest: 'AI Workforce Systems' });
      if (error) throw error;
      supabase.functions.invoke('notify-new-lead', { body: { leadId } }).catch(() => {});
      trackGenerateLead('ai_workforce_assessment', { service_interest: 'AI Workforce Systems' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return <section id="assessment" className="border-t border-border py-20 scroll-mt-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-semibold uppercase text-accent">Start here</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">Tell us what you want to improve.</h2>
        <p className="mt-5 text-lg text-muted-foreground">Share one slow, repetitive or expensive workflow. We’ll discuss whether a supervised AI system is the right fit.</p>
        <p className="mt-7 text-muted-foreground">Prefer to talk first? <a className="text-accent underline underline-offset-4" data-cta="ai_workforce_free_audit" href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer">Book a free 20-minute audit</a>. The written AI Opportunity Assessment is a separate paid service, starting from £250.</p>
        <p className="mt-5 text-muted-foreground">Or email <a className="text-accent underline underline-offset-4" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.</p>
      </div>
      {status === 'success' ? <div role="status" className="border-t-2 border-accent pt-6"><Check className="text-accent mb-4" /><h3 className="text-2xl font-semibold">Enquiry received</h3><p className="mt-3 text-muted-foreground">Thanks. We’ll review your workflow and get back to you.</p></div> :
      <form onSubmit={submit} className="grid gap-5" aria-label="AI Workforce enquiry">
        <label className="grid gap-2 text-sm font-semibold">Name <input required maxLength={100} value={name} onChange={e => setName(e.target.value)} className="w-full rounded border border-input bg-background px-4 py-3 text-foreground" placeholder="Your name" /></label>
        <label className="grid gap-2 text-sm font-semibold">Email <input type="email" required maxLength={255} value={email} onChange={e => setEmail(e.target.value)} className="w-full rounded border border-input bg-background px-4 py-3 text-foreground" placeholder="you@company.com" /></label>
        <label className="grid gap-2 text-sm font-semibold">Which workflow should we look at? <textarea required maxLength={2000} rows={4} value={workflow} onChange={e => setWorkflow(e.target.value)} className="w-full rounded border border-input bg-background px-4 py-3 text-foreground" placeholder="For example: new enquiries take too long to follow up" /></label>
        <p className="text-xs text-muted-foreground">By submitting, you agree we may contact you about your enquiry. We do not share your details with third parties for marketing. See our <Link to="/legal/privacy-policy" className="underline">Privacy Policy</Link>.</p>
        {status === 'error' && <p role="alert" className="text-destructive">Your enquiry could not be sent. Please try again or email us directly.</p>}
        <Button type="submit" disabled={status === 'sending'} size="lg" className="w-full sm:w-fit" data-cta="ai_workforce_enquiry">{status === 'sending' ? <Loader2 className="animate-spin" /> : <Send />} Send enquiry</Button>
      </form>}
    </div>
  </section>;
}

export default function AiWorkforcePage() {
  return <div className="workforce-theme min-h-screen bg-background text-foreground">
    <Helmet>
      <title>{title}</title><meta name="description" content={description} /><link rel="canonical" href={url} />
      <meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:url" content={url} /><meta property="og:type" content="website" /><meta name="twitter:card" content="summary" />
      {schema.map((entry, index) => <script key={index} type="application/ld+json">{JSON.stringify(entry)}</script>)}
    </Helmet>
    <Navigation />
    <main>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase text-accent">AI Workforce Systems / Supervised implementation</p>
          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">Put practical AI agents to work inside your business.</h1>
          <p className="mt-7 max-w-3xl text-xl text-muted-foreground leading-relaxed">Mushbloom designs and deploys supervised AI agents that help businesses capture leads, automate repetitive work, improve customer response and support marketing and operations.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><a href="#assessment" data-cta="ai_workforce_hero">Book an AI Workforce Assessment <ArrowRight /></a></Button><Button asChild size="lg" variant="outline"><a href="#process">See how it works <ArrowDown /></a></Button></div>
          <p className="mt-6 text-sm text-muted-foreground">From lead response to content production and reporting, we build around how your business actually operates. Sensitive decisions stay with people.</p>
        </div>
      </section>

      <section className="py-20" id="what-is-it"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2">
        <div><p className="text-sm font-semibold uppercase text-accent">The approach</p><h2 className="mt-4 text-3xl md:text-4xl font-bold">Connected to the work. Not another disconnected tool.</h2><p className="mt-5 text-lg text-muted-foreground">Most businesses do not need more AI tools. They need AI connected to the right work. An AI workforce is a coordinated group of specialised agents, each with a defined role, approved knowledge, controlled access and measurable tasks.</p></div>
        <div className="border-l-2 border-accent pl-7"><h3 className="font-semibold text-xl">Every system is designed around</h3><ul className="mt-6 space-y-4 text-muted-foreground">{['Business-specific instructions and knowledge', 'Defined tools and integrations', 'Permission levels and approval rules', 'Human review for sensitive actions', 'Activity logs and performance monitoring', 'Ongoing refinement as your business changes'].map(item => <li className="flex gap-3" key={item}><Check className="mt-1 h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul></div>
      </div></section>

      <section className="py-20 border-y border-border bg-card" id="teams"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase text-accent">What we automate</p><h2 className="mt-4 mb-4 text-3xl md:text-4xl font-bold">Agent teams built for a defined job.</h2><p className="text-muted-foreground max-w-2xl mb-10">Faster lead response, less repetitive admin, more consistent follow-up, better use of business knowledge and clear workflow monitoring.</p>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">{teams.map(team => <article key={team.label} className="bg-card p-7 md:p-9"><p className="text-accent text-sm font-semibold">{team.label}</p><h3 className="mt-4 text-2xl font-bold">{team.name}</h3><p className="mt-4 text-muted-foreground">{team.text}</p><p className="mt-6 text-xs text-muted-foreground"><span className="font-semibold text-foreground">Possible agents: </span>{team.agents}</p></article>)}</div>
        <div className="mt-10 border-t border-border pt-8"><h3 className="text-xl font-semibold">Specialist workflows</h3><p className="mt-3 text-muted-foreground max-w-3xl">We can also scope agents for real estate, venture capital, music, professional services, ecommerce and local businesses. Examples of specialised concepts include Nexus Investor Intelligence, Realto Property Growth and DJ Agape Music Growth. These illustrate possible workflows, not a standard system delivered to every client.</p></div>
      </div></section>

      <section className="py-20 scroll-mt-20" id="process"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase text-accent">How implementation works</p><h2 className="mt-4 text-3xl md:text-4xl font-bold">Start with one workflow. Grow with evidence.</h2><div className="mt-10 grid gap-8 md:grid-cols-4">{process.map((step, index) => <div key={step.title} className="border-t-2 border-accent pt-5"><span className="text-accent text-sm font-bold">0{index + 1}</span><h3 className="mt-3 text-xl font-semibold">{step.title}</h3><p className="mt-3 text-muted-foreground">{step.text}</p></div>)}</div><p className="mt-12 border border-border p-5 text-sm md:text-base text-muted-foreground">Business knowledge → AI agent → approved business tools → human review where required → action, reporting and audit trail</p></div></section>

      <section className="py-20 bg-card border-y border-border"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase text-accent">Business-specific examples</p><h2 className="mt-4 text-3xl md:text-4xl font-bold">What could we automate for your business?</h2><div className="mt-10 divide-y divide-border border-t border-b border-border">{examples.map(example => <div key={example.type} className="py-5 grid gap-3 md:grid-cols-[15rem_1fr]"><h3 className="font-semibold">{example.type}</h3><p className="text-muted-foreground">{example.flow}</p></div>)}</div><p className="mt-4 text-sm text-muted-foreground">Illustrative workflow ideas; each implementation is scoped to your systems, permissions and team.</p></div></section>

      <section className="py-20" id="safety"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2"><div><ShieldCheck className="text-accent h-8 w-8" /><h2 className="mt-5 text-3xl md:text-4xl font-bold">AI should be useful, not uncontrolled.</h2><p className="mt-5 text-lg text-muted-foreground">We design supervised AI workforces that support your team, connect to your business systems and automate clearly defined workflows.</p><p className="mt-5 text-muted-foreground">We do not promise that AI can replace your team or eliminate all operating costs. We identify and implement practical systems designed to improve efficiency, response time and business execution.</p></div><ul className="space-y-4 text-muted-foreground">{['Business-specific access permissions', 'Approved knowledge sources', 'Human approval for sensitive actions', 'Activity logs and clear escalation rules', 'No automatic financial, legal or high-risk decisions', 'Secure handling of client information', 'Defined ownership of accounts, content and workflows'].map(item => <li key={item} className="flex gap-3 border-b border-border pb-3"><Check className="shrink-0 h-5 w-5 text-accent" />{item}</li>)}</ul></div></section>

      <section className="py-20 bg-card border-y border-border" id="packages"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><p className="text-sm font-semibold uppercase text-accent">Packages</p><h2 className="mt-4 text-3xl md:text-4xl font-bold">Choose a practical starting point.</h2><div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{packages.map(pkg => <article key={pkg.name} className="border border-border p-6 flex flex-col"><h3 className="text-xl font-semibold min-h-14">{pkg.name}</h3><p className="mt-4 text-2xl font-bold">{pkg.price}</p><p className="text-sm text-muted-foreground">{pkg.detail}</p><ul className="mt-6 mb-8 space-y-3 text-sm text-muted-foreground flex-1">{pkg.items.map(item => <li key={item} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-accent" />{item}</li>)}</ul><Button asChild variant="outline"><a href="#assessment">Enquire <ArrowRight /></a></Button></article>)}</div><p className="mt-6 text-sm text-muted-foreground">Final pricing depends on the number of workflows, agents, integrations, users and approval requirements. AED figures are approximate, not fixed exchange rates.</p></div></section>

      <section className="py-20" id="faq"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl md:text-4xl font-bold mb-8">Frequently asked questions</h2><div className="divide-y divide-border">{faqs.map(({ q, a }) => <details key={q} className="group py-5"><summary className="cursor-pointer text-lg font-semibold marker:text-accent">{q}</summary><p className="mt-3 text-muted-foreground leading-relaxed">{a}</p></details>)}</div><p className="mt-8 text-sm text-muted-foreground">Looking to implement just one workflow? <Link to="/services/ai-workflows" className="text-accent underline underline-offset-4">Explore AI Workflows</Link>.</p></div></section>
      <AssessmentForm />
    </main>
  </div>;
}