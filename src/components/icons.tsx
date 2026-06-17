// Status-bar glyphs recreated as inline SVGs so they stay crisp at any size
// and don't depend on the (expiring) Figma asset URLs. Each uses currentColor,
// so the parent status bar controls light/dark coloring.

type IconProps = { className?: string }

export function AlarmIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="7.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 9.5V13l2.5 1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 4.8 7.6 2.4M19.5 4.8 16.4 2.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function BluetoothIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7.2 16 16.8 12 21V3l4 4.2L8 16.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WifiIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2.5 8.5C8 4 16 4 21.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.5 12C9.3 9 14.7 9 18.5 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 15.5C10.6 14 13.4 14 15.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="19" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function SignalIcon({ className }: IconProps) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="2" y="15" width="3.5" height="6" rx="1" />
      <rect x="8" y="11" width="3.5" height="10" rx="1" />
      <rect x="14" y="7" width="3.5" height="14" rx="1" />
      <rect x="20" y="3" width="3.5" height="18" rx="1" />
    </svg>
  )
}

export function BatteryIcon({ className }: IconProps) {
  return (
    <svg className={className} width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
      <rect x="1.5" y="7" width="21" height="10" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="9.5" width="13" height="5" rx="1.4" fill="currentColor" />
      <rect x="24.5" y="10" width="2.2" height="4" rx="1.1" fill="currentColor" />
    </svg>
  )
}
