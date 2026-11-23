import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 키네틱. */
export function KineticTypographyDemo() {
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
              name="kinetic-typography-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-indigo-950">
        {mode === "styled" ? (
          <>
            <style>
              {
                "@keyframes kinetic-hop { 0%, 60%, 100% { transform: translateY(0) } 30% { transform: translateY(-0.25em) } }"
              }
            </style>
            <p aria-label="주말 마켓" className="text-5xl flex font-black text-white">
              {Array.from("주말 마켓").map((char, index) => (
                <span
                  key={index}
                  aria-hidden="true"
                  className="motion-safe:animate-[kinetic-hop_1.2s_ease-in-out_infinite] inline-block whitespace-pre"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {char}
                </span>
              ))}
            </p>
          </>
        ) : (
          <p className="text-5xl text-white">주말 마켓</p>
        )}
        <p className="text-xs text-indigo-200">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
