import { useState } from "react";
import { StrikethroughPrice } from "@/shared/ui/patterns/strikethrough-price/StrikethroughPrice";

export const PRICE_EXAMPLE = {
  product: "무선 이어폰",
  price: "39,000원",
  discountedPrice: "19,500원",
  condition: "첫 주문 쿠폰",
};

export function StrikethroughPriceDemo() {
  const [applied, setApplied] = useState(false);
  const copy = {
    reference: "기준 가격",
    current: "적용 가격",
    regular: "판매가",
    condition: "조건",
    apply: "쿠폰 적용",
    undo: "쿠폰 적용 취소",
  };
  return (
    <div className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4">
      <h2 className="font-semibold text-slate-900">{PRICE_EXAMPLE.product}</h2>
      <div aria-live="polite">
        <StrikethroughPrice
          referencePrice={applied ? PRICE_EXAMPLE.price : undefined}
          price={applied ? PRICE_EXAMPLE.discountedPrice : PRICE_EXAMPLE.price}
          condition={applied ? PRICE_EXAMPLE.condition : undefined}
          labels={copy}
        />
      </div>
      <button
        type="button"
        className="justify-self-start rounded-md bg-blue-700 px-3 py-2 text-sm text-white"
        onClick={() => setApplied(!applied)}
      >
        {applied ? copy.undo : copy.apply}
      </button>
    </div>
  );
}
