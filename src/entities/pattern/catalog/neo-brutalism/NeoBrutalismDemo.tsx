import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 네오 브루털리즘. */
export function NeoBrutalismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="네오 브루털리즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-amber-200"
    >
      <div className="w-full rounded-lg border-[3px] border-black bg-white p-5 shadow-[6px_6px_0_#000]">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center rounded-md border-[3px] border-black bg-lime-300 text-black">
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
            <h3 className="text-lg font-bold font-black text-black">오늘의 플레이리스트</h3>
            <p className="text-sm font-semibold text-black">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-md border-[3px] border-black bg-pink-400 px-4 py-2 text-sm font-black text-black shadow-[4px_4px_0_#000] transition-transform motion-reduce:transition-none aria-pressed:translate-x-1 aria-pressed:translate-y-1 aria-pressed:shadow-none"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-black">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full border-[3px] border-black bg-white peer-checked:bg-lime-300 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full border-2 border-black bg-black" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
