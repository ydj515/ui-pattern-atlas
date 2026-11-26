import { type Pattern } from "@/entities/pattern/model/pattern";

export const vonRestorffEffectPattern: Pattern = {
  slug: "von-restorff-effect",

  kind: "concept",
  name: "Von Restorff Effect",
  nameKo: "폰 레스토프 효과",
  aliases: ["고립 효과", "레스토프 효과", "isolation effect", "von Restorff"],
  category: "ux-laws",
  summary: "튀는 하나가 기억에 남는다",
  description:
    "비슷한 것들 사이에서 하나만 다르게 생긴 것이 더 눈에 띄고 기억에 남는다는 원리입니다. 꼭 알려야 할 하나만 색, 크기, 테두리로 구분하고 나머지는 같게 둡니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/von-restorff-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/von-restorff-effect/VonRestorffDemo").then(
      (m) => m.VonRestorffDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/von-restorff-effect/VonRestorffThumbnail").then(
      (m) => m.VonRestorffThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/von-restorff-effect/VonRestorffDemo.tsx?raw"),
};
