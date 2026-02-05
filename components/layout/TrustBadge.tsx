'use client'

import { useEffect, useMemo, useState } from 'react'

const badges = [
  { label: 'Monitoring', value: 'ACTIVE', dot: 'bg-green-500' },
  { label: 'Checks', value: 'PRIVAT', dot: 'bg-blue-500' },
  { label: 'Status', value: '2026 ALERT', dot: 'bg-orange-500' },
]

export default function TrustBadge() {
  const [now, setNow] = useState<Date>(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000 * 15)
    return () => clearInterval(t)
  }, [])

  const time = useMemo(() => {
    const hh = String(now.getHours()).padStart(2, '0')
    const mm = String(now.getMinutes()).padStart(2, '0')
    return `${hh}:${mm}`
  }, [now])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60]">
      <div className="bg-gradient-to-r from-gray-950 to-gray-900 border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-300">
              <span className="font-semibold text-gray-200">Live</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{time}</span>
              <span className="text-gray-500 hidden sm:inline">•</span>
              <span className="text-gray-400 hidden sm:inline">Keine Speicherung im Checker</span>
            </div>

            <div className="flex items-center gap-2">
              {badges.map((b) => (
                <div key={b.label} className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800">
                  <span className={`w-2 h-2 rounded-full ${b.dot}`} />
                  <span className="text-xs text-gray-400">{b.label}</span>
                  <span className="text-xs font-bold text-gray-200">{b.value}</span>
                </div>
              ))}
              <a
                href="/sicherheit"
                className="sm:hidden text-xs font-bold px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800 text-gray-200"
              >
                Sicherheit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
