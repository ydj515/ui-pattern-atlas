import { useState } from "react";

import { QuickDateChips } from "@/shared/ui/patterns/quick-date-chips/QuickDateChips";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
// Fixed Monday so the chips read the same every day; use new Date() in a real app.
const TODAY = new Date(2026, 10, 23);
const addDays = (days: number) =>
  new Date(TODAY.getFullYear(), TODAY.getMonth(), TODAY.getDate() + days);
const OPTIONS = [
  { label: "오늘", date: addDays(0) },
  { label: "내일", date: addDays(1) },
  { label: "이번 주말", date: addDays(6 - TODAY.getDay()) },
  { label: "다음 주 월요일", date: addDays((8 - TODAY.getDay()) % 7 || 7) },
];

export function QuickDateChipsDemo() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="w-full max-w-xs space-y-3">
      <QuickDateChips
        label="받는 날"
        options={OPTIONS}
        value={date}
        onChange={setDate}
        customLabel="직접 고르기"
      />
      <p className="min-h-5 text-sm text-slate-700">
        {date
          ? `${date.getMonth() + 1}월 ${date.getDate()}일 (${WEEKDAYS[date.getDay()]})에 받아요`
          : ""}
      </p>
    </div>
  );
}
