import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same coupon as CouponClaimDemo: the conditions are on the coupon → 쿠폰 받기 → 받았어요. */
export function CouponClaimThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[22px] left-[12px] flex h-[56px] w-[152px] overflow-hidden rounded-[8px] border border-dashed border-rose-300 bg-rose-50 text-[6px]">
        <div className="flex-1 p-[5px]">
          <b className="text-[10px] text-rose-700">5,000원 할인</b>
          <p className="mt-[2px] text-slate-700">3만 원 이상 구매 시</p>
          <p className="text-slate-700">11월 30일까지</p>
          <p className="text-slate-700">주방용품에만 적용</p>
        </div>
        <span className="relative grid w-[40px] border-l border-dashed border-rose-300 font-semibold">
          <span
            className="thumb-anim thumb-pcc-a absolute inset-0 grid place-items-center bg-rose-600 text-white"
            style={{ opacity: 0 }}
          >
            쿠폰 받기
          </span>
          <span className="thumb-anim thumb-pcc-b absolute inset-0 grid place-items-center bg-white text-rose-700">
            받았어요
          </span>
        </span>
      </div>
      <p className="thumb-anim thumb-pcc-b absolute top-[84px] left-[12px] text-[6px] text-slate-600">
        주문서에서 바로 쓸 수 있어요
      </p>
      <ThumbCursor motion="thumb-pcc-cursor" />
    </ThumbStage>
  );
}
