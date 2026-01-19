'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-900/60 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/60'>
      <div className='mx-auto flex h-16 max-w-5xl items-center justify-between px-6'>
        <Link
          href='/'
          onClick={handleScrollToTop}
          className='flex items-center gap-2 transition-opacity hover:opacity-80'
        >
          <div className='relative h-8 w-8'>
            <Image src='/icon-transparent.svg' alt='LineLint Logo' fill className='object-contain' />
          </div>
          <span className='text-lg font-bold text-white tracking-tight'>LineLint</span>
        </Link>

        <nav className='hidden sm:flex items-center gap-8'>
          <Link href='#features' className='text-sm font-medium text-slate-400 hover:text-white transition-colors'>
            Features
          </Link>
          <Link href='#vendors' className='text-sm font-medium text-slate-400 hover:text-white transition-colors'>
            Vendors
          </Link>
          <Link href='#about' className='text-sm font-medium text-slate-400 hover:text-white transition-colors'>
            About
          </Link>
        </nav>

        <div className='flex items-center gap-4'>
          <Link
            href='mailto:hello@linelint.com'
            className='inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-blue-300 focus:outline-none'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
