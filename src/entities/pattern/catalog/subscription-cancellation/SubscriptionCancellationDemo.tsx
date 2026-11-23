import { useState } from "react";
import { SubscriptionCancellation } from "@/shared/ui/patterns/subscription-cancellation/SubscriptionCancellation";

export function SubscriptionCancellationDemo() {
  const [result, setResult] = useState("");
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      {result ? (
        <div role="status" className="grid gap-2 text-sm text-slate-700">
          <p>{result}</p>
          <button
            type="button"
            onClick={() => setResult("")}
            className="justify-self-start text-xs font-medium text-slate-900 underline"
          >
            다시 구독하기
          </button>
        </div>
      ) : (
        <SubscriptionCancellation
          plan="뮤직 프리미엄"
          paidUntil="6월 30일"
          endings={["7월 1일부터 광고가 나와요", "저장한 곡은 그대로 남아요"]}
          reasons={["요금이 부담돼요", "잘 쓰지 않아요", "다른 서비스로 옮겨요"]}
          onCancel={() =>
            setResult("해지했어요. 6월 30일까지 쓸 수 있고, 그 뒤로는 결제되지 않아요")
          }
          onPause={() => setResult("7월 한 달 쉬어요. 8월 1일에 다시 결제돼요")}
          labels={{
            title: (plan) => `${plan} 구독을 해지할까요?`,
            until: (date) => `${date}까지는 지금처럼 쓸 수 있어요`,
            reasonLegend: "해지하는 이유 (선택)",
            cancel: "해지하기",
            pause: "한 달 쉬기",
          }}
        />
      )}
    </section>
  );
}
