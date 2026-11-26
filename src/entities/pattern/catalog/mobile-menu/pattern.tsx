import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const mobileMenuPattern: Pattern = {
  slug: "mobile-menu",

  name: "Mobile Menu",
  nameKo: "햄버거 메뉴",
  aliases: ["햄버거 버튼", "모바일 메뉴", "hamburger menu", "nav drawer"],
  category: "navigation",
  summary: "작은 화면에서 접어 둔 메뉴",
  description:
    "작은 화면에서 사이트 메뉴를 버튼 하나에 접어 두고, 누르면 펼치는 패턴입니다. 화면을 넓게 쓰면서도 모든 메뉴에 닿을 수 있습니다.",
  tags: [...BASE_TAGS, "aria-expanded", "Focus management"],
  loadGuide: () => import("@/entities/pattern/catalog/mobile-menu/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/mobile-menu/MobileMenuDemo").then((m) => m.MobileMenuDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/mobile-menu/MobileMenuThumbnail").then(
      (m) => m.MobileMenuThumbnail,
    ),
  sources: [
    {
      fileName: "MobileMenu.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/mobile-menu/MobileMenu.tsx?raw"),
    },
    {
      fileName: "MobileMenuDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/mobile-menu/MobileMenuDemo.tsx?raw"),
    },
  ],
};
