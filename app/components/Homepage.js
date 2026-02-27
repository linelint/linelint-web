'use client';

import Link from 'next/link';
import Script from 'next/script';
import Header from './Header';

const CALENDLY_URL = 'https://calendly.com/cardin-linelint/30min';
const HEADER_LINKS = [
  { href: '#problem', label: 'Problem' },
  { href: '#platform', label: 'Platform' },
  { href: '#recovery-model', label: 'Results' },
  { href: '#plans', label: 'Plans' },
];

export default function Homepage() {
  const handleCalendlyClick = (event) => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.Calendly?.initPopupWidget) {
      event.preventDefault();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <main className='ll-homepage'>
      <link href='https://assets.calendly.com/assets/external/widget.css' rel='stylesheet' />
      <Script src='https://assets.calendly.com/assets/external/widget.js' strategy='afterInteractive' />

      <div className='grid-bg'></div>
      <div className='noise-overlay'></div>

      <Header
        navLinks={HEADER_LINKS}
        ctaHref={CALENDLY_URL}
        ctaLabel='Book a Demo →'
        onCtaClick={handleCalendlyClick}
      />

      <section className='hero'>
        <div className='hero-badge'>
          <span className='pulse'></span>
          Live Compliance Monitoring
        </div>
        <h1>Your vendors are <em>overcharging</em> you. We prove it.</h1>
        <p className='hero-sub'>
          LineLint is AI-powered compliance intelligence for uniform & linen spend.
          We&apos;ve recovered millions for hundreds of businesses by finding what procurement software can&apos;t see — contract violations, unauthorized fees, and pricing drift hiding in your invoices.
        </p>
        <div className='hero-actions'>
          <a href={CALENDLY_URL} className='btn-primary' onClick={handleCalendlyClick} target='_blank' rel='noreferrer'>Book a Demo →</a>
          <a href='#platform' className='btn-ghost'>See the Platform</a>
        </div>
      </section>

      <div className='proof-bar'>
        <div className='proof-bar-inner'>
          <div className='proof-item'>
            <div className='proof-number'>35<span className='unit'>%</span></div>
            <div className='proof-label'>Average Savings Found</div>
          </div>
          <div className='proof-item'>
            <div className='proof-number'>$900<span className='unit'>K</span></div>
            <div className='proof-label'>Largest Single Credit Recovery</div>
          </div>
          <div className='proof-item'>
            <div className='proof-number'>1500<span className='unit'>+</span></div>
            <div className='proof-label'>Businesses Audited</div>
          </div>
          <div className='proof-item'>
            <div className='proof-number'>10<span className='unit'>YR</span></div>
            <div className='proof-label'>Pricing Intelligence</div>
          </div>
        </div>
      </div>

      <section className='section' id='problem'>
        <div className='section-label'>The Problem</div>
        <h2 className='section-title'>Five ways your linen vendor bill always goes up</h2>
        <p className='section-desc'>
          Most multi-location businesses overpay by 20-35% on recurring vendor spend. Not because vendors are evil — because nobody&apos;s watching. LineLint watches.
        </p>
        <div className='leak-grid'>
          <div className='leak-card'>
            <span className='leak-icon'>LEAK 01</span>
            <h3>Billing Errors & Ghost Charges</h3>
            <p>Items billed but never delivered. Duplicate charges across locations. Service fees that aren&apos;t in your contract.</p>
            <div className='leak-stat'>10%+ of accounts have credits</div>
          </div>
          <div className='leak-card'>
            <span className='leak-icon'>LEAK 02</span>
            <h3>Un-negotiated New Items</h3>
            <p>20% of your products were added after the original contract. They&apos;re priced at rack rate — 40% above what you should pay.</p>
            <div className='leak-stat'>20%+ of spend never negotiated</div>
          </div>
          <div className='leak-card'>
            <span className='leak-icon'>LEAK 03</span>
            <h3>Silent Price Creep</h3>
            <p>Small increases applied quarterly. No notification, no justification. Compounds to 7% annually if you&apos;re not tracking every line item.</p>
            <div className='leak-stat'>12%+ annual price creep</div>
          </div>
          <div className='leak-card'>
            <span className='leak-icon'>LEAK 04</span>
            <h3>Contract Rate Gaps</h3>
            <p>Your negotiated rates were fine 3 years ago. The market moved. You didn&apos;t. You&apos;re paying 2022 prices in a 2026 market.</p>
            <div className='leak-stat'>99%+ of clients have non-competitive rates</div>
          </div>
          <div className='leak-card'>
            <span className='leak-icon'>LEAK 05</span>
            <h3>Missed Credits & Offsets</h3>
            <p>Service failures, late deliveries, quality issues — all contractually eligible for credits. None submitted because nobody tracks them.</p>
            <div className='leak-stat'>100% of credit requests need follow up</div>
          </div>
          <div className='leak-card leak-summary-card'>
            <div className='leak-summary-label'>Cumulative Overspend</div>
            <div className='leak-summary-value'>35%+</div>
            <div className='leak-summary-copy'>of your total vendor spend</div>
          </div>
        </div>
      </section>

      <section className='dashboard-section' id='platform'>
        <div className='section-label'>The Platform</div>
        <h2 className='section-title'>Compliance intelligence, not another dashboard</h2>
        <p className='section-desc'>
          LineLint ingests every invoice, maps it against your contracts, benchmarks it against 10 years of negotiated rates, and tells you exactly what to claim — with the evidence attached.
        </p>

        <div className='dashboard-window'>
          <div className='dash-toolbar'>
            <div className='dash-dots'><span></span><span></span><span></span></div>
            <div className='dash-url'>app.linelint.com/dashboard</div>
            <div className='dash-spacer'></div>
          </div>
          <div className='dash-content'>
            <div className='dash-sidebar'>
              <div className='dash-nav-item active'><div className='dash-nav-icon'></div> Overview</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Invoices</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Compliance</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Benchmarks</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Claims</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Contracts</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Reports</div>
              <div className='dash-nav-item'><div className='dash-nav-icon'></div> Settings</div>
            </div>
            <div className='dash-main'>
              <div className='dash-header'>
                <div>
                  <div className='dash-client-name'>National Spa Chain — Portfolio View</div>
                  <div className='dash-client-meta'>1,000 locations · Vestis, Cintas, UniFirst · Last scan: 2 min ago</div>
                </div>
                <div className='dash-alert-badge'>3 Violations Detected</div>
              </div>

              <div className='dash-metrics'>
                <div className='dash-metric-card'>
                  <div className='dash-metric-label'>Annual Spend</div>
                  <div className='dash-metric-value'>$14.0M</div>
                  <div className='dash-metric-delta delta-negative'>↑ 4.2% vs contract</div>
                </div>
                <div className='dash-metric-card'>
                  <div className='dash-metric-label'>Savings Found</div>
                  <div className='dash-metric-value accent-value'>$3.22M</div>
                  <div className='dash-metric-delta delta-positive'>23% of total spend</div>
                </div>
                <div className='dash-metric-card'>
                  <div className='dash-metric-label'>Open Claims</div>
                  <div className='dash-metric-value'>$412K</div>
                  <div className='dash-metric-delta delta-warning'>7 pending review</div>
                </div>
                <div className='dash-metric-card'>
                  <div className='dash-metric-label'>Compliance Score</div>
                  <div className='dash-metric-value amber-value'>62<span className='score-unit'>/100</span></div>
                  <div className='dash-metric-delta delta-negative'>3 contract violations</div>
                </div>
              </div>

              <div className='dash-chart-area'>
                <div className='dash-chart-header'>
                  <span className='dash-chart-title'>Spend vs. Contracted Rate</span>
                  <div className='dash-chart-tabs'>
                    <span className='dash-chart-tab'>1M</span>
                    <span className='dash-chart-tab'>3M</span>
                    <span className='dash-chart-tab active'>12M</span>
                    <span className='dash-chart-tab'>ALL</span>
                  </div>
                </div>
                <svg className='chart-svg' viewBox='0 0 800 180' preserveAspectRatio='none'>
                  <line x1='0' y1='120' x2='800' y2='120' stroke='#00e59930' strokeWidth='1' strokeDasharray='6,4' />
                  <text x='805' y='124' fill='#00e599' fontFamily='var(--font-jetbrains-mono)' fontSize='9' opacity='0.6'>CONTRACT</text>
                  <polyline fill='none' stroke='#ff4d4d' strokeWidth='2'
                    points='0,130 67,125 134,118 200,110 267,115 334,95 400,90 467,85 534,78 600,82 667,70 734,65' />
                  <polygon fill='url(#redGrad)' opacity='0.15'
                    points='0,130 67,125 134,118 200,110 267,115 334,95 400,90 467,85 534,78 600,82 667,70 734,65 734,180 0,180' />
                  <polygon fill='#ff4d4d' opacity='0.08'
                    points='134,118 200,110 267,115 334,95 400,90 467,85 534,78 600,82 667,70 734,65 734,120 667,120 600,120 534,120 467,120 400,120 334,120 267,120 200,120 134,120' />
                  <defs>
                    <linearGradient id='redGrad' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='0%' stopColor='#ff4d4d' stopOpacity='0.4' />
                      <stop offset='100%' stopColor='#ff4d4d' stopOpacity='0' />
                    </linearGradient>
                  </defs>
                  <text x='0' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>JAN</text>
                  <text x='134' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>MAR</text>
                  <text x='267' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>MAY</text>
                  <text x='400' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>JUL</text>
                  <text x='534' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>SEP</text>
                  <text x='667' y='175' fill='#5e5e6e' fontFamily='var(--font-jetbrains-mono)' fontSize='8'>NOV</text>
                </svg>
              </div>

              <div className='dash-table'>
                <div className='dash-table-header'>
                  <span>Item</span>
                  <span>Contract Rate</span>
                  <span>Billed Rate</span>
                  <span>Overage</span>
                  <span>Status</span>
                </div>
                <div className='dash-table-row'>
                  <span className='item-name'>Massage Table Sheets (King)</span>
                  <span>$0.42/ea</span>
                  <span className='value-red'>$0.61/ea</span>
                  <span className='value-red'>+45.2%</span>
                  <span className='status-badge status-violation'>VIOLATION</span>
                </div>
                <div className='dash-table-row'>
                  <span className='item-name'>Hand Towels — Hot Cabinet</span>
                  <span>$0.18/ea</span>
                  <span className='value-amber'>$0.22/ea</span>
                  <span className='value-amber'>+22.2%</span>
                  <span className='status-badge status-warning'>WARNING</span>
                </div>
                <div className='dash-table-row'>
                  <span className='item-name'>Staff Polo — Branded</span>
                  <span>$3.10/wk</span>
                  <span>$3.10/wk</span>
                  <span className='value-accent'>0.0%</span>
                  <span className='status-badge status-compliant'>COMPLIANT</span>
                </div>
                <div className='dash-table-row'>
                  <span className='item-name'>Body Towels (Oversized)</span>
                  <span>$0.55/ea</span>
                  <span className='value-red'>$0.78/ea</span>
                  <span className='value-red'>+41.8%</span>
                  <span className='status-badge status-violation'>VIOLATION</span>
                </div>
                <div className='dash-table-row'>
                  <span className='item-name'>Robes — Guest</span>
                  <span>$1.20/ea</span>
                  <span className='value-amber'>$1.35/ea</span>
                  <span className='value-amber'>+12.5%</span>
                  <span className='status-badge status-warning'>WARNING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section' id='recovery-model'>
        <div className='section-label'>The 5-Layer Recovery Model</div>
        <h2 className='section-title'>We don&apos;t find one thing. We find everything.</h2>
        <p className='section-desc'>
          Most &quot;cost reduction&quot; tools stop at invoice parsing. LineLint runs a 5-layer forensic analysis built on 10 years of real negotiation outcomes — not industry averages.
        </p>
        <div className='value-grid'>
          <div className='value-layer'>
            <div className='value-layer-num'>Layer 01</div>
            <div className='value-layer-title'>Credit Recovery</div>
            <div className='value-layer-pct'>10%+</div>
            <div className='value-layer-desc'>Historical billing errors found in first 30-60 days</div>
          </div>
          <div className='value-layer'>
            <div className='value-layer-num'>Layer 02</div>
            <div className='value-layer-title'>Compliance Guard</div>
            <div className='value-layer-pct'>3-5%</div>
            <div className='value-layer-desc'>Continuous monitoring catches monthly drift</div>
          </div>
          <div className='value-layer'>
            <div className='value-layer-num'>Layer 03</div>
            <div className='value-layer-title'>Item Optimization</div>
            <div className='value-layer-pct'>8%</div>
            <div className='value-layer-desc'>Un-negotiated post-contract items at rack rate</div>
          </div>
          <div className='value-layer'>
            <div className='value-layer-num'>Layer 04</div>
            <div className='value-layer-title'>Rate Optimization</div>
            <div className='value-layer-pct'>35%</div>
            <div className='value-layer-desc'>Full renegotiation to competitive benchmarks</div>
          </div>
          <div className='value-layer'>
            <div className='value-layer-num'>Layer 05</div>
            <div className='value-layer-title'>Terms Protection</div>
            <div className='value-layer-pct'>7%</div>
            <div className='value-layer-desc'>Prevents compounding price drift over contract life</div>
          </div>
        </div>
      </section>

      <div className='case-studies' id='results'>
        <div className='case-ticker'>
          <div className='case-item'>
            <div className='case-brand'>National Spa Chain — 75+ Locations</div>
            <div className='case-stat'>$275K+</div>
            <div className='case-detail'>Annual savings recovered · 23% reduction on $1.2M spend</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>QSR Drive-In — 60+ Locations</div>
            <div className='case-stat'>$70K</div>
            <div className='case-detail'>Annual savings recovered · 35% reduction on $200K spend</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Regional QSR Chain — 45+ Locations</div>
            <div className='case-stat'>38%</div>
            <div className='case-detail'>Total savings rate · $250K annual spend optimized</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Invoices Audited — 1500+ Locations</div>
            <div className='case-stat'>$50M</div>
            <div className='case-detail'>LineLint software has analyzed over $50M of spend.</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Single Client Recovery</div>
            <div className='case-stat'>$900K</div>
            <div className='case-detail'>One-time credit recovery · largest single refund case</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>National Spa Chain — 75+ Locations</div>
            <div className='case-stat'>$275K+</div>
            <div className='case-detail'>Annual savings recovered · 23% reduction on $1.2M spend</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>QSR Drive-In — 60+ Locations</div>
            <div className='case-stat'>$70K</div>
            <div className='case-detail'>Annual savings recovered · 35% reduction on $200K spend</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Regional QSR Chain — 45+ Locations</div>
            <div className='case-stat'>38%</div>
            <div className='case-detail'>Total savings rate · $250K annual spend optimized</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Invoices Audited — 1500+ Locations</div>
            <div className='case-stat'>$50M</div>
            <div className='case-detail'>LineLint software has analyzed over $50M of spend.</div>
          </div>
          <div className='case-item'>
            <div className='case-brand'>Single Client Recovery</div>
            <div className='case-stat'>$900K</div>
            <div className='case-detail'>One-time credit recovery · largest single refund case</div>
          </div>
        </div>
      </div>

      <section className='plans-section' id='plans'>
        <div className='section-label'>Plans</div>
        <h2 className='section-title'>Flexible plans for 5 to 5,000+ locations</h2>
        <p className='section-desc'>
          Start with software. Add intelligence. Graduate to done-for-you. Every plan pays for itself. Let&apos;s talk about what fits your operation.
        </p>

        <div className='plans-grid'>
          <div className='plan-card'>
            <div className='plan-tier'>Tier 1</div>
            <div className='plan-name'>Compliance Monitor</div>
            <div className='plan-desc'>Self-service invoice auditing and violation detection. You handle vendor communication — we give you the evidence.</div>
            <div className='plan-target'>Best for: 5-20 locations with an ops manager</div>
            <ul className='plan-features'>
              <li>Invoice ingestion & parsing</li>
              <li>Automated compliance flagging</li>
              <li>Claim package generator</li>
              <li>Resolution tracking</li>
              <li>Monthly compliance reports</li>
            </ul>
            <a href={CALENDLY_URL} className='plan-cta' onClick={handleCalendlyClick} target='_blank' rel='noreferrer'>Book a Demo →</a>
          </div>

          <div className='plan-card featured'>
            <div className='plan-tier'>Tier 2</div>
            <div className='plan-name'>Compliance + Intelligence</div>
            <div className='plan-desc'>Everything in Monitor plus proprietary pricing benchmarks from 10 years of negotiation data. Know exactly what you should be paying.</div>
            <div className='plan-target'>Best for: 15-50 locations with a CFO or Finance Director</div>
            <ul className='plan-features'>
              <li>Everything in Monitor</li>
              <li>Proprietary rate benchmarks</li>
              <li>Market rate analysis by region</li>
              <li>Savings opportunity scoring</li>
              <li>Contract optimization recs</li>
              <li>Quarterly business reviews</li>
            </ul>
            <a href={CALENDLY_URL} className='plan-cta' onClick={handleCalendlyClick} target='_blank' rel='noreferrer'>Book a Demo →</a>
          </div>

          <div className='plan-card'>
            <div className='plan-tier'>Tier 3</div>
            <div className='plan-name'>Full-Service</div>
            <div className='plan-desc'>We handle everything. Claim writing, vendor calls, contract renegotiation, ongoing enforcement. Performance-based — we only win when you save.</div>
            <div className='plan-target'>Best for: 30+ locations or $1M+ vendor spend</div>
            <ul className='plan-features'>
              <li>Everything in Intelligence</li>
              <li>Dedicated negotiation team</li>
              <li>Complete vendor management</li>
              <li>Full contract renegotiation</li>
              <li>Ongoing enforcement & optimization</li>
              <li>Limited to 100 clients</li>
            </ul>
            <a href={CALENDLY_URL} className='plan-cta' onClick={handleCalendlyClick} target='_blank' rel='noreferrer'>Apply for Full-Service →</a>
          </div>
        </div>

        <div className='comparison-wrap'>
          <table className='comp-table'>
            <thead>
              <tr>
                <th>Capability</th>
                <th>SIB / Generalists</th>
                <th>Manual / Spreadsheets</th>
                <th>LineLint</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Uniform/Linen Specialization</td>
                <td className='comp-x'>✗ Generic</td>
                <td className='comp-x'>✗ None</td>
                <td className='comp-check'>✓ Purpose-built</td>
              </tr>
              <tr>
                <td>Proprietary Pricing Benchmarks</td>
                <td className='comp-x'>✗ Industry avg</td>
                <td className='comp-x'>✗ None</td>
                <td className='comp-check'>✓ 10yr negotiated rates</td>
              </tr>
              <tr>
                <td>Automated Compliance Detection</td>
                <td className='comp-partial'>◐ Basic</td>
                <td className='comp-x'>✗ Manual review</td>
                <td className='comp-check'>✓ AI-powered, real-time</td>
              </tr>
              <tr>
                <td>Claim Package Generation</td>
                <td className='comp-x'>✗ Not available</td>
                <td className='comp-x'>✗ Manual</td>
                <td className='comp-check'>✓ One-click with evidence</td>
              </tr>
              <tr>
                <td>Contract Term Enforcement</td>
                <td className='comp-x'>✗ No</td>
                <td className='comp-partial'>◐ If someone remembers</td>
                <td className='comp-check'>✓ Automated monitoring</td>
              </tr>
              <tr>
                <td>Done-For-You Negotiation</td>
                <td className='comp-x'>✗ Software only</td>
                <td className='comp-x'>✗ DIY</td>
                <td className='comp-check'>✓ Expert team available</td>
              </tr>
              <tr>
                <td>Avg. Savings Delivered</td>
                <td className='comp-x'>3-5%</td>
                <td className='comp-x'>0-2%</td>
                <td className='comp-check comp-large'>23-38%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='cta-section' id='cta'>
        <h2>Stop funding your<br />vendor&apos;s <em>margin expansion</em></h2>
        <p>
          Upload 3 months of invoices. In 48 hours, we&apos;ll show you exactly what you&apos;re overpaying — with the documentation to get it back.
        </p>
        <div>
          <a href={CALENDLY_URL} className='btn-primary cta-primary-large'>Book Your Free Audit →</a>
        </div>
        <div className='cta-calc'>
          <span className='cta-calc-label'>Avg. credit audit recovery</span>
          <span className='cta-calc-value'>$10K+ per $100K annual spend</span>
        </div>
      </section>

      <footer>
        <div className='footer-left'>© 2026 LineLint Inc. · Vendor compliance intelligence.</div>
        <div className='footer-links'>
          <a href='mailto:hello@linelint.com'>Contact</a>
          <Link href='/privacy-policy'>Privacy</Link>
          <Link href='/terms-of-service'>Terms</Link>
        </div>
      </footer>

    </main>
  );
}
