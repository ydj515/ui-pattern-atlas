import { ScrollBounce } from "@/shared/ui/patterns/scroll-bounce/ScrollBounce";

const ALERTS = [
  "택배가 도착했어요",
  "새 댓글이 달렸어요",
  "결제가 완료됐어요",
  "친구가 초대했어요",
  "이번 주 리포트",
  "보안 알림",
  "이벤트 당첨 안내",
  "업데이트 안내",
];

export function ScrollBounceDemo() {
  return (
    <section className="w-full max-w-xs">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">알림</h2>
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        <ScrollBounce label="알림" height={200}>
          <ul className="divide-y divide-slate-100 bg-white text-sm">
            {ALERTS.map((alert) => (
              <li key={alert} className="px-3 py-3 text-slate-800">
                {alert}
              </li>
            ))}
          </ul>
        </ScrollBounce>
      </div>
      <p className="mt-2 text-xs text-slate-600">끝에서 더 당기면 늘어났다 돌아와요</p>
    </section>
  );
}
