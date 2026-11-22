import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"] as const;

/** Same rule as RecurrencePickerDemo: weekly on 월, 수 → add 금 → the sentence follows. */
export function RecurrencePickerThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[7px] left-[24px] text-[6.5px] font-semibold">반복</p>
      <span className="absolute top-[4px] left-[44px] h-[13px] w-[30px] rounded border border-slate-300 px-[5px] text-[6px] leading-[11px]">
        매주 ▾
      </span>
      {WEEKDAYS.map((day, index) => (
        <span
          key={day}
          className={`absolute top-[21px] grid size-[14px] place-items-center rounded-full border text-[5.5px] ${index === 1 || index === 3 ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300"}`}
          style={{ left: 30 + index * 17 }}
        >
          {day}
          {index === 5 ? (
            <span className="thumb-anim thumb-rp-fri absolute -inset-px grid place-items-center rounded-full bg-blue-600 text-white">
              {day}
            </span>
          ) : null}
        </span>
      ))}
      <p className="absolute top-[40px] left-[24px] text-[6.5px] font-semibold">종료</p>
      <p className="absolute top-[50px] left-[24px] flex items-center gap-[3px] text-[6px]">
        <span className="size-[6px] rounded-full border border-slate-400" />
        계속 반복
      </p>
      <p className="absolute top-[60px] left-[24px] flex items-center gap-[3px] text-[6px]">
        <span className="size-[6px] rounded-full border-[2px] border-blue-600" />
        횟수
        <span className="rounded border border-slate-300 px-[4px]">10</span>회 후 종료
      </p>
      <p className="thumb-anim thumb-rp-before absolute top-[80px] left-[24px] h-[16px] w-[128px] rounded bg-slate-100 px-[6px] text-[6px] leading-[16px] opacity-0">
        매주 {"월, 수"}요일마다 · {10}회 반복해요
      </p>
      <p className="thumb-anim thumb-rp-fri absolute top-[80px] left-[24px] h-[16px] w-[128px] rounded bg-slate-100 px-[6px] text-[6px] leading-[16px]">
        매주 {"월, 수, 금"}요일마다 · {10}회 반복해요
      </p>
      <ThumbCursor motion="thumb-rp-cursor" />
    </ThumbStage>
  );
}
