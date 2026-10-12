export type Verdict = 'myth' | 'nuanced' | 'true';
export interface Pillar { id: string; name: string; summary: string }
export interface Myth { id: string; pillar: string; claim: string; verdict: Verdict; reality: string; action: string; source: SourceKey }

export const mythSources = {
  googleAi: { name: 'Google Search Central — AI features and your website', url: 'https://developers.google.com/search/docs/appearance/ai-features' },
  googleHelpful: { name: 'Google Search Central — Creating helpful, people-first content', url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content' },
  googleSd: { name: 'Google Search Central — Introduction to structured data', url: 'https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data' },
  googleJs: { name: 'Google Search Central — JavaScript SEO basics', url: 'https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics' },
  googleRobots: { name: 'Google Search Central — Introduction to robots.txt', url: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro' },
  googleSpam: { name: 'Google Search Central — Spam policies', url: 'https://developers.google.com/search/docs/essentials/spam-policies' },
  googleCrawlers: { name: 'Google — Overview of Google crawlers (incl. Google-Extended)', url: 'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers' },
  bing: { name: 'Bing Webmaster Guidelines', url: 'https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a' },
  indexNow: { name: 'IndexNow documentation', url: 'https://www.indexnow.org/documentation' },
  openaiBots: { name: 'OpenAI — Overview of OpenAI crawlers', url: 'https://platform.openai.com/docs/bots' },
  llmsTxt: { name: 'llms.txt proposal', url: 'https://llmstxt.org/' },
  geoPaper: { name: 'Aggarwal et al. — GEO: Generative Engine Optimization (arXiv 2311.09735)', url: 'https://arxiv.org/abs/2311.09735' },
  acp: { name: 'Stripe — Developing an open standard for agentic commerce', url: 'https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce' },
  mcp: { name: 'Model Context Protocol — Introduction', url: 'https://modelcontextprotocol.io/docs/getting-started/intro' },
  rag: { name: 'Lewis et al. — Retrieval-Augmented Generation (arXiv 2005.11401)', url: 'https://arxiv.org/abs/2005.11401' },
  owasp: { name: 'OWASP Top 10 for LLM Applications', url: 'https://owasp.org/www-project-top-10-for-large-language-model-applications/' },
} as const;
export type SourceKey = keyof typeof mythSources;

export const mythPillars: Pillar[] = [
  { id: 'crawlability', name: 'Crawlability & technical signals', summary: 'Files, crawler access, rendering and speed: what AI systems actually need to reach your pages.' },
  { id: 'schema', name: 'Structured data & schema', summary: 'What markup does and does not do for AI answers and classic search features.' },
  { id: 'content', name: 'Content format, freshness & volume', summary: 'Which content qualities make a page usable as an answer source, and which volume habits waste money.' },
  { id: 'links', name: 'Links, mentions & off-site signals', summary: 'How backlinks, brand mentions, reviews and third-party corroboration relate to AI visibility.' },
  { id: 'authority', name: 'Brand authority & entities', summary: 'Entity clarity, consistency and the evidence that makes a business recognisable to machines.' },
  { id: 'measurement', name: 'Measurement, prompts & tools', summary: 'Tracking AI visibility honestly, and the limits of prompt tricks and “ranking” claims.' },
  { id: 'agentic', name: 'Agents, commerce & protocols', summary: 'ACP, MCP, A2A and AI agents: separating real capabilities from launch-deck hype.' },
  { id: 'retrieval', name: 'RAG, embeddings & LLM mechanics', summary: 'How retrieval and generation work, and the myths that come from misunderstanding them.' },
];

type Row = [string, Verdict, string, string, SourceKey];
const raw: Record<string, Row[]> = {
  crawlability: [
    ['You need an llms.txt file to appear in AI answers.', 'myth', 'llms.txt is a community proposal. No major AI search provider has documented it as a requirement or ranking input. Pages without it are cited every day.', 'Add one if it is cheap — it is a tidy summary for agents and developers — but prioritise crawlable, substantive pages first.', 'llmsTxt'],
    ['Blocking GPTBot removes you from ChatGPT search results.', 'nuanced', 'OpenAI documents separate agents: GPTBot (training), OAI-SearchBot (search) and ChatGPT-User (user-triggered fetches). Blocking one does not block the others.', 'Decide per crawler. Many businesses allow search and user agents while choosing a training policy separately.', 'openaiBots'],
    ['Blocking Google-Extended removes you from Google AI Overviews.', 'myth', 'Google states Google-Extended controls use of content for Gemini model training and grounding in certain products, not inclusion in Search or AI Overviews, which follow Googlebot.', 'Keep Googlebot allowed if you want Search visibility; treat Google-Extended as a separate data-use decision.', 'googleCrawlers'],
    ['AI crawlers render JavaScript like Googlebot does.', 'myth', 'Googlebot renders JavaScript, but many AI fetchers retrieve raw HTML only. A client-only app can look empty to them.', 'Serve meaningful HTML: server rendering, prerendering or static summaries of key pages.', 'googleJs'],
    ['Single-page apps cannot rank at all.', 'myth', 'Google can index JavaScript sites; the risk is delay, rendering errors and invisibility to non-rendering bots, not an absolute ban.', 'Test pages with URL Inspection and a no-JS fetch; prerender the pages that matter commercially.', 'googleJs'],
    ['There is a special robots.txt directive that boosts AI citations.', 'myth', 'robots.txt only controls crawling permissions. It cannot request preference, priority or citation.', 'Use robots.txt to allow the crawlers you want and block private areas — nothing more.', 'googleRobots'],
    ['Robots.txt noindex hides pages from search.', 'myth', 'Google does not support noindex in robots.txt. A blocked URL can still be indexed from links, without its content.', 'Use a noindex meta tag or header on a crawlable page to keep it out of the index.', 'googleRobots'],
    ['Submitting a sitemap guarantees indexing.', 'myth', 'Sitemaps aid discovery. Engines still choose what to crawl and index based on quality and demand.', 'Keep the sitemap clean, then strengthen internal links and content on unindexed pages.', 'bing'],
    ['IndexNow makes Google index pages faster.', 'myth', 'IndexNow is supported by Bing, Yandex and others. Google does not participate.', 'Use IndexNow for Bing (which also powers Copilot grounding) and Search Console for Google.', 'indexNow'],
    ['Page speed is a major factor in being cited by AI.', 'nuanced', 'Speed is a modest classic-search signal, and very slow or timing-out pages may fail to be fetched. There is no evidence of a strong citation reward for speed alone.', 'Fix timeouts and severe slowness; do not chase perfect scores at the cost of content work.', 'googleHelpful'],
  ],
  schema: [
    ['Schema markup makes ChatGPT cite you.', 'myth', 'No major LLM provider documents schema as a citation trigger. Generation works from retrieved text; markup may help indexing systems understand entities.', 'Use accurate schema for search features and entity clarity, not as a citation lever.', 'googleSd'],
    ['FAQ schema still produces rich results for most sites.', 'myth', 'Google limited FAQ rich results to well-known authoritative government and health sites in 2023.', 'Write visible FAQs for users; do not expect FAQ snippets in Google for a typical business.', 'googleSd'],
    ['There is special schema required for AI Overviews.', 'myth', 'Google states no special markup or optimisation is required for AI features beyond normal Search eligibility.', 'Focus on indexable, helpful pages that meet Search Essentials.', 'googleAi'],
    ['Structured data is useless for AI search.', 'nuanced', 'It is not a direct citation lever, but it helps search systems understand organisations, products and authors, which feeds knowledge systems that AI products may rely on.', 'Mark up Organization, Product, Article and LocalBusiness accurately where they genuinely apply.', 'googleSd'],
    ['More schema types on a page always helps.', 'myth', 'Markup must describe visible content. Irrelevant or misleading markup can trigger manual actions.', 'Mark up only what the page really shows; validate with the Rich Results Test.', 'googleSpam'],
    ['JSON-LD is preferred over microdata by Google.', 'true', 'Google recommends JSON-LD as the easiest to implement and maintain, while supporting other formats.', 'Use JSON-LD in new builds.', 'googleSd'],
    ['Schema can replace missing on-page content.', 'myth', 'Structured data describes page content; it does not substitute for it. Hidden or unsupported claims violate guidelines.', 'Put facts in visible text first, then mark them up.', 'googleSd'],
    ['sameAs links help connect your brand entity.', 'true', 'sameAs pointing to official profiles is a standard way to disambiguate an organisation in structured data.', 'Link only profiles you control and keep names consistent across them.', 'googleSd'],
    ['Review schema on your own homepage creates star ratings.', 'myth', 'Google does not show self-serving review stars for LocalBusiness and Organization pages that host reviews about themselves.', 'Collect reviews on independent platforms; use Product review markup only where eligible.', 'googleSd'],
  ],
  content: [
    ['Publishing more articles is the fastest path to AI visibility.', 'myth', 'Mass-produced, low-value pages risk scaled-content spam policies and add little that retrieval systems prefer.', 'Publish fewer, better pages that answer real buyer questions with specifics.', 'googleSpam'],
    ['AI-written content is penalised by Google.', 'myth', 'Google evaluates quality and intent, not authorship method. Scaled low-value content is penalised however it is produced.', 'Use AI as a drafting aid with expert editing, original detail and fact-checking.', 'googleHelpful'],
    ['Changing the date on a page makes it “fresh”.', 'myth', 'Updating dates without substantive changes is called out by Google as not helpful and can mislead users.', 'Update dates only when content materially changes.', 'googleHelpful'],
    ['Adding statistics and citations can increase visibility in generative answers.', 'nuanced', 'The GEO study found quotations, statistics and source citations improved visibility in its test setup. Results varied by domain and engine and are not universal guarantees.', 'Add genuine, sourced data where it helps readers — never invented figures.', 'geoPaper'],
    ['Keyword stuffing works on LLMs because they read words.', 'myth', 'The GEO study found keyword stuffing performed poorly, and it remains a spam policy violation in search.', 'Write naturally; cover the concepts and questions buyers ask.', 'geoPaper'],
    ['Long-form content always beats short content.', 'myth', 'Length is not a ranking or citation factor in itself. Completeness for the query matters.', 'Make pages as long as the answer requires and no longer.', 'googleHelpful'],
    ['Clear headings and direct answers make content easier to reuse.', 'true', 'Retrieval systems split pages into passages. Self-contained, well-labelled sections are easier to match and quote accurately.', 'Lead sections with a direct answer, then supporting detail.', 'rag'],
    ['You must write in Q&A format for AEO.', 'nuanced', 'Questions as headings can help match queries, but forcing every page into Q&A harms readability.', 'Use questions where buyers genuinely ask them; use normal structure elsewhere.', 'googleHelpful'],
    ['Hidden text for bots improves AI understanding.', 'myth', 'Showing bots different content from users is cloaking and violates spam policies.', 'Make machine-readable content visible or available to users too (for example a plain-text edition).', 'googleSpam'],
    ['Original first-hand experience matters for quality.', 'true', 'Google’s helpful-content guidance explicitly asks whether content shows first-hand experience and expertise.', 'Include real process detail, photos, examples and named authors.', 'googleHelpful'],
    ['AI answers only quote pages ranking in the top 3.', 'myth', 'AI features often draw from a wider set of sources than the top organic results, including via query fan-out.', 'Cover sub-questions thoroughly; a page can be cited without ranking first.', 'googleAi'],
    ['Translating pages automatically creates new visibility markets.', 'nuanced', 'Localised content can reach new audiences, but unreviewed machine translation at scale risks low quality.', 'Translate priority pages with human review and proper hreflang.', 'googleHelpful'],
  ],
  links: [
    ['Backlinks no longer matter in the AI era.', 'myth', 'Links still help discovery and authority in classic search, which many AI systems use for retrieval.', 'Earn links from relevant, reputable sites through useful assets and partnerships.', 'googleSpam'],
    ['Unlinked brand mentions can support AI visibility.', 'nuanced', 'LLMs learn from and retrieve text where your brand is discussed, link or not. The effect is plausible but hard to measure directly.', 'Pursue genuine mentions in industry media, podcasts and communities.', 'geoPaper'],
    ['Buying links is a safe shortcut.', 'myth', 'Link schemes violate spam policies and can lead to manual actions or ignored links.', 'Invest in digital PR and assets worth citing instead.', 'googleSpam'],
    ['Reddit and forum discussions influence AI answers.', 'nuanced', 'Some AI products frequently surface community content, but presence and impact vary by product and topic.', 'Participate honestly where your buyers already discuss problems; never astroturf.', 'googleSpam'],
    ['Press releases alone build authority.', 'myth', 'Syndicated releases are usually nofollow and duplicated. Value comes from journalists who pick up the story.', 'Use releases for genuine news and pitch editors directly.', 'googleSpam'],
    ['Third-party reviews help buyers and machines trust a business.', 'true', 'Independent reviews provide corroborating evidence that people and systems can weigh.', 'Ask satisfied clients for reviews on reputable platforms.', 'googleHelpful'],
    ['Guest posting on any site helps.', 'myth', 'Large-scale guest posting with keyword links is treated as a link scheme.', 'Contribute occasionally to relevant publications for audience, not anchors.', 'googleSpam'],
    ['Being listed in industry directories is worthless.', 'nuanced', 'Spammy directories add nothing; reputable, curated industry lists provide corroboration.', 'Choose a handful of respected directories relevant to your sector.', 'bing'],
    ['Internal links help engines find and understand pages.', 'true', 'Internal links are a primary discovery path and signal relative importance.', 'Link from strong pages to new or unindexed ones with descriptive text.', 'bing'],
  ],
  authority: [
    ['You need a Wikipedia page to be cited by AI.', 'myth', 'Wikipedia helps notable entities, but countless businesses are cited without one, and promotional pages get deleted.', 'Build verifiable third-party coverage first; notability follows.', 'googleHelpful'],
    ['Consistent business information across the web helps entity understanding.', 'true', 'Conflicting names, addresses or descriptions make it harder for systems to resolve which entity is meant.', 'Standardise name, description, contact details and profiles.', 'bing'],
    ['A clear “about” page and named authors support trust.', 'true', 'Google’s guidance asks whether it is clear who created content and why they are qualified.', 'Publish real author bios, credentials and company background.', 'googleHelpful'],
    ['E-E-A-T is a direct ranking score.', 'myth', 'E-E-A-T is a quality-rater framework, not a single algorithmic score.', 'Demonstrate experience and trust in content; do not chase a mythical score.', 'googleHelpful'],
    ['Small businesses cannot compete with big brands in AI answers.', 'nuanced', 'Big brands have advantages on broad queries, but niche, local and specific questions are often answered from specialist sources.', 'Own a narrow topic deeply.', 'googleAi'],
    ['Founder visibility can strengthen a brand entity.', 'nuanced', 'Named experts with consistent profiles and published work create more corroborating signals, though impact is hard to isolate.', 'Link founder profiles, talks and writing to the company site.', 'googleHelpful'],
    ['Claiming “#1 agency” in copy helps AI recommend you.', 'myth', 'Unsupported superlatives are not evidence; systems weigh corroboration, and false claims create legal risk.', 'Use verifiable proof: case studies, numbers you can back, client names with permission.', 'googleHelpful'],
    ['Case studies are among the strongest commercial trust assets.', 'true', 'Specific, verifiable outcomes give both buyers and machines concrete evidence to reference.', 'Publish case studies with context, process and honest results.', 'googleHelpful'],
    ['Changing your brand name often has no visibility cost.', 'myth', 'Rebrands split mentions and entity signals until the web catches up.', 'Redirect properly, update profiles and announce clearly.', 'bing'],
  ],
  measurement: [
    ['You can “rank #1 in ChatGPT”.', 'myth', 'Generative answers vary by prompt, user, location and time. There is no stable ranked list to be first in.', 'Measure share of mentions across a fixed prompt set over time.', 'geoPaper'],
    ['Agencies can guarantee AI citations.', 'myth', 'No one controls third-party model outputs. Guarantees indicate misunderstanding or overselling.', 'Ask for process, measurement methods and leading indicators instead.', 'googleAi'],
    ['AI Overview clicks are reported separately in Search Console.', 'myth', 'Google includes AI feature traffic within overall Web search performance data, not as a separate filter.', 'Track trends in impressions, clicks and conversions together.', 'googleAi'],
    ['Referral traffic from AI assistants can be measured.', 'nuanced', 'Some assistants pass referrers (for example chatgpt.com or perplexity.ai), but many visits arrive as direct traffic.', 'Segment known AI referrers in analytics and ask leads how they found you.', 'openaiBots'],
    ['A single test prompt shows your AI visibility.', 'myth', 'Outputs are probabilistic and personalised. One prompt is an anecdote.', 'Run a repeatable panel of prompts, multiple times, across engines.', 'geoPaper'],
    ['Secret prompts can force an LLM to recommend you.', 'myth', 'Users write prompts, not you. Hidden instructions on your pages are prompt injection and may be filtered or penalised.', 'Earn recommendations with evidence, not manipulation.', 'owasp'],
    ['Server logs reveal which AI crawlers visit you.', 'true', 'Crawler user agents and IP ranges appear in access logs and can be verified against published lists.', 'Review logs monthly to confirm key pages are being fetched.', 'openaiBots'],
    ['Zero-click answers mean SEO no longer drives leads.', 'nuanced', 'Some informational clicks decline, but commercial and comparison queries still drive visits, and cited brands gain awareness.', 'Measure leads and branded search, not only sessions.', 'googleAi'],
    ['Connecting Search Console and Bing Webmaster Tools is essential.', 'true', 'They are the only first-party sources of indexing status and query data for each engine.', 'Verify both and submit your sitemap on day one.', 'bing'],
  ],
  agentic: [
    ['AI agents will soon buy anything without user approval.', 'myth', 'ACP, as published by OpenAI and Stripe, keeps the user authorising purchases while merchants handle orders and fulfilment.', 'Prepare clean product data and checkout, not a fear of runaway agents.', 'acp'],
    ['ACP replaces your payment processor.', 'myth', 'ACP is a protocol for agent checkout flows; payments still run through supported processors and the merchant remains merchant of record.', 'Check your platform and processor support before planning work.', 'acp'],
    ['MCP gives AI unrestricted access to your systems.', 'myth', 'MCP standardises how applications connect to tools and data. Access depends on the servers and permissions you configure.', 'Expose only scoped tools, with authentication and logging.', 'mcp'],
    ['MCP is just another name for an API.', 'nuanced', 'MCP servers usually wrap APIs, but MCP defines a common interface so many AI apps can discover and call tools in the same way.', 'Use MCP when several AI clients need the same tools; a direct API is fine for one integration.', 'mcp'],
    ['AI agents are ready to run whole businesses unsupervised.', 'myth', 'Agents still make errors, are vulnerable to prompt injection and need oversight for consequential actions.', 'Start with supervised workflows and human approval steps.', 'owasp'],
    ['Prompt injection is a real security risk for agents.', 'true', 'OWASP lists prompt injection as the top risk for LLM applications.', 'Separate untrusted content from instructions and limit tool permissions.', 'owasp'],
    ['Product feeds will matter for agentic shopping.', 'true', 'Agentic checkout relies on structured, accurate product data that agents can read and act on.', 'Keep titles, prices, availability and policies accurate and machine-readable.', 'acp'],
    ['Small businesses should wait until agents are mainstream.', 'nuanced', 'Full agentic commerce is early, but the groundwork — clean data, clear policies, automated intake — pays off now.', 'Automate repetitive admin today; adopt protocols when your platform supports them.', 'mcp'],
    ['A chatbot on your site makes you “AI-ready”.', 'myth', 'A widget does not make your content crawlable, your data structured or your workflows automated.', 'Fix discoverability and processes before adding chat.', 'googleAi'],
  ],
  retrieval: [
    ['LLMs search the live web for every answer.', 'myth', 'Some products retrieve live results for some queries; others answer from training data. Behaviour varies by product, mode and query.', 'Be present both in long-lived web sources and in crawlable current pages.', 'rag'],
    ['RAG eliminates hallucinations.', 'myth', 'Retrieval grounds answers in sources and reduces some errors, but models can still misread or misattribute retrieved text.', 'Keep human review for important outputs and cite sources.', 'rag'],
    ['Content is retrieved in passages, not whole pages.', 'true', 'Retrieval systems typically split documents into chunks and match the most relevant ones to a query.', 'Make each section understandable on its own.', 'rag'],
    ['Vector search makes keywords irrelevant.', 'myth', 'Many production systems combine semantic and keyword (hybrid) retrieval because exact terms still matter.', 'Use the real names of products, places and problems.', 'rag'],
    ['Fine-tuning a model is the best way to add company knowledge.', 'myth', 'For changing facts, retrieval is usually cheaper and easier to update; fine-tuning better suits style and task behaviour.', 'Start with a knowledge base plus retrieval.', 'rag'],
    ['Training cut-offs mean new businesses are invisible to AI.', 'nuanced', 'Base models may not know you, but retrieval-enabled products can find current pages.', 'Make sure current pages are crawlable and corroborated.', 'openaiBots'],
    ['Bigger context windows remove the need for retrieval.', 'myth', 'Long contexts cost more and models can miss details in long inputs; retrieval still selects what matters.', 'Feed focused, relevant material.', 'rag'],
    ['LLMs cite the original source of every fact.', 'myth', 'Citations point to retrieved pages, which may not be the original source, and some answers carry no citation.', 'Publish original data clearly attributed so others cite you.', 'rag'],
    ['Opting out of training stops all AI use of your content.', 'nuanced', 'Training opt-outs do not necessarily block search or user-triggered retrieval, which use different agents.', 'Review each crawler’s documented purpose.', 'openaiBots'],
  ],
};

export const myths: Myth[] = Object.entries(raw).flatMap(([pillar, rows]) =>
  rows.map(([claim, verdict, reality, action, source], i) => ({ id: `${pillar}-${i + 1}`, pillar, claim, verdict, reality, action, source })));

export const verdictLabel: Record<Verdict, string> = { myth: 'Debunked', nuanced: 'Nuanced', true: 'Verified' };
export const mythsPath = '/resources/aeo-geo-myths';
