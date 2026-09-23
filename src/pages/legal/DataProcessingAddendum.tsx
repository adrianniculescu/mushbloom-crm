import React from 'react';
import LegalLayout from './LegalLayout';

const H2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-semibold text-white mt-8 mb-3 font-['Space_Grotesk']">{children}</h2>
);

const DataProcessingAddendum: React.FC = () => (
  <LegalLayout
    title="Data Processing Addendum"
    description="How Mushbloom handles personal data supplied to or by clients, including roles, security and sub-processors."
    canonical="https://mushbloom.uk/legal/data-processing"
    updated="September 2026"
  >
    <p>
      This Data Processing Addendum (&quot;DPA&quot;) forms part of the agreement between{' '}
      <strong>Mushbloom</strong> [legal entity name and registered address to be confirmed] and the
      client (&quot;you&quot;) where Mushbloom processes personal data in connection with its services.
      It should be read with our{' '}
      <a className="underline" href="/legal/terms">Terms and Conditions</a>,{' '}
      <a className="underline" href="/legal/privacy-policy">Privacy Policy</a> and{' '}
      <a className="underline" href="/legal/acceptable-use">Acceptable Use Policy</a>.
    </p>

    <H2>1. Roles of the parties</H2>
    <p>
      Where we supply data or lead streams to you, you act as an independent controller of that data
      once it is delivered, and you determine the purposes and means of your own processing. Where we
      process personal data on your instructions as part of a service engagement, we act as your
      processor for that processing.
    </p>

    <H2>2. Subject matter and duration</H2>
    <p>
      Processing continues for the duration of the engagement and for any period afterwards required by
      law. The subject matter is the provision of lead generation, data and marketing services as set
      out in the agreed scope.
    </p>

    <H2>3. Categories of data and data subjects</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>contact details such as names, email addresses, telephone numbers and postal locations;</li>
      <li>business details such as company name, role and company identifiers;</li>
      <li>campaign and engagement data such as responses and opt-out records.</li>
    </ul>
    <p>Data subjects are the individuals and business contacts within the datasets concerned.</p>

    <H2>4. Our obligations as processor</H2>
    <ul className="list-disc pl-6 space-y-1">
      <li>process personal data only on your documented instructions, unless required otherwise by law;</li>
      <li>ensure personnel with access are bound by confidentiality;</li>
      <li>implement appropriate technical and organisational security measures;</li>
      <li>assist you, so far as reasonably possible, with data subject requests and security incidents;</li>
      <li>notify you without undue delay after becoming aware of a personal data breach;</li>
      <li>delete or return personal data at the end of the engagement, subject to legal retention duties.</li>
    </ul>

    <H2>5. Your obligations</H2>
    <p>
      You warrant that you have a valid lawful basis for the processing you instruct or carry out, that
      you provide any required notices to data subjects, and that your use of data complies with our
      Acceptable Use Policy and with applicable law in every market you contact.
    </p>

    <H2>6. Sub-processors</H2>
    <p>
      We use third-party providers for hosting, email delivery, analytics and data sourcing. We require
      each to offer appropriate safeguards. A current list of sub-processors is available on request at{' '}
      <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
    </p>

    <H2>7. International transfers</H2>
    <p>
      Where personal data is transferred outside the UK or EEA, we rely on an approved transfer
      mechanism such as adequacy regulations or standard contractual clauses, with additional safeguards
      where required.
    </p>

    <H2>8. Security</H2>
    <p>
      Measures include access control, encryption in transit, restricted administrative access, logging
      and periodic review. Measures are proportionate to the risk and may be updated over time.
    </p>

    <H2>9. Audit</H2>
    <p>
      On reasonable written notice, and no more than once a year unless required by a regulator, we will
      make available the information reasonably necessary to demonstrate compliance with this DPA.
    </p>

    <H2>10. Contact</H2>
    <p>
      Data protection enquiries: <a className="underline" href="mailto:office@mushbloom.co.uk">office@mushbloom.co.uk</a>.
    </p>
  </LegalLayout>
);

export default DataProcessingAddendum;
