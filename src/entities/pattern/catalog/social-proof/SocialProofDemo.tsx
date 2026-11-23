import { useState } from "react";

const MODES = [
  ["a", "정보만"],
  ["b", "다른 사람의 선택"],
] as const;

export function SocialProofDemo() {
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
              name="social-proof-mode"
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
            <p className="text-sm font-bold">린넨 셔츠</p>
            <p className="text-sm">39,000원</p>
          </>
        ) : (
          <>
            <p className="text-sm font-bold">린넨 셔츠</p>
            <p className="text-sm">39,000원</p>
            <p className="mt-2 text-xs text-slate-600">이번 주 1,240명이 샀어요 · 리뷰 312개</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "상품 정보만으로 판단해야 해요"
          : "다른 사람의 실제 선택이 판단을 돕지만, 숫자는 사실이어야 해요"}
      </p>
    </section>
  );
}
