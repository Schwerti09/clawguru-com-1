'use client'

import { useState } from 'react'
import { performSecurityCheck } from '@/lib/security-check'

export default function HeroSecurityCheck() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | {
    vulnerable: boolean
    message: string
    details?: string[]
    recommendations?: string[]
  }>(null)

  const handleCheck = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const checkResult = await performSecurityCheck(input)
      setResult(checkResult)
    } catch {
      setResult({
        vulnerable: false,
        message: 'Prüfung fehlgeschlagen. Bitte versuche es erneut.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb für SEO */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-cyan-400">
                ClawGuru
              </a>
            </li>
            <li>/</li>
            <li className="text-gray-300">Security-Check Januar 2026</li>
          </ol>
        </nav>

        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          <span className="block text-gray-300">Moltbot</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Sicherheitsalarm 2026
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl">
          <span className="text-red-400 font-bold">Kritisch:</span> Über 12.000 unsicher konfigurierte
          Instanzen leaken gerade API Keys & Zugangsdaten. Prüfe deinen Bot{' '}
          <span className="underline">kostenlos in 30 Sekunden</span>.
        </p>

        {/* Interaktiver Checker */}
        <div className="bg-gradient-to-br from-gray-900/80 to-blue-950/50 border border-gray-800 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-grow">
              <label htmlFor="security-check" className="block text-sm font-medium mb-2">
                Deine öffentliche IP, Domain oder Bot-URL
              </label>
              <input
                id="security-check"
                type="text"
                placeholder="z.B. 123.123.123.123 oder deinbot.example.com"
                className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleCheck}
                disabled={loading || !input.trim()}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-bold text-white transition-all shadow-lg hover:shadow-xl hover:shadow-red-900/30"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Prüfe...
                  </span>
                ) : (
                  'KOSTENLOS PRÜFEN'
                )}
              </button>
            </div>
          </div>

          {result && (
            <div
              className={`p-6 rounded-xl border ${
                result.vulnerable ? 'bg-red-900/20 border-red-700' : 'bg-green-900/20 border-green-700'
              } animate-in fade-in`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-lg ${result.vulnerable ? 'bg-red-900/50' : 'bg-green-900/50'}`}>
                  {result.vulnerable ? (
                    <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-2 ${result.vulnerable ? 'text-red-300' : 'text-green-300'}`}>
                    {result.vulnerable ? '⚠️ KRITISCHES SICHERHEITSRISIKO' : '✅ KEINE KRITISCHEN RISIKEN GEFUNDEN'}
                  </h3>
                  <p className="mb-4">{result.message}</p>

                  {result.details?.length ? (
                    <div className="text-sm text-gray-300 mb-4">
                      <div className="font-semibold mb-2 text-gray-200">Details</div>
                      <ul className="list-disc pl-6 space-y-1">
                        {result.details.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {result.vulnerable && (
                    <div className="space-y-4">
                      <div className="p-4 bg-red-950/30 rounded-lg">
                        <h4 className="font-bold text-red-300 mb-2">🔐 Notfall-Maßnahmen:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <span className="text-red-400">1.</span> SOFORT API Keys bei Anthropic/OpenAI zurücksetzen
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-red-400">2.</span> Bot-Instanz vom Netz nehmen
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-red-400">3.</span> Unsere Schritt-für-Schritt Anleitung befolgen
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="/sicherheit/notfall-leitfaden"
                          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-white transition-colors"
                        >
                          🔥 ZUM NOTFALL-LEITFADEN
                        </a>
                        <a
                          href="https://clawsyndicate.com"
                          className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 rounded-lg font-bold text-white transition-opacity"
                        >
                          🛡️ PROFESSIONELLE HOSTING-LÖSUNG
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-500 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>100% kostenlos & privat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Keine Daten werden gespeichert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Prüft 12 bekannte Schwachstellen</span>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100K+</div>
            <div className="text-sm">Community-Mitglieder vertrauen uns</div>
          </div>
          <div className="h-8 w-px bg-gray-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">#1</div>
            <div className="text-sm">Ranking für "Moltbot Sicherheit"</div>
          </div>
          <div className="h-8 w-px bg-gray-800 hidden md:block"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm">Security Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  )
}
