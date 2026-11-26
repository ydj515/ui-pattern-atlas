import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "검색어로 찾는 목록이나 상품, 문서",
    "오타가 잦은 고유명사나 외래어를 검색할 때",
    "비슷한 결과를 제안할 수 있을 때",
  ],
  whenNotToUse: [
    "필터 때문에 결과가 없을 때(필터 결과 없음 사용)",
    "처음부터 데이터가 없는 화면(빈 상태 사용)",
    "검색 서버 오류(오류 상태 사용)",
  ],
  alternatives: [
    { name: "빈 화면", slug: "empty-state", reason: "아직 아무것도 만들지 않은 처음 화면" },
    { name: "필터 결과 없음", slug: "no-filter-results", reason: "필터 조건이 너무 좁을 때" },
  ],
  accessibility: [
    '결과 영역을 aria-live="polite"로 두어 결과가 없다는 사실을 읽어 줍니다.',
    "제목에 검색어를 그대로 넣어 무엇을 찾았는지 확인할 수 있게 합니다.",
    "제안 검색어는 버튼이라 누르면 바로 다시 검색합니다.",
    "검색어 지우기로 처음 목록으로 돌아갈 수 있습니다.",
  ],
};
