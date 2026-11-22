import { useState } from "react";

import { DropdownMenu } from "@/shared/ui/patterns/dropdown-menu/DropdownMenu";

const RESULTS: Record<string, string> = {
  rename: "'기획서' 이름을 바꿀 수 있어요",
  duplicate: "'기획서'를 복제했어요",
  share: "'기획서' 공유 링크를 복사했어요",
  delete: "'기획서'를 휴지통으로 옮겼어요",
};

export function DropdownMenuDemo() {
  const [result, setResult] = useState("");

  return (
    <div className="w-full max-w-sm space-y-3 pb-40">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900">기획서</p>
          <p className="text-xs text-slate-500">수정 3일 전</p>
        </div>
        <DropdownMenu
          label="기획서 더보기"
          trigger={<span aria-hidden="true">⋯</span>}
          align="end"
          items={[
            { id: "rename", label: "이름 바꾸기" },
            { id: "duplicate", label: "복제" },
            { id: "share", label: "공유" },
            { id: "delete", label: "삭제", tone: "danger", separatorBefore: true },
          ]}
          onSelect={(id) => setResult(RESULTS[id] ?? "")}
        />
      </div>
      <p role="status" className="min-h-5 text-center text-xs text-slate-500">
        {result}
      </p>
    </div>
  );
}
