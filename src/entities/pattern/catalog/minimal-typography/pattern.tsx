import { type Pattern } from "@/entities/pattern/model/pattern";

export const minimalTypographyPattern: Pattern = {
  slug: "minimal-typography",

  kind: "concept",
  name: "Minimal Typography",
  nameKo: "미니멀 타이포그래피",
  aliases: ["미니멀 타이포", "여백 타이포", "minimal type"],
  category: "typography-style",
  summary: "여백과 글자 대비로 핵심 문구를 드러냄",
  description:
    "장식을 빼고 아주 가는 큰 글자와 넓은 여백만으로 문구를 드러내는 스타일입니다. 작은 보조 글을 넓은 자간으로 두어 크기 대비를 만듭니다.",
  tags: ["글자 스타일", "Minimal Typography"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/minimal-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyDemo").then(
      (m) => m.MinimalTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyThumbnail").then(
      (m) => m.MinimalTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/minimal-typography/MinimalTypographyDemo.tsx?raw"),
};
