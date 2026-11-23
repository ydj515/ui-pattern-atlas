import { useState } from "react";

const DAYS = [
  { day: "월", entries: [["08:10", "출근길에 장바구니만 채워 뒀어요"]] },
  { day: "화", entries: [["21:30", "아이를 재우고 주문하려는데 새벽배송 마감이 지나 있었어요"]] },
  { day: "수", entries: [] },
  { day: "목", entries: [["21:45", "어제 담은 걸 결제했어요. 마감 시간을 미리 알고 싶어요"]] },
  { day: "금", entries: [["12:20", "점심시간에 쿠폰만 확인했어요"]] },
  { day: "토", entries: [["22:05", "주말 장보기를 몰아서 했어요"]] },
  { day: "일", entries: [] },
] as const;

export function DiaryStudyDemo() {
  const [day, setDay] = useState("화");
  const current = DAYS.find((item) => item.day === day) ?? DAYS[0];
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-semibold text-slate-900">참가자 4번의 일주일 기록</h3>
      <div className="grid grid-cols-7 gap-1">
        {DAYS.map((item) => (
          <button
            key={item.day}
            type="button"
            aria-pressed={day === item.day}
            onClick={() => setDay(item.day)}
            className="grid justify-items-center gap-1 rounded-lg py-1.5 text-sm text-slate-700 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {item.day}
            <span
              aria-hidden="true"
              className={`size-1.5 rounded-full ${item.entries.length ? "bg-blue-500" : "bg-transparent"}`}
            />
          </button>
        ))}
      </div>
      <div
        aria-live="polite"
        className="min-h-14 rounded-lg bg-slate-50 p-3 text-sm text-slate-800"
      >
        {current.entries.length === 0 ? (
          <p className="text-slate-500">기록 없음</p>
        ) : (
          current.entries.map(([time, text]) => (
            <p key={time}>
              <span className="mr-2 text-xs text-slate-500 tabular-nums">{time}</span>
              {text}
            </p>
          ))
        )}
      </div>
      <p className="text-xs text-slate-600">7일 중 결제는 모두 밤 9시 이후였어요</p>
    </section>
  );
}
