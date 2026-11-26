import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "상품 분류처럼 탭이 많고 이름이 짧을 때",
    "모바일에서 탭이 화면보다 넓을 때",
    "자주 쓰는 탭이 앞쪽에 있을 때",
  ],
  whenNotToUse: [
    "탭이 서너 개뿐일 때(일반 탭 사용)",
    "모든 선택지를 한눈에 비교해야 할 때(필터 칩이나 셀렉트 사용)",
    "탭 이름이 길 때",
  ],
  alternatives: [
    { name: "탭", slug: "tabs", reason: "탭이 몇 개뿐일 때" },
    { name: "필터 칩", slug: "filter-chip", reason: "여러 개를 함께 켤 때" },
    { name: "가로 스크롤", slug: "horizontal-scroll", reason: "카드를 넘겨 볼 때" },
  ],
  accessibility: [
    "WAI-ARIA tabs 패턴으로 tablist, tab, tabpanel을 연결하고 ←/→, Home/End로 탭을 옮깁니다.",
    "고른 탭은 scrollIntoView로 보이는 자리에 둡니다.",
    "화살표 버튼은 마우스용 보조 수단이라 Tab 순서에서 뺍니다.",
    "선택한 탭은 굵기와 밑줄로 표시합니다.",
  ],
};
