import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";

export const receiptSummaryPattern: Pattern = {
  slug: "receipt-summary",

  name: "Receipt Summary",
  nameKo: "영수증 요약",
  aliases: ["주문 요약", "결제 내역", "order summary", "receipt"],
  category: "completion",
  summary: "주문 내역을 한눈에 정리",
  description:
    "결제 금액과 결제 수단을 맨 위에 두고, 품목은 한 번 눌러 펼쳐 보게 한 주문 요약입니다. 금액은 오른쪽 정렬과 고정폭 숫자로 맞추고, 할인은 색과 함께 빼기 기호로 표시합니다.",
  tags: [...BASE_TAGS, "dl", "aria-expanded", "tabular-nums"],
  loadGuide: () => import("@/entities/pattern/catalog/receipt-summary/guide").then((m) => m.guide),
  loadPreview: () =>
    import("@/entities/pattern/catalog/receipt-summary/ReceiptSummaryDemo").then(
      (m) => m.ReceiptSummaryDemo,
    ),
  loadThumbnail: () =>
    import("@/entities/pattern/catalog/receipt-summary/ReceiptSummaryThumbnail").then(
      (m) => m.ReceiptSummaryThumbnail,
    ),
  sources: [
    {
      fileName: "ReceiptSummary.tsx",
      role: "Component",
      load: () => import("@/shared/ui/patterns/receipt-summary/ReceiptSummary.tsx?raw"),
    },
    {
      fileName: "ReceiptSummaryDemo.tsx",
      role: "Usage",
      load: () => import("@/entities/pattern/catalog/receipt-summary/ReceiptSummaryDemo.tsx?raw"),
    },
  ],
};
