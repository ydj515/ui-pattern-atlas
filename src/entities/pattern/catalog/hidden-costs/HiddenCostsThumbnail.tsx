import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same comparison as HiddenCostsDemo: 다크 패턴 → 바른 방법. */
export function HiddenCostsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-dk-hidden-costs-sa absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">다크 패턴</span>
        </span>
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-dk-hidden-costs-sb absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">바른 방법</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] border border-slate-200 text-[6.5px]">
        <div
          className="thumb-anim thumb-dk-hidden-costs-a absolute inset-0 bg-white p-[6px]"
          style={{ opacity: 0 }}
        >
          <span className="text-slate-600">상품 페이지</span>
          <b className="block text-[10px]">39,000원</b>
          <span className="mt-[4px] block text-slate-600">결제 단계</span>
          <b className="block text-[10px]">45,900원</b>
          <span className="text-[5.5px] text-rose-600">수수료·배송비 추가</span>
        </div>
        <div className="thumb-anim thumb-dk-hidden-costs-b absolute inset-0 bg-white p-[6px]">
          <span className="text-slate-600">상품 페이지</span>
          <b className="block text-[10px]">45,900원</b>
          <span className="text-[5.5px] text-slate-600">배송비·수수료 포함</span>
          <span className="mt-[3px] block text-slate-600">결제 단계</span>
          <b className="block text-[10px]">45,900원</b>
        </div>
      </div>
      <ThumbCursor motion="thumb-dk-hidden-costs-cursor" />
    </ThumbStage>
  );
}
