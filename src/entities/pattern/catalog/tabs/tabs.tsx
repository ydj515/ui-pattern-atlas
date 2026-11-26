import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const tabsPattern: Pattern = {
  slug: "tabs",

  name: "Tabs",
  nameKo: "탭",
  aliases: ["탭 메뉴", "탭바", "tab bar", "tablist"],
  category: "disclosure",
  summary: "같은 화면 안에서 관련 콘텐츠를 나눠 전환하는 메뉴",
  description:
    "관련 있는 콘텐츠를 여러 패널로 나누고, 한 번에 하나의 패널만 보여주는 패턴입니다. 페이지를 이동하지 않고도 같은 수준의 정보 사이를 빠르게 전환할 수 있습니다.",
  tags: [...BASE_TAGS, "WAI-ARIA APG", "Keyboard"],
  loadGuide: () => import("@/entities/pattern/catalog/tabs/guide").then((m) => m.guide),
  loadPreview: () => import("@/entities/pattern/catalog/tabs/TabsDemo").then((m) => m.TabsDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/tabs/TabsThumbnail").then((m) => m.TabsThumbnail),
  sources: [
    {
      fileName: "Tabs.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/tabs/Tabs.tsx?raw"),
    },
    {
      fileName: "TabsDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/tabs/TabsDemo.tsx?raw"),
    },
  ],
};
