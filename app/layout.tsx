import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TrustBadge from '@/components/layout/TrustBadge'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'ClawGuru | Das offizielle Moltbot/OpenClaw Security & Setup Center 2026',
  description:
    'Moltbot-Sicherheitsalarm Januar 2026: Über 12.000 Instanzen exponiert. Prüfe deine Bot-Sicherheit, vergleiche Hosting-Anbieter und meistere das Clawdbot-Ökosystem.',
  keywords: [
    'moltbot',
    'openclaw',
    'clawdbot',
    'sicherheit 2026',
    'api key leak',
    'hosting vergleich',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://clawguru.com',
    title: 'ClawGuru | Moltbot Security Command Center 2026',
    description:
      'Die autoritative Quelle für Moltbot/OpenClaw Sicherheit, Setup und Kostenoptimierung.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@clawguru',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ClawGuru',
              url: 'https://clawguru.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://clawguru.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="bg-gray-950 text-gray-100 min-h-screen font-sans">
        <TrustBadge />
        <Header />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
