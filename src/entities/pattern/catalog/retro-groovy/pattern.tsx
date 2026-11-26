import { type Pattern } from "@/entities/pattern/model/pattern";

export const retroGroovyPattern: Pattern = {
  slug: "retro-groovy",

  kind: "concept",
  name: "Retro Groovy",
  nameKo: "레트로 그루비",
  aliases: ["그루비 타이포", "70년대 글자", "retro groovy", "70s type"],
  category: "typography-style",
  summary: "두껍고 물결치는 획과 부드러운 곡선",
  description:
    "1970년대 포스터처럼 글자마다 높이와 각도를 물결치듯 달리하고, 주황, 노랑 그림자를 겹치는 스타일입니다.",
  tags: ["글자 스타일", "Retro Groovy"],
  loadGuide: () => import("@/entities/pattern/catalog/retro-groovy/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/retro-groovy/RetroGroovyDemo").then(
      (m) => m.RetroGroovyDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/retro-groovy/RetroGroovyThumbnail").then(
      (m) => m.RetroGroovyThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/retro-groovy/RetroGroovyDemo.tsx?raw"),
};
