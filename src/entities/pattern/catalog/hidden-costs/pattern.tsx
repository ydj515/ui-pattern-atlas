import { type Pattern } from "@/entities/pattern/model/pattern";

export const hiddenCostsPattern: Pattern = {
  slug: "hidden-costs",

  kind: "concept",
  name: "Hidden Costs",
  nameKo: "숨은 비용",
  aliases: ["드립 프라이싱", "숨은 수수료", "drip pricing", "junk fees"],
  category: "dark-patterns",
  summary: "마지막 단계에서 붙는 요금",
  description:
    "상품 페이지에는 낮은 가격만 보여 주고, 결제 마지막 단계에서 수수료와 배송비를 더해 처음과 다른 금액을 내게 하는 다크 패턴입니다. 바른 방법은 처음 보는 가격에 피할 수 없는 비용을 모두 포함하는 것입니다.",
  tags: ["다크 패턴"],
  loadGuide: () => import("@/entities/pattern/catalog/hidden-costs/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/hidden-costs/HiddenCostsDemo").then(
      (m) => m.HiddenCostsDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/hidden-costs/HiddenCostsThumbnail").then(
      (m) => m.HiddenCostsThumbnail,
    ),
  loadDemoSource: () => import("@/entities/pattern/catalog/hidden-costs/HiddenCostsDemo.tsx?raw"),
};
