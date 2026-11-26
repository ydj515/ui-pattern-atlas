import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sidebarNavigationPattern: Pattern = {
  slug: "sidebar-navigation",

  name: "Sidebar Navigation",
  nameKo: "사이드바",
  aliases: ["왼쪽 메뉴", "LNB", "사이드 메뉴", "side nav", "app sidebar"],
  category: "navigation",
  summary: "왼쪽에 고정된 메뉴",
  description:
    "화면 왼쪽에 세로로 고정해 두는 메뉴입니다. 항목이 많아도 한눈에 보이고, 관련 항목은 그룹으로 접었다 펼 수 있습니다. 관리 도구나 업무용 앱에서 자주 씁니다.",
  tags: [...BASE_TAGS, "aria-current", "Disclosure"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/sidebar-navigation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationDemo").then(
      (m) => m.SidebarNavigationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationThumbnail").then(
      (m) => m.SidebarNavigationThumbnail,
    ),
  sources: [
    {
      fileName: "SidebarNavigation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sidebar-navigation/SidebarNavigation.tsx?raw"),
    },
    {
      fileName: "SidebarNavigationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/sidebar-navigation/SidebarNavigationDemo.tsx?raw"),
    },
  ],
};
