export type SecurityCheckResult = {
  vulnerable: boolean
  message: string
  details?: string[]
  recommendations?: string[]
  timestamp?: string
  target?: string
}

export async function performSecurityCheck(target: string): Promise<SecurityCheckResult> {
  const res = await fetch('/api/security-check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ target }),
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error || 'Security check failed')
  }

  const data = (await res.json()) as any
  return {
    vulnerable: Boolean(data.vulnerable),
    message: String(data.message || ''),
    details: Array.isArray(data.details) ? data.details : undefined,
    recommendations: Array.isArray(data.recommendations) ? data.recommendations : undefined,
    timestamp: data.timestamp,
    target: data.target,
  }
}
