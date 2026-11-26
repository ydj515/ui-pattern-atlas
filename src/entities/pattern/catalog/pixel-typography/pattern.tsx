import { type Pattern } from "@/entities/pattern/model/pattern";

export const pixelTypographyPattern: Pattern = {
  slug: "pixel-typography",

  kind: "concept",
  name: "Pixel Typography",
  nameKo: "픽셀",
  aliases: ["도트 글자", "비트맵 글자", "pixel font", "8-bit type"],
  category: "typography-style",
  summary: "픽셀 격자에 맞춘 계단 모양의 획",
  description:
    "작은 격자의 점을 하나하나 켜서 글자를 만드는 스타일로, 오래된 게임과 전광판 느낌을 줍니다. 이 예시는 문구를 비트맵으로 그려 SVG 사각형으로 키웠습니다.",
  tags: ["글자 스타일", "Pixel Typography"],
  loadGuide: () => import("@/entities/pattern/catalog/pixel-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyDemo").then(
      (m) => m.PixelTypographyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyThumbnail").then(
      (m) => m.PixelTypographyThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/pixel-typography/PixelTypographyDemo.tsx?raw"),
};
