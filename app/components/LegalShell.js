import Link from 'next/link';
import Header from '@/app/components/Header';

const CONTACT_EMAIL = 'hello@linelint.com';
const CALENDLY_URL = 'https://calendly.com/cardin-linelint/30min';

export default function LegalShell({ title, lastUpdated, children }) {
  return (
    <main className='ll-homepage legal-page'>
      <div className='grid-bg'></div>
      <div className='noise-overlay'></div>

      <Header ctaHref={CALENDLY_URL} ctaLabel='Book a Demo →' />

      <section className='section legal-shell'>
        <div className='section-label'>Legal</div>
        <h1 className='section-title legal-title'>{title}</h1>
        <div className='legal-content'>
          {children}
        </div>
        <p className='legal-last-updated'>Last Updated: {lastUpdated}</p>
      </section>

      <footer className='legal-footer'>
        <div className='footer-left'>© 2026 LineLint Inc. · Vendor compliance intelligence.</div>
        <div className='footer-links'>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          <Link href='/privacy-policy'>Privacy</Link>
          <Link href='/terms-of-service'>Terms</Link>
        </div>
      </footer>
    </main>
  );
}
