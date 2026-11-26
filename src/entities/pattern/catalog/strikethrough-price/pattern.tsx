import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const strikethroughPricePattern: Pattern = {
  slug: "strikethrough-price",

  name: "Strikethrough Price",
  nameKo: "취소선 가격",
  aliases: ["할인가", "기준가", "정가"],
  category: "pricing-display",
  summary: "기준 가격과 실제 적용 가격을 함께 표시",
  description:
    "취소선이 들어간 기준 가격 옆에 결제할 금액을 보여 줍니다. 할인 조건은 가격 옆에서 확인할 수 있게 합니다.",
  tags: BASE_TAGS,
  loadGuide: () =>
    import("@/entities/pattern/catalog/strikethrough-price/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/strikethrough-price/StrikethroughPriceDemo").then(
      (m) => m.StrikethroughPriceDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/strikethrough-price/StrikethroughPriceThumbnail").then(
      (m) => m.StrikethroughPriceThumbnail,
    ),
  sources: [
    {
      fileName: "StrikethroughPrice.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/strikethrough-price/StrikethroughPrice.tsx?raw"),
    },
    {
      fileName: "StrikethroughPriceDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/strikethrough-price/StrikethroughPriceDemo.tsx?raw"),
    },
  ],
};
