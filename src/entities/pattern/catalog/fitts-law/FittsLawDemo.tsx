import { useState } from "react";

const MODES = [
  ["a", "작고 먼 버튼"],
  ["b", "크고 가까운 버튼"],
] as const;

export function FittsLawDemo() {
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
              name="fitts-law-mode"
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
            <div className="relative h-40">
              <a href="#pay" className="absolute top-0 right-0 text-[11px] text-blue-700 underline">
                결제하기
              </a>
              <p className="pt-8 text-sm">린넨 셔츠 39,000원</p>
            </div>
          </>
        ) : (
          <>
            <div className="relative h-40">
              <p className="text-sm">린넨 셔츠 39,000원</p>
              <button
                type="button"
                className="absolute inset-x-0 bottom-0 h-12 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
              >
                결제하기
              </button>
            </div>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "작고 먼 버튼은 누르는 데 오래 걸려요"
          : "크고 엄지 가까이 있는 버튼은 빨리 눌러요"}
      </p>
    </section>
  );
}
