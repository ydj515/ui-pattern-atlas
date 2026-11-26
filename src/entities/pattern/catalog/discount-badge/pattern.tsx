import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const discountBadgePattern: Pattern = {
  slug: "discount-badge",

  name: "Discount Badge",
  nameKo: "할인율 배지",
  aliases: ["할인율 표시", "세일 배지", "퍼센트 할인", "sale badge", "percent off"],
  category: "pricing-display",
  summary: "검증된 기준가로 계산한 할인율",
  description:
    "실제로 판매된 적 있는 기준가와 지금 가격으로 할인율을 계산해 보여 주는 배지입니다. 퍼센트 옆에 어떤 가격을 기준으로 했는지 함께 적고, 기준가가 없으면 배지를 그리지 않습니다.",
  tags: [...BASE_TAGS, "Intl.NumberFormat", "sr-only"],
  loadGuide: () => import("@/entities/pattern/catalog/discount-badge/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/discount-badge/DiscountBadgeDemo").then(
      (m) => m.DiscountBadgeDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/discount-badge/DiscountBadgeThumbnail").then(
      (m) => m.DiscountBadgeThumbnail,
    ),
  sources: [
    {
      fileName: "DiscountBadge.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/discount-badge/DiscountBadge.tsx?raw"),
    },
    {
      fileName: "DiscountBadgeDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/discount-badge/DiscountBadgeDemo.tsx?raw"),
    },
  ],
};
