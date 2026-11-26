import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "최근 일정 기간의 판매가 중 가장 낮을 때",
    "비교 범위가 판매처마다 다를 때",
    "소비자가 근거를 확인하고 싶어 할 때",
  ],
  whenNotToUse: [
    "비교 기간이나 범위를 밝힐 수 없을 때",
    "단순히 할인 중이라는 뜻일 때(할인율 배지 사용)",
    "모든 상품에 붙어 의미가 없어질 때",
  ],
  alternatives: [
    { name: "할인율 배지", slug: "discount-badge", reason: "기준가 대비 할인 폭을 보여 줄 때" },
    { name: "취소선 가격", slug: "strikethrough-price", reason: "이전 가격과 함께 보여 줄 때" },
  ],
  accessibility: [
    "기준 보기는 aria-expanded와 aria-controls가 있는 버튼입니다.",
    "닫힌 기준 목록은 hidden이라 읽히지 않습니다.",
    "배지 글자는 배경과 충분한 대비를 둡니다.",
  ],
};
