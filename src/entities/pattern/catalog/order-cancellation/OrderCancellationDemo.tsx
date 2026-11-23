import { OrderCancellation } from "@/shared/ui/patterns/order-cancellation/OrderCancellation";

export function OrderCancellationDemo() {
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">주문 취소</h3>
      <p className="text-xs text-slate-500">
        5만 원 이상 주문에 쓴 쿠폰이라, 남은 금액이 5만 원보다 적으면 할인이 회수돼요
      </p>
      <OrderCancellation
        items={[
          { id: "shirt", name: "린넨 셔츠", price: 39000 },
          { id: "bag", name: "캔버스 백", price: 29000 },
          { id: "towel", name: "주방 행주 2개", price: 24000 },
        ]}
        reasons={["단순 변심", "다른 상품을 잘못 주문했어요", "배송이 너무 늦어요"]}
        couponBack={(kept) => (kept < 50000 ? 5000 : 0)}
        refundMethod="결제한 카드로 3영업일 안에"
        onCancel={() => undefined}
        labels={{
          items: "취소할 상품",
          reason: "취소 사유",
          noReason: "사유를 골라 주세요",
          refund: "상품 금액",
          couponBack: "쿠폰 할인 회수",
          refundTotal: "환불 예정 금액",
          method: "환불 방법",
          submit: (count) => `${count}개 상품 취소하기`,
          done: (amount) => `취소를 접수했어요. ${amount}을 환불해 드려요.`,
        }}
      />
    </section>
  );
}
