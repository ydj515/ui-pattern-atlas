import { useState } from "react";

import { TimeSlots } from "@/shared/ui/patterns/time-slots/TimeSlots";

const SLOTS = [
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "13:00", available: false },
  { time: "13:30", available: true },
] as const;

export function TimeSlotsDemo() {
  const [time, setTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  return (
    <div className="w-full max-w-xs space-y-3">
      <TimeSlots
        label="11월 24일 (화) 예약 시간"
        fullLabel="마감"
        slots={SLOTS}
        value={time}
        onChange={(next) => {
          setTime(next);
          setBooked(false);
        }}
      />
      <button
        type="button"
        disabled={!time}
        onClick={() => setBooked(true)}
        className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white disabled:bg-slate-200 disabled:text-slate-500"
      >
        {time ? `${time} 예약하기` : "시간을 골라 주세요"}
      </button>
      <p role="status" className="min-h-5 text-center text-sm text-emerald-700">
        {booked && time ? `11월 24일 ${time}로 예약했어요` : ""}
      </p>
    </div>
  );
}
