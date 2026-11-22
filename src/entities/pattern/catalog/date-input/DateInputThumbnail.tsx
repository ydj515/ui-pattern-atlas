import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as DateInputDemo: typing digits adds the dots → the date is read back. */
export function DateInputThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[14px] left-[24px] text-[7px] font-medium">생년월일</p>
      <span className="absolute top-[25px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-di-focus absolute top-[24px] left-[23px] h-[17px] w-[130px] rounded ring-2 ring-blue-500/30" />
      {[
        { text: "YYYY.MM.DD", motion: "thumb-di-ph", extra: "text-slate-400 opacity-0" },
        { text: "1995", motion: "thumb-di-v1", extra: "opacity-0" },
        { text: "1995.03", motion: "thumb-di-v2", extra: "opacity-0" },
        { text: "1995.03.14", motion: "thumb-di-v3", extra: "" },
      ].map((value) => (
        <p
          key={value.motion}
          className={`thumb-anim ${value.motion} absolute top-[28.5px] left-[30px] text-[6.5px] tabular-nums ${value.extra}`}
        >
          {value.text}
        </p>
      ))}
      <p className="absolute top-[44px] left-[24px] text-[5.5px] text-slate-500">YYYY.MM.DD</p>
      <p className="thumb-anim thumb-di-v3 absolute top-[58px] left-[24px] text-[7px] text-slate-700">
        1995년 3월 14일
      </p>
      <ThumbCursor motion="thumb-di-cursor" />
    </ThumbStage>
  );
}
