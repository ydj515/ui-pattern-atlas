import { type Pattern } from "@/entities/pattern/model/pattern";

export const chunkyPattern: Pattern = {
  slug: "chunky",

  kind: "concept",
  name: "Chunky",
  nameKo: "청키",
  aliases: ["두꺼운 글자", "블록 타이포", "chunky type"],
  category: "typography-style",
  summary: "묵직하고 두꺼운 획으로 덩어리감 강조",
  description:
    "가장 두꺼운 굵기, 좁은 자간, 옆으로 살짝 넓힌 형태로 글자를 한 덩어리처럼 보이게 하는 스타일입니다. 멀리서도 눈에 띕니다.",
  tags: ["글자 스타일", "Chunky"],
  loadGuide: () => import("@/entities/pattern/catalog/chunky/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/chunky/ChunkyDemo").then((m) => m.ChunkyDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/chunky/ChunkyThumbnail").then((m) => m.ChunkyThumbnail),
  loadDemoSource: () => import("@/entities/pattern/catalog/chunky/ChunkyDemo.tsx?raw"),
};
