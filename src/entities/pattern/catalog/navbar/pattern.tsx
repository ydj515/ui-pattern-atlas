import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const navbarPattern: Pattern = {
  slug: "navbar",

  name: "Navbar",
  nameKo: "상단 내비게이션",
  aliases: ["헤더 메뉴", "GNB", "상단 메뉴", "navigation bar", "header nav"],
  category: "navigation",
  summary: "사이트 전체 메뉴",
  description:
    "모든 페이지 위에 같은 자리에 두는 사이트 메뉴입니다. 로고, 몇 개의 주요 링크, 오른쪽의 대표 행동으로 이루어지고, 지금 보고 있는 페이지를 표시합니다.",
  tags: [...BASE_TAGS, "aria-current", "nav landmark"],
  loadGuide: () => import("@/entities/pattern/catalog/navbar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/navbar/NavbarDemo").then((m) => m.NavbarDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/navbar/NavbarThumbnail").then((m) => m.NavbarThumbnail),
  sources: [
    {
      fileName: "Navbar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/navbar/Navbar.tsx?raw"),
    },
    {
      fileName: "NavbarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/navbar/NavbarDemo.tsx?raw"),
    },
  ],
};
