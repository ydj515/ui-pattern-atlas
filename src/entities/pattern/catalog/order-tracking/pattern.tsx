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
  whenToUse: [
    "주문 뒤 배송 상태를 확인할 때",
    "단계가 정해진 처리 과정",
    "외부 운송장 번호를 함께 보여 줄 때",
  ],
  whenNotToUse: [
    "진행률 숫자가 중요한 작업(진행 바 사용)",
    "단계가 없는 상태 한 줄(상태 배지 사용)",
    "실시간 위치를 지도로 보여 줄 때",
  ],
  alternatives: [
    { name: "스테퍼", slug: "stepper", reason: "입력 단계를 보여 줄 때" },
    { name: "타임라인", slug: "timeline", reason: "시간 순서의 기록을 보여 줄 때" },
  ],
  accessibility: [
    '단계는 ol이고 지금 단계에 aria-current="step"을 붙입니다.',
    "지금 단계라는 말을 화면 읽기용 글자로 덧붙입니다.",
    "운송장 번호 복사는 버튼으로 둡니다.",
  ],
  tags: [...BASE_TAGS, "ol", "aria-current", "clipboard"],
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
