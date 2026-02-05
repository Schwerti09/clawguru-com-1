import Container from '@/components/shared/Container'

const links = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
]

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 bg-gray-950">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-black text-white">ClawGuru</div>
            <div className="text-sm text-gray-400 max-w-md">
              Security-Checks, Setup-Guides und Hosting-Vergleiche rund um Moltbot/OpenClaw.
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-400 hover:text-cyan-300">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pb-10 text-xs text-gray-500">
          © {new Date().getFullYear()} ClawGuru. Inhalte ohne Gewähr. Affiliate-Links können Provisionen erzeugen.
        </div>
      </Container>
    </footer>
  )
}
