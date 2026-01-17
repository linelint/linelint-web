import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col text-slate-50 selection:bg-blue-500/30'>

      {/* Hero Section */}
      <section className='flex-1 flex flex-col justify-center items-center px-6 py-24 sm:py-32 text-center relative overflow-hidden'>
        {/* Subtle background glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none' />

        <div className='relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance'>
            Stop Overpaying Your Uniform & Linen Vendors
          </h1>

          <p className='text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed'>
            LineLint automatically catches overcharges, missed credits, and contract violations, ensuring every invoice matches exactly what you agreed to pay.
          </p>

          <WaitlistForm />
        </div>
      </section>

      {/* What We Do */}
      <section id='features' className='px-6 py-20 bg-slate-800/30 border-y border-slate-800/50'>
        <div className='max-w-4xl mx-auto space-y-12'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold text-white'>What we do</h2>
            <p className='text-slate-400 text-lg'>
              We remove ambiguity from your recurring spend.
            </p>
          </div>

          <ul className='space-y-6'>
            {[
              'Automatically ingest vendor invoices',
              'Audit invoice line items against your agreements',
              'Flag overcharges, missed credits, and savings opportunities',
              'Maintain continuous contract compliance'
            ].map((item, i) => (
              <li key={i} className='flex items-center gap-3'>
                <div className='w-1.5 h-1.5 rounded-full bg-blue-300/80 shrink-0' />
                <span className='text-lg text-slate-300'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wedge / Vendors */}
      <section id='vendors' className='px-6 py-20'>
        <div className='max-w-4xl mx-auto space-y-8'>
          <h2 className='text-3xl font-bold text-white'>Uniform & linen vendors</h2>
          <p className='text-slate-400 text-lg leading-relaxed'>
            Built to handle the complexity of providers like <span className='text-slate-200 font-semibold'>Cintas</span>, <span className='text-slate-200 font-semibold'>Vestis</span>, <span className='text-slate-200 font-semibold'>UniFirst</span>, and more.
          </p>
        </div>
      </section>

      {/* Credibility / TLG */}
      <section id='about' className='px-6 py-20 bg-slate-800/20 border-y border-slate-800/50'>
        <div className='max-w-4xl mx-auto space-y-6'>
          <div className='inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-2'>
            Our Origins
          </div>
          <h2 className='text-3xl font-bold text-white'>Built by the team behind The Laundry Guy</h2>
          <p className='text-slate-400 text-lg leading-relaxed'>
            LineLint grew out of years of hands-on invoice auditing and contract compliance work for multi-location businesses through The Laundry Guy.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className='px-6 py-24 text-center'>
        <div className='max-w-2xl mx-auto space-y-8'>
          <h2 className='text-3xl font-bold text-white'>Stop overpaying today</h2>
          <div className='flex justify-center'>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='px-6 py-12 border-t border-slate-900 text-center text-slate-400 text-sm'>
        <div className='space-y-4'>
          <div className='flex justify-center gap-6'>
            <p>© {new Date().getFullYear()} LineLint</p>
            <span className='text-slate-800'>|</span>
            <a href='mailto:hello@linelint.com' className='hover:text-slate-200 transition-colors'>hello@linelint.com</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
