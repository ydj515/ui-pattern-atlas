import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 바우하우스. */
export function BauhausDemo() {
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
              name="bauhaus-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-amber-50">
        {mode === "styled" ? (
          <p className="text-5xl relative font-black text-slate-900">
            <span
              aria-hidden="true"
              className="absolute -top-[0.2em] -left-[0.3em] size-[0.9em] rounded-full bg-red-500"
            />
            <span
              aria-hidden="true"
              className="absolute -right-[0.2em] -bottom-[0.15em] size-[0.6em] bg-blue-600"
            />
            <span
              aria-hidden="true"
              className="absolute top-[0.1em] right-[1.6em] size-0 border-x-[0.3em] border-b-[0.5em] border-x-transparent border-b-yellow-400"
            />
            <span className="relative">주말 마켓</span>
          </p>
        ) : (
          <p className="text-5xl text-slate-900">주말 마켓</p>
        )}
        <p className="text-xs text-slate-700">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
