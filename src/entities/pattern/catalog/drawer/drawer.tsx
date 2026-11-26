import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const drawerPattern: Pattern = {
  slug: "drawer",

  name: "Drawer",
  nameKo: "드로어",
  aliases: ["사이드 패널", "슬라이드 패널", "side sheet", "off-canvas", "필터 패널"],
  category: "overlay",
  summary: "화면 가장자리에서 밀려 나오는 작업 패널",
  description:
    "화면 가장자리에서 패널을 열어, 지금 보고 있는 화면을 유지한 채 필터나 상세 정보, 비교적 긴 입력을 처리하는 패턴입니다.",
  tags: [...BASE_TAGS, "dialog element"],
  loadGuide: () => import("@/entities/pattern/catalog/drawer/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/drawer/DrawerDemo").then((m) => m.DrawerDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/drawer/DrawerThumbnail").then((m) => m.DrawerThumbnail),
  sources: [
    {
      fileName: "Drawer.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/drawer/Drawer.tsx?raw"),
    },
    {
      fileName: "DrawerDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/drawer/DrawerDemo.tsx?raw"),
    },
  ],
};
