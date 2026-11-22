import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;
const CELL = 128 / 7;

/** Same flow as DatePickerDemo (today 11/23): open → pick 25 → 11월 25일 (수). */
export function DatePickerThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[3px] left-[24px] text-[6.5px] font-medium">방문 날짜</p>
      <span className="absolute top-[13px] left-[24px] h-[14px] w-[128px] rounded border border-slate-300" />
      <p className="thumb-anim thumb-dp-empty absolute top-[16px] left-[30px] text-[6px] text-slate-400 opacity-0">
        날짜를 고르세요
      </p>
      <p className="thumb-anim thumb-dp-picked absolute top-[16px] left-[30px] text-[6px]">
        11월 25일 (수)
      </p>
      <p className="thumb-anim thumb-dp-picked absolute top-[33px] left-[24px] text-[6.5px] text-slate-600">
        11월 25일 (수)에 방문해요
      </p>

      <div className="thumb-anim thumb-dp-pop absolute top-[30px] left-[24px] h-[79px] w-[128px] rounded-md border border-slate-200 bg-white text-center shadow-md opacity-0">
        <p className="absolute inset-x-0 top-[3px] text-[6.5px] font-semibold">2026년 11월</p>
        <span className="absolute top-[2px] left-[6px] text-[7px] text-slate-500">‹</span>
        <span className="absolute top-[2px] right-[6px] text-[7px] text-slate-500">›</span>
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
          return (
            <span
              key={day}
              className={`absolute grid h-[10px] place-items-center rounded-[2px] text-[5.5px] ${day < 23 ? "text-slate-300" : ""} ${day === 23 ? "font-bold" : ""}`}
              style={{
                left: (index % 7) * CELL + 1,
                width: CELL - 2,
                top: 21 + Math.floor(index / 7) * 11,
              }}
            >
              {day}
              {day === 25 ? (
                <span className="thumb-anim thumb-dp-sel absolute inset-0 grid place-items-center rounded-[2px] bg-blue-600 text-white">
                  {day}
                </span>
              ) : null}
            </span>
          );
        })}
      </div>
      <ThumbCursor motion="thumb-dp-cursor" />
    </ThumbStage>
  );
}
