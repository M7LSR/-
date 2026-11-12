import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  Check,
  ChevronDown,
  Clock3,
  LayoutGrid,
  Plus,
} from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Toast from '../components/Toast'
import { HUB_TAGS, INITIAL_MESSAGES } from '../data/chat'

export default function PlannerHubPage({ onOpenPages }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [draft, setDraft] = useState('')
  const [openThinking, setOpenThinking] = useState(null)
  const [toast, setToast] = useState(null)
  const scrollRef = useRef(null)
  const timerRef = useRef(null)

  const showToast = useCallback((message) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setToast({ id: Date.now(), ...message })
    timerRef.current = window.setTimeout(() => setToast(null), 3200)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  useEffect(() => {
    const container = scrollRef.current
    if (container) container.scrollTop = container.scrollHeight
  }, [messages])

  const sendMessage = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { id: `m-${Date.now()}`, role: 'user', text },
    ])
    setDraft('')
  }

  const toggleThinking = (id) => {
    setOpenThinking((prev) => (prev === id ? null : id))
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <Toast
        key={toast ? toast.id : 'no-toast'}
        message={toast}
        onClose={() => setToast(null)}
      />

      <StatusBar time="13:41" />

      <header className="shrink-0 px-5 pb-3 pt-2">
        <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)',
            }}
          />

          <div className="relative flex items-center gap-3">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center">
              <span className="absolute inset-0 animate-breathe rounded-full border border-accent/35 shadow-[0_0_18px_rgba(255,92,0,0.22)]" />
              <span className="absolute inset-[6px] rounded-full border border-accent/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,92,0,0.9)]" />
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[8.5px] uppercase tracking-[0.26em] text-accent/60">
                AI Companion · Agents 协同中
              </p>
              <h1 className="mt-1 text-[24px] font-semibold leading-none tracking-tight text-white">
                Planner Hub
              </h1>
            </div>

            <button
              type="button"
              onClick={onOpenPages}
              aria-label="切换页面"
              className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
            >
              <LayoutGrid size={15} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="no-scrollbar relative mt-3.5 flex gap-2 overflow-x-auto pb-0.5">
            {HUB_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 text-[9px] text-accent/80 shadow-[0_0_12px_rgba(255,92,0,0.06)]"
              >
                <span className="h-1 w-1 animate-breathe rounded-full bg-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main
        ref={scrollRef}
        className="no-scrollbar min-h-0 flex-1 space-y-4 overflow-y-auto px-5 pb-4"
      >
        {messages.map((message) =>
          message.role === 'user' ? (
            <div key={message.id} className="flex justify-end">
              <div className="max-w-[82%] rounded-[20px] rounded-br-md border border-white/[0.06] bg-[#1C1C1E] px-4 py-3 text-[13px] leading-6 text-white/85">
                {message.text}
              </div>
            </div>
          ) : (
            <div key={message.id} className="flex items-start gap-2.5">
              <span className="relative mt-5 grid h-6 w-6 shrink-0 place-items-center">
                <span className="absolute inset-0 rounded-full border border-accent/30 bg-accent/10" />
                <span className="absolute inset-[5px] rounded-full border border-accent/25" />
              </span>

              <div className="min-w-0 max-w-[88%] flex-1">
                <p className="mb-1.5 text-[8.5px] uppercase tracking-[0.18em] text-accent/55">
                  Planner · AI
                </p>

                <div className="rounded-[20px] rounded-tl-md border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <p className="text-[13px] leading-6 text-white/80">
                    {message.text}
                  </p>

                  {message.plan ? (
                    <div className="mt-3.5 overflow-hidden rounded-2xl border border-accent/30 bg-accent/[0.055] p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[8.5px] uppercase tracking-[0.2em] text-accent/75">
                          Study Plan
                        </span>
                        <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[8.5px] text-accent">
                          已生成
                        </span>
                      </div>

                      <p className="mt-1.5 text-[14px] font-medium text-white">
                        {message.plan.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-white/40 tabular">
                        {message.plan.time}
                      </p>

                      <div className="mt-3 space-y-2 border-t border-white/[0.07] pt-3">
                        {message.plan.items.map((item) => (
                          <div
                            key={item.title}
                            className="flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <div className="min-w-0 flex-1">
                              <p className="text-[11px] leading-4 text-white/80">
                                {item.title}
                              </p>
                              <p className="mt-0.5 text-[9px] text-white/35">
                                {item.meta}
                              </p>
                            </div>
                            <Clock3
                              size={11}
                              strokeWidth={1.5}
                              className="mt-0.5 shrink-0 text-white/25"
                              aria-hidden="true"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-3 flex items-center gap-1 text-[9px] text-accent/70">
                        <Check size={10} strokeWidth={2} aria-hidden="true" />
                        已同步至任务待办
                      </div>
                    </div>
                  ) : null}
                </div>

                {message.thinking ? (
                  <div
                    className={`mt-2 overflow-hidden rounded-xl border transition-colors ${
                      openThinking === message.id
                        ? 'border-accent/35 bg-accent/[0.035]'
                        : 'border-accent/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleThinking(message.id)}
                      aria-expanded={openThinking === message.id}
                      className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
                    >
                      <span className="h-1 w-1 shrink-0 animate-breathe rounded-full bg-accent" />
                      <span className="text-[10px] tracking-wide text-accent/80">
                        Thinking Process...
                      </span>
                      <ChevronDown
                        size={12}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className={`ml-auto shrink-0 text-accent/50 transition-transform duration-300 ${
                          openThinking === message.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        openThinking === message.id
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="whitespace-pre-line px-3 pb-3 text-[10px] leading-5 text-white/30">
                          {message.thinking}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ),
        )}
      </main>

      <div
        className="relative z-20 shrink-0 px-5 pt-2"
        style={{ paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center gap-2 rounded-[26px] border border-white/10 bg-white/[0.06] p-1.5 pl-2 backdrop-blur-xl transition-colors focus-within:border-accent/35">
          <button
            type="button"
            onClick={() =>
              showToast({
                title: '添加内容',
                detail: '原型演示 · 可上传资料或插入任务',
              })
            }
            aria-label="添加内容"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white/45 transition-colors hover:bg-white/[0.06] active:bg-white/10"
          >
            <Plus size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>

          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                sendMessage()
              }
            }}
            placeholder="输入学习安排…"
            aria-label="输入学习安排"
            className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-white outline-none placeholder:text-white/25"
          />

          <button
            type="button"
            onClick={sendMessage}
            disabled={!draft.trim()}
            aria-label="发送"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-black shadow-[0_0_18px_rgba(255,92,0,0.45)] transition-all active:scale-95 disabled:bg-white/[0.06] disabled:text-white/25 disabled:shadow-none"
          >
            <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}