import Container from '@/components/shared/Container'

const nav = [
  { href: '/', label: 'Security-Check' },
  { href: '/sicherheit', label: 'Sicherheit' },
  { href: '/einrichtung', label: 'Einrichtung' },
  { href: '/hosting-kosten', label: 'Hosting-Kosten' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur">
      <div className="bg-gradient-to-r from-blue-950/40 to-cyan-950/20 border-b border-gray-800">
        <Container>
          <div className="py-2 text-xs text-gray-300 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Live Monitoring aktiv
              </span>
              <span className="hidden sm:inline text-gray-500">•</span>
              <span className="text-gray-400">Keine Daten-Speicherung im Checker</span>
            </div>
            <span className="text-gray-400 hidden md:inline">Januar 2026 Alert • Moltbot/OpenClaw</span>
          </div>
        </Container>
      </div>

      <Container>
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-900/20" />
            <div className="leading-tight">
              <div className="font-black tracking-tight text-white">ClawGuru</div>
              <div className="text-xs text-gray-400">Security & Setup Center</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/sicherheit/notfall-leitfaden"
            className="text-sm font-bold px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
          >
            Notfall-Leitfaden
          </a>
        </div>
      </Container>
    </header>
  )
}
