import { useState } from "react";

import { Timeline } from "@/shared/ui/patterns/timeline/Timeline";

const EVENTS = [
  { id: "ordered", title: "주문 접수", time: "11월 22일 09:12" },
  { id: "packed", title: "상품 준비", time: "11월 22일 15:40" },
  {
    id: "shipped",
    title: "배송 출발",
    time: "11월 23일 08:05",
    description: "마포 터미널에서 출발했어요",
  },
  { id: "delivered", title: "배송 완료", time: "11월 23일 14:20", description: "문 앞에 두었어요" },
] as const;

export function TimelineDemo() {
  const [current, setCurrent] = useState(2);

  return (
    <div className="w-full max-w-xs space-y-3 rounded-xl border border-slate-200 bg-white p-4">
      <Timeline label="배송 현황" events={EVENTS} current={current} upcomingLabel="예정" />
      <button
        type="button"
        disabled={current === EVENTS.length - 1}
        onClick={() => setCurrent((value) => value + 1)}
        className="w-full rounded-lg border border-slate-300 py-1.5 text-xs font-medium text-slate-700 disabled:opacity-40"
      >
        새로 고침
      </button>
    </div>
  );
}
