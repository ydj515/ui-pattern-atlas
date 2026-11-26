import { type Pattern } from "@/entities/pattern/model/pattern";

export const chromeTypographyPattern: Pattern = {
  slug: "chrome-typography",

  kind: "concept",
  name: "Y2K Chrome",
  nameKo: "Y2K 크롬",
  aliases: ["Y2K", "크롬 글자", "metallic type", "Y2K chrome"],
  category: "typography-style",
  summary: "금속 반사와 광택을 활용한 글자",
  description:
    "은빛 그라데이션과 빛 번짐으로 금속 표면처럼 반짝이는 글자를 만드는 스타일입니다. 2000년 전후의 디지털 낙관을 담은 Y2K 미감에서 인기를 얻었습니다.",
  tags: ["글자 스타일", "Y2K Chrome"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/chrome-typography/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/chrome-typography/Y2KChromeDemo").then(
      (m) => m.Y2KChromeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/chrome-typography/Y2KChromeThumbnail").then(
      (m) => m.Y2KChromeThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/chrome-typography/Y2KChromeDemo.tsx?raw"),
};
