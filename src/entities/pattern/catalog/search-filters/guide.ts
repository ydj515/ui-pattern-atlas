import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "결과가 많아 조건으로 좁혀야 할 때",
    "가격, 크기, 색처럼 정해진 속성이 있을 때",
    "여러 조건을 함께 걸어야 할 때",
  ],
  whenNotToUse: [
    "결과가 몇 개뿐일 때",
    "조건이 하나라 탭이나 정렬로 충분할 때(검색 범위 탭 사용)",
    "조건이 수십 개라 별도 화면이 필요할 때",
  ],
  alternatives: [
    { name: "필터 칩", slug: "filter-chip", reason: "조건 몇 개를 한 줄로 고를 때" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "조건 때문에 결과가 0개일 때" },
  ],
  accessibility: [
    "조건 묶음은 fieldset과 legend로 이름을 붙입니다.",
    "조건은 체크박스라 Space로 켜고 끕니다.",
    "바뀐 결과 수는 aria-live로 읽어 줍니다.",
    '요약 칩은 "흰색 필터 해제"처럼 무엇을 빼는지 이름에 적습니다.',
  ],
};
