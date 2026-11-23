import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 콜라주. */
export function CutoutCollageDemo() {
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
              name="cutout-collage-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-stone-200">
        {mode === "styled" ? (
          <p aria-label="주말 마켓" className="text-5xl flex gap-[0.05em] font-black">
            {Array.from("주말 마켓").map((char, index) => (
              <span
                key={index}
                aria-hidden="true"
                className={`inline-block whitespace-pre px-[0.06em] ${char === " " ? "" : ["bg-rose-300 font-serif", "bg-white font-mono", "bg-sky-300", "bg-black text-white font-serif", "bg-amber-300"][index % 5]}`}
                style={{ transform: `rotate(${((index * 37) % 11) - 5}deg)` }}
              >
                {char}
              </span>
            ))}
          </p>
        ) : (
          <p className="text-5xl text-slate-900">주말 마켓</p>
        )}
        <p className="text-xs text-stone-600">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
