import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as TimePickerDemo: open the hour → pick 15 → 15시 30분에 찾으러 와요. */
export function TimePickerThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[10px] left-[24px] text-[7px] font-medium">픽업 시간</p>
      <span className="absolute top-[21px] left-[24px] h-[15px] w-[30px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-tp-h14 absolute top-[24.5px] left-[30px] text-[6.5px] tabular-nums opacity-0">
        14
      </span>
      <span className="thumb-anim thumb-tp-h15 absolute top-[24.5px] left-[30px] text-[6.5px] tabular-nums">
        15
      </span>
      <span className="absolute top-[24.5px] left-[58px] text-[6.5px] text-slate-500">시</span>
      <span className="absolute top-[21px] left-[68px] h-[15px] w-[30px] rounded border border-slate-300 px-[6px] text-[6.5px] leading-[13px] tabular-nums">
        30
      </span>
      <span className="absolute top-[24.5px] left-[102px] text-[6.5px] text-slate-500">분</span>

      <ul className="thumb-anim thumb-tp-menu absolute top-[38px] left-[24px] w-[30px] rounded border border-slate-200 bg-white py-[1px] text-[6px] shadow-md opacity-0">
        {["13", "14", "15", "16"].map((hour) => (
          <li key={hour} className="relative h-[12px] px-[6px] leading-[12px] tabular-nums">
            {hour === "15" ? (
              <span className="thumb-anim thumb-tp-hover absolute inset-0 bg-blue-50" />
            ) : null}
            <span className="relative">{hour}</span>
          </li>
        ))}
      </ul>
      <p className="thumb-anim thumb-tp-h14 absolute top-[92px] left-[24px] text-[6.5px] text-slate-600 opacity-0">
        14시 30분에 찾으러 와요
      </p>
      <p className="thumb-anim thumb-tp-h15 absolute top-[92px] left-[24px] text-[6.5px] text-slate-600">
        15시 30분에 찾으러 와요
      </p>
      <ThumbCursor motion="thumb-tp-cursor" />
    </ThumbStage>
  );
}
