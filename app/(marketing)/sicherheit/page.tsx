import type { Metadata } from 'next'
import Container from '@/components/shared/Container'
import CTAButton from '@/components/marketing/CTAButton'

export const metadata: Metadata = {
  title: 'Moltbot/OpenClaw Sicherheit 2026 | ClawGuru',
  description: 'Best Practices, Hardening-Checkliste und Notfall-Schritte für Moltbot/OpenClaw Instanzen.',
}

export default function SicherheitPillar() {
  return (
    <Container>
      <div className="py-16 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-6">
          Moltbot/OpenClaw Sicherheit 2026
        </h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p className="text-lg text-gray-400">
            Ziel: keine offenen Ports, keine Default-Creds, keine geleakten API Keys. Klingt banal,
            scheitert aber in der Realität erstaunlich oft.
          </p>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">12-Punkte Hardening-Checkliste</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>SSH nur via Key + Port-Whitelisting (oder Tailscale/WireGuard)</li>
              <li>Root-Login aus, sudo nur für einen Admin-User</li>
              <li>Firewall aktiv (UFW/iptables), nur 80/443 öffentlich</li>
              <li>Secrets als ENV + Rotationsplan (Anthropic/OpenAI Keys)</li>
              <li>HTTPS erzwingen (HSTS), TLS sauber konfigurieren</li>
              <li>Logins absichern (Fail2ban), Brute-Force blocken</li>
              <li>Regelmäßige OS-Updates + Security-Patches</li>
              <li>Backups + Restore-Test (nicht nur „Backup vorhanden“)</li>
              <li>Least-Privilege für Dienste/DB</li>
              <li>Monitoring/Alerts (CPU, RAM, ungewöhnliche Requests)</li>
              <li>Secrets niemals in Git, niemals im Client, niemals in Logs</li>
              <li>Security-Review nach jedem Setup-Change</li>
            </ul>
          </section>

          <section className="bg-red-950/20 border border-red-900/40 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3 text-red-200">Notfall: Verdacht auf Leak</h2>
            <p className="text-gray-300 mb-5">
              Bei Verdacht gilt: erst stoppen, dann analysieren. Jede Minute zählt, wenn Keys im Umlauf sind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/sicherheit/notfall-leitfaden" label="Zum Notfall-Leitfaden" variant="primary" />
              <CTAButton href="/einrichtung" label="Hardening-Setup nachziehen" variant="outline" />
            </div>
          </section>

          <p className="text-sm text-gray-500">
            Hinweis: Diese Inhalte sind technische Informationen, keine Rechts- oder Sicherheitsgarantie.
            Für Hochrisiko-Umgebungen sind professionelle Audits sinnvoll.
          </p>
        </div>
      </div>
    </Container>
  )
}
