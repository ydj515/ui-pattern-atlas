import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "필터 여러 개를 겹쳐 거는 목록(숙소, 상품, 채용)",
    "필터 패널이 접혀 있어 걸린 조건이 잘 보이지 않을 때",
    "조건 하나만 빼도 결과가 생길 가능성이 높을 때",
  ],
  whenNotToUse: [
    "검색어 때문에 결과가 없을 때(검색 결과 없음 사용)",
    "필터 없이도 데이터가 없을 때(빈 상태 사용)",
    "필터가 하나뿐일 때(바로 지우기 버튼으로 충분)",
  ],
  alternatives: [
    { name: "검색 결과 없음", slug: "no-results", reason: "검색어가 원인일 때" },
    { name: "빈 화면", slug: "empty-state", reason: "데이터 자체가 없을 때" },
  ],
  accessibility: [
    '필터 칩은 버튼이고 이름이 "수영장 필터 빼기"처럼 누르면 일어날 일을 말합니다.',
    "× 기호는 aria-hidden으로 두고 글로 동작을 전합니다.",
    '결과 영역을 aria-live="polite"로 두어 필터를 뺀 결과를 읽어 줍니다.',
    "필터 모두 지우기로 한 번에 처음 상태로 돌아갈 수 있습니다.",
  ],
};
