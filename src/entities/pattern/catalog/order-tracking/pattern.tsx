import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const orderTrackingPattern: Pattern = {
  slug: "order-tracking",

  name: "Order Tracking",
  nameKo: "배송 조회",
  aliases: ["배송 추적", "배송 상태", "주문 상태", "delivery tracking", "shipment status"],
  category: "checkout",
  summary: "지난 단계의 시각과 지금 단계를 보여 주는 배송 상태",
  description:
    "결제부터 배송 완료까지 단계를 순서 목록으로 보여 주는 화면입니다. 지난 단계에는 시각이 남고 지금 단계가 표시되며, 도착 예정일과 운송장 번호를 위에 두어 바로 읽고 복사할 수 있습니다.",
  tags: [...BASE_TAGS, "ol", "aria-current", "clipboard"],
  loadGuide: () => import("@/entities/pattern/catalog/order-tracking/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/order-tracking/OrderTrackingDemo").then(
      (m) => m.OrderTrackingDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/order-tracking/OrderTrackingThumbnail").then(
      (m) => m.OrderTrackingThumbnail,
    ),
  sources: [
    {
      fileName: "OrderTracking.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/order-tracking/OrderTracking.tsx?raw"),
    },
    {
      fileName: "OrderTrackingDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/order-tracking/OrderTrackingDemo.tsx?raw"),
    },
  ],
};
