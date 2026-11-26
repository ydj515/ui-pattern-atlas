import { type Pattern } from "@/entities/pattern/model/pattern";

export const compromiseEffectPattern: Pattern = {
  slug: "compromise-effect",

  kind: "concept",
  name: "Compromise Effect",
  nameKo: "타협 효과",
  aliases: ["가운데 요금제", "중간 옵션"],
  category: "pricing-psychology",
  summary: "옵션 구성에 따라 중간 선택지가 합리적으로 느껴지는 경향",
  description:
    "가격과 혜택의 상·하한이 바뀌면 같은 요금제가 중간 선택지로 보일 수 있습니다. 상위 요금제를 추가하거나 추천 표시를 켜서 구성이 주는 인상과 라벨의 강조를 따로 살펴볼 수 있습니다.",
  tags: ["가격의 심리", "선택 맥락"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/compromise-effect/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/compromise-effect/CompromiseEffectDemo").then(
      (m) => m.CompromiseEffectDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/compromise-effect/CompromiseEffectThumbnail").then(
      (m) => m.CompromiseEffectThumbnail,
    ),
  loadDemoSource: () =>
    import("@/entities/pattern/catalog/compromise-effect/CompromiseEffectDemo.tsx?raw"),
};
