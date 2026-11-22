import { useState } from "react";

import { DatePicker } from "@/shared/ui/patterns/date-picker/DatePicker";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
// Fixed "today" so the demo reads the same every day.
const TODAY = new Date(2026, 10, 23);
const formatDay = (date: Date) =>
  `${date.getMonth() + 1}월 ${date.getDate()}일 (${WEEKDAYS[date.getDay()]})`;

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="w-full max-w-xs space-y-2 pb-72">
      <DatePicker
        label="방문 날짜"
        placeholder="날짜를 고르세요"
        value={date}
        onChange={setDate}
        today={TODAY}
        min={TODAY}
        weekdays={WEEKDAYS}
        formatDay={formatDay}
        formatMonth={(month) => `${month.getFullYear()}년 ${month.getMonth() + 1}월`}
      />
      <p className="text-sm text-slate-600">{date ? `${formatDay(date)}에 방문해요` : ""}</p>
    </div>
  );
}
