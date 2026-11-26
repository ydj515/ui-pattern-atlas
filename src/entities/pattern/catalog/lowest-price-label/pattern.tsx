import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const lowestPriceLabelPattern: Pattern = {
  slug: "lowest-price-label",

  name: "Lowest Price Label",
  nameKo: "최저가 표시",
  aliases: ["역대 최저가", "최저가 배지", "가격 비교", "lowest price", "price history"],
  category: "pricing-display",
  summary: "비교 기간과 범위를 밝힌 최저가",
  description:
    "최저가라는 말 옆에 어떤 기간, 어떤 범위에서 비교했는지 확인할 수 있는 표시입니다. 배지는 짧게 두고 기준 보기를 누르면 비교 기간과 조건이 펼쳐집니다.",
  tags: [...BASE_TAGS, "aria-expanded", "disclosure"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/lowest-price-label/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/lowest-price-label/LowestPriceLabelDemo").then(
      (m) => m.LowestPriceLabelDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/lowest-price-label/LowestPriceLabelThumbnail").then(
      (m) => m.LowestPriceLabelThumbnail,
    ),
  sources: [
    {
      fileName: "LowestPriceLabel.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/lowest-price-label/LowestPriceLabel.tsx?raw"),
    },
    {
      fileName: "LowestPriceLabelDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/lowest-price-label/LowestPriceLabelDemo.tsx?raw"),
    },
  ],
};
