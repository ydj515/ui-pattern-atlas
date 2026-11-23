import { useState } from "react";
import { Cart, type CartItem } from "@/shared/ui/patterns/cart/Cart";

const ITEMS: readonly CartItem[] = [
  { id: "shirt", name: "린넨 셔츠", price: 39000, quantity: 1, selected: true },
  { id: "bag", name: "캔버스 백", price: 29000, quantity: 1, selected: true },
  { id: "towel", name: "주방 행주", price: 12000, quantity: 2, selected: true },
];

export function CartDemo() {
  const [items, setItems] = useState(ITEMS);
  const [message, setMessage] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">장바구니</h3>
      <Cart
        items={items}
        onChange={setItems}
        format={(value) => `${value.toLocaleString("ko-KR")}원`}
        onOrder={(selected) => setMessage(`${selected.length}개 상품을 주문서로 옮겨요`)}
        labels={{
          selectAll: "전체 선택",
          decrease: (name) => `${name} 수량 줄이기`,
          increase: (name) => `${name} 수량 늘리기`,
          remove: (name) => `${name} 빼기`,
          total: "주문 금액",
          order: (count) => `${count}개 상품 주문하기`,
          empty: "장바구니가 비어 있어요",
        }}
      />
      <p role="status" className="min-h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
