import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "같은 검색을 자주 반복하는 서비스",
    "검색창을 눌렀지만 아직 입력하지 않았을 때",
    "검색어를 다시 입력하기 번거로울 때",
  ],
  whenNotToUse: [
    "기기를 여러 사람이 함께 쓸 때(기록 저장 끄기 제공)",
    "검색어가 민감할 수 있을 때",
    "검색이 드문 서비스",
  ],
  alternatives: [
    {
      name: "인기 검색어",
      slug: "trending-searches",
      reason: "내 기록 대신 많이 찾는 말을 보여 줄 때",
    },
    { name: "검색어 추천", slug: "search-suggestions", reason: "입력을 시작한 뒤 제안할 때" },
  ],
  accessibility: [
    "목록은 제목과 연결된 section이라 영역 이름으로 찾을 수 있습니다.",
    '지우기 버튼은 "캔버스 백 삭제"처럼 검색어가 들어간 이름을 가집니다.',
    "기록이 없으면 빈 목록 대신 안내 문구를 보여 줍니다.",
  ],
};
