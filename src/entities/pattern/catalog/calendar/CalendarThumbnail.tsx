import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const CELL = 128 / 7;
const DOTS: Record<number, number> = { 3: 1, 11: 1, 23: 2, 27: 1 };

/** Same month as CalendarDemo: today 23 shows its two events → choose 27 → 출시 회고. */
export function CalendarThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[24px] h-[76px] w-[128px] rounded-md border border-slate-200 text-center">
        <p className="absolute inset-x-0 top-[3px] text-[6.5px] font-semibold">2026년 11월</p>
        {WEEKDAYS.map((day, index) => (
          <span
            key={day}
            className="absolute top-[12px] text-[5px] text-slate-500"
            style={{ left: index * CELL, width: CELL }}
          >
            {day}
          </span>
        ))}
        {Array.from({ length: 30 }, (_, index) => {
          const day = index + 1;
          return (
            <span
              key={day}
              className={`absolute h-[10px] text-[5.5px] leading-[7px] ${day === 23 ? "font-bold" : ""}`}
              style={{
                left: (index % 7) * CELL + 1,
                width: CELL - 2,
                top: 19 + Math.floor(index / 7) * 11,
              }}
            >
              {day}
              {DOTS[day] ? (
                <span className="flex justify-center gap-[1px]">
                  {Array.from({ length: DOTS[day] }, (_, dot) => (
                    <span key={dot} className="size-[2px] rounded-full bg-blue-500" />
                  ))}
                </span>
              ) : null}
              {day === 23 || day === 27 ? (
                <span
                  className={`thumb-anim ${day === 23 ? "thumb-cal-d23 opacity-0" : "thumb-cal-d27"} absolute inset-0 rounded-[2px] bg-slate-900 text-white`}
                >
                  {day}
                  <span className="flex justify-center gap-[1px]">
                    {Array.from({ length: DOTS[day] ?? 0 }, (_, dot) => (
                      <span key={dot} className="size-[2px] rounded-full bg-white" />
                    ))}
                  </span>
                </span>
              ) : null}
            </span>
          );
        })}
      </div>
      <div className="thumb-anim thumb-cal-l23 absolute top-[82px] left-[24px] text-[6px] leading-[9px] opacity-0">
        <p>
          <span className="text-slate-500">10:00</span> 주간 회의
        </p>
        <p>
          <span className="text-slate-500">15:00</span> 1:1 미팅
        </p>
      </div>
      <p className="thumb-anim thumb-cal-l27 absolute top-[82px] left-[24px] text-[6px]">
        <span className="text-slate-500">16:00</span> 출시 회고
      </p>
      <ThumbCursor motion="thumb-cal-cursor" />
    </ThumbStage>
  );
}
