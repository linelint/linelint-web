import LegalShell from '@/app/components/LegalShell';

export const metadata = {
  title: 'Terms of Service | LineLint',
  alternates: {
    canonical: '/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalShell title='Terms of Service' lastUpdated='January 28, 2026'>
      <div className='legal-section'>
        <h2>Acknowledgement</h2>
        <p>
          Your access and use of LineLint (&apos;the service&apos;, &apos;we&apos;, &apos;us&apos;) is conditioned on accepting and complying with these terms.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Service Description</h2>
        <p>
          LineLint is a business management platform for laundry and linen services, providing tools for managing clients, agreements, invoices, and cost analysis.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Account</h2>
        <p>
          You may not use bots or automation tools on the site without express written consent from us.
          You are not allowed to impersonate any other user or use a username from another person or entity (like a trademark) that is subject to rights of anyone else except for you.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Termination</h2>
        <p>
          Users that violate these terms are subject to having their accounts disabled and/or data deleted.
          We have full discretion in determining whether a user is subject to termination and have the right to terminate accounts without prior notice or liability for any reason.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Intellectual Property</h2>
        <p>
          You retain ownership of all data you upload to the service.
          We retain ownership of the platform, software, and related intellectual property.
          By using the service, you grant us permission to process and store your data to provide the service.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Limitation of Liability</h2>
        <p>
          The service is provided &quot;as is&quot; without warranties of any kind.
          We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
          Our total liability shall not exceed the amount you paid for the service in the past 12 months.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Governing Law</h2>
        <p>
          These terms are governed by the laws of the United States.
          Any disputes shall be resolved in the applicable courts.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Contact</h2>
        <p>
          If you have any questions, concerns, or inquiries regarding these terms, contact us at
          {' '}
          <a className='legal-link' href='mailto:hello@linelint.com'>hello@linelint.com</a>.
        </p>
      </div>
    </LegalShell>
  );
}
