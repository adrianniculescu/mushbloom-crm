import React from 'react';
import LegalLayout from './LegalLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

const PrivacyPolicy: React.FC = () => (
  <LegalLayout
    title="Privacy Policy"
    description="How Mushbloom collects, uses and protects your personal data on mushbloom.uk."
    canonical="https://mushbloom.uk/legal/privacy-policy"
    updated="January 2025"
  >
    <p>
      This Privacy Policy explains how Mushbloom (&quot;we&quot;, &quot;us&quot;) processes personal data when you visit
      <strong> mushbloom.uk</strong> (the &quot;Site&quot;). Our secondary domain <strong>mushbloom.co.uk</strong> redirects
      to the Site and is covered by this policy. We comply with the UK GDPR, the EU GDPR (where applicable) and the
      Privacy and Electronic Communications Regulations (PECR).
    </p>

    <H2>1. Data controller</H2>
    <p>
      Data controller: <strong>Mushbloom</strong> [legal entity name and registered address to be confirmed].
      <br />Contact for privacy matters: <a href="mailto:office@mushbloom.co.uk" className="underline">office@mushbloom.co.uk</a>.
    </p>
    <p className="text-xs text-gray-500">
      [Placeholder: insert registered company name, registration number, country of incorporation and registered office once finalised.]
    </p>

    <H2>2. Personal data we collect</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>Contact form data</strong> — name, email, phone, service of interest, indicative budget, message.</li>
      <li><strong>Account/CMS data</strong> (admin users only) — email address, hashed credentials, role.</li>
      <li><strong>Technical data</strong> — IP address, device/browser, pages viewed, referrer.</li>
      <li><strong>Cookie &amp; consent data</strong> — your consent choices, timestamp, policy version.</li>
      <li><strong>Email engagement data</strong> — delivery, bounce and unsubscribe status for transactional emails.</li>
    </ul>

    <H2>3. Purposes and legal bases</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Respond to enquiries and provide services — <em>performance of a contract or pre-contractual steps</em>.</li>
      <li>Operate, secure and improve the Site — <em>legitimate interests</em>.</li>
      <li>Analytics, marketing measurement and optional embeds — <em>consent</em> (withdrawable any time).</li>
      <li>Send transactional emails (e.g. enquiry confirmation, lead notification) — <em>legitimate interests / contract</em>.</li>
      <li>Comply with legal obligations (accounting, lawful requests) — <em>legal obligation</em>.</li>
    </ul>

    <H2>4. Recipients and processors</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Lovable Cloud / Supabase (hosting, database, edge functions, transactional email).</li>
      <li>Google Analytics 4 (aggregated traffic measurement) — only after analytics consent.</li>
      <li>Booking provider (TidyCal) when you click a &quot;book a call&quot; link.</li>
      <li>Email delivery provider for transactional notifications.</li>
    </ul>

    <H2>5. International transfers</H2>
    <p>
      Some processors may host or process data outside the UK/EEA. Where this happens we rely on appropriate
      safeguards such as the UK International Data Transfer Addendum, EU Standard Contractual Clauses, or an
      adequacy decision. We can provide a copy of the relevant safeguard on request.
    </p>

    <H2>6. Retention</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Contact form enquiries: up to <strong>24 months</strong> after last interaction, then deleted or anonymised.</li>
      <li>Admin account data: while the account is active, plus up to 12 months.</li>
      <li>Consent records: <strong>12 months</strong> from the date of consent, or until you change them.</li>
      <li>Analytics data: as configured in GA4 (default 14 months, IP anonymised).</li>
      <li>Email send logs and suppression list: retained for deliverability and compliance for up to 24 months.</li>
    </ul>
    <p className="text-xs text-gray-500">
      [Placeholder: confirm exact retention periods with operations before publishing if longer periods are required by law.]
    </p>

    <H2>7. Your rights</H2>
    <p>Under UK/EU GDPR you have the right to:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Access your personal data and request a copy.</li>
      <li>Rectify inaccurate or incomplete data.</li>
      <li>Erase data (&quot;right to be forgotten&quot;) where applicable.</li>
      <li>Restrict or object to processing.</li>
      <li>Data portability where processing is based on consent or contract.</li>
      <li>Withdraw consent at any time without affecting prior lawful processing.</li>
      <li>Lodge a complaint with a supervisory authority — in the UK this is the
        {' '}<a className="underline" href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">Information Commissioner&#39;s Office (ICO)</a>.</li>
    </ul>
    <p>
      To exercise any of these rights email <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
      We respond within 30 days.
    </p>

    <H2>8. Withdrawing cookie consent</H2>
    <p>
      Open <em>Privacy settings</em> in the footer at any time to change or withdraw consent. See the{' '}
      <a className="underline" href="/legal/cookie-policy">Cookie Policy</a> for details about each cookie.
    </p>

    <H2>9. Security</H2>
    <p>
      We protect data with TLS in transit, encryption at rest with our hosting provider, role-based access,
      row-level security on databases, audit logging, and least-privilege admin access. No system is perfectly
      secure; we will notify affected users and the relevant authority of any qualifying breach without undue delay.
    </p>

    <H2>10. Children</H2>
    <p>The Site is intended for business users and is not directed to children under 16.</p>

    <H2>11. Changes</H2>
    <p>
      We may update this policy from time to time. Material changes will be highlighted on the Site and the
      &quot;Last updated&quot; date above will change.
    </p>
  </LegalLayout>
);

export default PrivacyPolicy;
