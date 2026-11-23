import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function ConfirmshamingDemo() {
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
              name="confirmshaming-mode"
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
            <p className="text-base font-bold">첫 구매 10% 할인 쿠폰 받기</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
            >
              쿠폰 받기
            </button>
            <button type="button" className="mt-2 w-full text-xs text-slate-500 underline">
              아니요, 저는 제값 다 낼게요
            </button>
          </>
        ) : (
          <>
            <p className="text-base font-bold">첫 구매 10% 할인 쿠폰 받기</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
            >
              쿠폰 받기
            </button>
            <button
              type="button"
              className="mt-2 w-full rounded-lg border border-slate-200 py-2 text-sm"
            >
              괜찮아요
            </button>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a" ? "거절하는 사람을 놀리는 문구예요" : "두 선택지를 같은 말투로 써요"}
      </p>
    </section>
  );
}
