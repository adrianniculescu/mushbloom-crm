import React from 'react';
import LegalLayout from './LegalLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

const AccessibilityStatement: React.FC = () => (
  <LegalLayout
    title="Accessibility Statement"
    description="Mushbloom's commitment to accessibility on mushbloom.uk, current status, known limitations and contact."
    canonical="https://mushbloom.uk/legal/accessibility"
    updated="January 2025"
  >
    <p>
      Mushbloom is committed to making <strong>mushbloom.uk</strong> usable by the widest possible audience,
      regardless of ability or technology. This statement covers the public Site and the supported user journeys
      below.
    </p>

    <H2>1. Standard we aim for</H2>
    <p>
      We are working towards conformance with the
      {' '}<a className="underline" href="https://www.w3.org/TR/WCAG22/" target="_blank" rel="noopener noreferrer">
        Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA
      </a>. This page describes our current status, the journeys we have prioritised, known limitations and how to
      get help if you need it. Date of last accessibility review: <strong>January 2025</strong>.
    </p>

    <H2>2. Measures we take</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Semantic HTML, landmarks (<code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>) and a logical heading order.</li>
      <li>Keyboard support for navigation, forms, dialogs and the cookie consent UI.</li>
      <li>Visible focus indicators on all interactive elements.</li>
      <li>Form fields with labels, accessible validation feedback, and error states that don&#39;t rely on colour alone.</li>
      <li>Alternative text for meaningful images; decorative images use empty <code>alt</code>.</li>
      <li>Modals and overlays use focus management compatible with assistive technologies.</li>
      <li>Respect for <code>prefers-reduced-motion</code> on non-essential animation.</li>
      <li>Sufficient text contrast against the dark interface.</li>
    </ul>

    <H2>3. Journeys we have audited</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>Home and primary navigation</li>
      <li>Contact and lead capture forms</li>
      <li>Service and portfolio pages</li>
      <li>Cookie consent banner and Privacy settings dialog</li>
      <li>Legal pages (Privacy, Cookies, Terms, this statement)</li>
    </ul>

    <H2>4. Known limitations</H2>
    <p>We are transparent about areas still being improved:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Some embedded third-party content (e.g. external booking widgets) is not under our direct control and may
        not fully meet WCAG 2.2 AA. We provide email and phone alternatives.</li>
      <li>A small number of older wiki articles may use heading structures that we are progressively refactoring.</li>
      <li>Automatically generated portfolio screenshots may have limited descriptive alternative text.</li>
    </ul>

    <H2>5. We do not use accessibility overlays</H2>
    <p>
      We do not install third-party accessibility overlay widgets. We rely on real code, content and design
      improvements instead.
    </p>

    <H2>6. Reporting an accessibility problem</H2>
    <p>
      If you find a page or feature that is difficult to use, please contact us. We aim to acknowledge reports
      within 5 working days and to provide a substantive response within 20 working days.
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>Email: <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a></li>
      <li>Phone: <a className="underline" href="tel:+40725388605">+40 725 388 605</a></li>
    </ul>
    <p>Please include the page URL, a description of the problem and the assistive technology you use, if any.</p>

    <H2>7. Enforcement</H2>
    <p>
      If you are not satisfied with our response, you may contact the relevant supervisory authority in your
      jurisdiction. In the UK, accessibility complaints related to public services can be raised with the
      Equality and Human Rights Commission. We are not a public-sector body, but we welcome the same scrutiny.
    </p>
  </LegalLayout>
);

export default AccessibilityStatement;
