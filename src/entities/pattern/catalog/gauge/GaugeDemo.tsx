import { useState } from "react";
import { Gauge } from "@/shared/ui/patterns/gauge/Gauge";

export function GaugeDemo() {
  const [steps, setSteps] = useState(6200);
  return (
    <section className="grid w-80 justify-items-center gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="justify-self-start text-sm font-semibold text-slate-900">오늘 걸음 수</h3>
      <Gauge
        value={steps}
        max={10000}
        target={8000}
        label="오늘 걸음 수"
        format={(value) => value.toLocaleString("ko-KR")}
        targetLabel={(target) => `목표 ${target}`}
      />
      <p role="status" className="h-4 text-xs text-emerald-700">
        {steps >= 8000 ? "목표를 채웠어요" : ""}
      </p>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={steps >= 10000}
          onClick={() => setSteps((value) => Math.min(value + 1000, 10000))}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white disabled:opacity-40"
        >
          1,000걸음 더하기
        </button>
        <button
          type="button"
          onClick={() => setSteps(6200)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm"
        >
          처음부터
        </button>
      </div>
    </section>
  );
}
