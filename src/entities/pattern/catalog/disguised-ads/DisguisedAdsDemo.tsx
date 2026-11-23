import { useState } from "react";

const MODES = [
  ["a", "다크 패턴"],
  ["b", "바른 방법"],
] as const;

export function DisguisedAdsDemo() {
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
              name="disguised-ads-mode"
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
            <p className="text-sm font-bold">회의록.pdf</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-emerald-500 py-3 text-base font-bold text-white"
            >
              다운로드
            </button>
            <a href="#file" className="mt-2 block text-center text-[11px] text-slate-400">
              파일 받기 (2.1MB)
            </a>
          </>
        ) : (
          <>
            <p className="text-sm font-bold">회의록.pdf</p>
            <button
              type="button"
              className="mt-3 w-full rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
            >
              다운로드 (2.1MB)
            </button>
            <p className="mt-3 rounded-lg border border-dashed border-slate-300 p-2 text-xs text-slate-500">
              <b>광고</b> 클라우드 저장 공간 100GB
            </p>
          </>
        )}
      </div>
      <p role="status" className="text-xs text-slate-600">
        {mode === "a"
          ? "광고가 진짜 다운로드 버튼처럼 보여요"
          : "광고에는 광고라고 표시하고 따로 둬요"}
      </p>
    </section>
  );
}
