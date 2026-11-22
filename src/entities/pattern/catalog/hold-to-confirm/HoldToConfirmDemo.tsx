import { useState } from "react";

import { HoldToConfirm } from "@/shared/ui/patterns/hold-to-confirm/HoldToConfirm";

export function HoldToConfirmDemo() {
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-slate-900">프로젝트 삭제</p>
      <p className="mt-1 text-xs text-slate-500">파일과 댓글이 모두 지워지고 되돌릴 수 없어요.</p>
      <div className="mt-4">
        {deleted ? (
          <div className="text-center">
            <p role="status" className="text-sm font-medium text-rose-700">
              프로젝트를 삭제했어요
            </p>
            <button
              type="button"
              onClick={() => setDeleted(false)}
              className="mt-2 text-xs text-slate-500 underline"
            >
              다시 보기
            </button>
          </div>
        ) : (
          <HoldToConfirm
            label="꾹 눌러 삭제"
            hint="1.5초 동안 누르고 있으면 삭제돼요"
            holdMs={1500}
            onConfirm={() => setDeleted(true)}
          />
        )}
      </div>
    </div>
  );
}
