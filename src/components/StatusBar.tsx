import { AlarmIcon, BluetoothIcon, WifiIcon, SignalIcon, BatteryIcon } from './icons'

type StatusBarProps = {
  variant: 'dark' | 'light'
  time?: string
}

export function StatusBar({ variant, time = '5:13 PM' }: StatusBarProps) {
  return (
    <div className={`status-bar status-bar--${variant}`}>
      <span className="status-bar__time">{time}</span>
      <div className="status-bar__icons">
        <AlarmIcon className="status-bar__icon" />
        <BluetoothIcon className="status-bar__icon" />
        <WifiIcon className="status-bar__icon" />
        <SignalIcon className="status-bar__icon" />
        <BatteryIcon className="status-bar__icon status-bar__icon--battery" />
      </div>
    </div>
  )
}
