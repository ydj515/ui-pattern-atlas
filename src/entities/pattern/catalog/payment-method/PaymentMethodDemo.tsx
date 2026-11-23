import { useState } from "react";
import { PaymentMethod } from "@/shared/ui/patterns/payment-method/PaymentMethod";

const OPTIONS = [
  { id: "card", label: "신용·체크카드" },
  { id: "easy", label: "간편결제", note: "등록한 계좌나 카드로 한 번에" },
  { id: "bank", label: "계좌이체", note: "입금을 확인하면 주문이 접수돼요" },
  { id: "phone", label: "휴대폰 결제" },
];

export function PaymentMethodDemo() {
  const [method, setMethod] = useState("easy");
  const [installment, setInstallment] = useState("일시불");
  const label = OPTIONS.find((option) => option.id === method)?.label ?? "";
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <PaymentMethod
        legend="결제 수단"
        installmentLabel="할부"
        options={OPTIONS}
        value={method}
        onChange={setMethod}
        installments={["일시불", "2개월", "3개월", "6개월"]}
        installment={installment}
        onInstallmentChange={setInstallment}
      />
      <p role="status" className="text-xs text-slate-600">
        {method === "card" ? `${label} · ${installment}로 결제해요` : `${label}로 결제해요`}
      </p>
    </section>
  );
}
