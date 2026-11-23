import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as SneakIntoBasketDemo: 다크 패턴 → 바른 방법. */
export function SneakIntoBasketThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-sneak-into-basket-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-sneak-into-basket-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-sneak-into-basket-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="block">린넨 셔츠 39,000원</span>
          <span className="block">
            배송 보험 3,000원 <span className="text-[5px] text-slate-400">(자동 추가)</span>
          </span>
          <b className="mt-[4px] block border-t border-slate-100 pt-[3px]">합계 42,000원</b>
        </div>
        <div className="thumb-anim thumb-dk-sneak-into-basket-b absolute inset-0 bg-white p-[6px]">
          <span className="block">린넨 셔츠 39,000원</span>
          <span className="flex items-center gap-[3px]">
            <span className="size-[6px] rounded-[1px] border border-slate-400" />
            배송 보험 3,000원 추가
          </span>
          <b className="mt-[4px] block border-t border-slate-100 pt-[3px]">합계 39,000원</b>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-sneak-into-basket-cursor" />
    </ThumbStage>
  );
}
