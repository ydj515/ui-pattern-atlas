import { type Pattern } from "@/entities/pattern/model/pattern";

export const liquidGlassPattern: Pattern = {
  slug: "liquid-glass",

  kind: "concept",
  name: "Liquid Glass",
  nameKo: "리퀴드 글래스",
  aliases: ["리퀴드 글라스", "굴절 유리", "liquid glass UI"],
  category: "design-style",
  summary: "빛과 색이 비치고 굴절되는 유리 표면",
  description:
    "투명한 유리 면 아래로 배경의 빛과 색이 비치고, 가장자리에서 빛이 반사되는 것처럼 보이게 하는 스타일 사례입니다. 이 예시는 채도를 높인 흐림, 위쪽 반사광, 안쪽 하이라이트로 근사하며, 실제 굴절은 플랫폼 기능에 따라 다릅니다.",
  tags: ["디자인 스타일", "backdrop-filter"],
  loadGuide: () => import("@/entities/pattern/catalog/liquid-glass/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/liquid-glass/LiquidGlassDemo").then(
      (m) => m.LiquidGlassDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/liquid-glass/LiquidGlassThumbnail").then(
      (m) => m.LiquidGlassThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/liquid-glass/LiquidGlassDemo.tsx?raw"),
};
