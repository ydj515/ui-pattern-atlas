import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const CELL = 128 / 7;

/** Same flow as DateRangePickerDemo: check-in 27 → check-out 29 → the range and 2박. */
export function DateRangePickerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[80px] w-[128px] rounded-md border border-slate-200 text-center">
        <p className="absolute inset-x-0 top-[3px] text-[6.5px] font-semibold">2026년 11월</p>
        {WEEKDAYS.map((day, index) => (
          <span
            key={day}
            className="absolute top-[13px] text-[5px] text-slate-500"
            style={{ left: index * CELL, width: CELL }}
          >
            {day}
          </span>
        ))}
        {Array.from({ length: 30 }, (_, index) => {
          const day = index + 1;
          const motion =
            day === 27
              ? "thumb-drp-start"
              : day === 28
                ? "thumb-drp-mid"
                : day === 29
                  ? "thumb-drp-end"
                  : "";
          return (
            <span
              key={day}
              className={`absolute grid h-[10px] place-items-center text-[5.5px] ${day < 23 ? "text-slate-300" : ""}`}
              style={{
                left: (index % 7) * CELL,
                width: CELL,
                top: 21 + Math.floor(index / 7) * 11,
              }}
            >
              {day}
              {motion ? (
                <span
                  className={`thumb-anim ${motion} absolute inset-0 grid place-items-center ${day === 28 ? "bg-blue-50 text-blue-900" : "rounded-[2px] bg-blue-600 font-semibold text-white"}`}
                >
                  {day}
                </span>
              ) : null}
            </span>
          );
        })}
      </div>
      <p className="thumb-anim thumb-drp-t0 absolute top-[89px] left-[24px] text-[6px] text-slate-700 opacity-0">
        체크인 날짜를 골라 주세요
      </p>
      <p className="thumb-anim thumb-drp-t1 absolute top-[89px] left-[24px] text-[6px] text-slate-700 opacity-0">
        체크아웃 날짜를 골라 주세요
      </p>
      <p className="thumb-anim thumb-drp-t2 absolute top-[89px] left-[24px] text-[6px] text-slate-700">
        11월 27일 (금) – 11월 29일 (일) · 2박
      </p>
      <ThumbCursor motion="thumb-drp-cursor" />
    </ThumbStage>
  );
}
