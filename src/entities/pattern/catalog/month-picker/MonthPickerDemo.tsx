import { useState } from "react";

import { MonthPicker, type YearMonth } from "@/shared/ui/patterns/month-picker/MonthPicker";

const THIS_MONTH: YearMonth = { year: 2026, month: 11 };

export function MonthPickerDemo() {
  const [value, setValue] = useState<YearMonth>(THIS_MONTH);

  return (
    <div className="space-y-2">
      <MonthPicker
        label="정산 월"
        value={value}
        onChange={setValue}
        max={THIS_MONTH}
        monthLabel={(month) => `${month}월`}
        yearLabel={(year) => `${year}년`}
      />
      <p className="text-sm text-slate-600">
        {value.year}년 {value.month}월 정산 내역을 보여 드려요
      </p>
    </div>
  );
}
