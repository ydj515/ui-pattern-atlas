import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 글리치. */
export function GlitchDemo() {
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
              name="glitch-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-slate-950">
        {mode === "styled" ? (
          <p className="text-5xl relative font-black text-white">
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-[0.04em] text-cyan-400 mix-blend-screen [clip-path:inset(10%_0_55%_0)]"
            >
              주말 마켓
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-[0.04em] text-rose-500 mix-blend-screen [clip-path:inset(55%_0_15%_0)]"
            >
              주말 마켓
            </span>
            <span className="relative">주말 마켓</span>
          </p>
        ) : (
          <p className="text-5xl text-white">주말 마켓</p>
        )}
        <p className="text-xs text-slate-400">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
