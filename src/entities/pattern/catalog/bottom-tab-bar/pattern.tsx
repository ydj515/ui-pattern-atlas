import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const bottomTabBarPattern: Pattern = {
  slug: "bottom-tab-bar",

  name: "Bottom Tab Bar",
  nameKo: "하단 탭 바",
  aliases: ["탭 바", "하단 내비게이션", "tab bar", "bottom navigation"],
  category: "navigation",
  summary: "모바일 주요 화면 전환",
  description:
    "모바일 화면 아래에 3~5개의 주요 화면을 아이콘과 이름으로 늘어놓는 패턴입니다. 엄지가 닿는 곳에 있어 한 손으로도 화면을 오갈 수 있습니다.",
  tags: [...BASE_TAGS, "Mobile", "aria-current"],
  loadGuide: () => import("@/entities/pattern/catalog/bottom-tab-bar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarDemo").then(
      (m) => m.BottomTabBarDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarThumbnail").then(
      (m) => m.BottomTabBarThumbnail,
    ),
  sources: [
    {
      fileName: "BottomTabBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/bottom-tab-bar/BottomTabBar.tsx?raw"),
    },
    {
      fileName: "BottomTabBarDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/bottom-tab-bar/BottomTabBarDemo.tsx?raw"),
    },
  ],
};
