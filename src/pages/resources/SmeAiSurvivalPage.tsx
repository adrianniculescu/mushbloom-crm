import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gauge, Loader2, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ResourceMeta from '@/components/ResourceMeta';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { trackGenerateLead } from '@/lib/analytics';
import { survivalStats, guidelines, quiz, readinessScore, readinessBand, survivalPath } from '@/data/smeSurvival';

const title = 'The SME AI Survival Guide: 7 Guidelines for Owner-Run Businesses';
const desc = 'How AI is changing the way small businesses win customers, with sourced 2025 data, seven practical guidelines and a free AI readiness check.';

function ReadinessCheck() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const done = answers.length === quiz.length && answers.every(a => a !== undefined);
  const score = done ? readinessScore(answers) : null;
  const band = score !== null ? readinessBand(score) : null;

  async function send(e: FormEvent) {
    e.preventDefault();
    if (score === null || !name.trim() || !email.trim()) return;
    setStatus('sending');
    const leadId = crypto.randomUUID();
    const message = [`AI readiness score: ${score}/100 (${band!.label})`, ...quiz.map((q, i) => `${q.q} — ${q.options[answers[i]]}`)].join('\n');
    try {
      const { error } = await supabase.from('contact_inquiries').insert({ id: leadId, name: name.trim(), email: email.trim(), message, service_interest: 'AI Readiness Check' });
      if (error) throw error;
      supabase.functions.invoke('notify-new-lead', { body: { leadId } }).catch(() => {});
      trackGenerateLead('ai_readiness_check', { service_interest: 'AI Readiness Check' });
      setStatus('sent');
    } catch { setStatus('error'); }
  }

  return <section id="readiness" className="mt-20 scroll-mt-24 rounded-xl border border-border p-6 sm:p-10">
    <p className="text-primary text-xs uppercase tracking-wider flex items-center gap-2"><Gauge className="h-4 w-4" /> 2-minute self-assessment</p>
    <h2 className="text-3xl font-bold font-['Space_Grotesk'] mt-3">Check your AI survival readiness</h2>
    <p className="text-muted-foreground mt-3">Eight questions. Your score appears instantly; nothing is sent unless you choose to.</p>
    <ol className="mt-8 space-y-6">
      {quiz.map((item, i) => <li key={i}>
        <p className="font-semibold">{i + 1}. {item.q}</p>
        <div className="grid sm:grid-cols-2 gap-2 mt-3">{item.options.map((o, j) => <button key={j} type="button" onClick={() => setAnswers(a => { const n = [...a]; n[i] = j; return n; })} className={`text-left rounded-md border px-4 py-3 text-sm transition-colors ${answers[i] === j ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50'}`}>{o}</button>)}</div>
      </li>)}
    </ol>
    {score !== null && band && <div className="mt-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
      <p className="text-5xl font-bold font-['Space_Grotesk']">{score}<span className="text-xl text-muted-foreground">/100</span></p>
      <p className="text-xl font-semibold mt-2">{band.label}</p>
      <p className="text-muted-foreground mt-2">{band.text}</p>
      {status === 'sent' ? <p className="mt-6 font-semibold text-primary">Thanks — we’ll reply with personalised recommendations within one working day.</p> :
        <form onSubmit={send} className="mt-6 grid sm:grid-cols-[1fr_1fr_auto] gap-3">
          <Input required placeholder="Your name" aria-label="Your name" value={name} onChange={e => setName(e.target.value)} />
          <Input required type="email" placeholder="Email" aria-label="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? <Loader2 className="animate-spin" /> : <Send />} Get my recommendations</Button>
          <p className="sm:col-span-3 text-xs text-muted-foreground">We use your details only to reply about your results. See our <Link className="underline" to="/privacy">Privacy Policy</Link>.</p>
          {status === 'error' && <p className="sm:col-span-3 text-sm text-destructive">Something went wrong. Please email office@mushbloom.co.uk.</p>}
        </form>}
      <Button asChild variant="outline" className="mt-4"><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" data-cta="survival-audit">Or book a free 20-minute audit <ArrowRight /></a></Button>
    </div>}
  </section>;
}

export default function SmeAiSurvivalPage() {
  const url = `https://mushbloom.uk${survivalPath}`;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Article', headline: title, description: desc, url, datePublished: '2026-10-12', dateModified: '2026-10-12', author: { '@type': 'Organization', name: 'Mushbloom', url: 'https://mushbloom.uk' } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Resources', item: 'https://mushbloom.uk/resources' }, { '@type': 'ListItem', position: 2, name: 'SME AI Survival Guide', item: url }] },
  ] };
  return <div className="resources-theme min-h-screen bg-background text-foreground">
    <ResourceMeta title={`${title} | Mushbloom`} description={desc} path={survivalPath} schema={schema} />
    <Navigation />
    <header className="pt-28 pb-16 bg-gradient-to-br from-primary/25 via-background to-accent/20 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground">← Resources</Link>
        <p className="text-primary text-xs uppercase tracking-wider mt-6">Research · Mushbloom resource 03</p>
        <h1 className="text-4xl sm:text-6xl font-bold font-['Space_Grotesk'] mt-3 max-w-4xl">The SME AI survival guide</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mt-5 max-w-3xl">AI is changing how customers find, compare and choose small businesses. Here is what the 2025 data shows, and seven guidelines for owner-run businesses that want to stay in the game.</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Button asChild size="lg"><a href="#readiness"><Gauge /> Check your survival readiness</a></Button>
          <Button asChild size="lg" variant="outline"><a href="https://tidycal.com/adrianniculescu" target="_blank" rel="noopener noreferrer" data-cta="survival-hero-audit">Book a free audit <ArrowRight /></a></Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {survivalStats.map(s => <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-5 hover:border-primary/50">
            <p className="text-4xl font-bold font-['Space_Grotesk']">{s.value}</p>
            <p className="text-sm mt-2">{s.label}</p>
            <p className="text-xs text-muted-foreground mt-3 underline">{s.source}</p>
          </a>)}
        </div>
      </div>
    </header>
    <main className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
      <h2 className="text-3xl font-bold font-['Space_Grotesk']">What the data says</h2>
      <p className="text-muted-foreground mt-4 text-lg">Small-business AI use roughly doubled between 2023 and 2025 according to several independent US surveys. But adoption is shallow: most owners are experimenting with chat tools rather than changing how enquiries, follow-up and admin actually run. That gap — between trying AI and building it into daily operations — is where competitive advantage is being decided. Survey figures are US-based; we use them as directional signals for SMEs internationally.</p>
      <h2 className="text-3xl font-bold font-['Space_Grotesk'] mt-16">Seven survival guidelines</h2>
      <ol className="mt-8 space-y-8">
        {guidelines.map((g, i) => <li key={g.title} className="border-t border-border pt-6">
          <p className="text-primary text-xs uppercase tracking-wider">Guideline {String(i + 1).padStart(2, '0')}</p>
          <h3 className="text-2xl font-semibold mt-2">{g.title}</h3>
          <p className="text-muted-foreground mt-3">{g.body}</p>
          <p className="mt-3"><strong>Do this week: </strong><span className="text-muted-foreground">{g.action}</span></p>
        </li>)}
      </ol>
      <ReadinessCheck />
      <section className="mt-16">
        <h2 className="text-2xl font-bold font-['Space_Grotesk']">Keep learning</h2>
        <ul className="mt-4 space-y-2 text-primary">
          <li><Link className="underline" to="/resources/aeo-geo-myths">AEO & GEO myths: fact-checked claims</Link></li>
          <li><Link className="underline" to="/resources/aeo-geo-seo-glossary">AEO, GEO & SEO glossary</Link></li>
          <li><Link className="underline" to="/ai-workforce">AI Workforce Systems</Link></li>
          <li><Link className="underline" to="/services/ai-workflows">AI Workflows</Link></li>
        </ul>
        <p className="text-xs text-muted-foreground mt-8">Published 12 October 2026 by Mushbloom. Statistics are from the linked third-party surveys; guidelines are Mushbloom’s practical recommendations, not guaranteed outcomes.</p>
      </section>
    </main>
  </div>;
}
