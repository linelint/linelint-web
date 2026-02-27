import Image from 'next/image';
import Link from 'next/link';

const CONTACT_EMAIL = 'hello@linelint.com';
const CALENDLY_URL = 'https://calendly.com/cardin-linelint/30min';

export default function LegalShell({ title, lastUpdated, children }) {
  return (
    <main className='ll-homepage legal-page'>
      <div className='grid-bg'></div>
      <div className='noise-overlay'></div>

      <nav>
        <Link href='/' className='nav-logo' aria-label='LineLint home'>
          <Image src='/icon-transparent.svg' alt='LineLint logo' width={28} height={28} className='nav-logo-image' priority />
          <span className='nav-logo-text'>LineLint</span>
        </Link>
        <div className='nav-links'>
          <a href={CALENDLY_URL} className='nav-cta' target='_blank' rel='noreferrer'>Book a Demo →</a>
        </div>
      </nav>

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
