import { useState } from "react";
import { LineChart } from "@/shared/ui/patterns/line-chart/LineChart";

const MONTHS = ["6월", "7월", "8월", "9월", "10월", "11월"];
const THIS_YEAR = { name: "올해", values: [1200, 1500, 1400, 1900, 2300, 2600] };
const LAST_YEAR = { name: "작년", values: [1000, 1100, 1300, 1250, 1500, 1700] };

export function LineChartDemo() {
  const [compare, setCompare] = useState(true);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <LineChart
        title="월별 방문자 수"
        labels={MONTHS}
        series={compare ? [THIS_YEAR, LAST_YEAR] : [THIS_YEAR]}
        format={(value) => value.toLocaleString("ko-KR")}
        tableLabel="표로 보기"
      />
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={compare}
          onChange={(event) => setCompare(event.target.checked)}
        />
        작년과 비교
      </label>
    </section>
  );
}
