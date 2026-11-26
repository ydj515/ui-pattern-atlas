import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "일정 금액 이상 무료배송일 때",
    "장바구니와 상품 추천 옆",
    "남은 금액이 크지 않아 채울 만할 때",
  ],
  whenNotToUse: [
    "모든 주문이 무료배송일 때",
    "기준이 너무 높아 막대가 거의 비어 있을 때",
    "배송비가 지역마다 크게 다를 때",
  ],
  alternatives: [
    { name: "프로그레스 바", slug: "progress-bar", reason: "작업 진행률을 보여 줄 때" },
    { name: "묶음 할인", slug: "bundle-deal", reason: "금액 대신 수량이 기준일 때" },
  ],
  accessibility: [
    "막대는 progress 요소이고 이름이 있습니다.",
    "남은 금액은 글자로 함께 보여 주고 aria-live로 알립니다.",
    "기준을 넘으면 색과 함께 글자로 무료배송이라고 알립니다.",
  ],
};
