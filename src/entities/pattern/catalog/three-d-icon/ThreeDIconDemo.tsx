import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 3D 아이콘. */
export function ThreeDIconDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="3D 아이콘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-gradient-to-b from-orange-50 to-rose-100"
    >
      <div className="w-full rounded-2xl bg-white p-5 shadow-sm">
        <div className="relative flex items-center gap-4">
          <span className="relative grid size-16 place-items-center rounded-[28%] bg-gradient-to-br from-orange-300 via-orange-500 to-rose-600 text-white shadow-[inset_-6px_-8px_12px_rgba(0,0,0,0.25),inset_6px_6px_10px_rgba(255,255,255,0.5),0_12px_20px_rgba(225,29,72,0.35)]">
            <span className="absolute top-1.5 left-2.5 h-3 w-7 rounded-full bg-white/50 blur-[2px]" />
            <span className="relative drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
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
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-900">오늘의 플레이리스트</h3>
            <p className="text-sm text-slate-500">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-bold text-white aria-pressed:bg-rose-700"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full bg-slate-300 peer-checked:bg-rose-500 peer-checked:[&>span]:translate-x-5"
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
