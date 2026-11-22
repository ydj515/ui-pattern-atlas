import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TEXT = Array.from("오늘 저녁 메뉴를 골라 드릴게요");

/** Same line as TypewriterDemo: 다시 보기 → it types out one character at a time. */
export function TypewriterThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[62px] w-[156px] rounded-lg bg-slate-900 p-[8px] text-white">
        <p className="text-[6px] text-white/70">추천 도우미</p>
        <p className="mt-[4px] text-[11px] leading-[14px] font-bold">
          {TEXT.map((char, index) => (
            <span key={index} className={`thumb-anim thumb-tw-c${index}`}>
              {char}
            </span>
          ))}
          <span className="thumb-anim thumb-tw-caret ml-[1px] inline-block h-[10px] w-[1px] translate-y-[1px] bg-white" />
        </p>
      </div>
      <span className="absolute top-[78px] left-[10px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-tw-cursor" />
    </ThumbStage>
  );
}
