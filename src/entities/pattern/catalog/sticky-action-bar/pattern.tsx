import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const stickyActionBarPattern: Pattern = {
  slug: "sticky-action-bar",

  name: "Sticky Action Bar",
  nameKo: "하단 고정 버튼",
  aliases: ["하단 CTA", "구매 바", "bottom bar", "sticky CTA"],
  category: "layout",
  summary: "모바일에서 늘 보이는 주요 버튼",
  description:
    "상품 설명을 읽는 동안에도 화면 아래에 가격과 구매 버튼이 남아 있는 패턴입니다. 엄지가 닿는 자리에 있어 바로 행동할 수 있습니다.",
  tags: [...BASE_TAGS, "Mobile", "Safe area"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/sticky-action-bar/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarDemo").then(
      (m) => m.StickyActionBarDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarThumbnail").then(
      (m) => m.StickyActionBarThumbnail,
    ),
  sources: [
    {
      fileName: "StickyActionBar.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/sticky-action-bar/StickyActionBar.tsx?raw"),
    },
    {
      fileName: "StickyActionBarDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/sticky-action-bar/StickyActionBarDemo.tsx?raw"),
    },
  ],
};
