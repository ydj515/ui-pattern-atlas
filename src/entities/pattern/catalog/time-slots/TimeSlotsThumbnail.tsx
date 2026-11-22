import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SLOTS = [
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "13:00", available: false },
  { time: "13:30", available: true },
] as const;

/** Same flow as TimeSlotsDemo: pick 11:00 → the button names it → 예약했어요. */
export function TimeSlotsThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[3px] left-[20px] text-[6.5px] font-medium">
        11월 24일 (화) 예약 시간
      </p>
      {SLOTS.map((slot, index) => (
        <span
          key={slot.time}
          className={`absolute flex h-[18px] w-[42px] flex-col items-center justify-center rounded border text-[6.5px] tabular-nums ${slot.available ? "border-slate-300" : "border-slate-200 bg-slate-50 text-slate-400"}`}
          style={{ left: 20 + (index % 3) * 47, top: 14 + Math.floor(index / 3) * 23 }}
        >
          {slot.time}
          {slot.available ? null : <span className="text-[4.5px] leading-[5px]">마감</span>}
          {slot.time === "11:00" ? (
            <span className="thumb-anim thumb-ts-picked absolute -inset-px grid place-items-center rounded bg-blue-600 text-white">
              {slot.time}
            </span>
          ) : null}
        </span>
      ))}
      <span className="absolute top-[62px] left-[20px] grid h-[16px] w-[136px] place-items-center rounded bg-slate-200 text-[6.5px] font-semibold text-slate-500">
        시간을 골라 주세요
      </span>
      <span className="thumb-anim thumb-ts-picked absolute top-[62px] left-[20px] grid h-[16px] w-[136px] place-items-center rounded bg-slate-900 text-[6.5px] font-semibold text-white">
        11:00 예약하기
      </span>
      <p className="thumb-anim thumb-ts-booked absolute inset-x-0 top-[84px] text-center text-[6.5px] text-emerald-700">
        11월 24일 11:00로 예약했어요
      </p>
      <ThumbCursor motion="thumb-ts-cursor" />
    </ThumbStage>
  );
}
