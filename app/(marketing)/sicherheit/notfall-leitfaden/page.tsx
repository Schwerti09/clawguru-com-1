import type { Metadata } from 'next'
import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata: Metadata = {
  title: 'Notfall-Leitfaden: API-Key Leak | ClawGuru',
  description: 'Sofortmaßnahmen bei Verdacht auf kompromittierte Moltbot/OpenClaw Instanzen.',
}

export default function NotfallLeitfaden() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6">Notfall-Leitfaden: API-Key Leak</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <div className="bg-red-950/25 border border-red-900/40 rounded-2xl p-6">
            <p className="text-lg">
              <span className="font-bold text-red-200">Priorität 1:</span> Schaden stoppen. Dann erst Ursachen jagen.
            </p>
          </div>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">0) Sofort (0–5 Minuten)</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Instanz vom Netz trennen (Firewall „deny all“ oder Server stoppen).</li>
              <li>Alle API Keys rotieren (Anthropic/OpenAI + alles, was der Bot nutzt).</li>
              <li>Deploy-Token, SSH-Keys und DB-Passwörter prüfen/rotieren.</li>
              <li>Logs sichern (für spätere Analyse), dann Zugriff schließen.</li>
            </ol>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">1) Stabilisieren (5–30 Minuten)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Ports minimieren (nur 80/443 öffentlich).</li>
              <li>SSH auf Key-only + IP-Whitelist oder Tailscale.</li>
              <li>Secrets aus Code/Git entfernen, ENV nutzen, Logs scrubben.</li>
              <li>Updates fahren, Reboot, Healthchecks.</li>
            </ul>
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">2) Ursachen (30–120 Minuten)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Git-Historie prüfen: wurden Keys jemals committed?</li>
              <li>Web-Logs prüfen: auffällige Requests, Scans, bekannte Exploit-Pfade.</li>
              <li>System-Auth-Logs prüfen: Brute-Force, neue User, Cronjobs.</li>
              <li>Falls kompromittiert: Neuaufsetzen ist oft schneller und sicherer.</li>
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton href="/einrichtung" label="Sicheres Setup Schritt-für-Schritt" variant="primary" />
            <CTAButton href="/" label="Zurück zum Security-Check" variant="outline" />
          </div>

          <p className="text-sm text-gray-500">
            Hinweis: Dies ist ein technischer Leitfaden. Bei produktiven Systemen mit Kunden-/Personendaten
            sind weitere Schritte (Incident Response, ggf. Meldungen) sinnvoll.
          </p>
        </div>
      </div>
    </Container>
  )
}
