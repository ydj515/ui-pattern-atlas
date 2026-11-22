import { useState } from "react";

import {
  DateRangePicker,
  type DateRange,
} from "@/shared/ui/patterns/date-range-picker/DateRangePicker";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const TODAY = new Date(2026, 10, 23);
const formatDay = (date: Date) =>
  `${date.getMonth() + 1}월 ${date.getDate()}일 (${WEEKDAYS[date.getDay()]})`;

export function DateRangePickerDemo() {
  const [range, setRange] = useState<DateRange>({ start: null, end: null });
  const nights =
    range.start && range.end
      ? Math.round((range.end.getTime() - range.start.getTime()) / 86_400_000)
      : 0;

  return (
    <div className="space-y-2">
      <DateRangePicker
        value={range}
        onChange={setRange}
        month={TODAY}
        min={TODAY}
        startLabel="체크인"
        endLabel="체크아웃"
        insideLabel="숙박"
        weekdays={WEEKDAYS}
        formatDay={formatDay}
        formatMonth={(month) => `${month.getFullYear()}년 ${month.getMonth() + 1}월`}
      />
      <p aria-live="polite" className="min-h-5 text-sm text-slate-700">
        {range.start && range.end
          ? `${formatDay(range.start)} – ${formatDay(range.end)} · ${nights}박`
          : range.start
            ? "체크아웃 날짜를 골라 주세요"
            : "체크인 날짜를 골라 주세요"}
      </p>
    </div>
  );
}
