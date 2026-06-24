import React from 'react';
import LegalLayout from './LegalLayout';
import { useConsent } from '@/lib/consent';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

interface Row {
  name: string;
  provider: string;
  category: 'Strictly necessary' | 'Analytics' | 'Marketing' | 'Preferences';
  purpose: string;
  duration: string;
  required: 'Necessary' | 'Optional';
}

const rows: Row[] = [
  {
    name: 'mb_consent_v1',
    provider: 'Mushbloom (this site)',
    category: 'Strictly necessary',
    purpose: 'Stores your cookie preferences, timestamp and policy version.',
    duration: '12 months',
    required: 'Necessary',
  },
  {
    name: 'sb-*-auth-token',
    provider: 'Lovable Cloud / Supabase',
    category: 'Strictly necessary',
    purpose: 'Authenticates admin users to the CMS. Only set on admin routes.',
    duration: 'Session / up to 7 days',
    required: 'Necessary',
  },
  {
    name: '_ga, _ga_*',
    provider: 'Google Analytics 4',
    category: 'Analytics',
    purpose: 'Aggregated, IP-anonymised traffic measurement (page views, sessions, source).',
    duration: 'Up to 13 months',
    required: 'Optional',
  },
  {
    name: 'tidycal.com (third party)',
    provider: 'TidyCal',
    category: 'Marketing',
    purpose: 'Only loaded after you click a "book a call" link to schedule an appointment.',
    duration: 'Set by TidyCal',
    required: 'Optional',
  },
];

const CookiePolicy: React.FC = () => {
  const { openSettings } = useConsent();
  return (
    <LegalLayout
      title="Cookie Policy"
      description="Cookies and similar technologies used on mushbloom.uk, and how to control them."
      canonical="https://mushbloom.uk/legal/cookie-policy"
      updated="January 2025"
    >
      <p>
        This Cookie Policy explains how mushbloom.uk uses cookies and similar technologies. It complements our{' '}
        <a className="underline" href="/legal/privacy-policy">Privacy Policy</a>.
      </p>

      <H2>1. What are cookies?</H2>
      <p>
        Cookies are small text files stored on your device by websites you visit. We also use comparable
        technologies (localStorage, pixel tags). Some are essential for the site to function; others are only
        set with your consent.
      </p>

      <H2>2. Categories we use</H2>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Strictly necessary</strong> — required for the site to function (always active).</li>
        <li><strong>Analytics</strong> — anonymous traffic measurement.</li>
        <li><strong>Marketing</strong> — campaign measurement and conversion tracking.</li>
        <li><strong>Preferences</strong> — remembers choices like UI options on return visits.</li>
      </ul>

      <H2>3. Cookies and trackers currently in use</H2>
      <div className="overflow-x-auto rounded-lg border border-white/10">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white">
            <tr>
              <th scope="col" className="text-left p-3">Name</th>
              <th scope="col" className="text-left p-3">Provider</th>
              <th scope="col" className="text-left p-3">Category</th>
              <th scope="col" className="text-left p-3">Purpose</th>
              <th scope="col" className="text-left p-3">Duration</th>
              <th scope="col" className="text-left p-3">Required</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t border-white/10 align-top">
                <td className="p-3 font-mono text-xs text-gray-200">{r.name}</td>
                <td className="p-3 text-gray-300">{r.provider}</td>
                <td className="p-3 text-gray-300">{r.category}</td>
                <td className="p-3 text-gray-300">{r.purpose}</td>
                <td className="p-3 text-gray-300">{r.duration}</td>
                <td className="p-3 text-gray-300">{r.required}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-500">
        Embedded video, maps and similar third-party widgets are loaded behind a click-to-load placeholder
        and only set cookies after you interact with them.
      </p>

      <H2>4. How to change or withdraw consent</H2>
      <p>
        Open <button type="button" onClick={openSettings} className="underline">Privacy settings</button> here, or via
        the link in the footer of any page. You can also clear cookies in your browser settings — that will
        remove our consent record and the banner will appear again.
      </p>

      <H2>5. Contact</H2>
      <p>
        Questions about cookies: <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
      </p>
    </LegalLayout>
  );
};

export default CookiePolicy;
