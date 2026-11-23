import { useState } from "react";
import { DormantAccount } from "@/shared/ui/patterns/dormant-account/DormantAccount";

export function DormantAccountDemo() {
  const [active, setActive] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      {active ? (
        <p role="status" className="text-sm text-slate-700">
          다시 오신 걸 환영해요. 적립금과 주문 내역을 그대로 돌려놓았어요
        </p>
      ) : (
        <DormantAccount
          account="haneul@kakao.com"
          since="2025년 3월 2일"
          kept={["적립금 4,200원", "주문 내역 12건", "배송지 2곳"]}
          onReactivate={() => setActive(true)}
          labels={{
            title: "휴면 계정이에요",
            body: (since) => `1년 동안 로그인하지 않아 ${since}에 휴면 계정으로 바꿨어요`,
            keptTitle: "따로 보관해 둔 정보",
            reactivate: "휴면 풀고 이어서 쓰기",
          }}
        />
      )}
    </section>
  );
}
