import { type Pattern } from "@/entities/pattern/model/pattern";

export const flatDesignPattern: Pattern = {
  slug: "flat-design",

  kind: "concept",
  name: "Flat Design",
  nameKo: "플랫",
  aliases: ["플랫 디자인", "평면 디자인", "flat UI"],
  category: "design-style",
  summary: "그림자 없이 면과 색으로",
  description:
    "그림자, 질감, 입체 효과를 빼고 단색 면과 분명한 색 대비로 화면을 구성하는 스타일입니다. 2010년대 초 모바일 화면에서 널리 퍼졌고, 모든 디자인 스타일 항목이 같은 플레이리스트 카드를 그려 차이를 비교합니다.",
  tags: ["디자인 스타일", "플랫"],
  loadGuide: () => import("@/entities/pattern/catalog/flat-design/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/flat-design/FlatDesignDemo").then((m) => m.FlatDesignDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/flat-design/FlatDesignThumbnail").then(
      (m) => m.FlatDesignThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/flat-design/FlatDesignDemo.tsx?raw"),
};
