import { useState } from "react";

import { AllCaughtUp } from "@/shared/ui/patterns/all-caught-up/AllCaughtUp";

const INITIAL = ["배송이 시작됐어요", "쿠폰이 곧 만료돼요"] as const;

export function AllCaughtUpDemo() {
  const [items, setItems] = useState<readonly string[]>(INITIAL);

  if (items.length === 0) {
    return (
      <div className="w-full max-w-xs">
        <AllCaughtUp
          title="모두 확인했어요"
          description="새 알림이 오면 여기에 보여 드릴게요."
          action={
            <button
              type="button"
              onClick={() => setItems(INITIAL)}
              className="font-medium text-emerald-800 underline underline-offset-2"
            >
              지난 알림 보기
            </button>
          }
        />
      </div>
    );
  }

  return (
    <ul className="w-full max-w-xs divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
      {items.map((item) => (
        <li key={item} className="flex items-center justify-between px-4 py-2.5">
          {item}
          <button
            type="button"
            aria-label={`${item} 확인`}
            onClick={() => setItems((current) => current.filter((value) => value !== item))}
            className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
          >
            확인
          </button>
        </li>
      ))}
    </ul>
  );
}
