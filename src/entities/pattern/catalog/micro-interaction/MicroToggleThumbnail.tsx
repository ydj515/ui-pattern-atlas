import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same card as MicroToggleDemo: 저장 squeezes, pops and fills in → 저장됨. */
export function MicroToggleThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[24px] h-[100px] w-[128px] overflow-hidden rounded-lg border border-slate-200">
        <span className="block h-[60px] bg-gradient-to-br from-amber-200 to-orange-300" />
        <p className="absolute top-[70px] left-[6px] w-[64px] text-[6.5px] leading-[9px] font-semibold">
          주말 브런치 맛집 5곳
        </p>
        <span className="absolute top-[68px] left-[76px] flex h-[16px] w-[46px] items-center justify-center gap-[3px] rounded-full border border-slate-900 text-[7px]">
          <span className="thumb-anim thumb-mt-icon relative size-[7px]">
            <svg
              viewBox="0 0 24 24"
              className="thumb-anim thumb-mt-off absolute inset-0 fill-none stroke-current stroke-2"
              style={{ opacity: 0 }}
            >
              <path d="M6 3h12v18l-6-4-6 4V3Z" />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="thumb-anim thumb-mt-on absolute inset-0 fill-slate-900"
            >
              <path d="M6 3h12v18l-6-4-6 4V3Z" />
            </svg>
          </span>
          <span className="grid">
            <span
              className="thumb-anim thumb-mt-off col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              저장
            </span>
            <span className="thumb-anim thumb-mt-on col-start-1 row-start-1">저장됨</span>
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-mt-cursor" />
    </ThumbStage>
  );
}
