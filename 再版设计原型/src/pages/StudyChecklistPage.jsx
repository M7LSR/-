import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CalendarDays,
  Check,
  Clock3,
  LayoutGrid,
  ListChecks,
  Plus,
} from 'lucide-react'
import ProgressRing from '../components/ProgressRing'
import StatusBar from '../components/StatusBar'
import Toast from '../components/Toast'
import { INITIAL_TASKS } from '../data/tasks'

export default function StudyChecklistPage({ onOpenPages }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
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
                <ListChecks size={11} strokeWidth={1.5} aria-hidden="true" />
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
                    <Check size={13} strokeWidth={2.4} aria-hidden="true" />
                  </span>
                ) : (
                  <span className="h-[22px] w-[22px] rounded-full border border-white/30 transition-colors group-hover:border-accent/70" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-[14px] leading-5 transition-colors ${
                    task.done ? 'text-white/30 line-through' : 'text-white/90'
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