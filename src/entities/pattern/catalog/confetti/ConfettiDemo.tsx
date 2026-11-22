import { useState } from "react";
import { Confetti } from "@/shared/ui/patterns/confetti/Confetti";

const GOAL = 30;

export function ConfettiDemo() {
  const [days, setDays] = useState(29);
  const [burst, setBurst] = useState(0);
  const done = days >= GOAL;

  return (
    <section className="relative w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">30일 걷기</h3>
      <p className="mt-1 text-sm text-slate-600 tabular-nums">
        {days}/{GOAL}일
      </p>
      <progress
        value={days}
        max={GOAL}
        aria-label="걷기 목표"
        className="mt-2 h-2 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-emerald-500 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-emerald-500"
      />
      <p role="status" className="mt-3 h-5 text-sm font-semibold text-emerald-700">
        {done ? "목표를 달성했어요" : ""}
      </p>
      <button
        type="button"
        onClick={() => {
          if (done) {
            setDays(29);
          } else {
            setDays(GOAL);
            setBurst((value) => value + 1);
          }
        }}
        className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {done ? "처음부터" : "오늘 걷기 기록"}
      </button>
      <Confetti trigger={burst} />
    </section>
  );
}
