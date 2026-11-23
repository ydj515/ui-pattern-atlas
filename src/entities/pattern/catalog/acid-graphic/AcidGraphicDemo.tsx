import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 애시드 그래픽. */
export function AcidGraphicDemo() {
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
              name="acid-graphic-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-black">
        {mode === "styled" ? (
          <p className="text-5xl inline-block origin-center -skew-x-12 scale-y-150 font-black tracking-tighter text-lime-300 [text-shadow:0_0_0.15em_#bef264,0.06em_0_0_#e879f9]">
            주말 마켓
          </p>
        ) : (
          <p className="text-5xl text-white">주말 마켓</p>
        )}
        <p className="text-xs text-lime-200/80">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
