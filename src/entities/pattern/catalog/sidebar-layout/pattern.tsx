import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const sidebarLayoutPattern: Pattern = {
  slug: "sidebar-layout",

  name: "Sidebar Layout",
  nameKo: "사이드바 레이아웃",
  aliases: ["두 단 레이아웃", "메뉴 본문", "two column", "app shell"],
  category: "layout",
  summary: "메뉴와 본문 두 단",
  description:
    "왼쪽에 메뉴, 오른쪽에 본문을 두는 두 단 구성입니다. 좁아지면 메뉴가 본문 위의 가로 줄로 옮겨 갑니다.",
  tags: [...BASE_TAGS, "Landmark", "Container queries"],
  loadGuide: () => import("@/entities/pattern/catalog/sidebar-layout/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutDemo").then(
      (m) => m.SidebarLayoutDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutThumbnail").then(
      (m) => m.SidebarLayoutThumbnail,
    ),
  sources: [
    {
      fileName: "SidebarLayout.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sidebar-layout/SidebarLayout.tsx?raw"),
    },
    {
      fileName: "SidebarLayoutDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/sidebar-layout/SidebarLayoutDemo.tsx?raw"),
    },
  ],
};
