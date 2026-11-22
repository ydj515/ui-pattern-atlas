import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HEART = "M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z";

/** Same post as DoubleTapDemo: double tap the photo → heart burst → 좋아요 12 becomes 13. */
export function DoubleTapThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[38px] h-[104px] w-[100px] overflow-hidden rounded-md border border-slate-200">
        <div className="h-[80px] bg-gradient-to-b from-sky-300 via-sky-400 to-blue-700" />
        <svg
          viewBox="0 0 24 24"
          className="thumb-anim thumb-dt-burst absolute top-[22px] left-[32px] size-[36px] fill-white"
          style={{ opacity: 0 }}
        >
          <path d={HEART} />
        </svg>
        <p className="flex h-[24px] items-center justify-between px-[4px] text-[6.5px]">
          <span>여름 바다</span>
          <span className="grid">
            <span
              className="thumb-anim thumb-dt-off col-start-1 row-start-1 flex items-center gap-[2px] text-slate-700"
              style={{ opacity: 0 }}
            >
              <svg viewBox="0 0 24 24" className="size-[7px] fill-none stroke-current stroke-2">
                <path d={HEART} />
              </svg>
              좋아요 12
            </span>
            <span className="thumb-anim thumb-dt-on col-start-1 row-start-1 flex items-center gap-[2px] text-rose-600">
              <svg viewBox="0 0 24 24" className="size-[7px] fill-rose-600">
                <path d={HEART} />
              </svg>
              좋아요 13
            </span>
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-dt-cursor" />
    </ThumbStage>
  );
}
