import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "메뉴 항목이 많은 앱이나 관리 도구",
    "섹션 사이를 자주 오가야 할 때",
    "하위 메뉴를 그룹으로 묶어야 할 때",
  ],
  whenNotToUse: [
    "메뉴가 몇 개뿐인 웹사이트(상단 내비게이션 사용)",
    "작은 화면(햄버거 메뉴나 하단 탭 바 사용)",
    "읽기 중심 콘텐츠 페이지",
  ],
  alternatives: [
    { name: "상단 내비게이션", slug: "navbar", reason: "메뉴가 적을 때" },
    { name: "트리 뷰", slug: "tree-view", reason: "파일처럼 깊게 중첩된 구조" },
  ],
  accessibility: [
    "그룹 제목은 aria-expanded를 가진 버튼이라 하위 메뉴를 펼치고 접을 수 있습니다.",
    "현재 페이지가 들어 있는 그룹은 처음부터 펼쳐 둡니다.",
    '현재 페이지는 aria-current="page"와 채워진 배경으로 표시합니다.',
    "nav에 이름을 붙여 다른 내비게이션과 구분합니다.",
  ],
};
