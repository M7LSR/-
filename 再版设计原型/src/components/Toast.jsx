import { Check, X } from 'lucide-react'

export default function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div
      key={message.id}
      className="absolute inset-x-4 top-3 z-50 animate-toast-in"
      role="status"
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-[#171310]/92 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/25">
            <Check size={15} strokeWidth={1.8} aria-hidden="true" />
          </span>

          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-medium leading-5 text-white">
              {message.title}
            </p>
            {message.detail ? (
              <p className="mt-0.5 text-[11px] leading-4 text-white/45">
                {message.detail}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="关闭提示"
            className="mt-0.5 shrink-0 rounded-full p-1 text-white/30 transition-colors hover:text-white/60"
          >
            <X size={14} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-accent/20">
          <span className="block h-full animate-toast-bar bg-accent" />
        </div>
      </div>
    </div>
  )
}