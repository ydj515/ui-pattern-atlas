import { type Pattern } from "@/entities/pattern/model/pattern";

export const artDecoPattern: Pattern = {
  slug: "art-deco",

  kind: "concept",
  name: "Art Deco",
  nameKo: "아르데코",
  aliases: ["아르 데코", "데코 타이포", "Art Deco type"],
  category: "typography-style",
  summary: "대칭과 장식적인 기하학 선을 강조",
  description:
    "가늘고 높은 글자, 넓은 자간, 금색과 겹선 장식으로 1920년대 아르데코의 화려함을 표현하는 스타일입니다. 대칭과 반복되는 선이 특징입니다.",
  tags: ["글자 스타일", "Art Deco"],
  loadGuide: () => import("@/entities/pattern/catalog/art-deco/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/art-deco/ArtDecoDemo").then((m) => m.ArtDecoDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/art-deco/ArtDecoThumbnail").then((m) => m.ArtDecoThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/art-deco/ArtDecoDemo.tsx?raw"),
};
