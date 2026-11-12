const { useState, useEffect, useRef, useCallback } = React

const {
  Home,
  Armchair,
  TrendingUp,
  Fingerprint,
  MoreHorizontal,
  SlidersHorizontal,
  Sparkles,
  BookOpen,
  ListChecks,
  Clock3,
  ChevronRight,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Plus,
  Search,
  Mic,
  FileText,
  Image: ImageIcon,
  Presentation,
  MapPin,
  Wifi,
  Plug,
  Sun,
  VolumeX,
  Check,
  X,
  CalendarDays,
  BatteryFull,
  Signal,
  Play,
  Target,
  Bell,
  ShieldCheck,
  Info,
  Flame,
  Library,
  GraduationCap,
} = window.LucideReact

const CARD =
  'border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-glass'

const NAV_ITEMS = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'seat', label: '订座', icon: Armchair },
  { id: 'analytics', label: '分析', icon: TrendingUp },
  { id: 'profile', label: '我的', icon: Fingerprint },
]

const SCHEDULE = [
  { time: '09:30', title: '数学复盘' },
  { time: '14:00', title: '英语听力' },
  { time: '19:00', title: '项目研讨' },
]

const QUICK_LINKS = [
  {
    id: 'hub',
    label: 'Planner Hub',
    note: '多智能体对话',
    icon: Sparkles,
  },
  {
    id: 'checklist',
    label: '任务清单',
    note: '3 / 5 完成',
    icon: ListChecks,
  },
  {
    id: 'gap',
    label: '空窗规划',
    note: '45 分钟空窗',
    icon: Clock3,
  },
  {
    id: 'library',
    label: '资料库',
    note: 'RAG 语义检索',
    icon: BookOpen,
  },
]

const DATES = [
  { day: '一', date: '21' },
  { day: '二', date: '22' },
  { day: '三', date: '23' },
  { day: '四', date: '24' },
  { day: '五', date: '25' },
  { day: '六', date: '26' },
  { day: '日', date: '27' },
]

const AGENT_TAGS = ['Scheduling', 'RAG Tutor', 'Seat Agent']

const TASKS = [
  {
    id: 1,
    title: '复习微观经济学第3章',
    tag: 'RAG伴学',
    done: false,
    minutes: 25,
  },
  { id: 2, title: '整理课堂笔记', tag: '预习', done: true, minutes: 40 },
  { id: 3, title: '完成课后习题', tag: '练习', done: true, minutes: 30 },
  {
    id: 4,
    title: '背诵四级单词',
    tag: '复习',
    done: true,
    minutes: 20,
    hidden: true,
  },
  {
    id: 5,
    title: '预习高数下册',
    tag: '预习',
    done: false,
    minutes: 45,
    hidden: true,
  },
]

const LIBRARY_FILES = [
  {
    id: 'n1',
    title: '宏观经济学 课堂笔记',
    type: 'PDF',
    date: '2025-11-10',
    icon: 'pdf',
    hot: true,
    lines: 2,
  },
  {
    id: 'n2',
    title: '营销案例 PPT 框架',
    type: 'PPTX',
    date: '2025-11-08',
    icon: 'ppt',
    lines: 3,
  },
  {
    id: 'n3',
    title: '英语听力速记',
    type: 'MP3',
    date: '2025-11-05',
    icon: 'audio',
    lines: 1,
  },
  {
    id: 'n4',
    title: '高数错题整理',
    type: 'PNG',
    date: '2025-11-03',
    icon: 'image',
    lines: 2,
  },
  {
    id: 'n5',
    title: '课后作业要求',
    type: 'PDF',
    date: '2025-11-01',
    icon: 'pdf',
    lines: 3,
  },
]

const FILE_ICONS = {
  pdf: FileText,
  ppt: Presentation,
  audio: Mic,
  image: ImageIcon,
}

const STATS = [
  { label: '总学习时长', value: '28.6h', note: '+18%' },
  { label: '完成任务数', value: '126个', note: '+12' },
  { label: '履约率', value: '94%', note: '+6%' },
  { label: '专注度', value: '92%', note: '+18%' },
]

const PROFILE_ITEMS = [
  { label: '学习目标', icon: Target },
  { label: '提醒设置', icon: Bell },
  { label: '账号与安全', icon: ShieldCheck },
  { label: '关于知行', icon: Info },
]

const SEAT_DOTS = Array.from({ length: 6 }, (_, row) =>
  Array.from({ length: 8 }, (_, col) => ({
    x: 38 + col * 34,
    y: 76 + row * 14,
  })),
).flat()

const MINI_BAR_OPTION = {
  animationDuration: 700,
  grid: { left: 0, right: 0, top: 4, bottom: 0 },
  xAxis: {
    type: 'category',
    show: false,
    data: ['一', '二', '三', '四', '五', '六', '日'],
  },
  yAxis: { type: 'value', show: false },
  series: [
    {
      type: 'bar',
      data: [3.2, 4.1, 2.8, 4.6, 3.9, 5.4, 4.6],
      barWidth: 5,
      itemStyle: {
        borderRadius: [3, 3, 0, 0],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: '#FF7A00' },
            { offset: 1, color: 'rgba(255,122,0,0.12)' },
          ],
        },
      },
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(255,255,255,0.05)',
        borderRadius: [3, 3, 0, 0],
      },
    },
  ],
}

const RADAR_OPTION = {
  animationDuration: 900,
  radar: {
    center: ['50%', '52%'],
    radius: '62%',
    splitNumber: 4,
    indicator: [
      { name: '专注', max: 100 },
      { name: '理解', max: 100 },
      { name: '节奏', max: 100 },
      { name: '履约', max: 100 },
      { name: '记忆', max: 100 },
      { name: '自律', max: 100 },
    ],
    axisName: {
      color: 'rgba(255,255,255,0.55)',
      fontSize: 9,
    },
    splitLine: {
      lineStyle: { color: 'rgba(255,255,255,0.08)' },
    },
    splitArea: {
      areaStyle: {
        color: ['rgba(255,255,255,0.01)', 'rgba(255,255,255,0.03)'],
      },
    },
    axisLine: {
      lineStyle: { color: 'rgba(255,255,255,0.08)' },
    },
  },
  series: [
    {
      type: 'radar',
      data: [{ value: [92, 78, 86, 94, 72, 81] }],
      symbol: 'circle',
      symbolSize: 4,
      lineStyle: {
        color: '#FF7A00',
        width: 2,
        shadowBlur: 12,
        shadowColor: 'rgba(255,122,0,0.5)',
      },
      itemStyle: { color: '#FF7A00' },
      areaStyle: { color: 'rgba(255,122,0,0.18)' },
    },
  ],
}

const AREA_OPTION = {
  animationDuration: 900,
  grid: { left: 6, right: 8, top: 20, bottom: 4, containLabel: true },
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(20,18,16,0.94)',
    borderColor: 'rgba(255,122,0,0.35)',
    borderWidth: 1,
    padding: [8, 10],
    textStyle: { color: '#fff', fontSize: 10 },
    axisPointer: { lineStyle: { color: 'rgba(255,122,0,0.45)' } },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['一', '二', '三', '四', '五', '六', '日'],
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { color: 'rgba(255,255,255,0.4)', fontSize: 9 },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 6,
    interval: 2,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: 'rgba(255,255,255,0.3)',
      fontSize: 8,
      formatter: '{value}h',
    },
    splitLine: {
      lineStyle: { color: 'rgba(255,255,255,0.06)', type: 'dashed' },
    },
  },
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      data: [3.2, 4.1, 2.8, 4.6, 3.9, 5.4, 4.6],
      lineStyle: {
        color: '#FF7A00',
        width: 2.5,
        shadowBlur: 14,
        shadowColor: 'rgba(255,122,0,0.55)',
      },
      itemStyle: {
        color: '#FF7A00',
        borderColor: '#0A0A0A',
        borderWidth: 2,
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(255,122,0,0.38)' },
            { offset: 1, color: 'rgba(255,122,0,0)' },
          ],
        },
      },
    },
  ],
}

function StatusBar({ time = '9:41' }) {
  return (
    <div className="flex shrink-0 items-center justify-between px-6 pb-1 pt-3 text-[11px] text-white/85">
      <span className="tabular font-medium tracking-wide">{time}</span>
      <div className="flex items-center gap-1.5 text-white/70">
        <Signal size={13} strokeWidth={1.5} aria-hidden="true" />
        <Wifi size={13} strokeWidth={1.5} aria-hidden="true" />
        <BatteryFull size={16} strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  )
}

function AgentRing({ size = 'md', className = '' }) {
  const box =
    size === 'lg' ? 'h-12 w-12' : size === 'sm' ? 'h-6 w-6' : 'h-9 w-9'
  const inner =
    size === 'lg' ? 'inset-[8px]' : size === 'sm' ? 'inset-[5px]' : 'inset-[7px]'

  return (
    <span className={`relative grid ${box} shrink-0 place-items-center ${className}`}>
      <span className="absolute inset-0 animate-breathe rounded-full border border-accent/40 shadow-[0_0_20px_rgba(255,122,0,0.28)]" />
      <span className={`absolute ${inner} rounded-full border border-accent/25`} />
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,122,0,0.9)]" />
    </span>
  )
}

function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div
      key={message.id}
      className="absolute inset-x-4 top-3 z-50 animate-toast-in"
      role="status"
      aria-live="polite"
    >
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-[#141210]/92 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
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

function MistLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-64"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.16] via-white/[0.05] to-transparent blur-2xl" />
      <div className="absolute -top-28 left-1/2 h-56 w-[120%] -translate-x-1/2 rounded-full bg-white/[0.10] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  )
}

function PhoneShell({ children }) {
  return (
    <div className="relative flex min-h-screen w-full items-start justify-center overflow-x-hidden overflow-y-auto bg-night-950 sm:px-6 sm:py-8">
      <div className="relative z-10 w-full max-w-[390px]">
        <div className="relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-night-900 sm:h-[844px] sm:rounded-[46px] sm:border sm:border-white/10 sm:shadow-shell">
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A] via-[#121212] to-[#0A0A0A]" />
          <MistLayer />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(ellipse_at_bottom,rgba(255,122,0,0.08),transparent_70%)]" />
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

function BottomNav({ active, onChange }) {
  return (
    <nav className="absolute inset-x-4 bottom-4 z-40 flex items-center gap-1 rounded-[24px] border border-white/10 bg-black/45 px-2 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon
        const isActive = active === item.id

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`relative flex flex-1 flex-col items-center gap-1 rounded-2xl py-1.5 transition-colors ${
              isActive ? 'text-accent' : 'text-white/30'
            }`}
          >
            <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-[8px]">{item.label}</span>
            {isActive ? (
              <span className="absolute -top-0.5 h-1 w-1 rounded-full bg-accent shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
            ) : null}
          </button>
        )
      })}
    </nav>
  )
}

function ProgressRing({ value, size = 72 }) {
  const stroke = 5
  const radius = (size - stroke) / 2 - 1
  const circumference = 2 * Math.PI * radius

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value}%`}
    >
      <svg width={size} height={size} className="-rotate-90">
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
          stroke="#FF7A00"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255,122,0,0.6))',
            transition: 'stroke-dashoffset .5s ease',
          }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="text-[16px] font-semibold text-white tabular">
          {value}%
        </span>
      </div>
    </div>
  )
}

function SemiRing({ done, total }) {
  const radius = 54
  const circumference = Math.PI * radius
  const percent = total ? done / total : 0

  return (
    <div className="relative mx-auto w-[144px]">
      <svg viewBox="0 0 144 84" className="w-full">
        <path
          d="M 18 74 A 54 54 0 0 1 126 74"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 18 74 A 54 54 0 0 1 126 74"
          fill="none"
          stroke="#FF7A00"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent)}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(255,122,0,0.55))',
            transition: 'stroke-dashoffset .5s ease',
          }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-1 text-center">
        <p className="text-[22px] font-semibold leading-none text-white tabular">
          {done}/{total}
        </p>
        <p className="mt-1 text-[9px] text-white/35">已完成</p>
      </div>
    </div>
  )
}

function EChart({ option, className = 'h-full w-full' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || !window.echarts) return

    const chart = window.echarts.init(ref.current, null, {
      renderer: 'canvas',
    })
    chart.setOption(option)

    const resize = () => chart.resize()
    window.addEventListener('resize', resize)

    const observer =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(resize)
        : null

    if (observer) observer.observe(ref.current)

    return () => {
      window.removeEventListener('resize', resize)
      if (observer) observer.disconnect()
      chart.dispose()
    }
  }, [option])

  return <div ref={ref} className={className} />
}

function HomePage({ onNavigate }) {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-start justify-between px-5 pb-3 pt-2">
        <div>
          <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-white">
            AI 学业管家
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="更多"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
          >
            <MoreHorizontal size={15} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="设置"
            className="grid h-8 w-8 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent"
          >
            <SlidersHorizontal size={15} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-32">
        <section className="animate-rise-in space-y-2.5">
          <div className="flex items-start gap-2.5">
            <AgentRing size="sm" className="mt-0.5" />
            <div className="max-w-[84%] rounded-[18px] rounded-tl-md border border-white/10 bg-white/[0.05] p-3.5 shadow-glass backdrop-blur-xl">
              <p className="text-[11px] leading-5 text-white/75">
                今日学习计划已为你整理，先完成数学复盘，再进入英语听力训练。
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-[76%] rounded-[18px] rounded-br-md border border-white/[0.06] bg-white/[0.08] p-3.5">
              <p className="text-[11px] leading-5 text-white/80">
                优先完成数学复盘与英语听力训练
              </p>
            </div>
          </div>
        </section>

        <section
          className={`mt-4 animate-rise-in rounded-[24px] ${CARD} p-4`}
          style={{ animationDelay: '60ms' }}
        >
          <button
            type="button"
            onClick={() => onNavigate('checklist')}
            className="flex w-full items-center justify-between"
          >
            <span className="text-[13px] font-medium text-white">智能日程</span>
            <ChevronRight size={14} className="text-white/30" />
          </button>

          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto">
            {SCHEDULE.map((item) => (
              <div
                key={item.time}
                className="min-w-[94px] rounded-2xl border border-white/10 bg-black/25 px-3 py-2.5"
              >
                <p className="text-[9px] text-accent tabular">{item.time}</p>
                <p className="mt-1 text-[10px] text-white/65">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`mt-3 animate-rise-in rounded-[24px] ${CARD} p-4`}
          style={{ animationDelay: '110ms' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-medium text-white">学情大屏</span>
            <button
              type="button"
              onClick={() => onNavigate('analytics')}
              className="flex items-center gap-0.5 text-[9px] text-accent/80"
            >
              查看 <ChevronRight size={12} />
            </button>
          </div>

          <div className="mt-3 flex items-center gap-4">
            <ProgressRing value={92} size={72} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-[9px]">
                <span className="text-white/35">专注度</span>
                <span className="font-semibold text-white tabular">92%</span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="h-full w-[92%] rounded-full bg-accent shadow-[0_0_10px_rgba(255,122,0,0.6)]" />
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[9px]">
                <span className="text-white/35">本周完成率</span>
                <span className="text-white/75 tabular">86%</span>
              </div>
              <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/[0.08]">
                <div className="h-full w-[86%] rounded-full bg-white/35" />
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-end justify-between">
            <div>
              <p className="text-[9px] text-white/30">专注趋势</p>
              <p className="mt-0.5 text-[12px] font-semibold text-accent tabular">
                +18%
              </p>
            </div>
            <div className="h-12 w-28">
              <EChart option={MINI_BAR_OPTION} className="h-full w-full" />
            </div>
          </div>
        </section>

        <section className="mt-3 grid grid-cols-2 gap-2.5">
          {QUICK_LINKS.map((link, index) => {
            const Icon = link.icon
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => onNavigate(link.id)}
                className={`animate-rise-in rounded-[20px] ${CARD} p-3.5 text-left`}
                style={{ animationDelay: `${150 + index * 45}ms` }}
              >
                <span className="grid h-8 w-8 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                  <Icon size={15} strokeWidth={1.5} />
                </span>
                <p className="mt-2.5 text-[11px] text-white/80">{link.label}</p>
                <p className="mt-0.5 text-[8.5px] text-white/30">{link.note}</p>
              </button>
            )
          })}
        </section>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => onNavigate('checklist')}
            className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[13px] font-semibold text-black shadow-glow"
          >
            <Play size={15} fill="currentColor" aria-hidden="true" />
            开始学习
          </button>
          <button
            type="button"
            onClick={() => onNavigate('seat')}
            className="h-[52px] w-[84px] rounded-full border border-accent/35 bg-accent/10 text-[12px] text-accent"
          >
            订座
          </button>
        </div>
      </main>
    </div>
  )
}

function HubPage({ notify }) {
  const [messages, setMessages] = useState(() => [
    {
      id: 'u1',
      role: 'user',
      text: '安排今晚的复习计划',
    },
    {
      id: 'a1',
      role: 'ai',
      text: '已根据空窗时间、课程资料与附近座位，为你生成 2 小时复习路径。',
      plan: [
        { time: '19:00', title: '预习第 4 章' },
        { time: '20:00', title: '习题训练' },
        { time: '座位', title: '图书馆 3 楼' },
      ],
      thinking:
        '读取课表：今晚 19:00–21:00 无课程。\n检索资料：第 4 章掌握度 62%，优先预习概念与例题。\n座位校验：图书馆 3F · A-12 可用。\n路径生成：40 分钟预习 + 60 分钟习题 + 20 分钟复盘。',
    },
  ])
  const [draft, setDraft] = useState('')
  const [openThinking, setOpenThinking] = useState(false)
  const [activeDate, setActiveDate] = useState('23')
  const [activeAgent, setActiveAgent] = useState('Scheduling')
  const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if (container) container.scrollTop = container.scrollHeight
  }, [messages])

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: 'user', text },
    ])
    setDraft('')
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 shrink-0 px-5 pb-2 pt-1">
        <div className="flex items-center gap-3">
          <AgentRing />
          <div className="min-w-0 flex-1">
            <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-white">
              Planner Hub
            </h1>
          </div>
          <button
            type="button"
            aria-label="更多"
            className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
          >
            <MoreHorizontal size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="no-scrollbar mt-3 flex gap-1.5 overflow-x-auto pb-1">
          {DATES.map((item) => {
            const active = item.date === activeDate
            return (
              <button
                key={item.date}
                type="button"
                onClick={() => setActiveDate(item.date)}
                className={`flex min-w-[36px] shrink-0 flex-col items-center rounded-2xl border px-2 py-1.5 text-[9px] ${
                  active
                    ? 'border-accent/40 bg-accent text-black'
                    : 'border-white/10 bg-white/[0.04] text-white/40'
                }`}
              >
                <span>{item.day}</span>
                <span className="mt-0.5 text-[11px] font-semibold tabular">
                  {item.date}
                </span>
              </button>
            )
          })}
        </div>

        <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto pb-1">
          {AGENT_TAGS.map((tag) => {
            const active = tag === activeAgent
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveAgent(tag)}
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[9px] ${
                  active
                    ? 'border-accent/40 bg-accent/12 text-accent'
                    : 'border-white/10 bg-white/[0.04] text-white/40'
                }`}
              >
                <span className="h-1 w-1 rounded-full bg-accent animate-breathe" />
                {tag}
              </button>
            )
          })}
        </div>
      </header>

      <main
        ref={scrollRef}
        className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-44"
      >
        <div className="space-y-4">
          {messages.map((message) =>
            message.role === 'user' ? (
              <div key={message.id} className="flex justify-end">
                <div className="max-w-[82%] rounded-[20px] rounded-br-md border border-white/[0.06] bg-[#1C1C1E] px-4 py-3 text-[12px] leading-5 text-white/85">
                  {message.text}
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex items-start gap-2.5">
                <AgentRing size="sm" className="mt-4" />
                <div className="min-w-0 max-w-[88%] flex-1">
                  <p className="mb-1.5 text-[8px] uppercase tracking-[0.18em] text-accent/55">
                    Planner · AI
                  </p>
                  <div className="rounded-[20px] rounded-tl-md border border-white/10 bg-white/[0.05] p-4 shadow-glass backdrop-blur-xl">
                    <p className="text-[12px] leading-5 text-white/80">
                      {message.text}
                    </p>

                    <div className="mt-3.5 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/10 to-transparent p-3.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] uppercase tracking-[0.2em] text-accent/75">
                          Review Path
                        </span>
                        <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[8px] text-accent">
                          2 小时
                        </span>
                      </div>
                      <p className="mt-1.5 text-[13px] font-medium text-white">
                        今晚复习路径
                      </p>
                      <div className="mt-3 space-y-2 border-t border-white/[0.07] pt-3">
                        {message.plan.map((item) => (
                          <div
                            key={item.time + item.title}
                            className="flex items-center gap-2.5"
                          >
                            <span className="w-[38px] shrink-0 text-[9px] text-accent tabular">
                              {item.time}
                            </span>
                            <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                            <span className="min-w-0 flex-1 text-[10px] text-white/70">
                              {item.title}
                            </span>
                            <ChevronRight
                              size={11}
                              className="text-white/20"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 flex justify-center">
                      <span className="grid h-7 w-7 animate-float place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent shadow-[0_0_18px_rgba(255,122,0,0.18)]">
                        <ArrowDown size={13} />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`mt-2 overflow-hidden rounded-xl border transition-colors ${
                      openThinking
                        ? 'border-accent/35 bg-accent/[0.035]'
                        : 'border-accent/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenThinking((prev) => !prev)}
                      aria-expanded={openThinking}
                      className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
                    >
                      <span className="h-1 w-1 shrink-0 animate-breathe rounded-full bg-accent" />
                      <span className="text-[10px] tracking-wide text-accent/80">
                        Thought Chain
                      </span>
                      <ChevronDown
                        size={12}
                        className={`ml-auto shrink-0 text-accent/50 transition-transform duration-300 ${
                          openThinking ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        openThinking
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
                </div>
              </div>
            ),
          )}
        </div>
      </main>

      <div className="absolute inset-x-4 bottom-[92px] z-30">
        <div className="flex items-center gap-2 rounded-[26px] border border-white/10 bg-white/[0.06] p-1.5 pl-2 backdrop-blur-xl transition-colors focus-within:border-accent/35">
          <button
            type="button"
            onClick={() =>
              notify('添加内容', '可上传资料或插入一条学习任务')
            }
            aria-label="添加内容"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white/45 transition-colors hover:bg-white/[0.06]"
          >
            <Plus size={18} strokeWidth={1.5} />
          </button>
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault()
                send()
              }
            }}
            placeholder="输入学习安排…"
            aria-label="输入学习安排"
            className="min-w-0 flex-1 bg-transparent py-2 text-[12px] text-white outline-none placeholder:text-white/25"
          />
          <button
            type="button"
            onClick={send}
            disabled={!draft.trim()}
            aria-label="发送"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-black shadow-glow-sm transition-all active:scale-95 disabled:bg-white/[0.06] disabled:text-white/25 disabled:shadow-none"
          >
            <ArrowUp size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  )
}

function ChecklistPage() {
  const [tasks, setTasks] = useState(TASKS)
  const doneCount = tasks.filter((task) => task.done).length
  const visibleTasks = tasks.filter((task) => !task.hidden)
  const percent = Math.round((doneCount / tasks.length) * 100)

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-center justify-between px-5 pb-2 pt-1">
        <div className="flex items-center gap-2 text-[10px] text-white/40">
          <CalendarDays size={12} strokeWidth={1.5} />
          11月12日 周三 · 第 12 周
        </div>
        <button
          type="button"
          aria-label="更多"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
        >
          <MoreHorizontal size={15} strokeWidth={1.5} />
        </button>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-28">
        <section className={`relative animate-rise-in overflow-hidden rounded-[26px] ${CARD} p-5`}>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,122,0,0.18),transparent_70%)]"
          />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mt-1 text-[22px] font-semibold tracking-tight text-white">
                  学习任务
                </h1>
              </div>
              <span className="flex items-center gap-1 text-[9px] text-white/35">
                <Flame size={12} className="text-accent" />
                连续 7 天
              </span>
            </div>

            <div className="mt-4">
              <SemiRing done={doneCount} total={tasks.length} />
              <p className="mt-1 text-center text-[9px] text-white/35">
                今日完成率{' '}
                <span className="text-accent tabular">{percent}%</span>
              </p>
            </div>
          </div>
        </section>

        <div className="mt-4 flex items-center justify-between px-1">
          <span className="text-[10px] text-white/45">今日任务</span>
          <span className="text-[8.5px] text-white/25">
            已展示 3 项 · 共 5 项
          </span>
        </div>

        <section className="mt-2.5 space-y-2.5">
          {visibleTasks.map((task, index) => (
            <article
              key={task.id}
              className={`group flex animate-rise-in items-center gap-3 rounded-[22px] border p-4 shadow-glass backdrop-blur-xl ${
                task.done
                  ? 'border-white/[0.06] bg-white/[0.03]'
                  : 'border-white/10 bg-white/[0.05]'
              }`}
              style={{ animationDelay: `${60 + index * 45}ms` }}
            >
              <button
                type="button"
                onClick={() => toggleTask(task.id)}
                aria-pressed={task.done}
                aria-label={`${task.done ? '取消完成' : '标记完成'}：${task.title}`}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              >
                {task.done ? (
                  <span className="grid h-[22px] w-[22px] place-items-center rounded-full bg-accent text-black shadow-glow-sm">
                    <Check size={13} strokeWidth={2.4} />
                  </span>
                ) : (
                  <span className="h-[22px] w-[22px] rounded-full border border-accent/50 shadow-[0_0_12px_rgba(255,122,0,0.18)] transition-colors group-hover:border-accent" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-[12px] leading-5 transition-colors ${
                    task.done
                      ? 'text-white/30 line-through'
                      : 'text-white/85'
                  }`}
                >
                  {task.title}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span
                    className={`rounded-full border px-2 py-0.5 text-[8px] ${
                      task.tag === 'RAG伴学'
                        ? 'border-accent/25 bg-accent/10 text-accent'
                        : 'border-white/10 bg-white/[0.04] text-white/40'
                    }`}
                  >
                    {task.tag}
                  </span>
                </div>
              </div>

              <span
                className={`inline-flex shrink-0 items-center gap-1 text-[9px] tabular ${
                  task.done ? 'text-white/20' : 'text-white/45'
                }`}
              >
                <Clock3 size={11} strokeWidth={1.5} />
                {task.minutes} 分钟
              </span>
            </article>
          ))}
        </section>

        <button
          type="button"
          className={`mt-3 flex w-full items-start gap-2.5 rounded-[20px] border border-accent/20 bg-white/[0.04] p-3.5 text-left backdrop-blur-xl shadow-glass`}
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
            <Sparkles size={13} strokeWidth={1.5} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[9px] uppercase tracking-[0.2em] text-accent/70">
              AI 提示
            </p>
            <p className="mt-1 text-[10px] leading-4 text-white/55">
              您下课后有 30 分钟空窗，是否完成下一项任务？
            </p>
          </div>
          <ChevronRight size={13} className="mt-1 shrink-0 text-accent/45" />
        </button>
      </main>
    </div>
  )
}

function GapPage({ onNavigate, notify }) {
  const [openThinking, setOpenThinking] = useState(false)

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-center justify-between px-5 pb-2 pt-1">
        <div className="flex items-center gap-2 text-[10px] text-white/40">
          <CalendarDays size={12} strokeWidth={1.5} />
          11月12日 周三
        </div>
        <button
          type="button"
          aria-label="更多"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
        >
          <MoreHorizontal size={15} strokeWidth={1.5} />
        </button>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-44">
        <section className="animate-rise-in">
          <h1 className="mt-1.5 text-[26px] font-semibold leading-tight tracking-tight text-white">
            您有 45 分钟的
            <br />
            空窗时间
          </h1>
          <p className="mt-2 text-[10px] text-white/40">
            AI 已为你匹配附近学习资源
          </p>
        </section>

        <section className={`mt-4 animate-rise-in rounded-[24px] ${CARD} p-4`} style={{ animationDelay: '70ms' }}>
          <div className="flex items-center justify-between text-[9px] text-white/35">
            <span>13:00</span>
            <span>14:30</span>
          </div>
          <div className="relative mt-2 h-[10px] rounded-full bg-white/[0.07]">
            <div className="absolute inset-y-0 left-0 w-[37.5%] rounded-full bg-white/[0.10]" />
            <div className="absolute inset-y-0 left-[37.5%] w-[36.7%] animate-breathe rounded-full bg-gradient-to-r from-accent to-accent-soft shadow-[0_0_26px_rgba(255,122,0,0.55)]" />
            <div className="absolute -top-[5px] left-[34.2%] h-5 w-[2px] -translate-x-1/2 rounded-full bg-white/55">
              <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white" />
            </div>
          </div>
          <div className="relative mt-2.5 h-4 text-[9px] text-white/30 tabular">
            <span className="absolute left-0">13:00</span>
            <span className="absolute left-[37.5%] -translate-x-1/2">
              13:45
            </span>
            <span className="absolute left-[74.2%] -translate-x-1/2">
              14:30
            </span>
          </div>
          <div className="mt-2 flex justify-center">
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[9px] text-accent">
              空闲 45 分钟 · 13:46–14:30
            </span>
          </div>
        </section>

        <section className={`mt-3 animate-rise-in rounded-[24px] border border-accent/30 bg-gradient-to-b from-accent/10 to-transparent p-4 shadow-glass backdrop-blur-xl`} style={{ animationDelay: '130ms' }}>
          <div className="flex items-center justify-between">
            <span className="text-[8px] uppercase tracking-[0.2em] text-accent/75">
              AI Plan
            </span>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[8px] text-accent">
              智能推荐
            </span>
          </div>
          <p className="mt-1.5 text-[13px] font-medium text-white">
            复习第 3 章 PPT
          </p>
          <div className="mt-2 flex items-center gap-2 text-[10px] text-white/45">
            <Clock3 size={12} className="text-accent" />
            25 分钟 · 高专注任务
          </div>
        </section>

        <button
          type="button"
          className={`mt-3 flex w-full animate-rise-in items-center gap-3 rounded-[22px] ${CARD} p-4 text-left`}
          style={{ animationDelay: '190ms' }}
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
            <Library size={18} strokeWidth={1.5} />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-white/80">附近图书馆有空座</p>
            <p className="mt-0.5 text-[9px] text-white/35">
              预计步行 6 分钟 · 图书馆 3 楼
            </p>
          </div>
          <ChevronRight size={13} className="shrink-0 text-white/25" />
        </button>

        <div
          className={`mt-3 animate-rise-in overflow-hidden rounded-xl border transition-colors ${
            openThinking
              ? 'border-accent/35 bg-accent/[0.035]'
              : 'border-accent/20'
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenThinking((prev) => !prev)}
            aria-expanded={openThinking}
            className="flex w-full items-center gap-2 px-3 py-2.5 text-left"
          >
            <span className="h-1 w-1 animate-breathe rounded-full bg-accent" />
            <span className="text-[10px] tracking-wide text-accent/80">
              AI 思考链
            </span>
            <ChevronDown
              size={12}
              className={`ml-auto text-accent/50 transition-transform duration-300 ${
                openThinking ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openThinking
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <p className="whitespace-pre-line px-3 pb-3 text-[10px] leading-5 text-white/30">
                根据课表空窗、第 3 章掌握度 62% 与图书馆实时座位，优先安排短时高专注任务。
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="absolute inset-x-5 bottom-[92px] z-30 flex gap-2">
        <button
          type="button"
          onClick={() =>
            notify('自定义规划', '原型演示 · 可调整任务时长与座位偏好')
          }
          className="h-[52px] w-[96px] rounded-full border border-white/15 bg-white/[0.05] text-[11px] text-white/60 backdrop-blur-xl"
        >
          自定义
        </button>
        <button
          type="button"
          onClick={() => onNavigate('seat')}
          className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-full bg-accent text-[12px] font-semibold text-black shadow-glow"
        >
          <Sparkles size={15} />
          一键规划并订座
        </button>
      </div>
    </div>
  )
}

function AnalyticsPage() {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-center gap-3 px-5 pb-2 pt-1">
        <AgentRing size="lg" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-[20px] font-semibold tracking-tight text-white">
              学情分析
            </h1>
            <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[8px] text-accent">
              AI
            </span>
          </div>
          <p className="mt-0.5 text-[9px] text-white/35">
            本周学习效率提升{' '}
            <span className="text-accent tabular">18%</span>
          </p>
        </div>
        <button
          type="button"
          aria-label="更多"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
        >
          <MoreHorizontal size={15} strokeWidth={1.5} />
        </button>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-28">
        <section className={`animate-rise-in rounded-[26px] ${CARD} p-4`}>
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-medium text-white">多维画像</h2>
            <span className="text-[8px] text-white/30">近 7 天</span>
          </div>
          <div className="mt-1 h-[190px] w-full">
            <EChart option={RADAR_OPTION} />
          </div>
        </section>

        <section className="mt-3 grid grid-cols-2 gap-2.5">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`animate-rise-in rounded-[20px] ${CARD} p-3.5`}
              style={{ animationDelay: `${60 + index * 40}ms` }}
            >
              <p className="text-[8.5px] text-white/35">{stat.label}</p>
              <p className="mt-1.5 text-[22px] font-semibold leading-none text-white tabular">
                {stat.value}
              </p>
              <p className="mt-1.5 flex items-center gap-0.5 text-[8.5px] text-accent">
                <TrendingUp size={10} />
                {stat.note}
              </p>
            </div>
          ))}
        </section>

        <section className={`mt-3 animate-rise-in rounded-[26px] ${CARD} p-4`} style={{ animationDelay: '180ms' }}>
          <div className="flex items-center justify-between">
            <h2 className="text-[12px] font-medium text-white">学习趋势</h2>
            <span className="text-[8px] text-white/30">本周 28.6h</span>
          </div>
          <div className="mt-2 h-[170px] w-full">
            <EChart option={AREA_OPTION} />
          </div>
        </section>

        <section
          className="mt-3 animate-rise-in rounded-[24px] border border-accent/40 bg-accent/[0.06] p-4 shadow-[0_0_30px_rgba(255,122,0,0.16)]"
          style={{ animationDelay: '240ms' }}
        >
          <div className="flex items-start gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
              <Sparkles size={15} strokeWidth={1.5} />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[8.5px] uppercase tracking-[0.22em] text-accent/75">
                  AI 预测
                </span>
                <span className="h-1 w-1 animate-breathe rounded-full bg-accent" />
              </div>
              <p className="mt-1.5 text-[12px] text-white/85">
                预测专注时间：2 小时
              </p>
              <p className="mt-1 text-[9px] leading-4 text-white/40">
                建议安排高难度任务，优先处理高数错题与微观经济学第 3 章。
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function LibraryPage({ notify }) {
  const [activeTab, setActiveTab] = useState('全部')
  const [query, setQuery] = useState('')

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 shrink-0 px-5 pb-2 pt-1">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mt-1 text-[20px] font-semibold tracking-tight text-white">
              资料知识库
            </h1>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-accent/20 bg-accent/10 px-2 py-1 text-[8px] text-accent">
            <Sparkles size={10} />
            RAG
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-2xl border border-accent/25 bg-white/[0.05] px-3.5 py-3 shadow-[0_0_18px_rgba(255,122,0,0.10)] backdrop-blur-xl transition-all focus-within:border-accent/45">
          <Search size={15} className="shrink-0 text-accent" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="智能检索课程资料…"
            aria-label="智能检索课程资料"
            className="min-w-0 flex-1 bg-transparent text-[12px] text-white outline-none placeholder:text-white/25"
          />
          <span className="shrink-0 rounded-full border border-accent/20 bg-accent/10 px-2 py-0.5 text-[8px] text-accent">
            RAG语义搜索
          </span>
        </div>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-56">
        <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
          {['全部', '课堂笔记', 'PPT', '速记'].map((tab) => {
            const active = activeTab === tab
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 rounded-full px-3.5 py-1.5 text-[10px] ${
                  active
                    ? 'bg-accent font-medium text-black shadow-glow-sm'
                    : 'border border-white/10 bg-white/[0.04] text-white/40'
                }`}
              >
                {tab}
              </button>
            )
          })}
        </div>

        <div className="mt-3 columns-2 gap-2.5">
          {LIBRARY_FILES.map((file, index) => {
            const Icon = FILE_ICONS[file.icon]
            return (
              <article
                key={file.id}
                className={`mb-2.5 break-inside-avoid animate-rise-in rounded-[20px] border p-3.5 shadow-glass backdrop-blur-xl ${
                  file.hot
                    ? 'border-accent/40 bg-accent/[0.06] shadow-[0_0_24px_rgba(255,122,0,0.14)]'
                    : 'border-white/10 bg-white/[0.05]'
                }`}
                style={{ animationDelay: `${60 + index * 40}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-lg border ${
                      file.hot
                        ? 'border-accent/30 bg-accent/10 text-accent'
                        : 'border-white/10 bg-white/[0.05] text-white/70'
                    }`}
                  >
                    <Icon size={15} strokeWidth={1.5} />
                  </span>
                  <span className="rounded border border-white/10 bg-black/20 px-1.5 py-0.5 text-[7px] text-white/35">
                    {file.type}
                  </span>
                </div>

                <p className="mt-2.5 text-[11px] leading-4 text-white/80">
                  {file.title}
                </p>

                <div className="mt-2 space-y-1">
                  {Array.from({ length: file.lines }).map((_, line) => (
                    <span
                      key={line}
                      className="block h-1 rounded-full bg-white/[0.06]"
                      style={{ width: `${88 - line * 18}%` }}
                    />
                  ))}
                </div>

                <p className="mt-2 text-[8px] text-white/30 tabular">
                  {file.date}
                </p>
              </article>
            )
          })}
        </div>
      </main>

      <div className="absolute inset-x-4 bottom-[152px] z-30 flex items-center gap-2.5 rounded-full border border-accent/25 bg-[#141210]/85 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent/25 bg-accent/10 text-accent">
          <Sparkles size={13} />
        </span>
        <p className="min-w-0 flex-1 text-[9px] leading-4 text-white/60">
          <span className="text-accent">AI 摘要：</span>
          需求曲线与边际效用已整理为复习索引
        </p>
        <ChevronRight size={12} className="shrink-0 text-accent/45" />
      </div>

      <button
        type="button"
        onClick={() =>
          notify('上传资料', '支持图片、文档或直接语音速记')
        }
        aria-label="上传资料"
        className="absolute bottom-[92px] left-1/2 z-30 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full bg-accent text-black shadow-glow active:scale-95"
      >
        <Plus size={24} strokeWidth={2} />
      </button>
    </div>
  )
}

function SeatPage({ notify }) {
  const [filters, setFilters] = useState(['安静区'])

  const toggleFilter = (filter) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter],
    )
  }

  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-start justify-between px-5 pb-2 pt-1">
        <div>
          <h1 className="mt-1 text-[20px] font-semibold tracking-tight text-white">
            图书馆 3楼
          </h1>
        </div>
        <button
          type="button"
          aria-label="更多"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
        >
          <MoreHorizontal size={15} strokeWidth={1.5} />
        </button>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-44">
        <section className={`relative animate-rise-in overflow-hidden rounded-[26px] ${CARD} p-3`}>
          <div className="relative h-[230px] w-full">
            <svg viewBox="0 0 320 220" className="h-full w-full">
              <g
                fill="none"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              >
                <rect x="8" y="8" width="304" height="204" rx="16" />
                <path d="M8 58 H312" />
                <path d="M8 162 H312" />
                <path d="M104 58 V162" />
                <path d="M216 58 V162" />
                <rect x="126" y="76" width="68" height="58" rx="6" />
                <rect x="228" y="76" width="52" height="58" rx="6" />
                <path d="M20 40 H92" />
                <path d="M228 40 H298" />
              </g>

              <g fill="rgba(255,255,255,0.24)">
                {SEAT_DOTS.map((dot, index) => (
                  <circle
                    key={index}
                    cx={dot.x}
                    cy={dot.y}
                    r="2.2"
                  />
                ))}
              </g>

              <text x="20" y="52" fill="rgba(255,255,255,0.28)" fontSize="7">
                靠窗区
              </text>
              <text x="126" y="72" fill="rgba(255,255,255,0.28)" fontSize="7">
                安静自习区
              </text>
              <text x="228" y="72" fill="rgba(255,255,255,0.28)" fontSize="7">
                讨论区
              </text>

              <circle
                cx="190"
                cy="96"
                r="18"
                fill="rgba(255,122,0,0.14)"
                className="animate-breathe"
              />
              <circle
                cx="190"
                cy="96"
                r="10"
                fill="rgba(255,122,0,0.20)"
                className="animate-pulse-ring"
                style={{ transformOrigin: '190px 96px' }}
              />
              <circle
                cx="190"
                cy="96"
                r="5"
                fill="#FF7A00"
                style={{ filter: 'drop-shadow(0 0 8px rgba(255,122,0,0.9))' }}
              />
            </svg>

            <span className="absolute left-[54%] top-[34%] -translate-x-1/2 rounded-full border border-accent/30 bg-accent/15 px-2 py-1 text-[8px] text-accent backdrop-blur-md">
              推荐座位
            </span>
          </div>
        </section>

        <div className="mt-3 flex gap-2">
          {['靠窗', '有插座', '安静区'].map((filter) => {
            const active = filters.includes(filter)
            return (
              <button
                key={filter}
                type="button"
                onClick={() => toggleFilter(filter)}
                className={`rounded-full border px-3.5 py-2 text-[10px] ${
                  active
                    ? 'border-accent/45 bg-accent/12 text-accent'
                    : 'border-white/10 bg-white/[0.04] text-white/40'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <section className={`mt-3 rounded-[24px] ${CARD} p-4`}>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[8px] uppercase tracking-[0.22em] text-accent/70">
                Seat
              </p>
              <p className="mt-1 text-[26px] font-semibold leading-none tracking-tight text-white">
                3-A12
                <span className="ml-1.5 text-[10px] font-normal text-white/35">
                  座位
                </span>
              </p>
              <p className="mt-1.5 text-[9px] text-white/35">
                图书馆 3 楼 · 靠窗安静区
              </p>
            </div>
            <AgentRing size="lg" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-3">
            {[
              { icon: Sun, label: '靠窗' },
              { icon: Plug, label: '插座' },
              { icon: Wifi, label: 'WiFi' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-1 rounded-xl border border-white/[0.06] bg-black/20 py-2"
                >
                  <Icon size={13} className="text-accent" />
                  <span className="text-[8px] text-white/45">{item.label}</span>
                </div>
              )
            })}
          </div>
        </section>
      </main>

      <button
        type="button"
        onClick={() =>
          notify('预约成功', '3-A12 · 图书馆 3楼 · 13:46–14:30')
        }
        className="absolute inset-x-5 bottom-[92px] z-30 h-[52px] rounded-full bg-accent text-[12px] font-semibold text-black shadow-glow active:scale-[0.985]"
      >
        确认订座
      </button>
    </div>
  )
}

function ProfilePage({ notify }) {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <StatusBar time="9:41" />

      <header className="relative z-10 flex shrink-0 items-center justify-between px-5 pb-2 pt-1">
        <h1 className="text-[20px] font-semibold tracking-tight text-white">
          我的
        </h1>
        <button
          type="button"
          aria-label="设置"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/45"
        >
          <SlidersHorizontal size={15} strokeWidth={1.5} />
        </button>
      </header>

      <main className="screen-scroll relative z-10 min-h-0 flex-1 overflow-y-auto px-5 pb-28">
        <section className={`animate-rise-in rounded-[26px] ${CARD} p-5`}>
          <div className="flex items-center gap-4">
            <AgentRing size="lg" />
            <div className="min-w-0 flex-1">
              <p className="text-[16px] font-semibold text-white">林同学</p>
              <p className="mt-1 flex items-center gap-1 text-[9px] text-white/35">
                <GraduationCap size={12} />
                计算机学院 · 大三
              </p>
            </div>
            <span className="rounded-full border border-accent/25 bg-accent/10 px-2 py-1 text-[8px] text-accent">
              学伴 Lv.6
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 border-t border-white/[0.07] pt-4">
            {[
              { value: '12h', label: '本周时长' },
              { value: '85%', label: '完成率' },
              { value: '7天', label: '连续学习' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-[18px] font-semibold text-white tabular">
                  {item.value}
                </p>
                <p className="mt-0.5 text-[8px] text-white/30">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`mt-3 overflow-hidden rounded-[24px] ${CARD}`}>
          {PROFILE_ITEMS.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => notify('原型演示', `${item.label} 页面未接入`)}
                className={`flex w-full items-center gap-3 px-4 py-3.5 text-left ${
                  index !== 0 ? 'border-t border-white/[0.06]' : ''
                }`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/55">
                  <Icon size={14} strokeWidth={1.5} />
                </span>
                <span className="flex-1 text-[11px] text-white/70">
                  {item.label}
                </span>
                <ChevronRight size={13} className="text-white/20" />
              </button>
            )
          })}
        </section>

        <div className="mt-3 flex items-center justify-between px-1 text-[8.5px] text-white/25">
          <span className="flex items-center gap-1">
            <Sparkles size={11} className="text-accent/60" />
            知行学伴 · 暗黑原型
          </span>
          <span>v0.2</span>
        </div>
      </main>
    </div>
  )
}

const PAGE_IDS = [
  'home',
  'hub',
  'checklist',
  'gap',
  'seat',
  'analytics',
  'library',
  'profile',
]

function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return PAGE_IDS.includes(hash) ? hash : 'home'
  })
  const [toast, setToast] = useState(null)
  const timerRef = useRef(null)

  const notify = useCallback((title, detail) => {
    if (timerRef.current) window.clearTimeout(timerRef.current)
    setToast({ id: Date.now(), title, detail })
    timerRef.current = window.setTimeout(() => setToast(null), 3200)
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [])

  const navActive = ['hub', 'checklist', 'gap', 'library'].includes(page)
    ? 'home'
    : page

  let content = null

  if (page === 'home') {
    content = <HomePage onNavigate={setPage} />
  } else if (page === 'hub') {
    content = <HubPage notify={notify} />
  } else if (page === 'checklist') {
    content = <ChecklistPage />
  } else if (page === 'gap') {
    content = <GapPage onNavigate={setPage} notify={notify} />
  } else if (page === 'seat') {
    content = <SeatPage notify={notify} />
  } else if (page === 'analytics') {
    content = <AnalyticsPage />
  } else if (page === 'library') {
    content = <LibraryPage notify={notify} />
  } else {
    content = <ProfilePage notify={notify} />
  }

  return (
    <PhoneShell>
      {content}
      <BottomNav active={navActive} onChange={setPage} />
      <Toast message={toast} onClose={() => setToast(null)} />
    </PhoneShell>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)