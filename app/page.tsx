export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Security Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Complete Audit Logs for{' '}
          <span className="text-[#58a6ff]">API Key Usage</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Track every API key usage across environments with real-time anomaly detection and compliance reporting. Built for DevOps teams and security engineers who need full visibility.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Start for $59/mo
          </a>
          <a
            href="#faq"
            className="inline-block px-8 py-3 rounded-lg border border-[#30363d] text-[#c9d1d9] font-medium text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
          >
            Learn More
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Webhook &amp; SDK ingestion</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> ML anomaly detection</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Compliance reports</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Real-time dashboards</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$59<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-8">Everything you need for API key security</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited API key tracking',
              'Real-time anomaly alerts',
              'SOC2 &amp; GDPR compliance reports',
              'Webhook + SDK integrations',
              'Time-series event storage',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does API key tracking work?</h3>
            <p className="text-[#8b949e] text-sm">You send usage events to our webhook endpoint or integrate our lightweight SDK. Every request is logged with metadata — key ID, timestamp, IP, environment — and stored in a time-series database for instant querying.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What does anomaly detection cover?</h3>
            <p className="text-[#8b949e] text-sm">Our ML models flag unusual usage patterns: sudden traffic spikes, off-hours access, geographic anomalies, and rate deviations. Alerts are delivered in real time via Slack, email, or webhook.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Which compliance frameworks are supported?</h3>
            <p className="text-[#8b949e] text-sm">We generate audit-ready reports for SOC 2 Type II, GDPR, HIPAA, and ISO 27001. Reports can be exported as PDF or CSV and scheduled for automatic delivery to your compliance team.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} API Key Audit Trail. All rights reserved.
      </footer>
    </main>
  )
}
