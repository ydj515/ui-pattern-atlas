import { type Pattern } from "@/entities/pattern/model/pattern";

export const glassmorphismPattern: Pattern = {
  slug: "glassmorphism",

  kind: "concept",
  name: "Glassmorphism",
  nameKo: "글래스모피즘",
  aliases: ["글래스 효과", "유리 질감", "frosted glass"],
  category: "design-style",
  summary: "흐린 유리 질감",
  description:
    "반투명한 면 뒤의 배경을 흐리게 비쳐 젖빛 유리처럼 보이게 하는 스타일입니다. backdrop-filter로 뒤를 흐리고 얇은 흰 테두리로 유리의 모서리를 표현합니다.",
  tags: ["디자인 스타일", "backdrop-filter"],
  loadGuide: () => import("@/entities/pattern/catalog/glassmorphism/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismDemo").then(
      (m) => m.GlassmorphismDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismThumbnail").then(
      (m) => m.GlassmorphismThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/glassmorphism/GlassmorphismDemo.tsx?raw"),
};
