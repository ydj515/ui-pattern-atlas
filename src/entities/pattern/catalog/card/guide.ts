import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "글, 상품, 장소처럼 이미지가 있는 콘텐츠 목록",
    "한눈에 여러 개를 훑고 골라야 할 때",
    "카드 안에 저장 같은 작은 동작이 하나 있을 때",
  ],
  whenNotToUse: [
    "항목을 자세히 비교할 때(표 사용)",
    "이미지 없이 제목만 있을 때(리스트 사용)",
    "카드 안에 링크와 버튼이 많을 때",
  ],
  alternatives: [
    { name: "리스트", slug: "list", reason: "이미지 없이 훑어볼 때" },
    { name: "메이슨리", slug: "masonry-grid", reason: "높이가 다른 카드를 촘촘히 놓을 때" },
  ],
  accessibility: [
    "링크는 제목 하나이고 가상 요소로 카드 전체를 덮어, 카드 어디를 눌러도 열립니다.",
    "카드 안의 저장 버튼은 링크 위에 따로 놓여 독립적으로 동작하고 aria-pressed로 상태를 알립니다.",
    "이미지 영역은 장식이라 aria-hidden입니다.",
    "키보드 포커스는 카드 전체 테두리로 보여 줍니다.",
  ],
};
