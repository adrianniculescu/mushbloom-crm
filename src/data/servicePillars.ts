export type Pillar = {
  slug: string; path: string; navName: string; anchor: string; eyebrow: string;
  title: string; description: string; h1: string; intro: string; serviceType: string;
  sections: { heading: string; body: string; points?: string[] }[];
  cta: string; faqs: { q: string; a: string }[];
};

export const SITE = 'https://mushbloom.uk';

export const pillars: Pillar[] = [
  {
    slug: 'llm-seo', path: '/services/llm-seo', navName: 'LLM SEO / GEO', anchor: 'LLM SEO agency UK', eyebrow: 'LLM SEO & GEO',
    title: 'LLM SEO Agency UK | Generative Engine Optimisation (GEO) | Mushbloom',
    description: 'Help your brand get cited and recommended across ChatGPT, Perplexity, Claude and Google AI Overviews with practical LLM SEO and GEO from Mushbloom.',
    h1: 'LLM SEO Agency UK — Dominate Search in the Generative AI Era',
    intro: 'Buyers increasingly ask AI assistants which supplier to choose. We make your business easier for those systems to find, understand and quote accurately — for UK and international audiences.',
    serviceType: 'LLM SEO / Generative Engine Optimisation',
    sections: [
      { heading: 'What is GEO / LLM SEO, and how does it differ from traditional SEO?', body: 'Traditional search engine optimisation aims to rank a page in a list of links. Generative engine optimisation (GEO) aims to make your brand the source an AI answer draws on. Both rely on crawlable pages and authority, but GEO places extra weight on clear entity information, quotable facts and consistent mentions across the web.' },
      { heading: 'The LLMboost 4-stage deployment framework', body: 'LLMboost is our structured programme for improving AI visibility.', points: ['Stage 1 — Baseline: test how leading AI assistants currently describe your brand and competitors.', 'Stage 2 — Foundations: fix crawlability, structured data, llms.txt and entity facts.', 'Stage 3 — Authority: publish reference-grade content and earn relevant third-party mentions.', 'Stage 4 — Monitor: re-test prompts regularly and adjust based on what changes.'] },
      { heading: 'AI citation audits and semantic entity positioning', body: 'We audit which prompts mention you, which sources AI systems rely on, and where your business is missing or described inaccurately. We then align your name, services, location and expertise so AI systems can connect them reliably.' },
    ],
    cta: 'Book an LLM Visibility Audit',
    faqs: [
      { q: 'Can you guarantee ChatGPT will recommend us?', a: 'No one can guarantee AI citations. We improve the signals AI systems use and measure changes over time.' },
      { q: 'Does LLM SEO replace Google SEO?', a: 'No. Strong traditional SEO remains a foundation; GEO builds on it.' },
    ],
  },
  {
    slug: 'ai-agents', path: '/services/ai-agents', navName: 'AI Workforces & Agents', anchor: 'Custom AI agents for business', eyebrow: 'Custom AI agents',
    title: 'Custom AI Agents for Business | Autonomous Workforces | Mushbloom',
    description: 'Custom-built AI agents for operations, lead generation and customer success. Supervised, scalable workflows built by Mushbloom, a UK AI automation agency.',
    h1: 'Custom AI Agents for Business — Autonomous Workflows Built for Scale',
    intro: 'We design AI agents that take on repetitive work across sales, support and operations, with human approval kept in place wherever decisions matter.',
    serviceType: 'Custom AI Agent Development',
    sections: [
      { heading: 'Specialised agents for real roles', body: 'Each agent has one clear job, defined rules and a named human owner.', points: ['Sales SDR agents: research, qualify and draft follow-ups for new leads.', 'Support Sentinels: triage enquiries, answer common questions and escalate the rest.', 'Operations Coordinators: update records, chase tasks and prepare reports.'] },
      { heading: 'Secure integration with your existing systems', body: 'Agents connect to the CRMs, ERPs, inboxes and APIs you already use, with least-privilege access, activity logs and approval steps for sensitive actions.' },
      { heading: 'Less manual admin, measured properly', body: 'Before building, we record how long the target process takes today. After launch, we track hours saved, response times and error rates so you can see the real impact on your business.' },
    ],
    cta: 'Schedule an Agent Architecture Session',
    faqs: [
      { q: 'Will agents act without oversight?', a: 'Only where you approve it. Sensitive actions such as sending money or contracts always need human sign-off.' },
      { q: 'How quickly can an agent go live?', a: 'Simple, single-task agents can often launch within days; multi-agent systems take longer and are scoped first.' },
    ],
  },
  {
    slug: 'no-code-apps', path: '/services/no-code-apps', navName: 'No-Code App Development', anchor: 'No-code app development agency UK', eyebrow: 'No-code apps',
    title: 'No-Code App Development Agency UK | Rapid Web & Mobile Apps | Mushbloom',
    description: 'Launch production-ready web and mobile apps in days, not months. UK no-code and AI-native application development powered by Lovable and Supabase.',
    h1: 'No-Code App Development Agency UK — From Concept to Production in Days',
    intro: 'We turn your idea or internal process into a working, production-ready app using AI-accelerated tools — without the cost and delay of a traditional build.',
    serviceType: 'No-Code and AI-Native App Development',
    sections: [
      { heading: 'AI-accelerated prototyping and production engineering', body: 'We move quickly from a clickable prototype to a secure, tested product with authentication, databases, payments and admin areas where needed.' },
      { heading: 'A modern, proven stack', body: 'We build with Lovable, Supabase, Next.js and custom API backends, choosing the simplest option that will scale with you. You own the code and data.' },
      { heading: 'Fixed-scope MVP delivery', body: 'Every build starts with an agreed scope, timeline and price, so you know exactly what you will get and when.' },
    ],
    cta: 'Request an App Build Estimate',
    faqs: [
      { q: 'Is a no-code app suitable for production?', a: 'Yes, when built properly. We add security rules, testing and monitoring before launch.' },
      { q: 'Can the app grow later?', a: 'Yes. Because you own the code, it can be extended by us or any developer.' },
    ],
  },
  {
    slug: 'investors', path: '/solutions/investors', navName: 'Investor Solutions', anchor: 'AI deal sourcing for investors', eyebrow: 'For VC & PE',
    title: 'AI Deal Sourcing for Investors | VC & PE Intelligence Agents | Mushbloom',
    description: 'Automated deal flow filtering, founder screening and market intelligence workflows for venture capital and private equity funds, built by Mushbloom.',
    h1: 'AI Deal Sourcing for Investors — Intelligence Agents for VC & Private Equity',
    intro: 'We build custom intelligence workflows that help investment teams review more opportunities, filter them against your thesis and focus partner time where it counts.',
    serviceType: 'AI Deal Sourcing and Investment Intelligence',
    sections: [
      { heading: 'Autonomous pipeline and thesis matching', body: 'An AI pipeline gathers companies from your chosen sources, enriches them and scores each one against your investment thesis — sector, stage, geography and traction signals — before anything reaches your team.' },
      { heading: 'Preliminary due diligence and market sentiment', body: 'Agents prepare first-pass company briefs, summarise public information and monitor market and media sentiment, with sources cited so analysts can verify every point.' },
      { heading: 'Custom deal signal alerts', body: 'Define the signals that matter to your fund — funding rounds, key hires, product launches — and receive concise alerts in email or Slack.' },
    ],
    cta: 'Explore Investor Intelligence Workflows',
    faqs: [
      { q: 'Does AI make investment decisions?', a: 'No. It filters and prepares information; your team makes every decision.' },
      { q: 'Can it use our private data?', a: 'Yes, with access controls agreed in advance and data kept within your chosen systems.' },
    ],
  },
  {
    slug: 'process-automation', path: '/services/process-automation', navName: 'Process Automation', anchor: 'Business process automation agency', eyebrow: 'Process automation',
    title: 'Business Process Automation Agency UK | Workflow Systems | Mushbloom',
    description: 'Eliminate repetitive back-office tasks. We engineer bespoke business process automation systems connecting your CRM, invoicing and communications.',
    h1: 'Business Process Automation Agency — Eliminate Repetitive Overhead',
    intro: 'We find the repetitive tasks slowing your team down and replace them with reliable automated workflows across the tools you already use.',
    serviceType: 'Business Process Automation',
    sections: [
      { heading: 'End-to-end audit of organisational friction points', body: 'We map how work actually moves through your business, identify bottlenecks and rank automation opportunities by value and effort.' },
      { heading: 'Cross-platform data sync', body: 'We connect Slack, HubSpot, invoicing, inboxes and custom systems using Zapier, Make and custom webhooks, so data moves automatically and stays consistent.' },
      { heading: 'ROI tracking and speed benchmarks', body: 'We record baseline time and cost per process, then report hours saved, turnaround times and error rates after launch, so the return is visible.' },
    ],
    cta: 'Calculate Your Automation ROI',
    faqs: [
      { q: 'Do we need to change our software?', a: 'Usually not. We build around your existing tools wherever possible.' },
      { q: 'What happens if an automation fails?', a: 'We add alerts and fallbacks so failures are flagged to a person rather than lost.' },
    ],
  },
];
