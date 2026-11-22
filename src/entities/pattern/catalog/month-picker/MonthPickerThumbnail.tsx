import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as MonthPickerDemo: 11월 is chosen → pick 10월 → the statement month follows. */
export function MonthPickerThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[44px] h-[84px] w-[88px] rounded-md border border-slate-200 text-center">
        <p className="absolute top-[3px] left-[6px] text-[6px] font-medium">정산 월</p>
        <p className="absolute inset-x-0 top-[13px] text-[6.5px] font-semibold">2026년</p>
        <span className="absolute top-[12px] left-[8px] text-[7px] text-slate-500">‹</span>
        <span className="absolute top-[12px] right-[8px] text-[7px] text-slate-300">›</span>
        {Array.from({ length: 12 }, (_, index) => {
          const month = index + 1;
          return (
            <span
              key={month}
              className={`absolute grid h-[13px] w-[19px] place-items-center rounded-[3px] text-[5.5px] ${month === 12 ? "text-slate-300" : ""}`}
              style={{ left: 3 + (index % 4) * 21, top: 26 + Math.floor(index / 4) * 15 }}
            >
              {month}월
              {month === 10 || month === 11 ? (
                <span
                  className={`thumb-anim ${month === 10 ? "thumb-mp-oct" : "thumb-mp-nov opacity-0"} absolute inset-0 grid place-items-center rounded-[3px] bg-blue-600 font-semibold text-white`}
                >
                  {month}월
                </span>
              ) : null}
            </span>
          );
        })}
      </div>
      <p className="thumb-anim thumb-mp-nov absolute inset-x-0 top-[93px] text-center text-[6px] text-slate-600 opacity-0">
        2026년 11월 정산 내역을 보여 드려요
      </p>
      <p className="thumb-anim thumb-mp-oct absolute inset-x-0 top-[93px] text-center text-[6px] text-slate-600">
        2026년 10월 정산 내역을 보여 드려요
      </p>
      <ThumbCursor motion="thumb-mp-cursor" />
    </ThumbStage>
  );
}
