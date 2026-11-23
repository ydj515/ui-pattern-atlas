import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function RoachMotelDemo() {
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
              name="roach-motel-mode"
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
            <p className="text-base font-bold">구독 중 · 월 9,900원</p>
            <p className="mt-3 text-[11px] text-slate-400">
              해지는 고객센터(평일 10~17시)로 전화해 주세요
            </p>
          </>
        ) : (
          <>
            <p className="text-base font-bold">구독 중 · 월 9,900원</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-rose-300 py-2 text-sm text-rose-700"
            >
              구독 해지
            </button>
            <p className="mt-2 text-xs text-slate-600">다음 결제일 12월 1일까지 이용할 수 있어요</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "가입은 버튼 하나인데 해지는 전화로만 돼요"
          : "가입한 곳에서 같은 방법으로 해지해요"}
      </p>
    </section>
  );
}
