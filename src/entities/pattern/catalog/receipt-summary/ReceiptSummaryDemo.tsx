import { ReceiptSummary } from "@/shared/ui/patterns/receipt-summary/ReceiptSummary";

const ITEMS = [
  { name: "린넨 셔츠", quantity: 1, price: 39000 },
  { name: "양말", quantity: 2, price: 3000 },
  { name: "에코백", quantity: 1, price: 12000 },
];

const won = (value: number) => `${value.toLocaleString("ko-KR")}원`;

const LABELS = {
  items: (count: number) => `품목 ${count}개`,
  subtotal: "상품 금액",
  discount: "할인",
  shipping: "배송비",
  free: "무료",
  total: "결제 금액",
};

export function ReceiptSummaryDemo() {
  return (
    <div className="w-72">
      <ReceiptSummary
        items={ITEMS}
        discount={5000}
        shipping={0}
        paidWith="신용카드 일시불"
        currency={won}
        labels={LABELS}
      />
    </div>
  );
}
