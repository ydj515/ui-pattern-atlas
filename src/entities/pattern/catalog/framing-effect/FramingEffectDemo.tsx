import { useState } from "react";

const MODES = [
  ["a", "지방 20%"],
  ["b", "무지방 80%"],
] as const;

export function FramingEffectDemo() {
  const [mode, setMode] = useState<"a" | "b">("a");
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
              name="framing-effect-mode"
              className="sr-only"
              checked={mode === value}
              onChange={() => setMode(value)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <div className="min-h-44 rounded-3xl border border-slate-200 bg-white p-4">
        {mode === "a" ? (
          <>
            <p className="text-sm font-bold">플레인 요거트</p>
            <p className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
              지방 20%
            </p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold">플레인 요거트</p>
            <p className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
              무지방 80%
            </p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "지방 20%라고 하면 지방이 많아 보여요"
          : "같은 요거트도 무지방 80%라고 하면 더 건강해 보여요"}
      </p>
    </section>
  );
}
