import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "모바일 앱의 최상위 화면이 3~5개일 때",
    "화면 사이를 자주 오갈 때",
    "새 소식 개수를 함께 보여 줘야 할 때",
  ],
  whenNotToUse: [
    "화면이 6개 이상일 때(나머지는 더 보기로)",
    "데스크톱 화면(상단 내비게이션이나 사이드바 사용)",
    "화면 안의 보기 전환(탭이나 세그먼트 컨트롤 사용)",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "한 화면 안의 보기 전환" },
    { name: "햄버거 메뉴", slug: "mobile-menu", reason: "메뉴가 많을 때" },
  ],
  accessibility: [
    "아이콘 아래에 항상 이름을 보여 줍니다.",
    '현재 화면은 aria-current="page"이고 색과 굵기로 함께 표시합니다.',
    '배지 숫자는 aria-label에 "새 알림 3개"처럼 넣어 읽어 줍니다.',
    "홈 표시줄을 피하도록 safe-area 여백을 둡니다.",
  ],
};
