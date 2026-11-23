import { useState } from "react";
import { Countdown } from "@/shared/ui/patterns/countdown/Countdown";

function endIn(ms: number) {
  const date = new Date(Date.now() + ms);
  return {
    date,
    label: `${date.getDate() === new Date().getDate() ? "오늘" : "내일"} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`,
  };
}

export function CountdownDemo() {
  const [end, setEnd] = useState(() => endIn((2 * 60 * 60 + 13 * 60 + 5) * 1000));
  return (
    <section className="grid w-72 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">무선 이어폰 타임 특가</h3>
      <p className="text-2xl font-bold text-slate-900">29,000원</p>
      <Countdown
        key={end.date.getTime()}
        endsAt={end.date}
        endLabel={end.label}
        endedLabel="할인이 끝났어요"
        leftLabel="남은 시간"
      />
      <button
        type="button"
        onClick={() => setEnd(endIn(3000))}
        className="justify-self-start rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
      >
        3초 뒤 종료로 바꾸기
      </button>
    </section>
  );
}
