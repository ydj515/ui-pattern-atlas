import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 리퀴드 글래스. */
export function LiquidGlassDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="리퀴드 글래스 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 relative overflow-hidden bg-[conic-gradient(at_30%_40%,#f97316,#ec4899,#8b5cf6,#06b6d4,#84cc16,#f97316)]"
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-1/3 h-10 bg-white/60 blur-xl" />
      <div className="w-full relative overflow-hidden rounded-[28px] border border-white/60 bg-white/10 p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),inset_0_-1px_1px_rgba(255,255,255,0.35),0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-[6px] backdrop-saturate-[1.8]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/50 via-transparent to-white/10"
        />
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-[22px] border border-white/70 bg-white/25 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)] backdrop-blur">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-8">
              <path
                d="M9 18V6l10-2v12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="7" cy="18" r="2.5" fill="currentColor" />
              <circle cx="17" cy="16" r="2.5" fill="currentColor" />
            </svg>
          </span>
          <div>
            <h3 className="text-lg font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
              오늘의 플레이리스트
            </h3>
            <p className="text-sm text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
              잔잔한 아침 음악 · 12곡
            </p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-full border border-white/70 bg-white/25 px-4 py-2 text-sm font-semibold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] backdrop-blur [text-shadow:0_1px_2px_rgba(0,0,0,0.3)] aria-pressed:bg-white/45"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full border border-white/70 bg-white/20 peer-checked:bg-white/55 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-white shadow" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
