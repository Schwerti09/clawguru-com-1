import HeroSecurityCheck from '@/components/marketing/HeroSecurityCheck'
import AffiliateComparison from '@/components/marketing/AffiliateComparison'
import CTAButton from '@/components/marketing/CTAButton'
import TransparencyWidget from '@/components/marketing/TransparencyWidget'
import Container from '@/components/shared/Container'
import { SECURITY_STATS } from '@/lib/constants'

export default function Home() {
  return (
    <>
      {/* Hero Section mit Security Check */}
      <section className="border-b border-gray-800">
        <Container>
          <HeroSecurityCheck />
        </Container>
      </section>

      {/* Live Stats */}
      <section className="py-8 bg-gray-900/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-cyan-400">{SECURITY_STATS.checks}</div>
              <div className="text-sm text-gray-400">Sicherheitschecks</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-orange-400">{SECURITY_STATS.vulnerable}</div>
              <div className="text-sm text-gray-400">gefährdete Bots</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-400">{SECURITY_STATS.patched}</div>
              <div className="text-sm text-gray-400">gepatchte Lecks</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-400">#{SECURITY_STATS.rank}</div>
              <div className="text-sm text-gray-400">Autorität Ranking</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Affiliate Vergleich - HOHE PROVISIONEN */}
      <section className="py-16">
        <Container>
          <h2 className="text-4xl font-bold text-center mb-4">
            Getestet & Empfohlen: Die besten Anbieter für deinen Bot
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Wir testen unabhängig. Diese Empfehlungen finanzieren unsere Arbeit. Dein Vorteil:
            Exklusive Deals und unsere Step-by-Step Einrichtungsguides.
          </p>
          <AffiliateComparison />
        </Container>
      </section>

      {/* ClawSyndicate Upsell */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-950/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center p-8 rounded-2xl border border-cyan-800/30">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-gray-300">Keine Lust auf Setup & Wartung?</span>
              <br />
              <span className="text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Wir machen das für dich.
              </span>
            </h2>
            <p className="text-xl mb-8">
              ClawSyndicate hostet, sichert und wartet deinen persönlichen Moltbot-Agenten.
              <br />
              <strong>In 10 Minuten einsatzbereit. Ab 49€/Monat.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="https://clawsyndicate.com/checkout?plan=pro"
                label="Jetzt Managed Bot mieten (ab 149€/Monat)"
                variant="primary"
                size="lg"
              />
              <CTAButton
                href="/einrichtung"
                label="Lieber selbst hosten? Zum Guide"
                variant="outline"
                size="lg"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Transparenz Widget */}
      <TransparencyWidget />
    </>
  )
}
