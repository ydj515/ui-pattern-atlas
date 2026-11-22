import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HEART = "M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z";

/** Same post as LikeButtonDemo: 좋아요 128 → the heart pops and fills → 129. */
export function LikeButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[44px] h-[104px] w-[88px] overflow-hidden rounded-[12px] border border-slate-200">
        <span className="block h-[52px] bg-gradient-to-br from-amber-100 to-orange-200" />
        <p className="mt-[4px] px-[6px] text-[6.5px]">새로 연 빵집 다녀왔어요</p>
        <p className="relative mt-[6px] h-[12px] px-[6px] text-[6.5px]">
          <span
            className="thumb-anim thumb-lk-off absolute flex items-center gap-[3px] text-slate-700"
            style={{ opacity: 0 }}
          >
            <svg viewBox="0 0 24 24" className="size-[9px] fill-none stroke-current stroke-2">
              <path d={HEART} />
            </svg>
            좋아요 128
          </span>
          <span className="thumb-anim thumb-lk-on absolute flex items-center gap-[3px] text-rose-600">
            <svg viewBox="0 0 24 24" className="thumb-anim thumb-lk-pop size-[9px] fill-rose-600">
              <path d={HEART} />
            </svg>
            좋아요 129
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-lk-cursor" />
    </ThumbStage>
  );
}
