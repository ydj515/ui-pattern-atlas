import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 코믹 팝아트. */
export function ComicPopArtDemo() {
  const [mode, setMode] = useState<"styled" | "plain">("styled");
  return (
    <section className="grid w-80 gap-3">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-xs">
        <legend className="sr-only">비교</legend>
        {MODES.map(([value, label]) => (
          <label
            key={value}
            className="flex-1 cursor-pointer rounded-md py-1.5 text-center has-checked:bg-white has-checked:font-semibold has-checked:shadow-sm has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name="comic-pop-art-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-yellow-300 bg-[radial-gradient(circle,rgba(239,68,68,0.35)_1.5px,transparent_1.6px)] bg-[length:8px_8px]">
        {mode === "styled" ? (
          <p className="text-5xl -rotate-3 font-black text-white italic [-webkit-text-stroke:0.04em_#000] [text-shadow:0.07em_0.07em_0_#ef4444]">
            주말 마켓
          </p>
        ) : (
          <p className="text-5xl text-black">주말 마켓</p>
        )}
        <p className="text-xs text-black">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
