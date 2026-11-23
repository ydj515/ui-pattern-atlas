import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 엠보싱. */
export function EmbossDemo() {
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
              name="emboss-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-stone-300">
        {mode === "styled" ? (
          <p className="text-5xl font-black text-stone-300 [text-shadow:-0.02em_-0.02em_0_rgba(255,255,255,0.85),0.025em_0.025em_0.02em_rgba(0,0,0,0.35)]">
            주말 마켓
          </p>
        ) : (
          <p className="text-5xl text-stone-800">주말 마켓</p>
        )}
        <p className="text-xs text-stone-600">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
