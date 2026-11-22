import { type Pattern } from "@/entities/pattern/model/pattern";
import { HamburgerThumbnail } from "@/entities/pattern/catalog/hamburger/HamburgerThumbnail";

export const hamburgerPattern: Pattern = {
  slug: "hamburger",
  kind: "concept",
  name: "Hamburger ☰",
  nameKo: "햄버거",
  aliases: ["햄버거 메뉴", "삼선 아이콘", "hamburger menu", "menu icon"],
  category: "icon-names",
  summary: "가로줄 세 개, 메뉴 열기",
  description:
    "가로줄 세 개를 쌓은 아이콘으로, 누르면 숨겨 둔 전체 메뉴가 열립니다. 빵과 패티가 겹친 햄버거처럼 보여 붙은 이름이며, 모바일 상단 왼쪽에 주로 둡니다.",
  whenToUse: [
    "화면이 좁아 주요 메뉴를 숨겨야 할 때",
    "메뉴 항목이 다섯 개를 넘을 때",
    "사용자가 메뉴 위치를 알고 있는 앱",
  ],
  whenNotToUse: [
    "자주 오가는 메뉴가 네다섯 개뿐일 때(하단 탭 바 사용)",
    "데스크톱에서 공간이 넉넉할 때",
    "아이콘만으로 뜻이 전해지지 않는 사용자층(메뉴 글자 함께 쓰기)",
  ],
  alternatives: [
    { name: "베지 버거", slug: "veggie-burger", reason: "가로줄 두 개로 된 메뉴 아이콘" },
    { name: "케밥", slug: "kebab", reason: "항목 하나의 추가 동작" },
  ],
  accessibility: [
    "아이콘 버튼에 메뉴 열기라는 이름을 붙입니다.",
    "aria-expanded로 메뉴가 열렸는지 알립니다.",
    "열린 메뉴는 Esc나 바깥을 눌러 닫습니다.",
    "현재 페이지는 aria-current로 표시합니다.",
  ],
  tags: ["아이콘 이름", "메뉴"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/hamburger/HamburgerDemo").then((m) => m.HamburgerDemo),
  Thumbnail: HamburgerThumbnail,
  loadDemoSource: () => import("@/entities/pattern/catalog/hamburger/HamburgerDemo.tsx?raw"),
};
