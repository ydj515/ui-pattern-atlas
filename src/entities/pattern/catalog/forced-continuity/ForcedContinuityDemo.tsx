import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function ForcedContinuityDemo() {
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
              name="forced-continuity-mode"
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
            <p className="text-base font-bold">7일 무료 체험</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
            >
              무료로 시작하기
            </button>
            <p className="mt-2 text-[10px] text-slate-400">이후 월 14,900원 자동 결제</p>
          </>
        ) : (
          <>
            <p className="text-base font-bold">7일 무료 체험</p>
            <p className="mt-1 text-sm text-slate-700">12월 1일부터 월 14,900원이 결제돼요</p>
            <p className="text-xs text-slate-500">
              결제 하루 전에 알려 드리고, 언제든 해지할 수 있어요
            </p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
            >
              무료로 시작하기
            </button>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "체험이 끝나면 알림 없이 바로 결제돼요"
          : "결제 날짜와 금액을 알리고 하루 전에 다시 알려요"}
      </p>
    </section>
  );
}
