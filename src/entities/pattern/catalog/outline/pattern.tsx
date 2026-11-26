import { type Pattern } from "@/entities/pattern/model/pattern";

export const outlinePattern: Pattern = {
  slug: "outline",

  kind: "concept",
  name: "Outline",
  nameKo: "아웃라인",
  aliases: ["윤곽선 글자", "외곽선 타이포", "outline text", "stroke text"],
  category: "typography-style",
  summary: "내부보다 글자 외곽선으로 형태를 강조",
  description:
    "글자 속은 비우고 외곽선만 그려 형태를 드러내는 스타일입니다. 굵은 글자에 -webkit-text-stroke를 주어 만들고, 채운 글자와 섞어 강약을 줍니다.",
  tags: ["글자 스타일", "Outline"],
  loadGuide: () => import("@/entities/pattern/catalog/outline/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/outline/OutlineTypeDemo").then((m) => m.OutlineTypeDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/outline/OutlineTypeThumbnail").then(
      (m) => m.OutlineTypeThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/outline/OutlineTypeDemo.tsx?raw"),
};
