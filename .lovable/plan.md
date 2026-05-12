## Goal
Bring mushbloom.uk to peak SEO + LLM-discoverability shape: fix H1, unify metadata, strengthen internal linking, add freshness/author schema, and restructure key content to be "quote-friendly" for LLMs.

## Scope — what gets changed

### 1. Homepage H1 + heading hierarchy
- Replace the hidden SR-only H1 fallback in `index.html` with a real, visible H1 rendered by `Hero.tsx` (single primary H1, descriptive, keyword-aligned).
- Demote any competing H1s elsewhere on the homepage to H2 (audit `Services`, `LLMboost`, `About`, `Testimonials`, `FAQ`, `Wiki`, `SiteMap`, `Contact`).
- Ensure question-style H2s on FAQ + Wiki sections.

### 2. Per-page unique metadata
Audit and fix `<Helmet>` on every route so each has:
- One unique `<title>` (≤60 chars, keyword-led)
- One unique meta description (≤160 chars)
- One canonical URL pointing to `https://mushbloom.uk/...`
- One clear H1

Pages to cover: `/`, `/llmboost`, `/newswire`, `/newswire/*` (5 verticals), `/video-agency`, `/portfolio/websites`, `/portfolio/custom-gpts`, `/wiki`, `/wiki/*` (30 articles), `/guides/*` (4 guides).

### 3. Internal linking
- Homepage: add a clearly-linked "Pillar Guides" / "Featured Articles" block linking to the 6 strongest wiki/guide pieces + all 3 main service pages (LLMboost, Newswire, Video Agency).
- Wiki article pages: add "Related articles" + "Related service" links (hub-and-spoke).
- Service pages: cross-link to relevant wiki pillars and to each other.
- Footer/SiteMap: confirm all key pages are present and use absolute canonical URLs.

### 4. Freshness + author/schema signals
- Add visible `Published` and `Updated` dates on Wiki articles and Guides (top of article).
- Add visible Author byline ("Mushbloom Editorial Team") on Wiki/Guides.
- Add/extend `BlogPosting` schema with `datePublished`, `dateModified`, `author`, `publisher` on Wiki + Guides.
- Add `BreadcrumbList` schema where missing (Wiki articles, Newswire verticals, Portfolio).
- Keep homepage `ProfessionalService` schema, ensure `dateModified` reflected via sitemap lastmod.

### 5. LLM-quote-friendly content restructure
For each pillar page (Wiki articles + Guides + service pages), enforce a consistent template:
1. Direct one-paragraph answer to the page's main question in the first ~120 words ("TL;DR" or "Key takeaway").
2. Question-style H2s.
3. Short paragraphs (≤3 sentences).
4. Numbered steps or bulleted lists for processes.
5. Plain-language "Definitions" block where jargon appears.
6. FAQ block (3–5 Q&As) at the bottom with `FAQPage` schema.

Given there are 30+ wiki articles, this pass will:
- Build a shared `ArticleShell` component (TL;DR, Updated date, Author, Related links, FAQ slot) and apply it to all wiki/guide pages.
- Update copy on the 6 priority pillar articles in this iteration; remaining articles inherit the shell + schema but keep existing copy.

### 6. Crawlability hygiene
- Sitemap: update `lastmod` to today on changed pages.
- robots.txt: verify allows all, points to sitemap.
- Check for duplicate titles/descriptions across wiki articles (script + fix).
- Remove any thin/empty pages or 404 stragglers.

## Technical notes
- Use `react-helmet-async` (already in use) for per-page meta.
- New components: `src/components/ArticleShell.tsx`, `src/components/ArticleMeta.tsx` (date + author), `src/components/RelatedLinks.tsx`, `src/components/HomeFeaturedPillars.tsx`.
- Wiki article data in `src/data/wikiArticles.ts` will get `publishedAt`, `updatedAt`, `author`, `faq`, `tldr` fields. Migration of existing entries kept additive (defaults provided).
- Schema rendered via JSON-LD `<script>` in Helmet per page.

## Out of scope (this round)
- Rewriting the full body copy of all 30 wiki articles (only the 6 priority pillars get a copy pass; the rest get structural shell + schema).
- New visual design directions.
- Backend/CMS changes.

## Which 6 pillar articles?
Proposed priority pillars (highest commercial + LLM intent):
1. `llm-visibility-optimization`
2. `ai-deal-sourcing-investors`
3. `automated-due-diligence-ai`
4. `custom-ai-agents-business`
5. `ai-agent-teams-future-of-work`
6. `technical-seo-ai`

Confirm or swap before I start the copy pass on these.