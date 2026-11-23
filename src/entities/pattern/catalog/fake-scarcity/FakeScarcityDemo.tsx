import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function FakeScarcityDemo() {
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
              name="fake-scarcity-mode"
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
            <p className="text-sm">린넨 셔츠</p>
            <p className="mt-1 text-sm font-bold text-rose-600">남은 수량 1개!</p>
            <p className="text-xs text-rose-500">지금 37명이 보고 있어요</p>
          </>
        ) : (
          <>
            <p className="text-sm">린넨 셔츠</p>
            <p className="mt-1 text-sm text-slate-700">재고 12개</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a" ? "재고와 상관없이 늘 1개 남았다고 보여요" : "실제 재고만 압박 없이 알려요"}
      </p>
    </section>
  );
}
