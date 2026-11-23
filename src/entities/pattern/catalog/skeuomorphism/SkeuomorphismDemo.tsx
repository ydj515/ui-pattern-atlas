import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 스큐어모피즘. */
export function SkeuomorphismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="스큐어모피즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-gradient-to-b from-stone-400 to-stone-600"
    >
      <div className="w-full rounded-xl border border-stone-500 bg-gradient-to-b from-stone-50 to-stone-300 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_8px_16px_rgba(0,0,0,0.4)]">
        <div className="relative flex items-center gap-4">
          <span className="relative grid size-16 place-items-center rounded-full bg-[repeating-radial-gradient(circle,#1c1917_0_2px,#292524_2px_4px)] shadow-[0_3px_6px_rgba(0,0,0,0.5)]">
            <span className="size-5 rounded-full bg-gradient-to-br from-rose-400 to-rose-700" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-stone-800 [text-shadow:0_1px_0_rgba(255,255,255,0.8)]">
              오늘의 플레이리스트
            </h3>
            <p className="text-sm text-stone-600">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="rounded-full border border-emerald-900 bg-gradient-to-b from-emerald-400 to-emerald-700 px-4 py-2 text-sm font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_2px_3px_rgba(0,0,0,0.4)] [text-shadow:0_-1px_0_rgba(0,0,0,0.4)] aria-pressed:from-emerald-700 aria-pressed:to-emerald-500 aria-pressed:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-stone-700">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 rounded-full border border-stone-500 bg-gradient-to-b from-stone-400 to-stone-200 shadow-[inset_0_2px_3px_rgba(0,0,0,0.35)] peer-checked:from-emerald-600 peer-checked:to-emerald-400 peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none rounded-full bg-gradient-to-b from-white to-stone-300 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
