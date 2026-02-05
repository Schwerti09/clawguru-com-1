import type { Metadata } from 'next'
import Container from '@/components/shared/Container'
import { HOSTING_PROVIDERS } from '@/lib/constants'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata: Metadata = {
  title: 'Hosting-Kosten für Moltbot/OpenClaw | ClawGuru',
  description: 'Kostenvergleich: VPS, Domains, SSL, Backups, Monitoring – realistisch und transparent.',
}

export default function HostingKostenPillar() {
  return (
    <Container>
      <div className="py-16 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Hosting-Kosten: realistisch gerechnet</h1>

        <p className="text-gray-400 text-lg mb-10 max-w-3xl">
          Bots sterben nicht an „zu wenig KI“, sondern an schlecht kalkulierten Basics: Server, Backups, Monitoring,
          und irgendwann… Incident Response.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {HOSTING_PROVIDERS.map((p) => (
            <div key={p.name} className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-xl font-bold">{p.name}</h2>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">{p.badge}</span>
              </div>
              <p className="text-gray-400 mb-4">{p.description}</p>
              <div className="text-3xl font-black text-cyan-300 mb-1">{p.price}</div>
              <div className="text-sm text-gray-400 mb-4">{p.specs}</div>

              <div className="text-sm text-gray-300 mb-4">
                <div><span className="text-gray-500">Best for:</span> {p.bestFor}</div>
                <div><span className="text-gray-500">Provision:</span> {p.commission}</div>
              </div>

              <CTAButton href={p.affiliateLink} label="Zum Anbieter" variant="primary" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-800 bg-gray-900/40 p-6">
          <h3 className="text-2xl font-bold mb-3">Was du oft vergisst</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Backups (Speicher + Restore-Test)</li>
            <li>Monitoring/Alerts</li>
            <li>Domain + ggf. E-Mail Versand (Transaktionsmails)</li>
            <li>„Einmal-Leak“ = Zeit + Nerven + Key-Rotation</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <CTAButton href="/einrichtung" label="Zum Setup-Guide" variant="primary" />
            <CTAButton href="/" label="Security-Check starten" variant="outline" />
          </div>
        </div>
      </div>
    </Container>
  )
}
