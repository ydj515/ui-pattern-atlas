import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const lowStockIndicatorPattern: Pattern = {
  slug: "low-stock-indicator",

  name: "Low Stock Indicator",
  nameKo: "재고 표시",
  aliases: ["남은 수량", "품절 표시", "재고 부족", "low stock", "sold out"],
  category: "pricing-display",
  summary: "실제 남은 재고와 품절을 안내",
  description:
    "선택한 옵션의 실제 재고에 따라 재고 있음, 남은 수량, 품절을 나눠 보여 주는 표시입니다. 수량이 적을 때만 숫자를 보여 주고, 품절이면 구매 대신 재입고 알림처럼 다음에 할 수 있는 일로 바꿉니다.",
  tags: [...BASE_TAGS, "aria-live", "radio", "SVG"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/low-stock-indicator/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorDemo").then(
      (m) => m.LowStockIndicatorDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorThumbnail").then(
      (m) => m.LowStockIndicatorThumbnail,
    ),
  sources: [
    {
      fileName: "LowStockIndicator.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/low-stock-indicator/LowStockIndicator.tsx?raw"),
    },
    {
      fileName: "LowStockIndicatorDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/low-stock-indicator/LowStockIndicatorDemo.tsx?raw"),
    },
  ],
};
