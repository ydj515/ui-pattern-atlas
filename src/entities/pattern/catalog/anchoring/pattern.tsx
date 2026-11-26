import { type Pattern } from "@/entities/pattern/model/pattern";

export const anchoringPattern: Pattern = {
  slug: "anchoring",

  kind: "concept",
  name: "Anchoring",
  nameKo: "앵커링",
  aliases: ["앵커 효과", "닻 내림 효과", "anchoring bias", "reference price"],
  category: "pricing-psychology",
  summary: "처음 본 숫자가 이후 판단 기준이 된다",
  description:
    "처음 제시된 숫자가 닻처럼 기준이 되어 이후 판단에 영향을 준다는 원리입니다. 정가를 먼저 보여 주면 할인가가 더 싸게 느껴지므로, 실제로 판매된 적 있는 가격만 기준으로 써야 합니다.",
  tags: ["가격의 심리", "기준점"],
  loadGuide: () => import("@/entities/pattern/catalog/anchoring/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/anchoring/AnchoringDemo").then((m) => m.AnchoringDemo),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/anchoring/AnchoringThumbnail").then(
      (m) => m.AnchoringThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/anchoring/AnchoringDemo.tsx?raw"),
};
