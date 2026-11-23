import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function SneakIntoBasketDemo() {
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
              name="sneak-into-basket-mode"
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
            <p className="text-sm">린넨 셔츠 39,000원</p>
            <p className="text-sm">
              배송 보험 3,000원 <span className="text-xs text-slate-400">(자동 추가)</span>
            </p>
            <p className="mt-2 border-t border-slate-100 pt-2 font-bold">합계 42,000원</p>
          </>
        ) : (
          <>
            <p className="text-sm">린넨 셔츠 39,000원</p>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> 배송 보험 3,000원 추가
            </label>
            <p className="mt-2 border-t border-slate-100 pt-2 font-bold">합계 39,000원</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "고르지 않은 배송 보험이 자동으로 담겼어요"
          : "추가 상품은 직접 고를 때만 담아요"}
      </p>
    </section>
  );
}
