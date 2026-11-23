import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

function Step({ motion, values }: { readonly motion: string; readonly values: readonly string[] }) {
  return (
    <span className="grid">
      {values.map((value, index) => (
        <span
          key={index}
          className={`thumb-anim ${motion}${index} col-start-1 row-start-1 text-right`}
          style={index === 0 ? undefined : HIDDEN}
        >
          {value}
        </span>
      ))}
    </span>
  );
}

/** Same order as OrderCancellationDemo: the refund is worked out as items are chosen, including the coupon taken back. */
export function OrderCancellationThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35]">
        <b className="text-[7.5px]">주문 취소</b>
        <p className="mt-[1px] font-semibold">취소할 상품</p>
        {[
          ["린넨 셔츠", "39,000원", "thumb-co-oc-a"],
          ["캔버스 백", "29,000원", "thumb-co-oc-b"],
          ["주방 행주 2개", "24,000원", ""],
        ].map(([name, price, on]) => (
          <p key={name} className="mt-[1px] flex items-center gap-[3px]">
            <span className="relative inline-block size-[6px] rounded-[1.5px] border border-slate-400">
              {on ? (
                <span
                  className={`thumb-anim ${on} absolute -inset-px rounded-[1.5px] bg-slate-900 text-center text-[4.5px] leading-[6px] text-white`}
                  style={HIDDEN}
                >
                  ✓
                </span>
              ) : null}
            </span>
            <span className="flex-1">{name}</span>
            <span className="text-slate-600">{price}</span>
          </p>
        ))}
        <div className="mt-[3px] rounded-[3px] bg-slate-50 p-[3px]">
          <p className="flex justify-between">
            <span className="text-slate-600">상품 금액</span>
            <Step motion="thumb-co-oc-amt" values={["0원", "39,000원", "68,000원"]} />
          </p>
          <p className="flex justify-between">
            <span className="text-slate-600">쿠폰 할인 회수</span>
            <span className="text-rose-600">
              <Step motion="thumb-co-oc-back" values={["−0원", "−0원", "−5,000원"]} />
            </span>
          </p>
          <p className="flex justify-between border-t border-slate-200 font-bold">
            <span>환불 예정 금액</span>
            <Step motion="thumb-co-oc-ref" values={["0원", "39,000원", "63,000원"]} />
          </p>
        </div>
      </div>
      <ThumbCursor motion="thumb-co-oc-cursor" />
    </ThumbStage>
  );
}
