import { useState } from "react";

import { ZPattern } from "@/shared/ui/patterns/z-pattern/ZPattern";

export function ZPatternDemo() {
  const [showPath, setShowPath] = useState(false);

  return (
    <div className="w-full max-w-sm space-y-2">
      <div className="relative h-56 rounded-xl border border-slate-200 bg-white">
        <ZPattern
          brand={<span className="text-sm font-bold text-slate-900">모아</span>}
          topAction={
            <button type="button" className="text-xs text-slate-600 underline">
              로그인
            </button>
          }
          message={
            <p className="text-center text-lg font-bold text-slate-900">팀 일정, 한 화면에서</p>
          }
          visual={
            <div
              aria-hidden="true"
              className="h-12 w-20 rounded-lg bg-gradient-to-br from-sky-200 to-indigo-300"
            />
          }
          mainAction={
            <button
              type="button"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
            >
              시작하기
            </button>
          }
        />
        {showPath ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <path
              d="M12 12 L88 12 L12 88 L88 88"
              fill="none"
              stroke="#f43f5e"
              strokeWidth="1"
              strokeDasharray="3 2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        ) : null}
      </div>
      <label className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={showPath}
          onChange={(event) => setShowPath(event.target.checked)}
        />
        시선 흐름 보기
      </label>
    </div>
  );
}
