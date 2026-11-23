import { useState } from "react";
import { RadarChart } from "@/shared/ui/patterns/radar-chart/RadarChart";

const PRO = { name: "프로 16", values: [5, 3, 2, 4, 2] };
const AIR = { name: "에어 14", values: [3, 5, 5, 3, 4] };

export function RadarChartDemo() {
  const [compare, setCompare] = useState(false);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <RadarChart
        title="노트북 비교"
        axes={["성능", "배터리", "가벼움", "화면", "가격"]}
        max={5}
        series={compare ? [PRO, AIR] : [PRO]}
        tableLabel="표로 보기"
      />
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={compare}
          onChange={(event) => setCompare(event.target.checked)}
        />
        에어 14와 비교
      </label>
    </section>
  );
}
