import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const pricingPlanComparisonPattern: Pattern = {
  slug: "pricing-plan-comparison",

  name: "Pricing Plan Comparison",
  nameKo: "요금제 비교",
  aliases: ["요금표", "Pricing Table", "요금 비교"],
  category: "pricing-display",
  summary: "요금제의 전체 가격·청구 주기·혜택을 나란히 비교",
  description:
    "요금제마다 같은 항목과 가격 단위를 사용해 비용과 혜택을 빠르게 비교할 수 있게 합니다. 추천 표시와 실제 선택 상태를 구분합니다.",
  tags: BASE_TAGS,
  loadGuide: () =>
    import("@/entities/pattern/catalog/pricing-plan-comparison/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/pricing-plan-comparison/PricingPlanComparisonDemo").then(
      (m) => m.PricingPlanComparisonDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/pricing-plan-comparison/PricingPlanComparisonThumbnail").then(
      (m) => m.PricingPlanComparisonThumbnail,
    ),
  sources: [
    {
      fileName: "PricingPlanComparison.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/pricing-plan-comparison/PricingPlanComparison.tsx?raw"),
    },
    {
      fileName: "PricingPlanComparisonDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/pricing-plan-comparison/PricingPlanComparisonDemo.tsx?raw"),
    },
  ],
};
