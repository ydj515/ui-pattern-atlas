import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same totals as CheckoutSummaryDemo: every amount on its own line, and the pay button waits for the agreement. */
export function CheckoutSummaryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">결제 금액</b>
        {[
          ["상품 금액", "92,000원", ""],
          ["배송비", "0원", ""],
          ["쿠폰 할인", "−5,000원", "text-rose-600"],
        ].map(([label, amount, tone]) => (
          <p key={label} className="mt-[2px] flex justify-between">
            <span className="text-slate-600">{label}</span>
            <span className={tone}>{amount}</span>
          </p>
        ))}
        <p className="mt-[3px] flex justify-between border-t border-slate-200 pt-[2px] text-[7px] font-bold">
          최종 결제 금액<span>87,000원</span>
        </p>
        <p className="mt-[3px] flex items-start gap-[3px] text-[5.5px] text-slate-700">
          <span className="relative mt-[1px] inline-block size-[6px] shrink-0 rounded-[1.5px] border border-slate-400">
            <span
              className="thumb-anim thumb-co-cs-agree absolute -inset-px rounded-[1.5px] bg-slate-900 text-center text-[4.5px] leading-[6px] text-white"
              style={HIDDEN}
            >
              ✓
            </span>
          </span>
          주문 내용을 확인했고 결제에 동의해요(필수)
        </p>
        <span className="relative mt-[3px] block rounded-[3px] bg-slate-900 py-[2px] text-center font-semibold text-white">
          <span className="thumb-anim thumb-co-cs-lock absolute inset-0 rounded-[3px] bg-white/60" />
          87,000원 결제하기
        </span>
        <p
          className="thumb-anim thumb-co-cs-paid mt-[2px] text-[5.5px] text-slate-600"
          style={HIDDEN}
        >
          87,000원 결제를 진행해요
        </p>
      </div>
      <ThumbCursor motion="thumb-co-cs-cursor" />
    </ThumbStage>
  );
}
