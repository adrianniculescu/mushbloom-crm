# Turn Mushbloom into an enquiry-generating website

## Goal
Win qualified conversations for the **free 20-minute workflow audit**, starting with existing channels rather than paid ads. Improve the site-wide journey and give Adrian a practical way to bring relevant people to it. No website change can guarantee immediate enquiries; measure what happens after publication.

## What the evidence says
- In the last 31 days available (28 August–27 September), project analytics recorded 349 visitors and 505 pageviews, with 315 visitors classified as Direct. These figures may include non-customer activity; they do not measure sales. Only 7 visitors were attributed to GB. The homepage received 181 pageviews.
- Semrush estimates three ranking keywords in the UK and roughly zero monthly organic visits; that is an estimate, not a Google index report. No Search Console account is linked to this project, so actual indexing and search queries are unverified.
- The published homepage and audit booking destination both respond. The homepage has an audit link and an enquiry form, but the form requires name, email, phone and message. Source code records a successful form submission and audit-link clicks, but an audit-link click is not a completed booking.
- The fresh SEO review passes homepage reachability, rendered content and core metadata. Its two sitemap/robots warnings compare the project URL with `mushbloom.uk`; the site intentionally uses `mushbloom.uk` as its canonical domain, so do **not** switch the sitemap to the project subdomain just to clear those warnings.

## First release: make the visit count
1. Keep the existing positioning and page structure, but make the free audit the obvious next step throughout the homepage, main service pages, Wiki entry points and mobile navigation. Link contextual examples to the right service, then invite readers to the same audit instead of leaving them at a dead end. Preserve direct Legiit order links for visitors ready to buy.
2. Reduce enquiry friction: make the initial contact form require only name, email and a short description of the bottleneck; make phone optional and keep budget optional. Preserve consent text, the existing lead destination, email notification and the confirmation message. Offer email and booking as alternatives.
3. Add concise, verifiable proof at decision points using existing project material, with no invented client outcomes or testimonials. Clarify what happens during the audit and what the visitor receives afterward.
4. Distinguish **audit-link click**, **form submitted** and **booking completed** in measurement. Track the first two on-site; verify whether the booking service exposes a completion report or redirect before claiming bookings can be measured on this site. Check that enquiry notification reaches the agency inbox.
5. Test a real form enquiry, homepage-to-service-to-audit navigation, and mobile layout. Compare post-publication qualified enquiries and completed bookings against the pre-change baseline, not pageviews alone.

## Bring relevant visitors now
- Prepare a short, personalised outreach note and a tracked link to the free audit for Adrian to send to a small list of existing contacts and referral partners who serve trades or other owner-run service businesses. First identify actual suitable contacts or communities and check their posting rules; do not scrape, bulk-message, post or send anything without approval.
- Reuse an existing AI Workflows guide and one matching service page for a practical LinkedIn post and partner introduction, with a single audit invitation. Give Adrian ready-to-use copy and explain what response to learn from. Publish or send nothing on Adrian's behalf.
- Search work runs in parallel, not as a gate to outreach: offer to connect Google Search Console, verify the relevant `mushbloom.uk` property and inspect real indexing/query data before deciding on technical fixes. Do not claim that missing project linkage caused zero enquiries.

## Limits and handoff
- No paid campaigns, guaranteed ranking claims, fabricated proof, automatic outreach or publish without explicit approval.
- Site changes appear publicly only after publishing. Review results over the following weeks and prioritise the channel that produces genuine audit conversations.

## Technical notes
- Reuse the existing React pages, enquiry flow and consent-aware analytics. Keep canonical URLs, robots and sitemap on `mushbloom.uk`; inspect any sitemap changes against real route and last-modified sources. Avoid modifying unrelated specialist service claims or backend schema.
