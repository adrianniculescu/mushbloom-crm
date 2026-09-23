import React from 'react';
import LegalLayout from './LegalLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

const AcceptableUsePolicy: React.FC = () => (
  <LegalLayout
    title="Acceptable Use Policy"
    description="How data, lead streams and services obtained through Mushbloom may and may not be used."
    canonical="https://mushbloom.uk/legal/acceptable-use"
    updated="September 2026"
  >
    <p>
      This Acceptable Use Policy (&quot;AUP&quot;) applies to anyone who receives data, lead streams
      or related services from <strong>Mushbloom</strong>. It sits alongside our{' '}
      <a className="underline" href="/legal/terms">Terms and Conditions</a> and{' '}
      <a className="underline" href="/legal/privacy-policy">Privacy Policy</a>.
    </p>

    <H2>1. Lawful use only</H2>
    <p>
      You must use any data supplied only for lawful purposes, and only in ways permitted by the
      data protection, marketing, telecommunications and consumer laws that apply to you and to the
      people you contact. You are responsible for identifying and documenting your lawful basis for
      each campaign.
    </p>

    <H2>2. Channel restrictions</H2>
    <p>
      Not every dataset is suitable for every channel. Some sources support research or advertising
      audiences only and must not be used for direct outreach. Where we tell you a source is
      restricted, that restriction is binding.
    </p>

    <H2>3. Suppression and opt-outs</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>screen against applicable do-not-call and preference registers before contacting anyone;</li>
      <li>honour every unsubscribe or opt-out request promptly and permanently;</li>
      <li>maintain your own suppression list and apply it to every send;</li>
      <li>identify yourself clearly and provide a working opt-out in every message.</li>
    </ul>

    <H2>4. Prohibited uses</H2>
    <p>You must not use data supplied by Mushbloom to:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>send unlawful, deceptive, fraudulent or misleading communications;</li>
      <li>promote illegal products or services, or operate scams of any kind;</li>
      <li>target children, or vulnerable people in ways that exploit their circumstances;</li>
      <li>carry out identity theft, credential harvesting, phishing or malware distribution;</li>
      <li>discriminate unlawfully against individuals or groups;</li>
      <li>impersonate another business, brand or individual.</li>
    </ul>

    <H2>5. Resale and redistribution</H2>
    <p>
      Data is licensed for your own use under the terms agreed with us. You must not resell, sublicense,
      publish or otherwise redistribute it without our prior written consent.
    </p>

    <H2>6. Security</H2>
    <p>
      You must store data securely, restrict access to people who need it, and delete it when it is no
      longer needed for the purpose it was supplied for.
    </p>

    <H2>7. Enforcement</H2>
    <p>
      We may suspend or terminate delivery, without refund, where we reasonably believe this AUP has been
      breached. We may also decline any request we consider inappropriate or unlawful, and we will say so
      plainly rather than working around it.
    </p>

    <H2>8. No legal advice</H2>
    <p>
      Nothing in this AUP is legal advice, and nothing in it confirms that any particular use of data is
      lawful in your jurisdiction. Take independent legal advice where your campaign is regulated or
      crosses borders.
    </p>

    <H2>9. Contact</H2>
    <p>
      Questions about this policy: <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
    </p>
  </LegalLayout>
);

export default AcceptableUsePolicy;
