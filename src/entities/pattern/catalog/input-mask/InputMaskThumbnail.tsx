import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same fields as InputMaskDemo: typing digits inserts the hyphens on the way. */
export function InputMaskThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[10px] left-[24px] text-[7px] font-medium">휴대폰 번호</p>
      <span className="absolute top-[21px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-im-focus absolute top-[20px] left-[23px] h-[17px] w-[130px] rounded ring-2 ring-blue-500/30" />
      {[
        { text: "010-0000-0000", motion: "thumb-im-ph", extra: "text-slate-400 opacity-0" },
        { text: "010", motion: "thumb-im-v1", extra: "opacity-0" },
        { text: "010-1234", motion: "thumb-im-v2", extra: "opacity-0" },
        { text: "010-1234-5678", motion: "thumb-im-v3", extra: "" },
      ].map((value) => (
        <p
          key={value.motion}
          className={`thumb-anim ${value.motion} absolute top-[24.5px] left-[30px] text-[6.5px] tabular-nums ${value.extra}`}
        >
          {value.text}
        </p>
      ))}

      <p className="absolute top-[46px] left-[24px] text-[7px] font-medium">카드 번호</p>
      <p className="absolute top-[57px] left-[24px] h-[15px] w-[128px] rounded border border-slate-300 px-[6px] text-[6.5px] leading-[13px] text-slate-400 tabular-nums">
        0000 0000 0000 0000
      </p>
      <p className="absolute top-[80px] left-[24px] text-[6px] text-slate-500">
        저장되는 값: <span className="thumb-anim thumb-im-v3">01012345678</span>
      </p>
      <ThumbCursor motion="thumb-im-cursor" />
    </ThumbStage>
  );
}
