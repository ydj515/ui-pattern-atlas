import { useState, type CSSProperties } from "react";

import { SafeArea } from "@/shared/ui/patterns/safe-area/SafeArea";

// The phone frame fakes the device insets; on a real phone env(safe-area-inset-*) provides them.
const DEVICE = { "--safe-top": "26px", "--safe-bottom": "16px" } as CSSProperties;

export function SafeAreaDemo() {
  const [applied, setApplied] = useState(true);

  return (
    <div className="flex items-center gap-4">
      <div
        className="relative h-72 w-40 overflow-hidden rounded-[2rem] border-4 border-slate-900 bg-slate-50"
        style={DEVICE}
      >
        <span
          aria-hidden="true"
          className="absolute top-1.5 left-1/2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-slate-900"
        />
        <span
          aria-hidden="true"
          className="absolute bottom-1.5 left-1/2 z-20 h-1 w-14 -translate-x-1/2 rounded-full bg-slate-900"
        />
        <div className="flex h-full flex-col justify-between">
          <SafeArea
            edges={applied ? ["top"] : []}
            className="bg-white px-3 pb-2 text-sm font-semibold text-slate-900 shadow-sm"
          >
            메시지
          </SafeArea>
          <SafeArea
            edges={applied ? ["bottom"] : []}
            className="flex gap-2 bg-white px-2 pt-2 shadow-sm"
          >
            <span className="flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs text-slate-400">
              메시지 입력
            </span>
            <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs text-white">보내기</span>
          </SafeArea>
        </div>
      </div>
      <label className="flex items-center gap-2 text-xs text-slate-600">
        <input
          type="checkbox"
          checked={applied}
          onChange={(event) => setApplied(event.target.checked)}
        />
        안전 영역 적용
      </label>
    </div>
  );
}
