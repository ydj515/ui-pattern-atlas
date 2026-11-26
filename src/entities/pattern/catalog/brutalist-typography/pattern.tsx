import { type Pattern } from "@/entities/pattern/model/pattern";

export const brutalistTypographyPattern: Pattern = {
  slug: "brutalist-typography",

  kind: "concept",
  name: "Brutalist Typography",
  nameKo: "브루털리즘 타이포그래피",
  aliases: ["브루탈 타이포", "거친 타이포", "brutalist type"],
  category: "typography-style",
  summary: "크고 거친 글자와 강한 절단·겹침",
  description:
    "글자를 지나치게 크게 키우고 행간을 줄여 겹치거나, 색 띠로 잘라 강한 인상을 주는 스타일입니다. 규칙을 일부러 깨 긴장감을 만듭니다.",
  tags: ["글자 스타일", "Brutalist Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/brutalist-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyDemo").then(
      (m) => m.BrutalistTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyThumbnail").then(
      (m) => m.BrutalistTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/brutalist-typography/BrutalistTypographyDemo.tsx?raw"),
};
