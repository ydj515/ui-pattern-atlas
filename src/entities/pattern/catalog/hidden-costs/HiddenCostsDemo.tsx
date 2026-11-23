import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function HiddenCostsDemo() {
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
              name="hidden-costs-mode"
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
            <p className="text-sm text-slate-600">상품 페이지</p>
            <p className="text-xl font-bold">39,000원</p>
            <p className="mt-3 text-sm text-slate-600">결제 단계</p>
            <p className="text-xl font-bold">45,900원</p>
            <p className="text-xs text-rose-600">수수료·배송비 추가</p>
          </>
        ) : (
          <>
            <p className="text-sm text-slate-600">상품 페이지</p>
            <p className="text-xl font-bold">45,900원</p>
            <p className="text-xs text-slate-600">배송비·수수료 포함</p>
            <p className="mt-3 text-sm text-slate-600">결제 단계</p>
            <p className="text-xl font-bold">45,900원</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "마지막 결제 단계에서 처음 붙는 비용이에요"
          : "처음부터 모든 비용이 든 가격을 보여 줘요"}
      </p>
    </section>
  );
}
