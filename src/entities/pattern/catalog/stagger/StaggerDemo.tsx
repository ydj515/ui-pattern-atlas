import { useState } from "react";
import { Stagger } from "@/shared/ui/patterns/stagger/Stagger";

const ALERTS = [
  "택배가 도착했어요",
  "새 댓글이 달렸어요",
  "결제가 완료됐어요",
  "친구가 초대했어요",
];
const GAPS = [60, 150];

export function StaggerDemo() {
  const [loads, setLoads] = useState(0);
  const [gap, setGap] = useState(GAPS[0]!);

  return (
    <section className="w-full max-w-xs">
      <div className="flex items-center justify-between gap-2">
        <fieldset className="flex gap-1 text-xs">
          <legend className="sr-only">간격</legend>
          {GAPS.map((value) => (
            <label
              key={value}
              className="cursor-pointer rounded-md border border-slate-200 px-2 py-1 has-checked:border-slate-900 has-checked:font-semibold"
            >
              <input
                type="radio"
                name="stagger-gap"
                className="sr-only"
                checked={gap === value}
                onChange={() => setGap(value)}
              />
              {value}ms
            </label>
          ))}
        </fieldset>
        <button
          type="button"
          onClick={() => setLoads((value) => value + 1)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
        >
          알림 불러오기
        </button>
      </div>
      <div className="mt-3 min-h-48 rounded-2xl bg-slate-100 p-3">
        {loads > 0 ? (
          <Stagger key={loads} gap={gap} label="알림">
            {ALERTS.map((alert) => (
              <p
                key={alert}
                className="rounded-lg bg-white px-3 py-2 text-sm text-slate-800 shadow-sm"
              >
                {alert}
              </p>
            ))}
          </Stagger>
        ) : null}
      </div>
    </section>
  );
}
