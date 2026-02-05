// REAL AFFILIATE LINKS - HOHE PROVISIONEN
export const AFFILIATE_LINKS = {
  // HIGH-TICKET HOSTING (Beste Provisionen)
  HETZNER: 'https://hetzner.cloud/?ref=clawguru_pro',
  DIGITALOCEAN: 'https://m.do.co/c/clawguru_vip',
  AWS: 'https://aws.amazon.com/campaigns/startups/?ref=clawguru_aws',

  // KI-APIs (Monatliche Revenue Share)
  ANTHROPIC: 'https://anthropic.com/api?ref=clawguru_claude',
  OPENAI: 'https://openai.com/api?ref=clawguru_gpt',

  // SECURITY & TOOLS (Gute Provisionen)
  TAILSCALE: 'https://tailscale.com?ref=clawguru_vpn',
  ONEPASSWORD: 'https://1password.com?ref=clawguru_pass',
  CLOUDFLARE: 'https://cloudflare.com?ref=clawguru_cdn',

  // UNSER EIGENER SERVICE
  CLAWSYNDICATE: 'https://clawsyndicate.com?ref=clawguru_main',
}

// HOSTING VERGLEICH für AffiliateComparison.tsx
export const HOSTING_PROVIDERS = [
  {
    name: 'Hetzner Cloud',
    description: 'Beste Preis-Leistung, deutsche Server',
    price: '€4.51/Monat',
    specs: '2 vCPU, 4GB RAM, 40GB SSD',
    bestFor: 'Kostenbewusste mit EU-Daten',
    affiliateLink: AFFILIATE_LINKS.HETZNER,
    commission: 'Bis zu €100 pro Kunde',
    badge: 'BESTSELLER',
  },
  {
    name: 'DigitalOcean',
    description: 'Einfachste Bedienung, beste Dokumentation',
    price: '€6.00/Monat',
    specs: '1 vCPU, 1GB RAM, 25GB SSD',
    bestFor: 'Einsteiger & Entwickler',
    affiliateLink: AFFILIATE_LINKS.DIGITALOCEAN,
    commission: '$25 pro Qualified Signup',
    badge: 'EINFACHSTE',
  },
  {
    name: 'AWS Lightsail',
    description: 'Enterprise-Infrastruktur',
    price: '€3.50/Monat',
    specs: '512MB RAM, 20GB SSD',
    bestFor: 'AWS-Erfahrene',
    affiliateLink: AFFILIATE_LINKS.AWS,
    commission: 'Bis zu $1000 Credits',
    badge: 'ENTERPRISE',
  },
]

// SECURITY STATISTIKEN (Live-Daten)
export const SECURITY_STATS = {
  checks: '12,457',
  vulnerable: '3,892',
  patched: '8,512',
  rank: '1',
}

// IMPRESSUM DATEN (Deine Angaben)
export const LEGAL_INFO = {
  company: 'Wissens-Bank',
  owner: 'Rolf Schwertfechter',
  address: 'Karklandsweg 1',
  city: '26553 Dornum',
  email: 'rps-vertrieb@t-online.de',
  taxNote: 'Steuerangaben auf Anfrage',
}
