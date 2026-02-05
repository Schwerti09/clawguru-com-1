import type { Metadata } from 'next'
import Container from '@/components/shared/Container'
import { LEGAL_INFO } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | ClawGuru',
  description: 'DSGVO-konforme Datenschutzerklärung (Template) für ClawGuru.',
}

export default function DatenschutzPage() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mt-3">
              <strong>{LEGAL_INFO.company}</strong><br />
              {LEGAL_INFO.owner}<br />
              {LEGAL_INFO.address}<br />
              {LEGAL_INFO.city}<br />
              E-Mail: <a className="text-cyan-400 hover:underline" href={`mailto:${LEGAL_INFO.email}`}>{LEGAL_INFO.email}</a>
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
            <p>
              Diese Datenschutzerklärung ist ein Template. Je nach Tracking, Ads, Analytics, Newsletter,
              Hosting und eingesetzten Tools kann eine Anpassung erforderlich sein.
              Für rechtsverbindliche Texte solltest du juristischen Rat einholen.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">3. Server-Logfiles</h2>
            <p>
              Beim Aufruf der Website können durch den Hosting-Anbieter automatisch Informationen in sogenannten
              Server-Logfiles erhoben werden (z.B. Browsertyp, Betriebssystem, Referrer-URL, IP-Adresse, Uhrzeit).
              Diese Daten dienen der technischen Bereitstellung und Sicherheit.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">4. Affiliate-Links</h2>
            <p>
              Diese Website kann Affiliate-Links enthalten. Wenn du über solche Links einen Kauf tätigst,
              erhalten wir ggf. eine Provision. Für dich entstehen dadurch keine Mehrkosten.
            </p>
          </section>

          <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">5. Deine Rechte</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Auskunft, Berichtigung, Löschung</li>
              <li>Einschränkung der Verarbeitung</li>
              <li>Datenübertragbarkeit</li>
              <li>Widerspruch gegen Verarbeitung</li>
              <li>Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
          </section>
        </div>
      </div>
    </Container>
  )
}
