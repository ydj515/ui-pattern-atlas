import { useState } from "react";
import { CouponClaim } from "@/shared/ui/patterns/coupon-claim/CouponClaim";

export function CouponClaimDemo() {
  const [claimed, setClaimed] = useState(false);
  return (
    <section className="grid w-80 gap-3">
      <CouponClaim
        title="5,000원 할인"
        conditions={["3만 원 이상 구매 시", "11월 30일까지", "주방용품에만 적용"]}
        claimed={claimed}
        onClaim={() => setClaimed(true)}
        claimLabel="쿠폰 받기"
        claimedLabel="받았어요"
      />
      <p role="status" className="h-4 text-xs text-slate-600">
        {claimed ? "주문서에서 바로 쓸 수 있어요" : ""}
      </p>
    </section>
  );
}
