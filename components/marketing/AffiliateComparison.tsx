import { HOSTING_PROVIDERS } from '@/lib/constants'
import CTAButton from '@/components/marketing/CTAButton'

export default function AffiliateComparison() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/30">
      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-left">
          <thead className="bg-gray-950/60 border-b border-gray-800">
            <tr className="text-sm text-gray-300">
              <th className="p-4">Anbieter</th>
              <th className="p-4">Preis</th>
              <th className="p-4">Specs</th>
              <th className="p-4">Best for</th>
              <th className="p-4">Badge</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {HOSTING_PROVIDERS.map((p) => (
              <tr key={p.name} className="border-b border-gray-800 last:border-b-0">
                <td className="p-4">
                  <div className="font-bold text-white">{p.name}</div>
                  <div className="text-sm text-gray-400">{p.description}</div>
                </td>
                <td className="p-4 text-cyan-300 font-black">{p.price}</td>
                <td className="p-4 text-sm text-gray-300">{p.specs}</td>
                <td className="p-4 text-sm text-gray-300">{p.bestFor}</td>
                <td className="p-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-200">
                    {p.badge}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{p.commission}</div>
                </td>
                <td className="p-4">
                  <CTAButton href={p.affiliateLink} label="Zum Deal" variant="primary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-gray-800 text-xs text-gray-500">
        Hinweis: Links können Affiliate-Links sein. Für dich bleibt der Preis gleich.
      </div>
    </div>
  )
}
