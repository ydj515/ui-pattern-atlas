import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 사진, 카드처럼 같은 크기의 항목이 반복될 때",
    "화면 폭이 다양할 때",
    "중단점을 따로 관리하고 싶지 않을 때",
  ],
  whenNotToUse: [
    "항목 크기가 서로 달라야 할 때(벤토 그리드나 메이슨리 사용)",
    "열 수가 디자인상 고정돼야 할 때",
    "표처럼 행과 열을 비교할 때",
  ],
  alternatives: [
    { name: "카드 그리드", slug: "card-grid", reason: "카드 안의 줄을 맞출 때" },
    { name: "메이슨리", slug: "masonry-grid", reason: "높이가 다른 항목" },
  ],
  accessibility: [
    "DOM 순서가 곧 보이는 순서라 읽는 순서가 어긋나지 않습니다.",
    "목록에 이름을 붙여 항목 수가 함께 읽힙니다.",
    "확대해도 열이 줄어들 뿐 내용이 잘리지 않습니다(WCAG 1.4.10).",
    "repeat(auto-fill, minmax())만 쓰고 JavaScript가 필요 없습니다.",
  ],
};
