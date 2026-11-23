import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 글래스모피즘. */
export function GlassmorphismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="글래스모피즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 relative overflow-hidden bg-gradient-to-br from-fuchsia-500 via-violet-500 to-sky-400"
    >
      <span
        aria-hidden="true"
        className="absolute -top-6 -left-6 size-32 rounded-full bg-amber-300"
      />
      <span
        aria-hidden="true"
        className="absolute -right-8 -bottom-10 size-40 rounded-full bg-cyan-300"
      />
      <div className="w-full relative rounded-2xl border border-white/50 bg-white/20 p-5 shadow-xl backdrop-blur-md">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-2xl border border-white/60 bg-white/30 text-white">
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
            <h3 className="text-lg font-bold text-white">오늘의 플레이리스트</h3>
            <p className="text-sm text-white/85">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-xl border border-white/60 bg-white/25 px-4 py-2 text-sm font-semibold text-white backdrop-blur aria-pressed:bg-white/45"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-white">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full border border-white/60 bg-white/20 peer-checked:bg-white/50 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-white" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
