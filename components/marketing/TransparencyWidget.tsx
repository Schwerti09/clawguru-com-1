import Container from '@/components/shared/Container'
import { AFFILIATE_LINKS } from '@/lib/constants'
import CTAButton from '@/components/marketing/CTAButton'

export default function TransparencyWidget() {
  return (
    <section className="py-16 border-t border-gray-800 bg-gray-950">
      <Container>
        <div className="max-w-5xl mx-auto rounded-2xl border border-gray-800 bg-gray-900/30 p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3">Transparenz: Wie wir Geld verdienen</h3>
              <p className="text-gray-400 mb-6">
                Diese Seite finanziert sich über Affiliate-Links und optionale Managed-Services.
                Der Security-Check ist kostenlos, die Daten werden nicht gespeichert.
              </p>

              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-cyan-500" />
                  <span>
                    <strong>Affiliate-Provisionen</strong> bei Hostern/Tools (z.B. Hetzner, Cloudflare, 1Password).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-blue-500" />
                  <span>
                    <strong>Managed Hosting</strong> über ClawSyndicate (Setup, Wartung, Monitoring).
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-72 rounded-2xl border border-gray-800 bg-gray-950/40 p-6">
              <div className="text-sm text-gray-400 mb-2">Schnellstart</div>
              <div className="text-xl font-black text-white mb-4">Empfohlener Hoster</div>
              <CTAButton href={AFFILIATE_LINKS.HETZNER} label="Hetzner Cloud Deal" variant="primary" />
              <div className="mt-3 text-xs text-gray-500">Affiliate-Link • Preis bleibt gleich</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
