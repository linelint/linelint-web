import Image from "next/image";
import WaitlistForm from "./components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col text-slate-50 selection:bg-blue-500/30">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center px-6 py-24 sm:py-32 text-center relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 flex flex-col items-center">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 opacity-90">
            <Image src="/linelint.svg" alt="LineLint Logo" fill className="object-contain" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] text-balance">
            Continuous spend monitoring and <span className="text-blue-400">contract compliance</span> for vendor invoices
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            LineLint automatically audits vendor invoices to catch overcharges, missed credits, and contract violations — starting with uniform & linen suppliers.
          </p>

          <div className="flex flex-col items-center pt-4">
            <WaitlistForm />
            <p className="mt-4 text-sm text-slate-500">
              Join the waitlist for early access.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-20 bg-slate-800/30 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">What we do</h2>
            <p className="text-slate-400 text-lg">
              We remove ambiguity from your recurring spend.
            </p>
          </div>

          <ul className="space-y-6">
            {[
              "Automatically ingest vendor invoices",
              "Audit charges against contracts and benchmarks",
              "Flag overcharges, missed credits, and non-compliance",
              "Monitor continuously, not once per year"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="text-lg text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wedge / Vendors */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-white">Starting with uniform & linen vendors</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Built to handle the complexity of providers like <span className="text-slate-200 font-semibold">Cintas</span>, <span className="text-slate-200 font-semibold">UniFirst</span>, <span className="text-slate-200 font-semibold">Vestis</span>, and <span className="text-slate-200 font-semibold">Alsco</span> — with plans to expand to other recurring vendor categories.
          </p>
        </div>
      </section>

      {/* Credibility / TLG */}
      <section className="px-6 py-20 bg-slate-800/20">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-2">
            Our Origins
          </div>
          <h2 className="text-3xl font-bold text-white">Built by the team behind The Laundry Guy</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            LineLint grew out of years of hands-on invoice auditing and contract compliance work for multi-location businesses through The Laundry Guy.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white">Stop overpaying on auto-pilot</h2>
          <div className="flex justify-center">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-slate-900 text-center text-slate-600 text-sm">
        <div className="space-y-4">
          <p>© {new Date().getFullYear()} LineLint</p>
          <div className="flex justify-center gap-6">
            <a href="mailto:hello@linelint.com" className="hover:text-slate-400 transition-colors">hello@linelint.com</a>
            <span className="text-slate-800">|</span>
            <span className="cursor-not-allowed opacity-50">Privacy Policy</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
