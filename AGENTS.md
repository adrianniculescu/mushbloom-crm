# Project decisions
- Keep new commercial service pages under `src/pages/services` and register them in `App.tsx`, because service navigation and metadata follow this pattern.
- Send AI Workforce assessment enquiries through the existing `contact_inquiries` table and `notify-new-lead` function, because the agency already handles leads there.- Admin access is granted only through the `user_roles` table (assigned by an auth trigger for the admin email) and checked with `has_role`, because client-side flags can be forged.
- Admin AI tools run in the `admin-ai` backend function, which verifies the admin role, injects `knowledge_items` as context and logs every run to `ai_runs`, so keys and prompts stay server-side and runs are auditable.
- Keep a static, crawler-readable summary inside #root in index.html (replaced by React on load), because most AI crawlers do not run JavaScript and otherwise see an empty page.
