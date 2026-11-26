import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const orderCancellationPattern: Pattern = {
  slug: "order-cancellation",

  name: "Order Cancellation",
  nameKo: "주문 취소",
  aliases: ["취소 신청", "부분 취소", "환불 요청", "cancel order", "refund"],
  category: "checkout",
  summary: "환불 금액을 미리 계산해 보여 주는 취소",
  description:
    "취소할 상품을 고르고 사유를 선택하면, 제출하기 전에 환불 예정 금액을 계산해 보여 주는 화면입니다. 쿠폰 조건이 깨져 회수되는 할인과 환불받는 방법까지 함께 적습니다.",
  tags: [...BASE_TAGS, "fieldset", "dl", "aria-live"],
  loadGuide: () =>
    import("@/entities/pattern/catalog/order-cancellation/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/order-cancellation/OrderCancellationDemo").then(
      (m) => m.OrderCancellationDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/order-cancellation/OrderCancellationThumbnail").then(
      (m) => m.OrderCancellationThumbnail,
    ),
  sources: [
    {
      fileName: "OrderCancellation.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/order-cancellation/OrderCancellation.tsx?raw"),
    },
    {
      fileName: "OrderCancellationDemo.tsx",
      role: "Usage",
      load: () =>
        import("@/entities/pattern/catalog/order-cancellation/OrderCancellationDemo.tsx?raw"),
    },
  ],
};
