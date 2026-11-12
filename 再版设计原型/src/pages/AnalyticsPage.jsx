import {
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
} from 'recharts'
import { LayoutGrid, Sparkles } from 'lucide-react'
import StatusBar from '../components/StatusBar'
import { ANALYTICS_STATS, RADAR_DATA, WEEKLY_DATA } from '../data/analytics'

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

export default function AnalyticsPage({ onOpenPages }) {
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
              <p className="mt-1.5 text-[8.5px] text-accent/75">{stat.note}</p>
            </div>
          ))}
        </section>

        <section
          className="relative mt-3 animate-rise-in overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
          style={{ animationDelay: '150ms' }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-[13px] font-medium text-white">多维画像</h2>
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
                  tick={{ fill: 'rgba(255,255,255,0.42)', fontSize: 9 }}
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
            <h2 className="text-[13px] font-medium text-white">学习趋势</h2>
            <span className="text-[9px] text-white/30">本周 12h</span>
          </div>

          <div className="chart-glow mt-3 h-[170px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={WEEKLY_DATA}
                margin={{ top: 6, right: 4, left: -24, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="studyArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FF5C00" stopOpacity={0.38} />
                    <stop offset="100%" stopColor="#FF5C00" stopOpacity={0} />
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
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 8 }}
                  dy={4}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 8 }}
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