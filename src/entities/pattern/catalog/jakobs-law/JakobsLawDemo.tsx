import { useState } from "react";

const MODES = [
  ["a", "낯선 배치"],
  ["b", "익숙한 배치"],
] as const;

export function JakobsLawDemo() {
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
              name="jakobs-law-mode"
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
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
              <span>장바구니</span>
              <b>동네가게</b>
            </div>
            <p className="py-6 text-center text-sm text-slate-500">오늘의 추천</p>
            <p className="rounded-lg bg-slate-100 py-2 text-center text-sm">검색</p>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-2 text-sm">
              <b>동네가게</b>
              <span className="flex-1 rounded-lg bg-slate-100 px-2 py-1 text-slate-500">검색</span>
              <span>장바구니</span>
            </div>
            <p className="py-6 text-center text-sm text-slate-500">오늘의 추천</p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "장바구니와 검색 위치가 다른 서비스와 달라 헤매요"
          : "다른 서비스에서 익힌 자리에 둬요"}
      </p>
    </section>
  );
}
