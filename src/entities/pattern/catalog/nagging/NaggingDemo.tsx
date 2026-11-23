import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function NaggingDemo() {
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
              name="nagging-mode"
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
            <p className="text-base font-bold">알림을 켜 주세요</p>
            <p className="mt-1 text-xs text-rose-600">오늘 3번째 요청</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg border border-slate-200 py-2 text-sm"
            >
              나중에
            </button>
          </>
        ) : (
          <>
            <p className="text-base font-bold">알림을 켜 주세요</p>
            <p className="mt-1 text-xs text-slate-500">한 번만 물어요</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button type="button" className="rounded-lg border border-slate-200 py-2 text-sm">
                나중에
              </button>
              <button type="button" className="rounded-lg border border-slate-200 py-2 text-sm">
                다시 묻지 않기
              </button>
            </div>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a" ? "닫아도 다음 화면에서 또 물어요" : "다시 묻지 않기를 존중해요"}
      </p>
    </section>
  );
}
