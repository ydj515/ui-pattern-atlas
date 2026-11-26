import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 요금제, 글 목록처럼 같은 구조가 반복될 때",
    "카드 아래쪽 버튼을 줄 맞춰 보여 줄 때",
    "열 수가 폭에 따라 바뀔 때",
  ],
  whenNotToUse: [
    "카드 높이가 크게 다를 때(메이슨리 사용)",
    "비교할 값이 많을 때(표 사용)",
    "카드가 한두 개뿐일 때",
  ],
  alternatives: [
    { name: "반응형 그리드", slug: "responsive-grid", reason: "단순한 칸 배치" },
    { name: "카드", slug: "card", reason: "카드 하나의 구성" },
  ],
  accessibility: [
    "카드 목록은 이름이 있는 ul이라 항목 수가 함께 읽힙니다.",
    "카드를 flex 세로 배치로 두고 버튼에 mt-auto를 줘 줄을 맞춥니다.",
    "열 수는 컨테이너 폭에 따라 바뀌고 DOM 순서는 유지됩니다.",
    "버튼 이름이 같다면 aria-label로 어떤 상품인지 덧붙입니다.",
  ],
};
