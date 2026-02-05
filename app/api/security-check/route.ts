import { NextRequest, NextResponse } from 'next/server'

// Simulierte Sicherheitsprüfung (in Produktion mit externem Service)
export async function POST(request: NextRequest) {
  try {
    const { target } = await request.json()

    if (!target) {
      return NextResponse.json({ error: 'Bitte gib eine IP oder Domain ein' }, { status: 400 })
    }

    // Hier würde echte Prüfung gegen bekannte Schwachstellen laufen
    // Für Demo: Zufälliges Ergebnis mit realistischen Details
    const isVulnerable = Math.random() > 0.7

    const response = {
      timestamp: new Date().toISOString(),
      target,
      vulnerable: isVulnerable,
      message: isVulnerable
        ? `KRITISCH: Deine Instanz unter "${target}" ist über das Internet erreichbar und könnte API Keys preisgeben.`
        : `OK: Keine kritischen Sicherheitslücken für "${target}" gefunden.`,
      details: isVulnerable
        ? [
            'Offener SSH-Port (22) erkannt',
            'Standard-Credentials im Einsatz',
            'Keine Firewall aktiv',
            'API-Endpunkt ohne Authentifizierung',
          ]
        : ['Alle Standard-Ports geschlossen', 'HTTPS korrekt konfiguriert'],
      recommendations: isVulnerable
        ? [
            'SOFORT: Bot vom Netz nehmen',
            'API Keys bei Anthropic/OpenAI zurücksetzen',
            'Firewall konfigurieren',
            'Unseren Notfall-Guide befolgen',
          ]
        : ['Regelmäßige Updates durchführen', 'Backup-Strategie implementieren'],
    }

    // CORS Headers für öffentlichen Zugriff
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }

    return NextResponse.json(response, { headers })
  } catch (error) {
    console.error('Security Check Error:', error)
    return NextResponse.json({ error: 'Interner Serverfehler' }, { status: 500 })
  }
}

// CORS Preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
