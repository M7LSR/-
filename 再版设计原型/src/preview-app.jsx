const { useState, useEffect, useRef, useCallback } = React
      const {
        Armchair,
        ArrowUp,
        BatteryFull,
        BookOpen,
        CalendarDays,
        Check,
        ChevronDown,
        ChevronRight,
        Clock3,
        FileText,
        Image: ImageIcon,
        LayoutGrid,
        ListChecks,
        MapPin,
        Mic,
        MoreHorizontal,
        Plug,
        Plus,
        Presentation,
        Search,
        Signal,
        SlidersHorizontal,
        Sparkles,
        Sun,
        VolumeX,
        Wand2,
        Wifi,
        X,
      } = window.LucideReact

      const {
        Area,
        AreaChart,
        CartesianGrid,
        PolarAngleAxis,
        PolarGrid,
        PolarRadiusAxis,
        Radar,
        RadarChart,
        ResponsiveContainer,
        Tooltip,
        XAxis,
        YAxis,
      } = window.Recharts

      const currentSlot = {
        date: '11月12日 周三',
        now: '13:41',
        gap: {
          start: '13:46',
          end: '14:30',
          minutes: 45,
          leftPercent: 37.5,
          widthPercent: 36.7,
          nowPercent: 34.2,
        },
        recommendation: {
          course: '微观经济学',
          chapter: '第 3 章',
          topic: '边际效用与消费者均衡',
          minutes: 25,
          mastered: 62,
          library: '附近图书馆有空座',
          walkMinutes: 6,
        },
        ticks: [
          { label: '13:00', position: 0 },
          { label: '13:45', position: 37.5 },
          { label: '14:30', position: 74.2 },
          { label: '15:00', position: 100 },
        ],
      }

      const toastMessages = {
        booked: {
          title: '已为您预约图书馆 A区 12号座位',
          detail: '13:50 前到馆 · 座位保留 20 分钟',
        },
        custom: {
          title: '已进入自定义规划',
          detail: '可按你的节奏调整任务与时长',
        },
      }

      const { now, date, gap, recommendation, ticks } = currentSlot

      function PhoneShell({ children }) {
        return (
          <div className="relative flex min-h-screen w-full items-start justify-center overflow-x-hidden overflow-y-auto bg-ink-900 sm:px-6 sm:py-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden sm:block"
              style={{
                backgroundImage:
                  'radial-gradient(ellipse 62% 52% at 50% 36%, rgba(255,92,0,0.10), transparent 65%), linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
                backgroundSize: '100% 100%, 64px 64px, 64px 64px',
                maskImage:
                  'radial-gradient(ellipse at center, black 18%, transparent 76%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse at center, black 18%, transparent 76%)',
              }}
            />

            <div className="relative z-10 w-full max-w-[390px]">
              <div className="relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-ink-900 sm:h-[844px] sm:rounded-[46px] sm:border sm:border-white/10 sm:shadow-shell">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-28 left-1/2 h-72 w-[130%] -translate-x-1/2"
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(255,92,0,0.16), transparent 68%)',
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-56"
                  style={{
                    background:
                      'radial-gradient(ellipse at bottom, rgba(255,92,0,0.07), transparent 72%)',
                  }}
                />

                <div className="relative z-10 flex h-full min-h-0 flex-col">
                  {children}
                </div>
              </div>

              <p className="mt-4 hidden text-center text-[9px] uppercase tracking-[0.34em] text-white/20 sm:block">
                Zhixing · Study Companion
              </p>
            </div>
          </div>
        )
      }

      function StatusBar({ time }) {
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

      function Toast({ message, onClose }) {
        if (!message) return null

        return (
          <div
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

      function IdleGapPage({ onOpenPages, onBookSeat }) {
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
                  您有{' '}
                  <span className="tabular font-medium text-white/85">
                    45 分钟
                  </span>{' '}
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
                      <Sparkles
                        size={17}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
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
                      <BookOpen
                        size={15}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
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
                      <ChevronRight
                        size={12}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </div>

                  <div className="relative mt-3 rounded-xl border border-white/[0.06] bg-black/20 px-3 py-2.5">
                    <p className="text-[10.5px] leading-4 text-white/35">
                      <span className="text-accent/80">决策依据</span>
                      <span className="mx-2 text-white/15">/</span>
                      课表空档 {gap.minutes} 分钟 · 第 3 章掌握度{' '}
                      {recommendation.mastered}% · 步行{' '}
                      {recommendation.walkMinutes} 分钟
                    </p>
                  </div>
                </div>
              </section>
            </main>

            <footer
              className="relative z-20 shrink-0 border-t border-white/[0.06] bg-gradient-to-t from-ink-900 via-ink-900/95 to-ink-900/70 px-6 pt-4 backdrop-blur-xl"
              style={{
                paddingBottom: 'max(20px, env(safe-area-inset-bottom))',
              }}
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
                  <SlidersHorizontal
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
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

      const SEAT_ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

      const AVAILABLE_KEYS = new Set([
        '0-9', '1-8', '1-9', '2-9', '3-8', '4-9', '5-9', '6-8', '7-9', '8-8',
        '9-9', '2-3', '2-4', '3-3', '4-4', '5-5', '6-4', '0-4', '1-6', '2-7',
        '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2', '1-1', '3-7', '4-7',
        '5-2', '7-7', '8-1',
      ])

      const PLUG_KEYS = new Set([
        '0-4', '1-6', '2-7', '3-5', '4-2', '5-8', '6-6', '7-4', '8-6', '9-2',
      ])

      const SEATS = SEAT_ROWS.flatMap((row, r) =>
        Array.from({ length: 10 }, (_, c) => {
          const recommended = r === 0 && c === 1
          const key = `${r}-${c}`
          const available = recommended || AVAILABLE_KEYS.has(key)
          return {
            id: recommended ? 'A-12' : `${row}-${c + 1}`,
            key,
            recommended,
            available,
            window: c >= 8,
            plug: PLUG_KEYS.has(key),
            quiet: r >= 2 && r <= 6 && c >= 2 && c <= 5,
          }
        }),
      )

      const SEAT_FILTERS = [
        { id: 'window', label: '靠窗', icon: Sun },
        { id: 'plug', label: '插座', icon: Plug },
        { id: 'quiet', label: '安静区', icon: VolumeX },
      ]

      const PROTOTYPE_PAGES = [
        { id: 'gap', label: '空窗规划', en: 'Idle Gap' },
        { id: 'seat', label: '智能订座', en: 'Seat Booking' },
        { id: 'tasks', label: '任务待办', en: 'Study Checklist' },
        { id: 'hub', label: 'AI 对话舱', en: 'Planner Hub' },
        { id: 'analytics', label: '学情分析', en: 'Analytics' },
        { id: 'library', label: '资料库', en: 'Knowledge Base' },
      ]

      function SeatBookingPage({ onOpenPages }) {
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
                  const FilterIcon = filter.icon

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

      const TASKS = [
        { id: 1, title: '预习高数下册', tag: '预习', done: false, minutes: 45 },
        { id: 2, title: '背诵四级单词', tag: '复习', done: true, minutes: 20 },
        {
          id: 3,
          title: '复习微观经济学 · 第 3 章',
          tag: '复习',
          done: false,
          minutes: 25,
        },
        { id: 4, title: '整理课堂笔记', tag: '预习', done: true, minutes: 40 },
        { id: 5, title: '完成课后习题', tag: '练习', done: false, minutes: 20 },
      ]

      function ProgressRing({ done, total }) {
        const size = 76
        const stroke = 5
        const radius = (size - stroke) / 2 - 1
        const circumference = 2 * Math.PI * radius
        const offset = circumference * (1 - (total ? done / total : 0))

        return (
          <div
            className="relative h-[76px] w-[76px] shrink-0"
            role="img"
            aria-label={`已完成 ${done} / ${total} 项任务`}
          >
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <defs>
                <linearGradient
                  id="task-ring-gradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#FF5C00" />
                  <stop offset="100%" stopColor="#FF9A55" />
                </linearGradient>
              </defs>

              <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth={stroke}
                />
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="url(#task-ring-gradient)"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{
                    transition:
                      'stroke-dashoffset 450ms cubic-bezier(.2,.8,.2,1)',
                    filter: 'drop-shadow(0 0 6px rgba(255,92,0,0.55))',
                  }}
                />
              </g>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[18px] font-semibold leading-none text-white tabular">
                {done}/{total}
              </span>
              <span className="mt-0.5 text-[8px] tracking-wide text-white/30">
                已完成
              </span>
            </div>
          </div>
        )
      }

      function StudyChecklistPage({ onOpenPages }) {
        const [tasks, setTasks] = useState(TASKS)
        const [toast, setToast] = useState(null)
        const timerRef = useRef(null)

        const doneCount = tasks.filter((task) => task.done).length
        const percent = tasks.length
          ? Math.round((doneCount / tasks.length) * 100)
          : 0

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

        const toggleTask = (id) => {
          setTasks((prev) =>
            prev.map((task) =>
              task.id === id ? { ...task, done: !task.done } : task,
            ),
          )
        }

        return (
          <div className="relative flex h-full min-h-0 flex-col">
            <Toast
              key={toast ? toast.id : 'no-toast'}
              message={toast}
              onClose={() => setToast(null)}
            />

            <StatusBar time="13:41" />

            <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-28 pt-1">
              <div className="flex items-center justify-between pb-3 pt-1">
                <div className="flex items-center gap-2 text-[11px] text-white/40">
                  <CalendarDays size={13} strokeWidth={1.5} aria-hidden="true" />
                  <span>11月12日 周三 · 第 12 周</span>
                </div>
                <button
                  type="button"
                  onClick={onOpenPages}
                  aria-label="切换页面"
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition-colors active:bg-white/10"
                >
                  <LayoutGrid size={15} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>

              <header className="relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,92,0,0.18), transparent 70%)',
                  }}
                />

                <div className="relative flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-accent/70">
                      <ListChecks
                        size={11}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      Study Checklist
                    </div>
                    <h1 className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight text-white">
                      任务待办
                    </h1>
                    <p className="mt-2 text-[11px] text-white/35">
                      今日清单 · {doneCount} 项已完成
                    </p>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-1 w-16 overflow-hidden rounded-full bg-white/[0.07]">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                          style={{ width: `${percent}%` }}
                        />
                      </span>
                      <span className="text-[9px] text-white/30 tabular">
                        完成率 {percent}%
                      </span>
                    </div>
                  </div>

                  <ProgressRing done={doneCount} total={tasks.length} />
                </div>
              </header>

              <section className="mt-4 space-y-2.5">
                {tasks.map((task, index) => (
                  <article
                    key={task.id}
                    className={`group relative flex animate-rise-in items-center gap-3 overflow-hidden rounded-[22px] border border-white/10 p-4 backdrop-blur-xl transition-colors ${
                      task.done ? 'bg-white/[0.025]' : 'bg-white/[0.045]'
                    }`}
                    style={{ animationDelay: `${80 + index * 45}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      aria-pressed={task.done}
                      aria-label={`${
                        task.done ? '取消完成' : '标记完成'
                      }：${task.title}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
                    >
                      {task.done ? (
                        <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-accent text-black shadow-[0_0_14px_rgba(255,92,0,0.45)]">
                          <Check
                            size={13}
                            strokeWidth={2.4}
                            aria-hidden="true"
                          />
                        </span>
                      ) : (
                        <span className="h-[22px] w-[22px] rounded-full border border-white/30 transition-colors group-hover:border-accent/70" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <p
                        className={`truncate text-[14px] leading-5 transition-colors ${
                          task.done
                            ? 'text-white/30 line-through'
                            : 'text-white/90'
                        }`}
                      >
                        {task.title}
                      </p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span
                          className={`rounded-full border px-2 py-0.5 text-[9px] transition-opacity ${
                            task.tag === '预习'
                              ? 'border-accent/25 bg-accent/10 text-accent'
                              : 'border-white/10 bg-white/[0.05] text-white/45'
                          } ${task.done ? 'opacity-50' : ''}`}
                        >
                          {task.tag}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex shrink-0 items-center gap-1 text-[10px] tabular transition-colors ${
                        task.done ? 'text-white/20' : 'text-white/45'
                      }`}
                    >
                      <Clock3 size={12} strokeWidth={1.5} aria-hidden="true" />
                      {task.minutes} 分钟
                    </span>
                  </article>
                ))}
              </section>
            </main>

            <button
              type="button"
              onClick={() =>
                showToast({
                  title: '新建任务',
                  detail: '原型演示 · 可接入任务编辑器',
                })
              }
              aria-label="新建任务"
              className="absolute bottom-6 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-accent text-black shadow-[0_10px_30px_rgba(255,92,0,0.45)] transition-transform active:scale-95"
            >
              <Plus size={24} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        )
      }

      const HUB_TAGS = [
        '时空调度已就绪',
        'RAG 伴学已就绪',
        '座位代理已就绪',
      ]

      const INITIAL_MESSAGES = [
        {
          id: 'm1',
          role: 'user',
          text: '帮我安排今天下午的空窗，并订 A-12 座位。',
        },
        {
          id: 'm2',
          role: 'ai',
          text: '已根据第 12 周课表、RAG 笔记与图书馆实时座位，生成一条 45 分钟空窗路径。A-12 已锁定，确认后即可开始。',
          plan: {
            title: '今日空窗学习计划',
            time: '13:46 – 14:30 · 45 分钟',
            items: [
              {
                title: '复习微观经济学 · 第 3 章',
                meta: '25 分钟 · 图书馆 3F · A-12',
              },
              {
                title: '完成课后习题',
                meta: '20 分钟 · 座位原地完成',
              },
            ],
          },
          thinking:
            '读取课表：13:46–14:30 无课程，空窗 45 分钟。\nRAG 检索：微观经济学第 3 章掌握度 62%，边际效用是薄弱点。\n座位校验：图书馆 3F · A-12 可用，步行 6 分钟。\n路径生成：25 分钟复习 + 20 分钟习题，已同步任务待办。',
        },
      ]

      function PlannerHubPage({ onOpenPages }) {
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
                              <Check
                                size={10}
                                strokeWidth={2}
                                aria-hidden="true"
                              />
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

      const RADAR_DATA = [
        { subject: '专注', value: 82 },
        { subject: '自律', value: 76 },
        { subject: '进度', value: 68 },
        { subject: '理解', value: 74 },
        { subject: '记忆', value: 61 },
        { subject: '节奏', value: 88 },
      ]

      const WEEKLY_DATA = [
        { day: '一', hours: 1.0 },
        { day: '二', hours: 1.8 },
        { day: '三', hours: 0.7 },
        { day: '四', hours: 2.2 },
        { day: '五', hours: 1.6 },
        { day: '六', hours: 2.9 },
        { day: '日', hours: 1.8 },
      ]

      const ANALYTICS_STATS = [
        { label: '本周总时长', value: '12h', note: '+2.4h' },
        { label: '本周完成率', value: '85%', note: '+6%' },
        { label: '连续学习', value: '7天', note: '保持中' },
      ]

      function AnalyticsTooltip({ active, payload, label }) {
        if (!active || !payload || !payload.length) return null

        return (
          <div className="rounded-xl border border-accent/25 bg-[#171310]/95 px-2.5 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <p className="text-[8.5px] text-white/35">周{label}</p>
            <p className="mt-0.5 text-[11px] text-accent tabular">
              {payload[0].value} 小时
            </p>
          </div>
        )
      }

      function AnalyticsPage({ onOpenPages }) {
        return (
          <div className="relative flex h-full min-h-0 flex-col">
            <StatusBar time="13:41" />

            <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-6 pt-2">
              <header className="relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)',
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.24em] text-accent/65">
                      Learning Analytics
                    </p>
                    <h1 className="mt-1 text-[26px] font-semibold leading-none tracking-tight text-white">
                      学情概览
                    </h1>
                    <p className="mt-2 text-[10px] text-white/35">
                      本周 · 11.06 – 11.12 · 效率提升{' '}
                      <span className="text-accent">18%</span>
                    </p>
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
              </header>

              <section className="mt-4 flex gap-2.5">
                {ANALYTICS_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="relative flex-1 animate-rise-in overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl"
                    style={{ animationDelay: `${60 + index * 40}ms` }}
                  >
                    <p className="text-[9px] text-white/35">{stat.label}</p>
                    <p className="mt-1.5 text-[22px] font-semibold leading-none text-white tabular">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[8.5px] text-accent/75">
                      {stat.note}
                    </p>
                  </div>
                ))}
              </section>

              <section
                className="relative mt-3 animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                style={{ animationDelay: '150ms' }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[13px] font-medium text-white">
                    多维画像
                  </h2>
                  <span className="text-[9px] text-white/30">近 7 天</span>
                </div>

                <div className="chart-glow mt-2 h-[190px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart
                      data={RADAR_DATA}
                      outerRadius="68%"
                      margin={{ top: 8, right: 12, bottom: 8, left: 12 }}
                    >
                      <PolarGrid stroke="rgba(255,255,255,0.07)" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                          fill: 'rgba(255,255,255,0.42)',
                          fontSize: 9,
                        }}
                      />
                      <PolarRadiusAxis
                        domain={[0, 100]}
                        tick={false}
                        axisLine={false}
                      />
                      <Radar
                        dataKey="value"
                        stroke="#FF5C00"
                        strokeWidth={1.8}
                        fill="#FF5C00"
                        fillOpacity={0.14}
                        dot={{ r: 2, fill: '#FF5C00', strokeWidth: 0 }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-1 flex items-center justify-between text-[9px] text-white/30">
                  <span>
                    综合评分{' '}
                    <span className="ml-1 text-[13px] font-semibold text-accent tabular">
                      76
                    </span>
                  </span>
                  <span>
                    较上周 <span className="text-accent">+8</span>
                  </span>
                </div>
              </section>

              <section
                className="relative mt-3 animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                style={{ animationDelay: '210ms' }}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-[13px] font-medium text-white">
                    学习趋势
                  </h2>
                  <span className="text-[9px] text-white/30">本周 12h</span>
                </div>

                <div className="chart-glow mt-3 h-[170px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={WEEKLY_DATA}
                      margin={{ top: 6, right: 4, left: -24, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="studyArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#FF5C00"
                            stopOpacity={0.38}
                          />
                          <stop
                            offset="100%"
                            stopColor="#FF5C00"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="2 6"
                        vertical={false}
                        stroke="rgba(255,255,255,0.06)"
                      />
                      <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: 'rgba(255,255,255,0.3)',
                          fontSize: 8,
                        }}
                        dy={4}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: 'rgba(255,255,255,0.25)',
                          fontSize: 8,
                        }}
                        tickFormatter={(value) => `${value}h`}
                        width={30}
                      />
                      <Tooltip
                        cursor={{ stroke: 'rgba(255,92,0,0.35)' }}
                        content={<AnalyticsTooltip />}
                      />
                      <Area
                        type="monotone"
                        dataKey="hours"
                        stroke="#FF5C00"
                        strokeWidth={2}
                        fill="url(#studyArea)"
                        dot={{
                          r: 2.5,
                          fill: '#FF5C00',
                          stroke: '#0A0A0A',
                          strokeWidth: 1.5,
                        }}
                        activeDot={{
                          r: 4,
                          fill: '#FF5C00',
                          stroke: '#0A0A0A',
                          strokeWidth: 2,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </section>

              <section
                className="relative mt-3 animate-rise-in overflow-hidden rounded-[24px] border border-accent/40 bg-accent/[0.05] p-4 shadow-[0_0_30px_rgba(255,92,0,0.16)]"
                style={{ animationDelay: '270ms' }}
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                    <Sparkles size={15} strokeWidth={1.5} aria-hidden="true" />
                  </span>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] uppercase tracking-[0.22em] text-accent/75">
                        AI 预测
                      </span>
                      <span className="h-1 w-1 animate-breathe rounded-full bg-accent" />
                    </div>
                    <p className="mt-1.5 text-[12px] leading-5 text-white/85">
                      下周高数可能需要增加复习时间
                    </p>
                    <p className="mt-1 text-[10px] leading-4 text-white/40">
                      建议在周二、周四各增加 30 分钟，优先处理极限与导数错题。
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        )
      }

      const LIBRARY_FILTERS = ['全部', '课堂笔记', '课件PPT', '速记备忘']

      const LIBRARY_FILES = [
        {
          id: 'f1',
          name: '微观经济学_第3章.pptx',
          ext: 'PPTX',
          category: '课件PPT',
          time: '昨天 14:30',
          size: '8.6 MB',
          icon: 'ppt',
          recent: true,
        },
        {
          id: 'f2',
          name: '高数课堂速记.mp3',
          ext: 'MP3',
          category: '速记备忘',
          time: '今天 09:15',
          size: '12.4 MB',
          icon: 'audio',
        },
        {
          id: 'f3',
          name: '宏观经济学 课堂笔记.pdf',
          ext: 'PDF',
          category: '课堂笔记',
          time: '11月10日',
          size: '2.1 MB',
          icon: 'pdf',
        },
        {
          id: 'f4',
          name: '英语听力原文.png',
          ext: 'PNG',
          category: '课堂笔记',
          time: '11月08日',
          size: '1.8 MB',
          icon: 'image',
        },
        {
          id: 'f5',
          name: '作业要求_课程设计.pdf',
          ext: 'PDF',
          category: '课堂笔记',
          time: '11月06日',
          size: '640 KB',
          icon: 'pdf',
        },
      ]

      const LIBRARY_ICONS = {
        ppt: Presentation,
        audio: Mic,
        pdf: FileText,
        image: ImageIcon,
      }

      function LibraryPage({ onOpenPages }) {
        const [filter, setFilter] = useState('全部')
        const [query, setQuery] = useState('')
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

            <StatusBar time="13:41" />

            <main className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 pb-28 pt-2">
              <header className="relative animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,92,0,0.16), transparent 70%)',
                  }}
                />

                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.24em] text-accent/65">
                      Knowledge Base
                    </p>
                    <h1 className="mt-1 text-[24px] font-semibold leading-none tracking-tight text-white">
                      个人知识库
                    </h1>
                    <p className="mt-1.5 text-[10px] text-white/35">
                      5 份资料 · RAG 已索引
                    </p>
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

                <div className="relative mt-3.5 flex items-center gap-2 rounded-2xl border border-accent/25 bg-black/20 px-3.5 py-3 shadow-[0_0_18px_rgba(255,92,0,0.10)] transition-all focus-within:border-accent/45 focus-within:shadow-[0_0_24px_rgba(255,92,0,0.16)]">
                  <Search
                    size={15}
                    strokeWidth={1.5}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="智能检索课程资料…"
                    aria-label="智能检索课程资料"
                    className="min-w-0 flex-1 bg-transparent text-[12px] text-white outline-none placeholder:text-white/30"
                  />
                  <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[8px] tracking-wide text-accent">
                    RAG
                  </span>
                </div>
              </header>

              <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto pb-1">
                {LIBRARY_FILTERS.map((item) => {
                  const active = filter === item

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setFilter(item)}
                      aria-pressed={active}
                      className={`shrink-0 rounded-full px-3.5 py-2 text-[11px] transition-colors ${
                        active
                          ? 'bg-accent font-medium text-black shadow-[0_0_16px_rgba(255,92,0,0.25)]'
                          : 'border border-white/10 bg-white/[0.03] text-white/45'
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>

              <div className="relative mt-3 flex items-start gap-2.5 overflow-hidden rounded-2xl border border-accent/20 bg-[#141210]/85 px-3.5 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
                  <Sparkles size={13} strokeWidth={1.5} aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] leading-4 text-white/65">
                    <span className="text-accent">AI 发现：</span>
                    您有一份未归档的笔记与今日课程相关
                  </p>
                  <p className="mt-0.5 text-[9px] text-white/30">
                    高数课堂速记 · 建议归档至「课堂笔记」
                  </p>
                </div>

                <ChevronRight
                  size={13}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-accent/45"
                  aria-hidden="true"
                />
              </div>

              <section className="mt-3 space-y-2.5">
                {LIBRARY_FILES.map((file, index) => {
                  const FileIcon = LIBRARY_ICONS[file.icon]

                  return (
                    <article
                      key={file.id}
                      className={`group relative flex animate-rise-in items-start gap-3 overflow-hidden rounded-[22px] border p-4 backdrop-blur-xl ${
                        file.recent
                          ? 'border-accent/40 bg-accent/[0.055] shadow-[0_0_24px_rgba(255,92,0,0.14)]'
                          : 'border-white/10 bg-white/[0.04]'
                      }`}
                      style={{ animationDelay: `${80 + index * 45}ms` }}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border ${
                          file.recent
                            ? 'border-accent/30 bg-accent/10 text-white/90'
                            : 'border-white/10 bg-white/[0.05] text-white/80'
                        }`}
                      >
                        <FileIcon
                          size={18}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="truncate text-[13px] leading-5 text-white/85">
                            {file.name}
                          </p>
                          {file.recent ? (
                            <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 px-1.5 py-0.5 text-[8px] text-accent">
                              最近
                            </span>
                          ) : null}
                        </div>

                        <div className="mt-1.5 flex items-center gap-1.5 text-[9px] text-white/30 tabular">
                          <span className="rounded border border-white/10 bg-white/[0.03] px-1.5 py-0.5 text-[8px] text-white/35">
                            {file.ext}
                          </span>
                          <span>{file.time}</span>
                          <span className="h-0.5 w-0.5 rounded-full bg-white/20" />
                          <span>{file.size}</span>
                        </div>
                      </div>

                      <ChevronRight
                        size={14}
                        strokeWidth={1.5}
                        className="mt-3 shrink-0 text-white/20 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </article>
                  )
                })}
              </section>
            </main>

            <button
              type="button"
              onClick={() =>
                showToast({
                  title: '支持上传图片、文档或直接语音速记',
                  detail: '原型演示 · 上传入口未接入',
                })
              }
              aria-label="上传资料"
              className="absolute bottom-6 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-accent text-black shadow-[0_10px_30px_rgba(255,92,0,0.45)] transition-transform active:scale-95"
            >
              <Plus size={24} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>
        )
      }

      function PageSwitcher({ open, current, onSelect, onClose }) {
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

      const PAGE_IDS = ['gap', 'seat', 'tasks', 'hub', 'analytics', 'library']

      function App() {
        const [page, setPage] = useState(() => {
          const hash = window.location.hash.replace('#', '')
          return PAGE_IDS.includes(hash) ? hash : 'gap'
        })
        const [pagesOpen, setPagesOpen] = useState(false)

        const openPages = () => setPagesOpen((open) => !open)

        return (
          <PhoneShell>
            {page === 'gap' ? (
              <IdleGapPage
                onOpenPages={openPages}
                onBookSeat={() => setPage('seat')}
              />
            ) : page === 'seat' ? (
              <SeatBookingPage onOpenPages={openPages} />
            ) : page === 'tasks' ? (
              <StudyChecklistPage onOpenPages={openPages} />
            ) : page === 'hub' ? (
              <PlannerHubPage onOpenPages={openPages} />
            ) : page === 'analytics' ? (
              <AnalyticsPage onOpenPages={openPages} />
            ) : (
              <LibraryPage onOpenPages={openPages} />
            )}
            <PageSwitcher
              open={pagesOpen}
              current={page}
              onSelect={setPage}
              onClose={() => setPagesOpen(false)}
            />
          </PhoneShell>
        )
      }

      ReactDOM.createRoot(document.getElementById('root')).render(<App />)
