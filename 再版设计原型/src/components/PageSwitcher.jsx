export const PROTOTYPE_PAGES = [
  { id: 'gap', label: '空窗规划', en: 'Idle Gap' },
  { id: 'seat', label: '智能订座', en: 'Seat Booking' },
  { id: 'tasks', label: '任务待办', en: 'Study Checklist' },
  { id: 'hub', label: 'AI 对话舱', en: 'Planner Hub' },
  { id: 'analytics', label: '学情分析', en: 'Analytics' },
  { id: 'library', label: '资料库', en: 'Knowledge Base' },
]

export default function PageSwitcher({ open, current, onSelect, onClose }) {
  if (!open) return null

  return (
    <div className="absolute inset-0 z-40" onClick={onClose}>
      <div
        className="absolute right-5 top-[88px] w-[216px] animate-toast-in rounded-2xl border border-white/10 bg-[#141110]/95 p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.75)] backdrop-blur-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="px-3 pb-1 pt-2 text-[8px] uppercase tracking-[0.28em] text-white/25">
          Prototype Pages
        </p>

        {PROTOTYPE_PAGES.map((page) => {
          const active = page.id === current

          return (
            <button
              key={page.id}
              type="button"
              onClick={() => {
                onSelect(page.id)
                onClose()
              }}
              className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left transition-colors ${
                active
                  ? 'bg-accent/10 text-white'
                  : 'text-white/55 hover:bg-white/[0.05]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  active
                    ? 'bg-accent shadow-[0_0_8px_rgba(255,92,0,0.8)]'
                    : 'bg-white/20'
                }`}
              />
              <span className="text-[12px]">{page.label}</span>
              <span className="ml-auto text-[8px] tracking-wide text-white/25">
                {page.en}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}