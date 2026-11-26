import { type Pattern } from "@/entities/pattern/model/pattern";

export const gradientTypographyPattern: Pattern = {
  slug: "gradient-typography",

  kind: "concept",
  name: "Gradient Typography",
  nameKo: "그라데이션",
  aliases: ["그라데이션 글자", "그라디언트 텍스트", "gradient text"],
  category: "typography-style",
  summary: "글자 안에서 색이나 밝기가 점진적으로 변화",
  description:
    "글자 속을 여러 색이 이어지는 그라데이션으로 채우는 스타일입니다. 배경을 글자 모양으로 잘라 내는 background-clip: text로 만듭니다.",
  tags: ["글자 스타일", "Gradient Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/gradient-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/gradient-typography/GradientTypographyDemo").then(
      (m) => m.GradientTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/gradient-typography/GradientTypographyThumbnail").then(
      (m) => m.GradientTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/gradient-typography/GradientTypographyDemo.tsx?raw"),
};
