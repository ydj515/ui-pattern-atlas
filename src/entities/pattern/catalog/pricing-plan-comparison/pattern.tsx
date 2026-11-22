import { BASE_TAGS, type Pattern } from "../../model/pattern";
import { PricingPlanComparisonThumbnail } from "./PricingPlanComparisonThumbnail";

export const pricingPlanComparisonPattern: Pattern = {
  slug: "pricing-plan-comparison",

  name: "Pricing Plan Comparison",
  nameKo: "요금제 비교",
  aliases: ["요금표", "Pricing Table", "요금 비교"],
  category: "pricing-display",
  summary: "요금제의 전체 가격·청구 주기·혜택을 나란히 비교",
  description:
    "요금제마다 같은 항목과 가격 단위를 사용해 비용과 혜택을 빠르게 비교할 수 있게 합니다. 추천 표시와 실제 선택 상태를 구분합니다.",
  whenToUse: ["구독이나 멤버십에서 청구 단위가 같은 여러 옵션을 제시할 때"],
  whenNotToUse: ["요금제 간 혜택을 설명하기 전에 하나의 옵션을 자동 확정할 때"],
  alternatives: [
    {
      name: "타협 효과",
      slug: "compromise-effect",
      reason: "중간 옵션과 추천 강조가 어떻게 달리 보이는지 검토할 때",
    },
  ],
  accessibility: [
    "라디오 그룹에서 한 요금제를 선택하도록 하고 청구 주기와 포함 여부를 말로도 표시합니다.",
  ],
  tags: BASE_TAGS,
  loadPreview: () => import("./PricingPlanComparisonDemo").then((m) => m.PricingPlanComparisonDemo),
  Thumbnail: PricingPlanComparisonThumbnail,
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
      load: () => import("./PricingPlanComparisonDemo.tsx?raw"),
    },
  ],
};
