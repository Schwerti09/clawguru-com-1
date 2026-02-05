import type { Metadata } from 'next'
import Container from '@/components/shared/Container'

export const metadata: Metadata = {
  title: 'AGB | ClawGuru',
  description: 'Allgemeine Geschäftsbedingungen (Template) für ClawGuru.',
}

export default function AgbPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p>
              Diese AGB sind ein Template. Je nach tatsächlichem Angebot (digitale Inhalte, Managed Hosting,
              Abos, etc.) sind Anpassungen notwendig. Für rechtsverbindliche Texte bitte juristischen Rat einholen.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">2. Leistungen</h2>
            <p>
              ClawGuru stellt Informationsinhalte (Guides, Vergleiche, Tools) bereit. Die Sicherheitsprüfung
              ist eine technische Einschätzung und keine Garantie für vollständige Sicherheit.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">3. Haftung</h2>
            <p>
              Für Schäden, die aus der Nutzung der bereitgestellten Informationen entstehen, wird – soweit gesetzlich
              zulässig – keine Haftung übernommen. Eigene Prüfungen und professionelle Audits werden empfohlen.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">4. Affiliate-Hinweis</h2>
            <p>
              Diese Website enthält Affiliate-Links. Provisionen finanzieren den Betrieb der Plattform.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
