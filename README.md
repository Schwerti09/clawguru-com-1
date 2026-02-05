# clawguru-com

Next.js 15 + TypeScript + Tailwind (App Router) – bereit für GitHub & Vercel.

## Lokal starten

```bash
npm install
npm run dev
```

Öffne: http://localhost:3000

## Deploy auf Vercel

1. Repo auf GitHub pushen
2. In Vercel: **New Project** → Repo auswählen
3. Framework: Next.js (automatisch)
4. Build Command: `next build` (default)
5. Deploy

## Hinweise

- `/api/security-check` ist eine **simulierte** Prüfung (Demo). Für echte Checks müsstest du externe Scanner/Services anbinden.
- `next.config.js` ignoriert ESLint während Builds, damit Deploys nicht blockieren, falls du keine ESLint-Dependencies installiert hast.
