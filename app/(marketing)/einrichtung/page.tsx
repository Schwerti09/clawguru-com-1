import type { Metadata } from 'next'
import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'
import { HOSTING_PROVIDERS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Moltbot/OpenClaw Einrichtung | ClawGuru',
  description: 'Setup-Guide: Hosting wählen, Deployment, Secrets, Firewall, SSL, Monitoring.',
}

export default function EinrichtungPillar() {
  const pick = HOSTING_PROVIDERS[0]
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Einrichtung: Schnell & sicher starten</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p className="text-lg text-gray-400">
            Setup ist kein Hexenwerk. Es wird nur gern so behandelt, weil Chaos profitabel ist.
            Hier ist der saubere Weg.
          </p>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">1) Hosting auswählen</h2>
            <p className="mb-4 text-gray-400">
              Für EU-Daten & Preis/Leistung ist oft <span className="text-white font-semibold">{pick.name}</span> die
              entspannteste Wahl.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href={pick.affiliateLink} label={`Zu ${pick.name}`} variant="primary" />
              <CTAButton href="/hosting-kosten" label="Kosten im Detail" variant="outline" />
            </div>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">2) Basis-Hardening</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>UFW/Firewall: nur 80/443 offen, SSH whitelisten</li>
              <li>SSH: Key-only, root aus, fail2ban an</li>
              <li>Secrets: API Keys nur als ENV, niemals im Repo</li>
              <li>HTTPS: Cloudflare oder Caddy/Nginx + HSTS</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">3) Monitoring & Updates</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uptime-Monitoring + Alerts</li>
              <li>Resource Alerts (CPU/RAM), Log-Rotation</li>
              <li>Wöchentliche Security Updates</li>
              <li>Backup & Restore-Test</li>
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/sicherheit" label="Zur Security-Checkliste" variant="primary" />
            <CTAButton href="/" label="Security-Check starten" variant="outline" />
          </div>
        </div>
      </div>
    </Container>
  )
}
