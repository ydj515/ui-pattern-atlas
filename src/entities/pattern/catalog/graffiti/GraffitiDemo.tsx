import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 그래피티. */
export function GraffitiDemo() {
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
              name="graffiti-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-[repeating-linear-gradient(0deg,#b45309_0_18px,#92400e_18px_20px)]">
        {mode === "styled" ? (
          <p className="text-5xl -rotate-6 -skew-x-12 bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text font-black text-transparent italic [-webkit-text-stroke:0.04em_#000] [filter:drop-shadow(0.05em_0.05em_0_#000)]">
            주말 마켓
          </p>
        ) : (
          <p className="text-5xl text-white">주말 마켓</p>
        )}
        <p className="text-xs text-amber-100">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
