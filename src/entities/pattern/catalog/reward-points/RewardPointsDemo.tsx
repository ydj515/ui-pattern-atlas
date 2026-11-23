import { useState } from "react";
import { RewardPoints } from "@/shared/ui/patterns/reward-points/RewardPoints";

const METHODS = [
  { id: "card", label: "카드 결제", rate: 0.01 },
  { id: "bank", label: "계좌이체", rate: 0.02 },
];

export function RewardPointsDemo() {
  const [method, setMethod] = useState("card");
  const rate = METHODS.find((item) => item.id === method)?.rate ?? 0;
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="flex justify-between text-sm">
        <span className="text-slate-600">결제 금액</span>
        <b className="text-slate-900">39,000원</b>
      </p>
      <fieldset className="grid gap-1">
        <legend className="mb-1 text-xs text-slate-600">결제 수단</legend>
        {METHODS.map((item) => (
          <label key={item.id} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="reward-method"
              checked={method === item.id}
              onChange={() => setMethod(item.id)}
            />
            {item.label}
          </label>
        ))}
      </fieldset>
      <RewardPoints
        price={39000}
        rate={rate}
        condition="구매 확정 다음 날 지급, 할인 금액에는 쓸 수 없어요"
        earnLabel={(points, percent) => `${points} 적립 예정 (${percent}%)`}
      />
    </section>
  );
}
