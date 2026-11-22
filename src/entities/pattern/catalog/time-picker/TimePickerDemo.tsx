import { useState } from "react";

import { TimePicker } from "@/shared/ui/patterns/time-picker/TimePicker";

export function TimePickerDemo() {
  const [time, setTime] = useState("14:30");
  const [hour, minute] = time.split(":");

  return (
    <div className="w-full max-w-xs space-y-2">
      <TimePicker
        label="픽업 시간"
        value={time}
        onChange={setTime}
        fromHour={10}
        toHour={20}
        minuteStep={10}
        hourLabel="시"
        minuteLabel="분"
      />
      <p className="text-sm text-slate-600">
        {Number(hour)}시 {minute}분에 찾으러 와요
      </p>
    </div>
  );
}
