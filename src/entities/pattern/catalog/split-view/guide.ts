import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메일, 메신저, 설정처럼 목록에서 골라 자세히 보는 화면",
    "항목을 빠르게 옮겨 가며 볼 때",
    "태블릿, 데스크톱",
  ],
  whenNotToUse: [
    "상세가 아주 길고 집중해야 할 때(별도 화면)",
    "목록이 몇 개뿐일 때",
    "모바일만 쓰는 서비스(목록 → 상세 이동)",
  ],
  alternatives: [
    { name: "사이드바 레이아웃", slug: "sidebar-layout", reason: "메뉴와 본문을 나눌 때" },
    { name: "뒤로 가기", slug: "back-navigation", reason: "좁은 화면에서 목록으로 돌아올 때" },
  ],
  accessibility: [
    "좁은 화면에서는 보이지 않는 쪽을 display: none으로 숨겨 키보드와 보조 기술에서도 빠집니다.",
    '상세에는 "목록"으로 돌아가는 버튼을 둡니다.',
    "고른 항목은 aria-current로 표시합니다.",
    "컨테이너 쿼리라 패널 안에 넣어도 같은 규칙으로 동작합니다.",
  ],
};
