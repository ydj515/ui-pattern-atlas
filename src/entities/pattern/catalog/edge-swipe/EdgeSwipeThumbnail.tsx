import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same mail app as EdgeSwipeDemo: pull from the left edge → 보낸 편지함. */
export function EdgeSwipeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 overflow-hidden text-[7.5px]">
        <p className="flex h-[20px] items-center gap-[6px] border-b border-slate-100 px-[8px]">
          <span aria-hidden="true">☰</span>
          <b className="grid">
            <span className="thumb-anim thumb-es-inbox col-start-1 row-start-1">받은 편지함</span>
            <span
              className="thumb-anim thumb-es-sent col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              보낸 편지함
            </span>
          </b>
        </p>
        <p className="border-b border-slate-100 px-[12px] py-[5px] text-slate-700">
          주간 회의 안내
        </p>
        <p className="border-b border-slate-100 px-[12px] py-[5px] text-slate-700">결제 영수증</p>
        <p className="px-[12px] py-[5px] text-slate-700">새 댓글 알림</p>
        <span className="thumb-anim thumb-es-scrim absolute inset-0 bg-slate-900/30" />
        <div className="thumb-anim thumb-es-panel absolute inset-y-0 left-0 w-[96px] bg-white p-[5px] pt-[10px] shadow-xl">
          <span className="thumb-anim thumb-es-pick absolute top-[10px] left-[5px] h-[18px] w-[86px] rounded bg-blue-50" />
          <p className="relative h-[18px] px-[4px] leading-[18px]">받은 편지함</p>
          <p className="relative h-[18px] px-[4px] leading-[18px]">보낸 편지함</p>
          <p className="relative h-[18px] px-[4px] leading-[18px]">임시 보관함</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-edge-swipe-cursor" />
    </ThumbStage>
  );
}
