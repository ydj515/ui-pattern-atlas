import { BASE_TAGS, type Pattern } from "@/entities/pattern/model/pattern";
import { ReceiptSummaryThumbnail } from "@/entities/pattern/catalog/receipt-summary/ReceiptSummaryThumbnail";

export const receiptSummaryPattern: Pattern = {
  slug: "receipt-summary",
  name: "Receipt Summary",
  nameKo: "영수증 요약",
  aliases: ["주문 요약", "결제 내역", "order summary", "receipt"],
  category: "completion",
  summary: "주문 내역을 한눈에 정리",
  description:
    "결제 금액과 결제 수단을 맨 위에 두고, 품목은 한 번 눌러 펼쳐 보게 한 주문 요약입니다. 금액은 오른쪽 정렬과 고정폭 숫자로 맞추고, 할인은 색과 함께 빼기 기호로 표시합니다.",
  whenToUse: [
    "주문 완료 화면이나 주문 내역 상세",
    "품목이 여러 개라 합계부터 확인할 때",
    "할인, 배송비가 금액에 영향을 줄 때",
  ],
  whenNotToUse: [
    "품목이 하나뿐일 때(합계만 보여 주기)",
    "결제 전 장바구니(수정할 수 있는 목록 사용)",
    "세금 계산서처럼 형식이 정해진 문서",
  ],
  alternatives: [
    { name: "완료 화면", slug: "success-screen", reason: "결과와 다음 단계를 함께 보여 줄 때" },
    { name: "데이터 테이블", slug: "data-table", reason: "많은 주문을 비교할 때" },
  ],
  accessibility: [
    "품목 펼치기 버튼은 aria-expanded와 aria-controls를 가집니다.",
    "합계 항목은 dl로 이름과 금액을 묶습니다.",
    "할인은 빼기 기호를 붙여 색 없이도 알 수 있습니다.",
    "tabular-nums로 금액 자릿수를 맞춥니다.",
  ],
  tags: [...BASE_TAGS, "dl", "aria-expanded", "tabular-nums"],
  loadPreview: () =>
    import("@/entities/pattern/catalog/receipt-summary/ReceiptSummaryDemo").then(
      (m) => m.ReceiptSummaryDemo,
    ),
  Thumbnail: ReceiptSummaryThumbnail,
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
