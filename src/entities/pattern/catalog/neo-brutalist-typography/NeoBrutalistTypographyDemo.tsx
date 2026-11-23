import { useState } from "react";

const MODES = [
  ["styled", "이 스타일"],
  ["plain", "기본 글자"],
] as const;

/** The same phrase as every typography style entry, set as 네오 브루털리즘 타이포그래피. */
export function NeoBrutalistTypographyDemo() {
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
              name="neo-brutalist-typography-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="grid h-48 place-content-center justify-items-center gap-3 overflow-hidden rounded-3xl px-4 text-center bg-yellow-200">
        {mode === "styled" ? (
          <p className="text-5xl flex gap-[0.15em] font-black text-black">
            <span className="-rotate-2 rounded-[0.1em] border-[0.06em] border-black bg-white px-[0.15em] shadow-[0.08em_0.08em_0_#000]">
              주말
            </span>
            <span className="rotate-2 rounded-[0.1em] border-[0.06em] border-black bg-pink-400 px-[0.15em] shadow-[0.08em_0.08em_0_#000]">
              마켓
            </span>
          </p>
        ) : (
          <p className="text-5xl text-black">주말 마켓</p>
        )}
        <p className="text-xs text-black">11월 29일 서울숲</p>
      </div>
    </section>
  );
}
