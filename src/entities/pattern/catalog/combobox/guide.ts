import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  origin:
    "콤보(combo)는 조합이라는 뜻으로, 글자를 입력하는 칸(텍스트 박스)과 고르는 목록(리스트 박스)을 하나로 합쳤다는 데서 온 이름이에요.",
  whenToUse: [
    "도시, 회사, 사람처럼 보기가 많은 목록",
    "사용자가 찾는 이름의 일부를 알고 있을 때",
    "키보드로 빠르게 골라야 할 때",
  ],
  whenNotToUse: [
    "보기가 몇 개뿐일 때(셀렉트나 라디오 그룹 사용)",
    "목록에 없는 값도 자유롭게 넣어야 할 때(텍스트 필드에 추천만 붙이기)",
    "여러 개를 고를 때(멀티 셀렉트나 태그 입력 사용)",
  ],
  alternatives: [
    { name: "셀렉트", slug: "select", reason: "목록이 짧을 때" },
    { name: "검색창", slug: "search-field", reason: "고르기보다 목록을 걸러 보는 것이 목적일 때" },
  ],
  accessibility: [
    'WAI-ARIA combobox 패턴으로 role="combobox", aria-expanded, aria-controls를 씁니다.',
    "↑/↓로 옮기는 보기는 aria-activedescendant로 알려 포커스는 입력에 남습니다.",
    "Enter로 고르고, Esc로 목록을 닫고 한 번 더 누르면 입력을 지웁니다.",
    "한글 조합 중에는 키 처리를 건너뛰어 글자가 잘리지 않습니다.",
  ],
};
