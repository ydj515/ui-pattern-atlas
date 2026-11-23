import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 스위스 스타일. */
export function SwissStyleDemo() {
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
              name="swiss-style-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-white">
        {mode === "styled" ? (
          <p className="text-5xl grid grid-cols-[0.15em_1fr] gap-x-[0.2em] font-sans font-bold tracking-tight text-slate-900">
            <span aria-hidden="true" className="row-span-2 bg-red-600" />
            <span>주말</span>
            <span>마켓</span>
          </p>
        ) : (
          <p className="text-5xl text-slate-900">주말 마켓</p>
        )}
        <p className="text-xs text-slate-600">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
