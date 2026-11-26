import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const couponClaimPattern: Pattern = {
  slug: "coupon-claim",

  name: "Coupon Claim",
  nameKo: "쿠폰 받기",
  aliases: ["쿠폰 다운로드", "쿠폰 발급", "할인 쿠폰", "coupon download", "claim coupon"],
  category: "pricing-display",
  summary: "조건을 보고 쿠폰을 받는 카드",
  description:
    "할인 금액과 사용 조건을 쿠폰 위에 그대로 적고, 버튼 하나로 받게 하는 카드입니다. 받은 뒤에는 버튼이 받았어요로 바뀌어 다시 누를 수 없고, 어디서 쓰는지 바로 알려 줍니다.",
  tags: [...BASE_TAGS, "button", "disabled", "role=status"],
  loadGuide: () => import("@/entities/pattern/catalog/coupon-claim/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/coupon-claim/CouponClaimDemo").then(
      (m) => m.CouponClaimDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/coupon-claim/CouponClaimThumbnail").then(
      (m) => m.CouponClaimThumbnail,
    ),
  sources: [
    {
      fileName: "CouponClaim.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/coupon-claim/CouponClaim.tsx?raw"),
    },
    {
      fileName: "CouponClaimDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/coupon-claim/CouponClaimDemo.tsx?raw"),
    },
  ],
};
