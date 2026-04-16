

## Plan: Add Client Acquisition System Section to Video Agency Page

### Summary
Add a new "Client Acquisition System" section to the existing `/video-agency` page, using AI (Gemini) to generate the full strategic content based on the prompt, then building it into the page with the same glass-effect card design.

### Steps

1. **Generate content with AI** — Use Lovable AI (Gemini) to produce the complete client acquisition playbook: outbound prospecting tactics, cold email template, LinkedIn outreach strategy, content marketing plan, and pricing strategy ($1k minimum filter).

2. **Add the section to `VideoAgencyPage.tsx`** — Insert a new "Client Acquisition System" section between the Niche Focus and CTA sections, containing:
   - **Section header**: "Land 5 Clients in 30 Days" with gradient styling
   - **4 strategy cards** in a 2×2 grid:
     - **Outbound Prospecting**: Finding businesses with bad/no videos, qualification criteria
     - **Cold Email Outreach**: Template with subject line "Video content for [Company]", before/after approach, free sample edit offer
     - **LinkedIn Outreach**: Connecting with marketing directors, engagement strategy
     - **Content Marketing**: Posting video tips, behind-the-scenes, free templates
   - **Pricing strategy callout**: $1k minimum to filter tire-kickers, presented as a highlighted tip box

3. **Add relevant icons** — Import additional lucide icons (e.g., `Search`, `Mail`, `Linkedin`, `PenTool`, `DollarSign`, `Target`) for the strategy cards.

### Technical Details
- Content generated via AI script using `google/gemini-2.5-pro` model
- New section follows existing glass-effect card pattern with orange/red gradient accents
- Cold email template rendered in a styled code/quote block for easy reference
- All changes contained within `src/pages/VideoAgencyPage.tsx`

