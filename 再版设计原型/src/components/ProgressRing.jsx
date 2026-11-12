export default function ProgressRing({ done, total }) {
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
              transition: 'stroke-dashoffset 450ms cubic-bezier(.2,.8,.2,1)',
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