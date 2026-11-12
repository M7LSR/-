export default function PhoneShell({ children }) {
  return (
    <div className="relative flex min-h-screen w-full items-start justify-center overflow-x-hidden overflow-y-auto bg-ink-900 sm:items-center sm:px-6 sm:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden sm:block"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 62% 52% at 50% 36%, rgba(255,92,0,0.10), transparent 65%), linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 64px 64px, 64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 18%, transparent 76%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 18%, transparent 76%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[390px]">
        <div className="relative mx-auto flex h-screen w-full flex-col overflow-hidden bg-ink-900 sm:h-[844px] sm:max-h-[calc(100vh_-_4rem)] sm:rounded-[46px] sm:border sm:border-white/10 sm:shadow-shell">
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