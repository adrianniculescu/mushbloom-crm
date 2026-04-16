

## Plan: Create Video Agency Page

### Summary
Generate the full video agency offer stack content using Lovable AI (Gemini), then build a dedicated `/video-agency` page following the same design patterns as the existing `/llmboost` page, and add it to navigation.

### Steps

1. **Generate content with AI** — Use Lovable AI (Gemini 2.5 Pro) to generate the complete offer stack based on your prompt: service menu, pricing tiers, niche focus, AI tools used, delivery timelines, and best practices for pricing.

2. **Create the Video Agency page** (`src/pages/VideoAgencyPage.tsx`)
   - Follow the same structure as LLMboostPage: Navigation, hero section, service cards grid, pricing tiers, process/timeline section, CTA, and Contact form
   - Services: Explainer Videos, Social Media Content Packs, Video Ads, VSLs, Talking Head Videos
   - Pricing tiers (Starter/Growth/Scale or similar)
   - AI tools showcase (Runway, Descript, ElevenLabs)
   - Niche focus section (SaaS, e-com, coaches, agencies)
   - Full SEO metadata with JSON-LD schema

3. **Add route** in `App.tsx` → `/video-agency`

4. **Update navigation** — Add Video Agency to the Services dropdown in `Navigation.tsx` and as a service card in `Services.tsx`

5. **Update sitemap** — Add the new page to `sitemap.xml` and `llms.txt`

### Technical Details
- Content generated via AI script using `google/gemini-2.5-pro` model
- Page component follows existing dark theme with glass-effect cards, gradient accents
- SEO: Helmet meta tags + JSON-LD `Service` schema markup
- Responsive grid layout matching existing pages

