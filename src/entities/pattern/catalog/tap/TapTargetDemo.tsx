import { useState } from "react";
import { TapTarget } from "@/shared/ui/patterns/tap/TapTarget";

export function TapTargetDemo() {
  const [showArea, setShowArea] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <section className="w-full max-w-xs">
      <div className="h-16">
        {open ? (
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white py-1 pr-1 pl-3">
            <p className="flex-1 text-sm text-slate-800">택배가 도착했어요</p>
            <TapTarget aria-label="알림 닫기" showArea={showArea} onClick={() => setOpen(false)}>
              <span aria-hidden="true" className="text-lg leading-none text-slate-500">
                ×
              </span>
            </TapTarget>
          </div>
        ) : (
          <p role="status" className="flex items-center gap-2 px-1 py-3 text-sm text-slate-600">
            알림을 닫았어요
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="font-semibold text-blue-700"
            >
              다시 보기
            </button>
          </p>
        )}
      </div>
      <label className="mt-2 flex items-center gap-2 text-xs text-slate-700">
        <input
          type="checkbox"
          checked={showArea}
          onChange={(event) => setShowArea(event.currentTarget.checked)}
        />
        누르는 영역 보기
      </label>
    </section>
  );
}
