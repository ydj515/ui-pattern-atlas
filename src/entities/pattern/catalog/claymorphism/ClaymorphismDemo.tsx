import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 클레이모피즘. */
export function ClaymorphismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="클레이모피즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-violet-100"
    >
      <div className="w-full rounded-[32px] bg-violet-300 p-5 shadow-[inset_-8px_-8px_16px_rgba(0,0,0,0.12),inset_8px_8px_16px_rgba(255,255,255,0.55),12px_16px_24px_rgba(91,33,182,0.25)]">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-[22px] bg-amber-300 text-amber-800 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.12),inset_4px_4px_8px_rgba(255,255,255,0.6),4px_6px_10px_rgba(0,0,0,0.12)]">
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
            <h3 className="text-lg font-bold text-violet-950">오늘의 플레이리스트</h3>
            <p className="text-sm text-violet-800">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-full bg-pink-400 px-4 py-2 text-sm font-bold text-white shadow-[inset_-3px_-3px_6px_rgba(0,0,0,0.15),inset_3px_3px_6px_rgba(255,255,255,0.5),3px_5px_8px_rgba(190,24,93,0.3)] aria-pressed:bg-pink-500 aria-pressed:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.2)]"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-violet-900">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full bg-violet-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.12)] peer-checked:bg-pink-300 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-white shadow-[inset_-2px_-2px_3px_rgba(0,0,0,0.1),1px_2px_3px_rgba(0,0,0,0.15)]" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
