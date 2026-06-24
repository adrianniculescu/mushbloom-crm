import React from 'react';
import LegalLayout from './LegalLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

const Terms: React.FC = () => (
  <LegalLayout
    title="Terms and Conditions"
    description="Terms governing your use of mushbloom.uk and related Mushbloom services."
    canonical="https://mushbloom.uk/legal/terms"
    updated="January 2025"
  >
    <p>
      These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website mushbloom.uk
      (the &quot;Site&quot;) and any information or services made available through it. By using the Site you
      agree to these Terms.
    </p>

    <H2>1. About us</H2>
    <p>
      The Site is operated by <strong>Mushbloom</strong> [legal entity name and registered address to be confirmed].
      You can contact us at <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
    </p>

    <H2>2. Use of the Site</H2>
    <p>
      You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, or
      restrict or inhibit the use and enjoyment of, the Site by any third party. Specifically you must not:
    </p>
    <ul className="list-disc pl-6 space-y-1">
      <li>attempt to gain unauthorised access to the Site, servers or databases;</li>
      <li>introduce viruses, trojans, worms or other malicious material;</li>
      <li>scrape or systematically extract content without our prior written consent;</li>
      <li>misuse forms (spam, false information, automated submissions).</li>
    </ul>

    <H2>3. Services and proposals</H2>
    <p>
      Information on the Site is for general guidance. Any engagement, deliverables, fees and timelines are
      governed by a separate written agreement or accepted proposal. Nothing on the Site constitutes a binding
      offer in itself.
    </p>

    <H2>4. Intellectual property</H2>
    <p>
      All content on the Site (text, graphics, code, logos, designs) is owned by or licensed to Mushbloom and is
      protected by copyright and other intellectual property laws. You may view and download content for personal,
      non-commercial reference only.
    </p>

    <H2>5. Third-party links</H2>
    <p>
      The Site may link to third-party websites. We do not control and are not responsible for the content,
      privacy practices or availability of those sites.
    </p>

    <H2>6. Disclaimer</H2>
    <p>
      The Site is provided &quot;as is&quot;. To the maximum extent permitted by law we exclude all warranties,
      express or implied, regarding accuracy, fitness for purpose or non-infringement. Nothing in these Terms
      limits liability for death, personal injury caused by negligence, fraud, or any liability that cannot be
      excluded under applicable law.
    </p>

    <H2>7. Limitation of liability</H2>
    <p>
      To the maximum extent permitted by law, Mushbloom will not be liable for any indirect, incidental,
      consequential or punitive damages arising from your use of the Site. Our total liability for any claim
      relating to the Site is limited to GBP 100.
    </p>

    <H2>8. Privacy</H2>
    <p>
      Our processing of personal data is described in the <a className="underline" href="/legal/privacy-policy">Privacy Policy</a>{' '}
      and <a className="underline" href="/legal/cookie-policy">Cookie Policy</a>.
    </p>

    <H2>9. Changes to these Terms</H2>
    <p>
      We may update these Terms from time to time. The &quot;Last updated&quot; date above reflects the latest revision.
      Continued use after changes constitutes acceptance.
    </p>

    <H2>10. Governing law</H2>
    <p>
      These Terms are governed by the laws of <strong>England and Wales</strong>, and the courts of England and
      Wales have exclusive jurisdiction over any dispute, save where mandatory consumer protection rules in your
      country of residence provide otherwise.
    </p>
    <p className="text-xs text-gray-500">
      [Placeholder: confirm chosen governing law and jurisdiction with legal counsel.]
    </p>

    <H2>11. Contact</H2>
    <p>
      Questions about these Terms: <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
    </p>
  </LegalLayout>
);

export default Terms;
