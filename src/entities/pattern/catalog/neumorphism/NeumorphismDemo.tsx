import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 뉴모피즘. */
export function NeumorphismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="뉴모피즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-slate-200"
    >
      <div className="w-full rounded-3xl bg-slate-200 p-5 shadow-[8px_8px_16px_#b6bcc6,-8px_-8px_16px_#ffffff]">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-2xl bg-slate-200 text-slate-500 shadow-[inset_5px_5px_10px_#b6bcc6,inset_-5px_-5px_10px_#ffffff]">
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
            <h3 className="text-lg font-bold text-slate-700">오늘의 플레이리스트</h3>
            <p className="text-sm text-slate-500">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-2xl bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 shadow-[5px_5px_10px_#b6bcc6,-5px_-5px_10px_#ffffff] aria-pressed:shadow-[inset_4px_4px_8px_#b6bcc6,inset_-4px_-4px_8px_#ffffff]"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full bg-slate-200 shadow-[inset_3px_3px_6px_#b6bcc6,inset_-3px_-3px_6px_#ffffff] peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-slate-200 shadow-[2px_2px_4px_#b6bcc6,-2px_-2px_4px_#ffffff] peer-checked:bg-sky-400" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
