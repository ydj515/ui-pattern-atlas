import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 브랜드, 게시글처럼 결과 종류가 다를 때",
    "종류마다 결과 모양이 달라 섞기 어려울 때",
    "통합 검색에서 범위를 좁힐 때",
  ],
  whenNotToUse: [
    "같은 종류 안에서 조건을 걸 때(검색 결과 필터 사용)",
    "범위가 여섯 개 이상일 때",
    "결과가 적어 한 목록으로 충분할 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "검색과 상관없이 내용 묶음을 바꿀 때" },
    { name: "세그먼트 컨트롤", slug: "segmented-control", reason: "보기 방식만 바꿀 때" },
  ],
  accessibility: [
    "tablist, tab, tabpanel 역할과 aria-selected, aria-controls를 씁니다.",
    "←/→, Home, End로 탭을 옮기면 바로 결과가 바뀝니다.",
    "선택한 탭만 Tab 순서에 들어가 탭 목록을 한 번에 지나갑니다.",
    "탭 이름에 결과 수를 함께 적어 읽어 줍니다.",
  ],
};
