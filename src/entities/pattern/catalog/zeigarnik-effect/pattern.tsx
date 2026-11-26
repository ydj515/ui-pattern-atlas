import { type Pattern } from "@/entities/pattern/model/pattern";

export const zeigarnikEffectPattern: Pattern = {
  slug: "zeigarnik-effect",

  kind: "concept",
  name: "Zeigarnik Effect",
  nameKo: "자이가르닉 효과",
  aliases: ["미완성 효과", "자이가르닉", "Zeigarnik effect", "open loops"],
  category: "ux-laws",
  summary: "끝내지 못한 일이 계속 떠오른다",
  description:
    "끝낸 일보다 끝내지 못한 일이 더 오래 기억에 남고 마무리하고 싶어진다는 원리입니다. 진행률과 남은 일을 보여 주면 설정이나 프로필을 끝까지 채우게 돕습니다.",
  tags: ["UX 법칙", "UX 심리"],
  loadGuide: () => import("@/entities/pattern/catalog/zeigarnik-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikDemo").then(
      (m) => m.ZeigarnikDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikThumbnail").then(
      (m) => m.ZeigarnikThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/zeigarnik-effect/ZeigarnikDemo.tsx?raw"),
};
