# Lead Generation Streams & Data Solutions page

A new premium B2B enquiry page at `mushbloom.uk/lead-generation-data`, written to your brief, styled to match the rest of the dark Mushbloom site, and built to collect qualified enquiries — not to sell data self-serve.

## The page

Sections, in your order:

1. Hero — eyebrow "Mushbloom Growth Infrastructure", H1 "Lead Generation Streams & Data Solutions", your hero and supporting copy, "Request Your Lead Strategy" (scrolls to form) and "Explore Available Verticals" buttons.
2. Trust strip — four compact items: recurring delivery, vertical-specific campaigns, US and international availability, custom qualification and compliance review. No absolute "verified" or "compliant" claims.
3. How it works — "From Campaign Brief to Lead Delivery", four numbered steps exactly as written.
4. Recurring lead streams — cards for your 15 vertical groups, each carrying the "availability, volume, geography, fields and permitted use vary by source" line.
5. Indicative availability table — the daily verticals and ranges from your subscription PDF (e.g. Accredited Investors 10,000–15,000 daily; Crypto 5,000–15,000 daily), searchable/filterable, clearly headed "Indicative availability ranges — not guaranteed volumes".
6. Custom data solutions — your copy, the eight possible formats, plus a second indicative table of database coverage from your databases PDF (US consumer and business, international consumer and business), with the same non-guarantee framing and the channel-suitability warning.
7. Commercial options — three cards: Single Stream from $750, Multi-Stream Bundle (custom), Custom Data Programme (custom). Each button says "Request a tailored quote" and scrolls to the form. No checkout.
8. Qualification form — "Tell Us What You Need" (details below).
9. Responsible data use — your full compliance copy, the nine-point buyer checklist, the no-legal-advice statement, and links to Privacy Policy, Terms of Use, Acceptable Use Policy, Data Processing Addendum and Contact.
10. FAQ — your seven questions and answers.
11. Final CTA — "Need a Better Lead Pipeline?" with "Request Your Best Lead Deal" scrolling to the form.
12. Footer disclaimer — your paragraph, verbatim, in a restrained block above the site footer.

Nothing is invented: all copy is yours, and every number shown comes from your two PDFs, labelled indicative.

## The enquiry form

All the fields you listed (name, company, work email, optional phone, country, website, industry, intended channel, target market and geography, desired vertical, monthly volume, delivery frequency, required fields, one-time or recurring, consent framework yes/no/not sure, campaign description), the contact consent checkbox and the mandatory permitted-use acknowledgement — neither can be skipped.

Submissions land in your existing leads list with the service marked "Lead Generation & Data", so they are easy to spot, and the extra answers are written into the message as a tidy labelled summary. Your usual new-lead email notification fires as normal. On success the visitor sees your thank-you wording.

Note: your cloud backend is still paused, so form submissions won't save until it is resumed. The page itself will work regardless.

## Two new legal pages

- **Acceptable Use Policy** — prohibited uses, channel restrictions, suppression and unsubscribe duties, no-resale and no-enrichment-without-permission terms, consequences of breach.
- **Data Processing Addendum** — roles of the parties, processing purposes, security, sub-processors, international transfers, data-subject requests, retention and deletion, audit.

Both in the same style as your existing Privacy and Terms pages, added to the footer's Legal & compliance list. Drafts for your review — they are not legal advice.

## Search and AI-search

- Service + FAQPage + BreadcrumbList structured data, canonical and social tags on `https://mushbloom.uk`.
- Title and description targeting: lead generation streams, co-registration leads, B2B data solutions, marketing data provider, custom database solutions.
- Added to the sitemap and `llms.txt`; linked from the site footer, the services menu and the home services section.

## Technical notes

- New `src/pages/LeadGenerationDataPage.tsx` plus `src/components/leadgen/LeadStreamsTable.tsx`, `DataCoverageTable.tsx` and `LeadQualificationForm.tsx`; vertical and coverage data extracted from the PDFs into `src/data/leadStreams.ts`.
- Routed at `/lead-generation-data` in `src/App.tsx`, with `/lead-generation` redirecting to it.
- Form inserts into the existing `contact_inquiries` table (no schema change) and invokes `notify-new-lead`; `'Lead Generation & Data'` added to `serviceOptions` in `src/components/Contact.tsx`.
- New `src/pages/legal/AcceptableUsePolicy.tsx` and `DataProcessingAddendum.tsx` using the existing `LegalLayout`, routed under `/legal/`.
- Entries added to `public/sitemap.xml` and `public/llms.txt`; links added to `SiteFooter.tsx` and `Navigation.tsx`.
- Accessibility: labelled inputs, fieldset/legend groups, visible focus rings, tables with proper headers and captions, responsive card layout on mobile.
