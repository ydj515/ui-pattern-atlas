import { useState } from "react";

import { WheelPicker } from "@/shared/ui/patterns/wheel-picker/WheelPicker";

const PERIODS = ["오전", "오후"] as const;
const HOURS = Array.from({ length: 12 }, (_, index) => String(index + 1));
const MINUTES = Array.from({ length: 12 }, (_, index) => String(index * 5).padStart(2, "0"));

export function WheelPickerDemo() {
  const [period, setPeriod] = useState("오전");
  const [hour, setHour] = useState("7");
  const [minute, setMinute] = useState("30");

  return (
    <div className="flex flex-col items-center gap-3">
      <WheelPicker
        label="알람 시간"
        columns={[
          { label: "오전 오후", options: PERIODS, value: period, onChange: setPeriod },
          { label: "시", options: HOURS, value: hour, onChange: setHour },
          { label: "분", options: MINUTES, value: minute, onChange: setMinute },
        ]}
      />
      <p aria-live="polite" className="text-sm text-slate-700">
        {period} {hour}:{minute}에 알람이 울려요
      </p>
    </div>
  );
}
