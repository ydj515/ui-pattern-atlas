import { type Pattern } from "@/entities/pattern/model/pattern";

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
  tags: ["아이콘 이름", "메뉴"],
  loadGuide: () => import("@/entities/pattern/catalog/hamburger/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hamburger/HamburgerDemo").then((m) => m.HamburgerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hamburger/HamburgerThumbnail").then(
      (m) => m.HamburgerThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/hamburger/HamburgerDemo.tsx?raw"),
};
