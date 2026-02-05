type Variant = 'primary' | 'outline'
type Size = 'md' | 'lg'

export default function CTAButton({
  href,
  label,
  variant = 'primary',
  size = 'md',
}: {
  href: string
  label: string
  variant?: Variant
  size?: Size
}) {
  const base =
    'inline-flex items-center justify-center rounded-lg font-bold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/30'
  const sizes = size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm'
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:opacity-90 text-white shadow-lg shadow-cyan-900/20'
      : 'border border-gray-700 hover:border-cyan-600 text-gray-200 hover:text-white bg-transparent'

  return (
    <a href={href} className={`${base} ${sizes} ${styles}`}>
      {label}
    </a>
  )
}
