import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const scrollableTabsPattern: Pattern = {
  slug: "scrollable-tabs",

  name: "Scrollable Tabs",
  nameKo: "스크롤 탭",
  aliases: ["가로 스크롤 탭", "넘치는 탭", "overflow tabs", "category tabs"],
  category: "disclosure",
  summary: "탭이 넘칠 때 가로로 넘기기",
  description:
    "탭이 많아 한 줄에 다 들어가지 않을 때 가로로 넘겨 보게 하는 패턴입니다. 양 끝의 화살표로 넘기고, 고른 탭은 항상 보이는 자리로 옮겨 줍니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Scroll"],
  loadGuide: () => import("@/entities/pattern/catalog/scrollable-tabs/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scrollable-tabs/ScrollableTabsDemo").then(
      (m) => m.ScrollableTabsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scrollable-tabs/ScrollableTabsThumbnail").then(
      (m) => m.ScrollableTabsThumbnail,
    ),
  sources: [
    {
      fileName: "ScrollableTabs.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/scrollable-tabs/ScrollableTabs.tsx?raw"),
    },
    {
      fileName: "ScrollableTabsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/scrollable-tabs/ScrollableTabsDemo.tsx?raw"),
    },
  ],
};
