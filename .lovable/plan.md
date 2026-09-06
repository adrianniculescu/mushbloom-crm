# Analytics & Search Engine Setup Blueprint (reusable document)

Turn everything done for Mushbloom around Google Analytics, Google Search Console and Bing Webmaster Tools into one downloadable reference document you can reuse on every new website.

No changes to the Mushbloom website itself — this produces a file only.

## What the document covers

1. Pre-launch checklist — what must exist before submitting a site anywhere (single home page heading, page titles and descriptions, canonical address, working sitemap, robots file).
2. Google Analytics 4 — creating the property, getting the measurement ID, the consent-first loading approach used on Mushbloom (nothing loads before the visitor agrees), page-view tracking on every page change, and the three conversion events tracked: enquiry submitted, call booked, call-to-action clicked. Includes how to test with debug mode.
3. Google Search Console — adding the property, choosing address-prefix vs domain, verifying, submitting the sitemap, and reading the indexing report (which statuses are normal and which need a fix).
4. Bing Webmaster Tools — adding the site, importing from Search Console vs manual verification, sitemap submission, URL inspection, and the common "H1 missing" warning.
5. Sitemap and robots rules — what to include and exclude, priorities, last-modified dates, blocking private areas, and the AI-crawler section.
6. Multi-domain / redirect setup — the Mushbloom pattern where one domain is canonical and the other redirects, and how that must be reflected in the analytics and search tools.
7. Common problems and fixes — duplicate pages, soft 404s, pages discovered but not indexed, wrong canonical, and what is genuinely fixable versus what is just Google being slow.
8. Repeatable launch checklist — a tick-list page you can print or copy for each new client site.

Each section is written as steps plus the exact settings used on Mushbloom, so it can be handed to someone else and followed without guesswork.

## Format

A Word document (.docx) delivered in chat for download, styled in the Mushbloom look (clean headings, tables for the checklists). If you would prefer PDF or a plain text/markdown version instead, say so and it will be produced that way.

## Technical notes

- Source of truth for the document: `src/lib/consent.tsx` (GA loader, consent gating), `src/components/Analytics.tsx` (page views), `src/lib/analytics.ts` (event helpers, debug mode), `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, plus the existing wiki guides on Bing setup, sitemap submission, H1 fix and GA4 + Search Console.
- Generated with the docx skill, then every page rendered to an image and visually checked before delivery.
- Saved to `/mnt/documents` and attached to the chat reply.
