import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "파일, 폴더처럼 깊이가 정해지지 않은 구조",
    "여러 단계를 오가며 항목을 골라야 할 때",
    "구조 전체의 위치를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "한두 단계뿐인 메뉴(사이드바나 아코디언 사용)",
    "모바일 화면(단계별로 화면을 넘기는 목록이 쉬움)",
    "순서가 중요한 목록",
  ],
  alternatives: [
    { name: "사이드바", slug: "sidebar-navigation", reason: "앱 메뉴처럼 얕은 구조" },
    { name: "아코디언", slug: "accordion", reason: "한 단계만 접을 때" },
  ],
  accessibility: [
    'WAI-ARIA tree로 role="tree", treeitem, group과 aria-level을 씁니다.',
    "트리 전체가 Tab 한 번이고 ↑/↓로 이동, →로 펼치거나 들어가고 ←로 접거나 부모로 갑니다.",
    "폴더는 aria-expanded, 파일은 aria-selected로 상태를 알립니다.",
    "Home/End로 처음과 끝으로 이동합니다.",
  ],
};
