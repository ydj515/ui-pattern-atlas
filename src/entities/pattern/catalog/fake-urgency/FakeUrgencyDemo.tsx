import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function FakeUrgencyDemo() {
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
              name="fake-urgency-mode"
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
            <p className="rounded-lg bg-rose-600 px-3 py-2 text-center text-sm font-bold text-white">
              특가 종료까지 09:59
            </p>
            <p className="mt-2 text-center text-[11px] text-slate-400">
              새로고침하면 다시 10:00부터
            </p>
          </>
        ) : (
          <>
            <p className="rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-semibold">
              특가는 11월 30일 23:59에 끝나요
            </p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "새로고침하면 시간이 다시 처음부터 시작돼요"
          : "실제로 끝나는 날짜와 시간을 알려요"}
      </p>
    </section>
  );
}
