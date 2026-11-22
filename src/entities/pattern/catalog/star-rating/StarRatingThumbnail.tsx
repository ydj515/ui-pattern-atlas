import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same question as StarRatingDemo: tap the 4th star → 4점. */
export function StarRatingThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[20px] left-[28px] h-[72px] w-[120px] rounded-[12px] border border-slate-200 p-[8px]">
        <p className="text-[7.5px] font-bold">린넨 셔츠 어땠나요?</p>
        <p className="relative mt-[6px] flex h-[14px] items-center gap-[2px]">
          {[0, 1, 2, 3, 4].map((index) => (
            <span key={index} className="relative text-[14px] leading-[14px] text-slate-200">
              ★
              {index < 4 ? (
                <span className="thumb-anim thumb-sr-fill absolute inset-0 text-amber-400">★</span>
              ) : null}
            </span>
          ))}
          <span className="thumb-anim thumb-sr-fill ml-[4px] text-[7px] font-semibold">4점</span>
        </p>
        <p className="mt-[6px] flex items-center gap-[3px] text-[6px] text-slate-700">
          <span className="size-[6px] rounded-[1px] border border-slate-400" />반 단위로 주기
        </p>
      </div>
      <ThumbCursor motion="thumb-sr-cursor" />
    </ThumbStage>
  );
}
