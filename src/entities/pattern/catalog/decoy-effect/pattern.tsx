import { type Pattern } from "@/entities/pattern/model/pattern";

export const decoyEffectPattern: Pattern = {
  slug: "decoy-effect",

  kind: "concept",
  name: "Decoy Effect",
  nameKo: "미끼 효과",
  aliases: ["유인 효과", "Attraction Effect"],
  category: "pricing-psychology",
  summary: "한 선택지에 밀리는 대안이 추가되면 상대적 선호가 달라질 수 있는 경향",
  description:
    "한 선택지가 가격이 같으면서 혜택이 적은 대안보다 우위에 있으면 그 선택지가 더 좋아 보일 수 있습니다. 정기 구독에서 비교 옵션을 추가해 구성을 직접 확인합니다.",
  tags: ["가격의 심리", "비대칭 지배"],
  loadGuide: () => import("@/entities/pattern/catalog/decoy-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/decoy-effect/DecoyEffectDemo").then(
      (m) => m.DecoyEffectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/decoy-effect/DecoyEffectThumbnail").then(
      (m) => m.DecoyEffectThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/decoy-effect/DecoyEffectDemo.tsx?raw"),
};
