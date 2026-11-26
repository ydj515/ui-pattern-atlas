import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "2개, 3개부터 할인되는 소모품",
    "수량에 따라 단가가 달라질 때",
    "장바구니에 담기 전에 합계를 보여 줄 때",
  ],
  whenNotToUse: [
    "묶음과 상관없이 단가가 같을 때(수량 선택기 사용)",
    "원하지 않는 수량을 담게 유도할 때",
    "서로 다른 상품을 묶는 세트 구성",
  ],
  alternatives: [
    { name: "숫자 입력", slug: "number-stepper", reason: "할인 없이 수량만 고를 때" },
    {
      name: "무료배송 진행 바",
      slug: "free-shipping-progress",
      reason: "수량 대신 결제 금액이 기준일 때",
    },
  ],
  accessibility: [
    "빼기와 더하기 버튼에 이름이 있고, 한계에 닿으면 disabled가 됩니다.",
    "합계는 aria-live로 바뀔 때마다 읽어 줍니다.",
    "할인 적용 여부를 색이 아닌 글자로 알립니다.",
  ],
};
