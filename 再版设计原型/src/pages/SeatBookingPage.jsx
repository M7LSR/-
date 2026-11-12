import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Armchair,
  Check,
  LayoutGrid,
  MapPin,
  Plug,
  Sun,
  VolumeX,
  Wifi,
} from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Toast from '../components/Toast'
import { SEATS, SEAT_FILTERS } from '../data/seats'

const FILTER_ICONS = {
  window: Sun,
  plug: Plug,
  quiet: VolumeX,
}

export default function SeatBookingPage({ onOpenPages }) {
  const [selectedId, setSelectedId] = useState('A-12')
  const [filters, setFilters] = useState([])
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

  const selectedSeat = SEATS.find((seat) => seat.id === selectedId) || null

  const toggleFilter = (id) => {
    setFilters((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const toggleSeat = (seat) => {
    if (!seat.available) return
    setSelectedId((prev) => (prev === seat.id ? null : seat.id))
  }

  const matchesFilters = (seat) => {
    if (filters.length === 0) return true
    if (filters.includes('window') && !seat.window) return false
    if (filters.includes('plug') && !seat.plug) return false
    if (filters.includes('quiet') && !seat.quiet) return false
    return true
  }

  const confirmBooking = () => {
    if (!selectedSeat) return
    showToast({
      title: '预约成功',
      detail: `${selectedSeat.id} 座位 · 图书馆 3楼 · 13:46–14:30`,
    })
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <Toast
        key={toast ? toast.id : 'no-toast'}
        message={toast}
        onClose={() => setToast(null)}
      />

      <StatusBar time="13:41" />

      <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-6">
        <header className="sticky top-0 z-20 -mx-5 border-b border-white/[0.06] bg-ink-900/85 px-5 pb-3 pt-2 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.22em] text-white/30">
                <MapPin size={11} strokeWidth={1.5} aria-hidden="true" />
                Library · 3F
              </div>
              <h1 className="mt-1 text-[24px] font-semibold leading-none tracking-tight text-white">
                图书馆 3楼
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenPages}
                aria-label="切换页面"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
              >
                <LayoutGrid size={15} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                <Armchair size={15} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>
          </div>
        </header>

        <section className="mt-4 animate-rise-in">
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)',
              }}
            />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[10px] text-white/40">
                <LayoutGrid size={12} strokeWidth={1.5} aria-hidden="true" />
                10 × 10 座位图
              </div>
              <div className="flex items-center gap-3 text-[9px] text-white/30">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/[0.15]" />
                  占用
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  可用
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,92,0,0.8)]" />
                  推荐
                </span>
              </div>
            </div>

            <div className="relative mt-3.5 rounded-[18px] border border-white/[0.06] bg-black/20 p-1.5">
              <div className="grid grid-cols-10 gap-[2px]">
                {SEATS.map((seat) => {
                  const selected = selectedSeat && selectedSeat.id === seat.id
                  const matched = matchesFilters(seat)

                  return (
                    <button
                      key={seat.key}
                      type="button"
                      disabled={!seat.available}
                      onClick={() => toggleSeat(seat)}
                      aria-label={`${seat.id}${
                        seat.recommended
                          ? ' 推荐座位'
                          : seat.available
                            ? ' 可用座位'
                            : ' 已占用'
                      }`}
                      aria-pressed={selected}
                      className="group relative grid h-[22px] place-items-center rounded-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 disabled:cursor-default"
                    >
                      {selected ? (
                        <>
                          <span className="absolute inset-[8%] rounded-full bg-accent/20 blur-[3px]" />
                          <span className="relative h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_rgba(255,92,0,0.9)]" />
                        </>
                      ) : seat.recommended ? (
                        <>
                          <span className="absolute inset-[10%] animate-breathe rounded-full border border-accent/45" />
                          <span className="relative h-[9px] w-[9px] rounded-full bg-accent shadow-[0_0_12px_rgba(255,92,0,0.7)]" />
                        </>
                      ) : seat.available ? (
                        <span
                          className={`h-[7px] w-[7px] rounded-full bg-white/35 transition-all group-hover:bg-white/60 ${
                            filters.length && !matched ? 'opacity-25' : ''
                          } ${
                            filters.length && matched
                              ? 'ring-2 ring-accent/40 ring-offset-2 ring-offset-[#0E0E0E]'
                              : ''
                          }`}
                        />
                      ) : (
                        <span className="h-[6px] w-[6px] rounded-full bg-white/[0.13]" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            <p className="relative mt-3 text-center text-[9px] tracking-wide text-white/25">
              点击浅色座位切换选择 · 橙色为 AI 推荐
            </p>
          </div>
        </section>

        <div className="no-scrollbar mt-3.5 flex gap-2 overflow-x-auto pb-1">
          {SEAT_FILTERS.map((filter) => {
            const active = filters.includes(filter.id)
            const FilterIcon = FILTER_ICONS[filter.id]

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => toggleFilter(filter.id)}
                aria-pressed={active}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-[11px] transition-colors ${
                  active
                    ? 'border-accent/45 bg-accent/10 text-accent'
                    : 'border-white/10 bg-white/[0.03] text-white/45'
                }`}
              >
                <FilterIcon size={13} strokeWidth={1.5} aria-hidden="true" />
                {filter.label}
                {active ? (
                  <Check size={10} strokeWidth={2} aria-hidden="true" />
                ) : null}
              </button>
            )
          })}
        </div>

        <section
          className="mt-4 animate-rise-in"
          style={{ animationDelay: '90ms' }}
        >
          <div
            className={`relative overflow-hidden rounded-[26px] border p-5 backdrop-blur-xl transition-colors ${
              selectedSeat
                ? 'border-accent/30 bg-accent/[0.055]'
                : 'border-white/10 bg-white/[0.045]'
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(255,92,0,0.14), transparent 70%)',
              }}
            />

            <div className="relative flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.24em] text-accent/75">
                    Seat
                  </span>
                  {selectedSeat && selectedSeat.recommended ? (
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[9px] text-accent">
                      AI 推荐
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-1.5 text-[28px] font-semibold leading-none tracking-tight text-white">
                  {selectedSeat ? selectedSeat.id : '未选择'}
                  <span className="ml-1.5 text-[11px] font-normal tracking-normal text-white/35">
                    座位
                  </span>
                </h2>
                <p className="mt-2 text-[11px] text-white/35">
                  {selectedSeat
                    ? '图书馆 3 楼 · AI 推荐自习位'
                    : '点击上方浅色座位进行选择'}
                </p>
              </div>

              <span
                className={`grid h-12 w-12 place-items-center rounded-2xl border ${
                  selectedSeat
                    ? 'border-accent/25 bg-accent/10 text-accent shadow-[0_0_22px_rgba(255,92,0,0.16)]'
                    : 'border-white/10 bg-black/20 text-white/25'
                }`}
              >
                <Armchair size={22} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>

            <div className="relative mt-4 grid grid-cols-4 gap-1.5">
              <div className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2">
                <Wifi
                  size={14}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />
                <span className="text-[9px] text-white/55">WiFi</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2">
                <Plug
                  size={14}
                  strokeWidth={1.5}
                  className="text-accent"
                  aria-hidden="true"
                />
                <span className="text-[9px] text-white/55">插座</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2">
                <Sun
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/40"
                  aria-hidden="true"
                />
                <span className="text-[9px] text-white/55">靠窗</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/15 py-2">
                <VolumeX
                  size={14}
                  strokeWidth={1.5}
                  className="text-white/40"
                  aria-hidden="true"
                />
                <span className="text-[9px] text-white/55">安静区</span>
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-between border-t border-white/[0.07] pt-3.5">
              <span className="text-[10px] text-white/35">预约时段</span>
              <span className="text-[11px] text-white/70 tabular">
                13:46 – 14:30 <span className="text-white/30">· 45 分钟</span>
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer
        className="relative z-20 shrink-0 border-t border-white/[0.06] bg-gradient-to-t from-ink-900 via-ink-900/95 to-ink-900/70 px-6 pt-4 backdrop-blur-xl"
        style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom))' }}
      >
        <div className="mb-3 flex items-center justify-between text-[10px]">
          <span className="text-white/35">预计学习时长</span>
          <span className="text-white/70 tabular">
            45 分钟 <span className="text-white/30">· 13:46–14:30</span>
          </span>
        </div>
        <button
          type="button"
          onClick={confirmBooking}
          disabled={!selectedSeat}
          className={`h-[54px] w-full rounded-full text-[14px] font-semibold transition-transform active:scale-[0.985] ${
            selectedSeat
              ? 'bg-accent text-black shadow-glow'
              : 'bg-white/[0.06] text-white/30'
          }`}
        >
          确认预约
        </button>
      </footer>
    </div>
  )
}