import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same receipt as ReceiptSummaryDemo: the total first, then 품목 3개 opens the lines. */
export function ReceiptSummaryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[28px] h-[108px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 p-[7px] text-[6px] tabular-nums">
        <p className="flex items-baseline justify-between">
          <b>결제 금액</b>
          <b className="text-[10px]">52,000원</b>
        </p>
        <p className="text-right text-[5px] text-slate-500">신용카드 일시불</p>
        <p className="mt-[3px] flex justify-between border-t border-slate-100 pt-[3px] text-slate-700">
          품목 3개<span>▾</span>
        </p>
        <div className="thumb-anim thumb-rs-items absolute inset-x-[7px] top-[45px] grid gap-[1px] text-slate-700">
          <p className="flex justify-between">
            <span>린넨 셔츠 × 1</span>
            <span>39,000원</span>
          </p>
          <p className="flex justify-between">
            <span>양말 × 2</span>
            <span>6,000원</span>
          </p>
          <p className="flex justify-between">
            <span>에코백 × 1</span>
            <span>12,000원</span>
          </p>
        </div>
        <div className="thumb-anim thumb-rs-sum absolute inset-x-[7px] top-[74px] grid gap-[1px] border-t border-dashed border-slate-200 pt-[3px] text-slate-600">
          <p className="flex justify-between">
            <span>상품 금액</span>
            <span>57,000원</span>
          </p>
          <p className="flex justify-between">
            <span>할인</span>
            <span className="text-rose-600">−5,000원</span>
          </p>
          <p className="flex justify-between">
            <span>배송비</span>
            <span>무료</span>
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-rs-cursor" />
    </ThumbStage>
  );
}
