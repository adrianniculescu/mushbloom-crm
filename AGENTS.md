# Project decisions
- Keep new commercial service pages under `src/pages/services` and register them in `App.tsx`, because service navigation and metadata follow this pattern.
- Send AI Workforce assessment enquiries through the existing `contact_inquiries` table and `notify-new-lead` function, because the agency already handles leads there.