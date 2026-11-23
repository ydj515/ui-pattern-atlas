import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 인플레이트 3D. */
export function Inflated3DDemo() {
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
              name="inflated-three-d-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-sky-100">
        {mode === "styled" ? (
          <p className="text-5xl font-black tracking-tight text-pink-400 [-webkit-text-stroke:0.03em_white] [text-shadow:0_0.04em_0_#f472b6,0_0.08em_0_#db2777,0_0.14em_0.12em_rgba(0,0,0,0.25)]">
            주말 마켓
          </p>
        ) : (
          <p className="text-5xl text-slate-900">주말 마켓</p>
        )}
        <p className="text-xs text-sky-700">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
