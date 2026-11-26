import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결제 수단, 등급에 따라 적립률이 다를 때",
    "주문 전에 받을 혜택을 알려 줄 때",
    "지급 시점과 사용 조건이 있을 때",
  ],
  whenNotToUse: [
    "적립이 확정되지 않은 금액을 확정처럼 보일 때",
    "적립 조건이 너무 복잡해 한 줄로 설명되지 않을 때",
    "결제와 상관없는 화면",
  ],
  alternatives: [
    { name: "할인율 배지", slug: "discount-badge", reason: "지금 바로 깎이는 혜택일 때" },
    {
      name: "무료배송 진행 바",
      slug: "free-shipping-progress",
      reason: "금액 기준을 채우는 혜택일 때",
    },
  ],
  accessibility: [
    "적립 예정 금액은 aria-live로 바뀔 때마다 읽어 줍니다.",
    "지급 조건은 금액 바로 아래 글자로 둡니다.",
    "퍼센트와 금액을 함께 적어 계산 근거를 보여 줍니다.",
  ],
};
