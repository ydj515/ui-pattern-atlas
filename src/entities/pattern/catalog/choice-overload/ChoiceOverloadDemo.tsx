import { useState } from "react";

const MODES = [
  ["a", "잼 24가지"],
  ["b", "6가지와 추천"],
] as const;

export function ChoiceOverloadDemo() {
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
              name="choice-overload-mode"
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
            <p className="mb-2 text-sm font-bold">잼 고르기</p>
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }, (_, index) => (
                <span
                  key={index}
                  className="size-8 rounded-full"
                  style={{ background: `hsl(${index * 15} 70% 70%)` }}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="mb-2 text-sm font-bold">잼 고르기</p>
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 6 }, (_, index) => (
                <span
                  key={index}
                  className="size-8 rounded-full"
                  style={{ background: `hsl(${index * 60} 70% 70%)` }}
                />
              ))}
            </div>
            <p className="mt-2 text-xs text-slate-600">처음이라면 딸기잼을 추천해요</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "종류가 너무 많아 비교하다 그냥 지나쳐요"
          : "고를 수를 줄이고 처음 고를 것을 추천하면 결정하기 쉬워요"}
      </p>
    </section>
  );
}
