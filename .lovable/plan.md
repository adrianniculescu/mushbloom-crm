# New Wiki Guide: The Non-Technical Founder MVP Playbook

Publish your Perplexity article as a full long-form guide in the Wiki, styled and structured like the existing Mushbloom guides, optimised for both Google and AI search, and pointed at booking calls.

## The page

- Title on page: "From Corporate Expert to Startup Founder: The Practical MVP Playbook for Non-Technical Builders"
- Search title: "How Non-Technical Founders Can Validate and Build an MVP with AI"
- Meta description: as supplied in your notes.
- Address: `mushbloom.uk/guides/non-technical-founder-mvp-playbook`, with the shorter `/non-technical-founder-mvp-playbook` address redirecting to it so both links work.
- Author shown as "Mushbloom Team" with the short bio line.

## Structure

Same reading experience as the compliance guide: sticky contents list on the left, numbered sections, pull-out boxes for the question lists and checklists.

Sections, following your article order:
1. Start with the problem, not the app
2. Choose one customer, one painful job, one moment
3. Talk to people before you build (interview question box)
4. Validate commitment, not attention
5. Create the smallest MVP that proves one thing (build / don't build lists)
6. Use AI to compress build time, not replace product judgment
7. Build the offer and the product together
8. The 30-day founder sprint (week-by-week cards)
9. Know when you need help
10. The corporate-founder advantage
11. Frequently asked questions (added, see below)
12. Ready to turn your experience into an MVP? (CTA)

Every word of your article is kept; nothing invented. No fabricated stats, prices or client results.

## Search and AI-search optimisation

- Article, breadcrumb and FAQ structured data so Google and AI assistants can quote the page cleanly.
- A short "quick answer" summary near the top — the block AI tools most often lift.
- An FAQ section written from questions founders actually ask ("Do I need a technical co-founder?", "How much does an MVP cost to build with AI tools?", "How many customer interviews are enough?", "Is AI-generated code safe for real users?"), answered from the article's own content.
- Keyword coverage for: non-technical founder MVP, validate a startup idea, build an MVP with AI, AI MVP development agency, corporate to founder.
- Mentions of Lovable in the AI-tools section use your affiliate link, as with the other pages.
- Internal links to the Lovable Development page, No-Code App Development service, AI Automation Agency page and related wiki guides — and links back from the Wiki index and the Lovable Development page.
- Added to the sitemap and to `llms.txt` so AI crawlers pick it up.

## Lead generation

- One-line prompt plus a "Book an MVP Readiness Call" button linking to your TidyCal booking page.
- A second, softer CTA mid-article and the shared enquiry form at the foot of the page, with "MVP / Product Build" added to the service list so these leads are identifiable.
- Featured first in the Wiki guides list so it sits above the fold.

## Question for you

The CTA in your draft says "[Insert Mushbloom contact-page or calendar link]" — I'll point it at your TidyCal booking page with the enquiry form as the fallback below it, unless you'd prefer form-only.

## Technical notes

- New `src/pages/guides/NonTechnicalFounderMvpPlaybook.tsx`, routed in `src/App.tsx`, plus a redirect route for the short slug.
- Featured entry added to `src/pages/WikiIndexPage.tsx` (position 1).
- BlogPosting + FAQPage + BreadcrumbList JSON-LD; canonical and og tags on `https://mushbloom.uk`.
- Entries added to `public/sitemap.xml` and `public/llms.txt`.
- New service option added to the existing `src/components/Contact.tsx` selector; no new form.
