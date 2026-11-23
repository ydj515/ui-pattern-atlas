import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 블랙레터. */
export function BlackletterDemo() {
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
              name="blackletter-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-stone-100">
        {mode === "styled" ? (
          <p className="text-5xl font-serif text-stone-900">
            <span aria-label="Weekend Market" role="img">
              𝔚𝔢𝔢𝔨𝔢𝔫𝔡 𝔐𝔞𝔯𝔨𝔢𝔱
            </span>
            <span className="mt-[0.1em] block text-[0.35em] tracking-widest">주말 마켓</span>
          </p>
        ) : (
          <p className="text-5xl text-stone-900">주말 마켓</p>
        )}
        <p className="text-xs text-stone-600">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
