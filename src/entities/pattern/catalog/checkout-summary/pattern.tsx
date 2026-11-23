import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { CheckoutSummaryThumbnail } from "@/entities/pattern/catalog/checkout-summary/CheckoutSummaryThumbnail";

export const checkoutSummaryPattern: Pattern = {
  slug: "checkout-summary",
  name: "Checkout Summary",
  nameKo: "결제 금액 확인",
  aliases: ["주문 요약", "최종 결제 금액", "order summary", "payment summary"],
  category: "checkout",
  summary: "합계를 이루는 금액과 필수 동의를 한곳에",
  description:
    "결제 직전에 상품 금액, 배송비, 할인을 한 줄씩 보여 주고 최종 금액을 크게 적는 영역입니다. 할인은 빼는 금액으로 표시하고, 결제 버튼에 최종 금액을 다시 적으며, 필수 동의를 받아야 버튼이 켜집니다.",
  whenToUse: ["주문서 맨 아래 결제 버튼 앞", "할인과 배송비가 붙을 때", "결제 동의가 필요할 때"],
  whenNotToUse: [
    "결제 뒤 영수증(영수증 요약 사용)",
    "마지막 단계에 처음 비용을 붙일 때(숨은 비용 참고)",
    "금액이 하나뿐인 단순 구매",
  ],
  alternatives: [
    { name: "영수증 요약", slug: "receipt-summary", reason: "결제가 끝난 뒤 내역을 보여 줄 때" },
    { name: "숨은 비용", slug: "hidden-costs", reason: "비용을 마지막에 숨기는 다크 패턴" },
  ],
  accessibility: [
    "금액 목록은 dl로 항목 이름과 값을 짝지어 읽힙니다.",
    "최종 금액은 aria-live로 바뀔 때 읽어 줍니다.",
    "동의 전에는 결제 버튼이 disabled입니다.",
  ],
  tags: [...BASE_TAGS, "dl", "aria-live", "disabled"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/checkout-summary/CheckoutSummaryDemo").then(
      (m) => m.CheckoutSummaryDemo,
    ),
  Thumbnail: CheckoutSummaryThumbnail,
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
