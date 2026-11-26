import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const freeShippingProgressPattern: Pattern = {
  slug: "free-shipping-progress",

  name: "Free Shipping Progress",
  nameKo: "무료배송 진행 바",
  aliases: [
    "무료배송까지",
    "배송비 진행률",
    "장바구니 진행 바",
    "free shipping bar",
    "shipping threshold",
  ],
  category: "pricing-display",
  summary: "무료배송까지 남은 금액",
  description:
    "장바구니 금액이 무료배송 기준까지 얼마나 남았는지 금액과 막대로 보여 주는 진행 바입니다. 상품을 담을 때마다 남은 금액이 줄고, 기준을 넘으면 무료배송이라고 바뀝니다.",
  tags: [...BASE_TAGS, "progress", "aria-live"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/free-shipping-progress/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressDemo").then(
      (m) => m.FreeShippingProgressDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressThumbnail").then(
      (m) => m.FreeShippingProgressThumbnail,
    ),
  sources: [
    {
      fileName: "FreeShippingProgress.tsx",
      role: "Component",
      load: () =>
        import("@/shared/ui/patterns/free-shipping-progress/FreeShippingProgress.tsx?raw"),
    },
    {
      fileName: "FreeShippingProgressDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/free-shipping-progress/FreeShippingProgressDemo.tsx?raw"),
    },
  ],
};
