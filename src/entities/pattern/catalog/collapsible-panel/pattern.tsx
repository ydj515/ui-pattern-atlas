import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const collapsiblePanelPattern: Pattern = {
  slug: "collapsible-panel",

  name: "Collapsible Panel",
  nameKo: "접히는 패널",
  aliases: ["사이드 패널 접기", "인스펙터", "collapsible sidebar", "side panel"],
  category: "disclosure",
  summary: "옆으로 접히는 보조 영역",
  description:
    "속성, 필터, 댓글처럼 옆에 붙은 보조 영역을 좁은 막대로 접어 본문을 넓게 쓰는 패턴입니다. 막대에 남은 버튼으로 언제든 다시 펼칩니다.",
  tags: [...BASE_TAGS, "aria-expanded", "Landmark"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/collapsible-panel/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/collapsible-panel/CollapsiblePanelDemo").then(
      (m) => m.CollapsiblePanelDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/collapsible-panel/CollapsiblePanelThumbnail").then(
      (m) => m.CollapsiblePanelThumbnail,
    ),
  sources: [
    {
      fileName: "CollapsiblePanel.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/collapsible-panel/CollapsiblePanel.tsx?raw"),
    },
    {
      fileName: "CollapsiblePanelDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/collapsible-panel/CollapsiblePanelDemo.tsx?raw"),
    },
  ],
};
