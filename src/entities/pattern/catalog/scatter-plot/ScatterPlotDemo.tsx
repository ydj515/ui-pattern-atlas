import { useState } from "react";
import { ScatterPlot } from "@/shared/ui/patterns/scatter-plot/ScatterPlot";

const DELIVERIES = [
  { x: 3, y: 2 },
  { x: 5, y: 2.5 },
  { x: 7, y: 3 },
  { x: 9, y: 3.5 },
  { x: 12, y: 4 },
  { x: 14, y: 5 },
  { x: 16, y: 4.5 },
  { x: 19, y: 6 },
  { x: 22, y: 6.5 },
  { x: 25, y: 7 },
  { x: 28, y: 8 },
  { x: 31, y: 8.5 },
  { x: 35, y: 9.5 },
  { x: 8, y: 10 },
];

export function ScatterPlotDemo() {
  const [mean, setMean] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <ScatterPlot
        title="배송 거리와 걸린 시간"
        points={DELIVERIES}
        xLabel="거리(km)"
        yLabel="시간"
        xMax={40}
        yMax={12}
        showMean={mean}
        describe={(p) => `${p.x}km · ${p.y}시간`}
        meanLabel={(x, y) => `평균 ${x}km · ${y}시간`}
        tableLabel="표로 보기"
      />
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={mean} onChange={(event) => setMean(event.target.checked)} />
        평균선 보기
      </label>
    </section>
  );
}
