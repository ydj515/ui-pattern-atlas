import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 머티리얼. */
export function MaterialDesignDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="머티리얼 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-slate-100"
    >
      <div className="w-full rounded-md bg-white p-5 shadow-[0_2px_4px_rgba(0,0,0,0.14),0_4px_10px_rgba(0,0,0,0.1)]">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-full bg-indigo-500 text-white shadow-[0_4px_8px_rgba(79,70,229,0.4)]">
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
            <h3 className="text-lg font-bold text-slate-900">오늘의 플레이리스트</h3>
            <p className="text-sm text-slate-600">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase bg-indigo-600 shadow-[0_2px_4px_rgba(0,0,0,0.25)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.25)] aria-pressed:bg-indigo-800 aria-pressed:shadow-[0_6px_12px_rgba(0,0,0,0.3)]"
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
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 h-3.5 rounded-full bg-slate-300 peer-checked:bg-indigo-300 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none -top-0.75 size-5 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.4)] peer-checked:bg-indigo-600" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
