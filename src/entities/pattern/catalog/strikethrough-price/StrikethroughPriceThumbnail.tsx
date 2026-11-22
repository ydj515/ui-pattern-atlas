import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

const PRICE_EXAMPLE = {
  product: "무선 이어폰",
  price: "39,000원",
  discountedPrice: "19,500원",
  condition: "첫 주문 쿠폰",
} as const;

export function StrikethroughPriceThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[12px] left-[16px] font-semibold">{PRICE_EXAMPLE.product}</p>
      <div className="thumb-anim thumb-price-before absolute top-[31px] left-[16px]">
        판매가 <b>{PRICE_EXAMPLE.price}</b>
      </div>
      <div className="thumb-anim thumb-price-picked absolute top-[31px] left-[16px] space-y-0.5">
        <p>
          기준 가격 <s>{PRICE_EXAMPLE.price}</s>
        </p>
        <p>
          적용 가격 <b>{PRICE_EXAMPLE.discountedPrice}</b>
        </p>
        <p>조건 {PRICE_EXAMPLE.condition}</p>
      </div>
      <div className="absolute top-[83px] left-[16px] grid h-[18px] w-[80px] place-items-center rounded bg-blue-700 text-white">
        <span className="thumb-anim thumb-price-before">쿠폰 적용</span>
        <span className="thumb-anim thumb-price-picked absolute">쿠폰 적용 취소</span>
      </div>
      <ThumbCursor motion="thumb-discount-cursor" />
    </ThumbStage>
  );
}
