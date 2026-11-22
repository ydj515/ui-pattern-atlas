import { useState } from "react";
import { CoachMark } from "@/shared/ui/patterns/coach-mark/CoachMark";

const MEMOS = ["장보기 목록", "회의 준비", "여행 짐 싸기"];

export function CoachMarkDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <h3 className="text-base font-bold text-slate-900">메모</h3>
        <CoachMark
          open={open}
          message="여기서 새 메모를 만들 수 있어요"
          closeLabel="확인"
          onClose={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="새 메모"
            className="grid size-8 place-items-center rounded-full bg-slate-900 text-lg text-white"
          >
            +
          </button>
        </CoachMark>
      </header>
      <ul className="divide-y divide-slate-100 text-sm">
        {MEMOS.map((memo) => (
          <li key={memo} className="px-4 py-3 text-slate-700">
            {memo}
          </li>
        ))}
      </ul>
      {open ? null : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute bottom-3 left-4 rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
        >
          다시 보기
        </button>
      )}
    </div>
  );
}
