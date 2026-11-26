import type { PatternGuide } from "@/entities/pattern/model/pattern";

/** Detail-page guidance, loaded only when the entry's page opens. */
export const guide: PatternGuide = {
  whenToUse: [
    "목록이나 카드마다 부가 동작이 있을 때",
    "자주 쓰지 않는 동작을 숨길 때",
    "안드로이드 앱의 툴바",
  ],
  whenNotToUse: [
    "주요 동작(눈에 보이는 버튼으로 두기)",
    "동작이 하나뿐일 때(그 동작을 바로 버튼으로)",
    "가로 점 세 개와 섞어 쓸 때(한 서비스에서 하나로 통일)",
  ],
  alternatives: [
    { name: "미트볼", slug: "meatballs", reason: "가로 점 세 개로 된 더보기" },
    { name: "드롭다운 메뉴", slug: "dropdown-menu", reason: "메뉴 자체의 구조" },
  ],
  accessibility: [
    "버튼 이름에 항목 이름을 넣어(회의록.pdf 더 보기) 어느 행의 메뉴인지 알립니다.",
    "aria-haspopup=menu와 aria-expanded를 둡니다.",
    "메뉴가 열리면 첫 항목에 포커스가 갑니다.",
    "누르는 영역은 32px 이상으로 둡니다.",
  ],
};
