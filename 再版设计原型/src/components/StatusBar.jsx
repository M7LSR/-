import { BatteryFull, Signal, Wifi } from 'lucide-react'

export default function StatusBar({ time }) {
  return (
    <div className="flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[11px] text-white/80">
      <span className="tabular font-medium tracking-wide">{time}</span>
      <div className="flex items-center gap-1.5 text-white/70">
        <Signal size={13} strokeWidth={1.5} aria-hidden="true" />
        <Wifi size={13} strokeWidth={1.5} aria-hidden="true" />
        <BatteryFull size={16} strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  )
}