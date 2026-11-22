import { useState } from "react";

import { SegmentedControl } from "@/shared/ui/patterns/segmented-control/SegmentedControl";

type Period = "day" | "week" | "month";

const SPENDING: Record<Period, string> = {
  day: "32,000원",
  week: "184,500원",
  month: "742,300원",
};

export function SegmentedControlDemo() {
  const [period, setPeriod] = useState<Period>("week");

  return (
    <div className="flex flex-col items-center gap-4">
      <SegmentedControl
        label="조회 기간"
        value={period}
        onValueChange={setPeriod}
        options={[
          { value: "day", label: "일간" },
          { value: "week", label: "주간" },
          { value: "month", label: "월간" },
        ]}
      />
      <p className="text-sm text-slate-600">
        지출 합계{" "}
        <strong className="text-lg font-semibold text-slate-900">{SPENDING[period]}</strong>
      </p>
    </div>
  );
}
