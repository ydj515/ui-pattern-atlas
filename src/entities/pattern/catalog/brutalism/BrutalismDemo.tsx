import { useState } from "react";

/** The same playlist card as every design style entry, drawn as 브루털리즘. */
export function BrutalismDemo() {
  const [playing, setPlaying] = useState(false);
  const [repeat, setRepeat] = useState(true);
  return (
    <section
      aria-label="브루털리즘 스타일"
      className="grid h-72 w-80 place-items-center rounded-3xl p-6 bg-white"
    >
      <div className="w-full border border-black bg-white p-3 font-mono">
        <div className="relative flex items-center gap-4">
          <span className="grid size-16 place-items-center border border-black bg-white font-mono text-3xl text-black">
            ♪
          </span>
          <div>
            <h3 className="text-lg font-bold font-serif text-2xl font-normal text-black underline">
              오늘의 플레이리스트
            </h3>
            <p className="text-sm text-black">잔잔한 아침 음악 · 12곡</p>
          </div>
        </div>
        <div className="relative mt-5 flex items-center justify-between gap-3">
          <button
            type="button"
            aria-pressed={playing}
            onClick={() => setPlaying((value) => !value)}
            className="border-2 border-black bg-yellow-300 px-3 py-1 font-mono text-sm text-black aria-pressed:bg-black aria-pressed:text-yellow-300"
          >
            {playing ? "일시정지" : "재생"}
          </button>
          <label className="flex cursor-pointer items-center gap-2 text-sm font-mono text-black">
            <input
              type="checkbox"
              role="switch"
              checked={repeat}
              onChange={(event) => setRepeat(event.currentTarget.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="relative inline-block h-6 w-11 transition-colors motion-reduce:transition-none peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600 border-2 border-black bg-white peer-checked:bg-black peer-checked:[&>span]:translate-x-5"
            >
              <span className="absolute top-1 left-1 block size-4 transition-transform motion-reduce:transition-none border-2 border-black bg-yellow-300" />
            </span>
            반복
          </label>
        </div>
      </div>
    </section>
  );
}
