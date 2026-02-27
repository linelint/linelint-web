'use client';

import Link from 'next/link';

function LineLintLogo() {
  return (
    <svg className='nav-logo-image' viewBox='0 0 132 132' aria-hidden='true' focusable='false'>
      <rect width='12' height='72' x='26' y='14' fill='currentColor' />
      <rect width='12' height='24' x='50' y='38' fill='currentColor' />
      <rect width='60' height='12' x='26' y='74' fill='currentColor' />
      <rect width='60' height='12' x='50' y='98' fill='currentColor' />
    </svg>
  );
}

export default function Header({ navLinks = [], ctaHref, ctaLabel, onCtaClick, ctaTarget = '_blank', ctaRel = 'noreferrer' }) {
  return (
    <nav>
      <Link href='/' className='nav-logo' aria-label='LineLint home'>
        <LineLintLogo />
        <span className='nav-logo-text'>LineLint</span>
      </Link>
      <div className='nav-links'>
        {navLinks.map(({ href, label }) => (
          <a key={`${href}-${label}`} href={href} className='nav-link'>
            {label}
          </a>
        ))}
        {ctaHref && ctaLabel ? (
          <a href={ctaHref} className='nav-cta' onClick={onCtaClick} target={ctaTarget} rel={ctaRel}>
            {ctaLabel}
          </a>
        ) : null}
      </div>
    </nav>
  );
}
