import { type Pattern } from "@/entities/pattern/model/pattern";

export const scarcityPattern: Pattern = {
  slug: "scarcity",

  kind: "concept",
  name: "Scarcity",
  nameKo: "희소성",
  aliases: ["희소성 원리", "한정 효과", "scarcity principle", "limited availability"],
  category: "cognitive-bias",
  summary: "수량이나 시간 제약이 선택에 영향을 준다",
  description:
    "수량이나 시간이 제한되면 더 가치 있게 느끼고 빨리 결정하려는 경향입니다. 실제로 제약이 있을 때 담담하게 알리면 놓치지 않게 돕지만, 꾸민 제약은 가짜 희소성이 됩니다.",
  tags: ["인지 편향", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/scarcity/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/scarcity/ScarcityDemo").then((m) => m.ScarcityDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/scarcity/ScarcityThumbnail").then(
      (m) => m.ScarcityThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/scarcity/ScarcityDemo.tsx?raw"),
};
