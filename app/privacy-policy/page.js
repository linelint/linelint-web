import LegalShell from '@/app/components/LegalShell';

export const metadata = {
  title: 'Privacy Policy | LineLint',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title='Privacy Policy' lastUpdated='January 28, 2026'>
      <div className='legal-section'>
        <p>
          This Privacy Policy (&apos;Policy&apos;) describes how LineLint (&apos;the service&apos;, &apos;we&apos;, &apos;us&apos;) collects, uses, and shares information when you use the service.
          By using the service, you agree to the terms of this Policy.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly, including your email address, first and last name, and login timestamps.
          We also use authentication cookies to maintain your session.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Third-Party Services</h2>
        <p>Per GDPR requirements, and for transparency, our third-party data sub-processors are:</p>
        <ul className='legal-list'>
          <li><a className='legal-link' href='https://cloudflare.com' target='_blank' rel='noreferrer'>Cloudflare</a> - DNS</li>
          <li><a className='legal-link' href='https://hosthatch.com' target='_blank' rel='noreferrer'>HostHatch</a> - VPS</li>
          <li><a className='legal-link' href='https://mongodb.com' target='_blank' rel='noreferrer'>MongoDB</a> - Database hosting</li>
          <li><a className='legal-link' href='https://aws.amazon.com' target='_blank' rel='noreferrer'>AWS</a> - Email delivery (SES) and file storage (S3)</li>
          <li><a className='legal-link' href='https://sentry.io' target='_blank' rel='noreferrer'>Sentry</a> - Application performance monitoring and error tracking</li>
        </ul>
      </div>

      <div className='legal-section'>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide authentication, deliver the service, manage your account, send important service communications, and improve our platform.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Data Security</h2>
        <p>
          We implement security measures including encryption, secure authentication tokens, and access controls to protect your information.
          However, no system is completely secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Data Retention and Deletion</h2>
        <p>
          We retain your information as long as your account is active.
          To request deletion of your personal data, email <a className='legal-link' href='mailto:hello@linelint.com'>hello@linelint.com</a>.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information.
          Users in certain jurisdictions may have additional rights under GDPR or CCPA.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Contact</h2>
        <p>
          If you have any questions, concerns, or inquiries regarding this Policy or your personal information, contact us at
          {' '}
          <a className='legal-link' href='mailto:hello@linelint.com'>hello@linelint.com</a>.
        </p>
      </div>

      <div className='legal-section'>
        <h2>Updates to This Policy</h2>
        <p>
          We may update or modify this Policy from time to time, and any changes will be posted on this page with a revised
          &apos;Last Updated&apos; date. We encourage you to review this Policy periodically.
        </p>
      </div>
    </LegalShell>
  );
}
