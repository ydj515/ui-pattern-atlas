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
  whenToUse: [
    "최근 일정 기간의 판매가 중 가장 낮을 때",
    "비교 범위가 판매처마다 다를 때",
    "소비자가 근거를 확인하고 싶어 할 때",
  ],
  whenNotToUse: [
    "비교 기간이나 범위를 밝힐 수 없을 때",
    "단순히 할인 중이라는 뜻일 때(할인율 배지 사용)",
    "모든 상품에 붙어 의미가 없어질 때",
  ],
  alternatives: [
    { name: "할인율 배지", slug: "discount-badge", reason: "기준가 대비 할인 폭을 보여 줄 때" },
    { name: "취소선 가격", slug: "strikethrough-price", reason: "이전 가격과 함께 보여 줄 때" },
  ],
  accessibility: [
    "기준 보기는 aria-expanded와 aria-controls가 있는 버튼입니다.",
    "닫힌 기준 목록은 hidden이라 읽히지 않습니다.",
    "배지 글자는 배경과 충분한 대비를 둡니다.",
  ],
  tags: [...BASE_TAGS, "aria-expanded", "disclosure"],
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
