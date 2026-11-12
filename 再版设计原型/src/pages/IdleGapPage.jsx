import { useCallback, useEffect, useRef, useState } from 'react'
import {
  BookOpen,
  CalendarDays,
  ChevronRight,
  LayoutGrid,
  MapPin,
  SlidersHorizontal,
  Sparkles,
  Wand2,
} from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Toast from '../components/Toast'
import { currentSlot, toastMessages } from '../data/mock'

const { now, date, gap, recommendation, ticks } = currentSlot

export default function IdleGapPage({ onOpenPages, onBookSeat }) {
  const [toast, setToast] = useState(null)
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

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <Toast
        key={toast ? toast.id : 'no-toast'}
        message={toast}
        onClose={() => setToast(null)}
      />

      <StatusBar time={now} />

      <header className="flex shrink-0 items-center justify-between px-6 pb-1 pt-2">
        <div className="flex items-center gap-2 text-[11px] text-white/40">
          <CalendarDays size={13} strokeWidth={1.5} aria-hidden="true" />
          <span>{date}</span>
        </div>
        <button
          type="button"
          onClick={onOpenPages}
          aria-label="切换页面"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
        >
          <LayoutGrid size={15} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </header>

      <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-6">
        <section className="animate-rise-in">
          <p className="text-[10px] uppercase tracking-[0.34em] text-accent/70">
            Idle Gap
          </p>
          <h1 className="mt-2.5 text-[32px] font-semibold leading-none tracking-tight text-white">
            空窗时间
          </h1>
          <p className="mt-3 text-[13px] leading-5 text-white/45">
            您有 <span className="tabular font-medium text-white/85">45 分钟</span>{' '}
            空窗，AI 已为你匹配附近学习资源
          </p>
        </section>

        <section
          className="mt-6 animate-rise-in"
          style={{ animationDelay: '90ms' }}
        >
          <div className="rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  现在
                </p>
                <p className="mt-1 text-[22px] font-medium leading-none text-white tabular">
                  {now}
                </p>
              </div>
              <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] text-accent">
                5 分钟后下课
              </span>
            </div>

            <div className="relative mt-8">
              <div
                className="absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[10px] tracking-wide text-accent"
                style={{
                  left: `${gap.leftPercent + gap.widthPercent / 2}%`,
                }}
              >
                空闲 {gap.minutes} 分钟 · {gap.start}–{gap.end}
              </div>

              <div className="relative h-[10px] rounded-full bg-white/[0.06]">
                <div className="absolute inset-y-0 left-0 w-[37.5%] rounded-full bg-white/[0.12]" />
                <div
                  className="absolute inset-y-0 animate-breathe rounded-full bg-gradient-to-r from-accent via-[#FF6A14] to-accent-soft shadow-[0_0_26px_rgba(255,92,0,0.55)]"
                  style={{
                    left: `${gap.leftPercent}%`,
                    width: `${gap.widthPercent}%`,
                  }}
                />
                <div
                  className="absolute -top-[5px] h-5 w-[2px] -translate-x-1/2 rounded-full bg-white/55"
                  style={{ left: `${gap.nowPercent}%` }}
                >
                  <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white ring-2 ring-ink-900" />
                </div>
              </div>

              <div className="relative mt-2.5 h-4 text-[10px] text-white/30 tabular">
                {ticks.map((tick) => (
                  <span
                    key={tick.label}
                    className={
                      tick.position === 0
                        ? 'absolute left-0'
                        : tick.position === 100
                          ? 'absolute right-0'
                          : 'absolute -translate-x-1/2'
                    }
                    style={
                      tick.position === 0 || tick.position === 100
                        ? undefined
                        : { left: `${tick.position}%` }
                    }
                  >
                    {tick.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="mt-4 animate-rise-in"
          style={{ animationDelay: '180ms' }}
        >
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,92,0,0.20), transparent 70%)',
              }}
            />

            <div className="relative flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent shadow-[0_0_22px_rgba(255,92,0,0.18)]">
                <Sparkles size={17} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2 className="text-[15px] font-medium tracking-tight text-white">
                  AI 智能推荐规划
                </h2>
                <p className="mt-0.5 text-[11px] text-white/35">
                  基于课表空档与章节掌握度生成
                </p>
              </div>
              <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-[9px] tracking-wide text-white/40">
                智能匹配
              </span>
            </div>

            <div className="relative mt-5 flex items-start gap-3">
              <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/[0.05] text-white/55">
                <BookOpen size={15} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[17px] font-medium leading-6 tracking-tight text-white">
                  复习{recommendation.course} · {recommendation.chapter}
                </p>
                <p className="mt-0.5 text-[11.5px] text-white/40">
                  {recommendation.topic}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/70 tabular">
                {recommendation.minutes} 分钟
              </span>
            </div>

            <div className="relative mt-5">
              <div className="flex items-center justify-between text-[10px] text-white/35">
                <span>专注时段</span>
                <span className="tabular">
                  {recommendation.minutes} / {gap.minutes} min
                </span>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft shadow-[0_0_12px_rgba(255,92,0,0.5)]"
                  style={{
                    width: `${(recommendation.minutes / gap.minutes) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-3.5 text-[11px]">
              <span className="inline-flex items-center gap-1.5 text-accent">
                <MapPin size={13} strokeWidth={1.5} aria-hidden="true" />
                {recommendation.library}
              </span>
              <span className="ml-auto inline-flex items-center gap-0.5 text-white/30">
                步行 {recommendation.walkMinutes} 分钟
                <ChevronRight size={12} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-3 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2.5">
              <p className="text-[10.5px] leading-4 text-white/35">
                <span className="text-accent/80">决策依据</span>
                <span className="mx-2 text-white/15">/</span>
                课表空档 {gap.minutes} 分钟 · 第 3 章掌握度{' '}
                {recommendation.mastered}% · 步行 {recommendation.walkMinutes}{' '}
                分钟
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="relative z-20 shrink-0 border-t border-white/[0.06] bg-gradient-to-t from-ink-900 via-ink-900/95 to-ink-900/70 px-6 pt-4 backdrop-blur-xl"
        style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom))' }}
      >
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onBookSeat}
            className="flex h-[54px] flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[14px] font-semibold text-black shadow-glow transition-transform active:scale-[0.985]"
          >
            <Wand2 size={16} strokeWidth={1.8} aria-hidden="true" />
            一键规划并订座
          </button>
          <button
            type="button"
            onClick={() => showToast(toastMessages.custom)}
            className="flex h-[54px] w-[112px] shrink-0 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] text-[13px] text-white/70 transition-transform active:scale-[0.985] active:bg-white/[0.08]"
          >
            <SlidersHorizontal size={14} strokeWidth={1.5} aria-hidden="true" />
            自定义
          </button>
        </div>
        <p className="mt-2.5 text-center text-[9px] tracking-wide text-white/25">
          座位由图书馆实时系统锁定 · 演示数据
        </p>
      </footer>
    </div>
  )
}