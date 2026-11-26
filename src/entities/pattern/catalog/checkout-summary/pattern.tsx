import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const checkoutSummaryPattern: Pattern = {
  slug: "checkout-summary",

  name: "Checkout Summary",
  nameKo: "결제 금액 확인",
  aliases: ["주문 요약", "최종 결제 금액", "order summary", "payment summary"],
  category: "checkout",
  summary: "합계를 이루는 금액과 필수 동의를 한곳에",
  description:
    "결제 직전에 상품 금액, 배송비, 할인을 한 줄씩 보여 주고 최종 금액을 크게 적는 영역입니다. 할인은 빼는 금액으로 표시하고, 결제 버튼에 최종 금액을 다시 적으며, 필수 동의를 받아야 버튼이 켜집니다.",
  tags: [...BASE_TAGS, "dl", "aria-live", "disabled"],
  loadGuide: () => import("@/entities/pattern/catalog/checkout-summary/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/checkout-summary/CheckoutSummaryDemo").then(
      (m) => m.CheckoutSummaryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/checkout-summary/CheckoutSummaryThumbnail").then(
      (m) => m.CheckoutSummaryThumbnail,
    ),
  sources: [
    {
      fileName: "CheckoutSummary.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/checkout-summary/CheckoutSummary.tsx?raw"),
    },
    {
      fileName: "CheckoutSummaryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/checkout-summary/CheckoutSummaryDemo.tsx?raw"),
    },
  ],
};
