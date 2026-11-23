import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CouponClaimThumbnail } from "@/entities/pattern/catalog/coupon-claim/CouponClaimThumbnail";

export const couponClaimPattern: Pattern = {
  slug: "coupon-claim",
  name: "Coupon Claim",
  nameKo: "쿠폰 받기",
  aliases: ["쿠폰 다운로드", "쿠폰 발급", "할인 쿠폰", "coupon download", "claim coupon"],
  category: "pricing-display",
  summary: "조건을 보고 쿠폰을 받는 카드",
  description:
    "할인 금액과 사용 조건을 쿠폰 위에 그대로 적고, 버튼 하나로 받게 하는 카드입니다. 받은 뒤에는 버튼이 받았어요로 바뀌어 다시 누를 수 없고, 어디서 쓰는지 바로 알려 줍니다.",
  whenToUse: [
    "최소 주문 금액, 기간, 적용 범위가 있는 쿠폰",
    "상품 상세나 이벤트 화면에서 미리 받게 할 때",
    "받은 쿠폰을 결제 단계에서 쓰게 할 때",
  ],
  whenNotToUse: [
    "조건 없이 자동으로 적용되는 할인",
    "조건이 길어 카드에 다 담을 수 없을 때(상세 안내 연결)",
    "코드를 직접 입력해야 할 때(입력 필드 사용)",
  ],
  alternatives: [
    { name: "할인율 배지", slug: "discount-badge", reason: "쿠폰을 적용한 결과를 보여 줄 때" },
    { name: "숨은 비용", slug: "hidden-costs", reason: "조건을 나중에 알리면 생기는 문제를 볼 때" },
  ],
  accessibility: [
    "카드는 쿠폰 이름으로 된 section이라 내용 묶음으로 읽힙니다.",
    "받은 뒤 버튼은 disabled가 되고 이름이 받았어요로 바뀝니다.",
    "사용 조건은 목록으로 두어 하나씩 읽힙니다.",
  ],
  tags: [...BASE_TAGS, "button", "disabled", "role=status"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/coupon-claim/CouponClaimDemo").then(
      (m) => m.CouponClaimDemo,
    ),
  Thumbnail: CouponClaimThumbnail,
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
