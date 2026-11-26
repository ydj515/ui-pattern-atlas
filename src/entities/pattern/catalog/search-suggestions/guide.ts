import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품, 장소처럼 검색어가 어느 정도 정해진 서비스",
    "철자나 띄어쓰기가 헷갈리는 이름",
    "긴 검색어를 덜 입력하게 할 때",
  ],
  whenNotToUse: [
    "정해진 목록에서만 골라야 할 때(콤보박스 사용)",
    "추천할 데이터가 충분하지 않을 때",
    "입력 내용이 민감해 추천을 보이면 안 될 때",
  ],
  alternatives: [
    { name: "콤보박스", slug: "combobox", reason: "목록 안의 값만 고르게 할 때" },
    { name: "검색창", slug: "search-field", reason: "추천 없이 바로 검색할 때" },
  ],
  accessibility: [
    '입력창은 role="combobox"이고 추천 목록은 listbox입니다.',
    "↑/↓로 추천을 옮기면 aria-activedescendant로 알려 주고, 포커스는 입력창에 남습니다.",
    "Esc로 목록을 닫고, 한글 조합 중에는 키 입력을 가로채지 않습니다.",
    'form에 role="search"를 붙여 검색 영역으로 찾을 수 있습니다.',
  ],
};
