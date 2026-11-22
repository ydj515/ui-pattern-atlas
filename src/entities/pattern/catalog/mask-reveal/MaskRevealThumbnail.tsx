import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same heading as MaskRevealDemo: each line slides up from behind its edge. */
export function MaskRevealThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[10px] h-[64px] w-[156px] rounded-lg bg-stone-900 px-[10px] py-[10px] text-stone-50">
        {["가을 컬렉션", "10월 1일 공개"].map((line, index) => (
          <span key={line} className="block overflow-hidden text-[15px] leading-[20px] font-bold">
            <span className={`thumb-anim thumb-mr-l${index} block`}>{line}</span>
          </span>
        ))}
      </div>
      <span className="absolute top-[80px] left-[10px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-mr-cursor" />
    </ThumbStage>
  );
}
