import Container from '@/components/shared/Container'
import { LEGAL_INFO } from '@/lib/constants'

export default function ImpressumPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <p className="mb-2">
                <strong>Unternehmen:</strong> {LEGAL_INFO.company}
              </p>
              <p className="mb-2">
                <strong>Inhaber:</strong> {LEGAL_INFO.owner}
              </p>
              <p className="mb-2">
                <strong>Anschrift:</strong> {LEGAL_INFO.address}, {LEGAL_INFO.city}
              </p>
              <p className="mb-2">
                <strong>Kontakt:</strong>{' '}
                <a href={`mailto:${LEGAL_INFO.email}`} className="text-cyan-400 hover:underline">
                  {LEGAL_INFO.email}
                </a>
              </p>
              <p>
                <strong>Steuerliche Angaben:</strong> {LEGAL_INFO.taxNote}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Die Inhalte dieser Webseite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Affiliate-Offenlegung</h2>
            <div className="bg-blue-900/20 p-6 rounded-lg border border-blue-800">
              <p className="mb-4">
                <strong>Diese Webseite enthält Affiliate-Links.</strong> Das bedeutet: Wenn du auf einen
                dieser Links klickst und einen Kauf tätigst, erhalten wir eine Provision – ohne zusätzliche
                Kosten für dich.
              </p>
              <p className="text-gray-200/90">
                Wir empfehlen nur Produkte und Dienstleistungen, die wir selbst getestet, genutzt und
                für unseren Moltbot/OpenClaw-Einsatz als wertvoll erachtet haben. Diese Affiliate-Erlöse
                ermöglichen es uns, kostenlose Sicherheitschecks, detaillierte Guides und unabhängige
                Tests zu finanzieren.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Urheberrecht</h2>
            <p className="text-gray-300">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </section>
        </div>
      </div>
    </Container>
  )
}
