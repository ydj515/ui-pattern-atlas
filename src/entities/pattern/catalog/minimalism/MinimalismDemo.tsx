import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 미니멀리즘. */
export function MinimalismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="미니멀리즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-white"
    >
      <div className="w-full p-6">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-full border border-slate-300 text-slate-400">
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
            <h3 className="text-lg font-bold font-light tracking-tight text-slate-900">
              오늘의 플레이리스트
            </h3>
            <p className="text-sm text-xs tracking-[0.2em] text-slate-400 uppercase">
              잔잔한 아침 음악 · 12곡
            </p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="border-b border-slate-900 pb-0.5 text-sm text-slate-900 aria-pressed:border-slate-400 aria-pressed:text-slate-500"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-xs text-slate-500">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full border border-slate-300 bg-white peer-checked:border-slate-900 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-slate-300 peer-checked:bg-slate-900" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
