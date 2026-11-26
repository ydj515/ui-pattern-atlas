import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["검증된 비교 기준가와 현재 적용 가격을 함께 보여 줄 때"],
  whenNotToUse: ["기준 가격을 확인하기 어려운 상품이나 이미 판매가에 포함된 혜택"],
  alternatives: [
    {
      name: "요금제 비교",
      slug: "pricing-plan-comparison",
      reason: "한 상품의 할인 대신 서로 다른 구성의 가격을 비교할 때",
    },
  ],
  accessibility: [
    "기준 가격과 판매가를 텍스트 라벨로 구분하고 취소선이나 색만으로 의미를 전달하지 않습니다.",
  ],
};
