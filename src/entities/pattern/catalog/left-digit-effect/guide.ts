import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: ["표시 숫자가 가격 지각에 주는 영향을 설명할 때"],
  whenNotToUse: ["표시 방식 때문에 실제 가격이나 차액을 확인하기 어렵게 만들 때"],
  alternatives: [
    {
      name: "취소선 가격",
      slug: "strikethrough-price",
      reason: "실제 할인 금액의 기준값과 적용가를 정확히 전달할 때",
    },
  ],
  accessibility: ["첫 자리 강조에 색상 외에도 굵기와 설명을 함께 쓰고 차액을 읽을 수 있게 합니다."],
};
