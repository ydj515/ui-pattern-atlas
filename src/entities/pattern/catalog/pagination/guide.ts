import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "검색 결과, 주문 내역처럼 위치를 기억하고 다시 찾아와야 하는 목록일 때",
    "전체 분량을 사용자에게 알려줘야 할 때",
    "푸터나 하단 콘텐츠에 접근할 수 있어야 할 때",
  ],
  whenNotToUse: [
    "피드처럼 끊김 없이 훑어보는 콘텐츠일 때(무한 스크롤 검토)",
    "항목이 한두 페이지 분량뿐일 때",
    "모바일에서 작은 숫자 버튼을 연속으로 눌러야 할 때(더 보기 버튼 검토)",
  ],
  alternatives: [
    { name: "Load More", reason: "모바일에서 이어서 보기" },
    { name: "Infinite Scroll", reason: "탐색형 피드" },
  ],
  accessibility: [
    "<nav aria-label>로 감싸 페이지 이동 영역임을 알립니다.",
    '현재 페이지 버튼에 aria-current="page"를 지정합니다.',
    "아이콘 전용 이전/다음 버튼에 aria-label을 제공하고, 끝에서는 disabled로 둡니다.",
    "말줄임(…)은 aria-hidden으로 숨겨 불필요한 낭독을 막습니다.",
  ],
};
