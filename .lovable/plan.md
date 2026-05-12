## Goal

Identify the keywords Mushbloom can realistically rank #1 for AND that bring paying customers — then prioritize content + page work around them. Pair every keyword with intent, difficulty, and the page on the site that should own it.

## Method (how the recommendation is built)

1. Inventory what we already have:
   - Service pages: `/agency`, `/llmboost`, `/newswire` (+ 5 verticals), `/video-agency`, `/portfolio/websites`, `/portfolio/custom-gpts`, 4 long-form guides.
   - 35 wiki articles, 5 of which (Bing setup, sitemap submission, H1 fix, GA4+Search Console on Lovable, "get cited in ChatGPT/Perplexity") are recent high-intent how-tos with strong long-tail ranking potential.
2. Score each existing topic on: intent (informational vs commercial), buyer fit, current SERP competitiveness, and how close it is to Mushbloom's actual offer (LLM SEO + AI automation + Lovable implementation + niche newswire).
3. Identify gaps where commercial intent is high but no page exists yet.
4. Group winners into 3 buckets: **Money pages**, **Ranking-fast long-tail**, **Authority/hub**.
5. Output the priority list + which page owns it + what to build/fix.

This plan does not change code yet — it sets the keyword map. Implementation follows in a second pass.

## Keyword strategy — three buckets

### Bucket A — Money keywords (commercial intent, slower to rank, highest revenue)

These pages convert. They are competitive, but each one is realistic with strong topical support around it.

| Target keyword | Owning page | Status |
|---|---|---|
| AI automation agency | `/agency` | Page live, needs more proof + internal links |
| LLM SEO agency / LLM SEO services | `/llmboost` | Page live, retitle + tighten H1 |
| Generative engine optimization (GEO) agency | `/llmboost` (or new `/geo` page) | Likely needs a dedicated GEO page |
| AI search optimization services | `/llmboost` | Add as secondary keyword |
| ChatGPT SEO agency / get cited in ChatGPT services | new `/services/chatgpt-seo` | Net-new page |
| Perplexity SEO agency | new `/services/perplexity-seo` | Net-new page |
| AI automation for [vertical: SaaS / agencies / B2B] | new `/agency/[vertical]` pages | Net-new, 2–3 pages |
| Crypto / iGaming / fintech / cybersecurity / gaming PR distribution | `/newswire/*` (already exist) | Tighten titles + add proof |
| Lovable development agency / Lovable expert | new `/services/lovable-development` | Net-new — strong buyer fit |
| AI video agency for founders | `/video-agency` | Tighten H1 + add case angle |

Rationale: these are the pages that turn search traffic into booked calls. The Lovable-related ones are particularly underserved in current SERPs and align perfectly with what Mushbloom already does.

### Bucket B — Fast-rank long-tail (low competition, high relevance, support money pages)

These are realistic #1 targets in weeks–months. Most already exist; a few are obvious additions.

Already built (need internal-link reinforcement only):
- How to set up Bing Webmaster Tools (2026) — `/wiki/bing-webmaster-tools-setup`
- How to submit a sitemap to Bing and Google — `/wiki/submit-sitemap-bing-google-guide`
- Fix "H1 tag missing" in Bing Webmaster Tools — `/wiki/fix-h1-tag-missing-bing-webmaster-tools`
- How to add GA4 and Search Console to a Lovable site — `/wiki/ga4-search-console-setup-lovable`
- How to get cited in ChatGPT and Perplexity — `/wiki/get-cited-chatgpt-perplexity-llm-platforms`

Recommended net-new long-tail (each one is a realistic #1):
1. "How to add schema markup to a Lovable site" (Lovable + schema = almost no competition).
2. "How to fix canonical tag issues in Bing Webmaster Tools".
3. "How to track conversions in GA4 for a service business".
4. "How to optimise a Lovable site for Google AI Overviews".
5. "How to get a site indexed in Google in 2026 (Lovable edition)".
6. "ChatGPT vs Perplexity vs Google AI Overviews: how citations actually work".
7. "How to write an LLM-friendly FAQ section (with schema)".
8. "Sitemap not showing up in Bing — common fixes".
9. "How to set up event tracking in GA4 for TidyCal bookings".
10. "Lovable SEO checklist 2026" (becomes a magnet for the entire Lovable buyer audience).

These pages funnel directly into Bucket A money pages via "Need this done for you?" CTAs.

### Bucket C — Authority / topical hub (slow money, big trust)

These keep the agency credible and feed LLMs the topical signal needed to rank everything else.

- LLM SEO pillar guide (`/wiki/llm-visibility-optimization` — already exists, upgrade to pillar).
- Generative Engine Optimization (GEO) explainer — net-new pillar.
- AI deal sourcing / due diligence / portfolio risk (already exist) — these are good for thought leadership and inbound from investors, but should be **deprioritized for traffic** because they don't match Mushbloom's current offer.

## Recommended #1 targets to chase first (next 60–90 days)

In ranked order of realistic ROI:

1. "How to add GA4 and Search Console to a Lovable website" — already live, near-zero competition, high commercial pull.
2. "How to set up Bing Webmaster Tools in 2026" — already live, drives serious volume.
3. "How to get cited in ChatGPT / Perplexity" — already live, perfectly on-brand.
4. "Lovable SEO checklist 2026" — net-new, will likely rank fast and acts as the top-of-funnel magnet.
5. "Lovable development agency" / "Lovable expert" — net-new commercial page, very low competition, very high buyer intent.
6. "LLM SEO agency" / "Generative engine optimization agency" — competitive but Mushbloom is already topically aligned; this is the long-term money keyword.

## Money pages that need work (no new content, just optimization)

- `/agency` — add 2–3 short case proofs, a price/scope band, and an FAQ section with schema. Strengthen H1 to include "AI automation agency".
- `/llmboost` — retitle to lead with "LLM SEO Agency" or "Generative Engine Optimization", add FAQ + pricing band.
- `/newswire/*` — each vertical page needs a clearer "Distribution for [vertical] companies" H1 and a price/scope band.
- `/video-agency` — clarify offer + add a single proof asset.

## Net-new pages to build (priority order)

1. `/services/lovable-development` — "Lovable Development Agency".
2. `/services/llm-seo` (or repurpose `/llmboost`) — "LLM SEO Agency".
3. `/services/geo` — "Generative Engine Optimization Agency".
4. `/wiki/lovable-seo-checklist-2026`.
5. 3–4 supporting long-tail wiki articles from Bucket B.

## Internal-linking rule going forward

Every long-tail article links up to:
- the relevant money page (`/agency`, `/llmboost`, or new `/services/lovable-development`), and
- 2 sibling long-tail articles.
Every money page links down to 4–6 supporting long-tail articles.
This is what actually wins the rankings — not just publishing more.

## Out of scope for this plan

- Paid ads strategy.
- Outbound / cold email playbooks.
- Backlink acquisition tactics (covered separately).
- Rewriting the 25 older wiki articles unrelated to Lovable / LLM SEO / AI automation.

## Next step after approval

Pick which of these to execute first. My recommendation:
- Phase 1 (this week): optimize `/agency` and `/llmboost` for their money keywords + build `/services/lovable-development`.
- Phase 2: ship "Lovable SEO checklist 2026" + 3 supporting long-tail articles.
- Phase 3: build dedicated `/services/llm-seo` and `/services/geo` pages and migrate `/llmboost` into the new structure.
