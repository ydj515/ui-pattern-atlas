import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as AnchoringDemo: 가격만 → 기준 가격 먼저. */
export function AnchoringThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-anchoring-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">가격만</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-anchoring-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">기준 가격 먼저</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-anchoring-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="block">린넨 셔츠</span>
          <b className="block text-[12px]">49,000원</b>
        </div>
        <div className="thumb-anim thumb-dk-anchoring-b absolute inset-0 bg-white p-[6px]">
          <span className="block">린넨 셔츠</span>
          <span className="block text-slate-400 line-through">정가 89,000원</span>
          <b className="block text-[12px]">49,000원</b>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-anchoring-cursor" />
    </ThumbStage>
  );
}
