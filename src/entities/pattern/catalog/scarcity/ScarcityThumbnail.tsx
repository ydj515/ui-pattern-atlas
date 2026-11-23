import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as ScarcityDemo: 제약 없음 → 실제 제약 알리기. */
export function ScarcityThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-scarcity-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">제약 없음</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-scarcity-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">실제 제약 알리기</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-scarcity-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <b className="block text-[7.5px]">토요일 저녁 공연</b>
          <span className="block">11월 29일 19:00</span>
        </div>
        <div className="thumb-anim thumb-dk-scarcity-b absolute inset-0 bg-white p-[6px]">
          <b className="block text-[7.5px]">토요일 저녁 공연</b>
          <span className="block">11월 29일 19:00</span>
          <span className="mt-[4px] block">남은 좌석 12석</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-scarcity-cursor" />
    </ThumbStage>
  );
}
