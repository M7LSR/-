import { useCallback, useEffect, useRef, useState } from 'react'
import {
  ChevronRight,
  FileText,
  Image as ImageIcon,
  LayoutGrid,
  Mic,
  Plus,
  Presentation,
  Search,
  Sparkles,
} from 'lucide-react'
import StatusBar from '../components/StatusBar'
import Toast from '../components/Toast'
import { LIBRARY_FILES, LIBRARY_FILTERS } from '../data/library'

const LIBRARY_ICONS = {
  ppt: Presentation,
  audio: Mic,
  pdf: FileText,
  image: ImageIcon,
}

export default function LibraryPage({ onOpenPages }) {
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
                  <FileIcon size={18} strokeWidth={1.5} aria-hidden="true" />
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