import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same pages as SwipeNavigationDemo: swipe 오늘 (맑음 18°) to 내일 (비 14°). */
export function SwipeNavigationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[28px] h-[100px] w-[120px] overflow-hidden rounded-md border border-slate-200">
        <p className="flex h-[16px] items-center justify-between border-b border-slate-100 px-[4px] text-[6.5px] text-slate-500">
          <span>‹ 이전</span>
          <span className="grid font-semibold text-slate-900">
            <span
              className="thumb-anim thumb-sn-t1 col-start-1 row-start-1 text-center"
              style={{ opacity: 0 }}
            >
              오늘
            </span>
            <span className="thumb-anim thumb-sn-t2 col-start-1 row-start-1 text-center">내일</span>
          </span>
          <span>다음 ›</span>
        </p>
        <div
          className="thumb-anim thumb-sn-track absolute top-[16px] left-0 flex h-[84px] w-[240px]"
          style={{ transform: "translateX(-120px)" }}
        >
          <div className="grid w-[120px] place-content-center bg-gradient-to-b from-sky-200 to-amber-100 text-center">
            <p className="text-[18px] font-semibold">18°</p>
            <p className="text-[7px] text-slate-700">맑음</p>
          </div>
          <div className="grid w-[120px] place-content-center bg-gradient-to-b from-slate-300 to-sky-200 text-center">
            <p className="text-[18px] font-semibold">14°</p>
            <p className="text-[7px] text-slate-700">비</p>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-sn-cursor" />
    </ThumbStage>
  );
}
