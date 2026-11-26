import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "요금, 혜택 안내에서 가장 중요한 조건 하나",
    "긴 문장 속 꼭 기억할 구절",
    "스크롤로 내려와 처음 보는 섹션",
  ],
  whenNotToUse: [
    "한 문단에 여러 곳(강조가 흐려짐)",
    "링크처럼 보일 수 있는 색",
    "불리한 조건을 숨기고 유리한 것만 강조할 때",
  ],
  alternatives: [
    { name: "페이드 업", slug: "fade-up", reason: "문장 전체를 차분히 보여 줄 때" },
    { name: "배지", slug: "badge", reason: "짧은 꼬리표로 강조할 때" },
  ],
  accessibility: [
    "mark 요소라 강조가 의미로도 전달됩니다.",
    "관찰 기능이 없거나 동작 줄이기에서는 처음부터 칠해진 상태로 보입니다.",
    "글자색은 그대로 두고 배경만 칠해 대비를 유지합니다.",
    "한 번 칠한 뒤에는 다시 지우지 않습니다.",
  ],
};
