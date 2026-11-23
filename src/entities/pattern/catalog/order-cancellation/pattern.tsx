import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { OrderCancellationThumbnail } from "@/entities/pattern/catalog/order-cancellation/OrderCancellationThumbnail";

export const orderCancellationPattern: Pattern = {
  slug: "order-cancellation",
  name: "Order Cancellation",
  nameKo: "주문 취소",
  aliases: ["취소 신청", "부분 취소", "환불 요청", "cancel order", "refund"],
  category: "checkout",
  summary: "환불 금액을 미리 계산해 보여 주는 취소",
  description:
    "취소할 상품을 고르고 사유를 선택하면, 제출하기 전에 환불 예정 금액을 계산해 보여 주는 화면입니다. 쿠폰 조건이 깨져 회수되는 할인과 환불받는 방법까지 함께 적습니다.",
  whenToUse: [
    "주문 일부나 전체를 취소할 때",
    "쿠폰이나 적립금이 환불 금액에 영향을 줄 때",
    "환불 방법과 기간을 알려야 할 때",
  ],
  whenNotToUse: [
    "이미 배송이 시작돼 반품으로 처리할 때",
    "취소 버튼을 찾기 어렵게 숨길 때(해지 미로 참고)",
    "되돌릴 수 없는 일을 확인 없이 처리할 때",
  ],
  alternatives: [
    { name: "해지 미로", slug: "roach-motel", reason: "취소를 어렵게 만드는 다크 패턴" },
    { name: "영수증 요약", slug: "receipt-summary", reason: "취소 뒤 내역을 보여 줄 때" },
  ],
  accessibility: [
    "취소할 상품은 fieldset으로 묶은 체크박스입니다.",
    "환불 예정 금액은 aria-live로 바뀔 때 읽어 줍니다.",
    "상품과 사유를 고르기 전에는 버튼이 disabled입니다.",
  ],
  tags: [...BASE_TAGS, "fieldset", "dl", "aria-live"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/order-cancellation/OrderCancellationDemo").then(
      (m) => m.OrderCancellationDemo,
    ),
  Thumbnail: OrderCancellationThumbnail,
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
