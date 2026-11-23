import { PolarAreaChart } from "@/shared/ui/patterns/polar-area-chart/PolarAreaChart";

const RAIN = [20, 25, 50, 75, 95, 130, 380, 350, 140, 50, 50, 22];

export function PolarAreaChartDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <PolarAreaChart
        title="서울 월별 강수량"
        data={RAIN.map((value, index) => ({ label: `${index + 1}월`, value }))}
        format={(value) => `${value}mm`}
        tableLabel="표로 보기"
      />
    </section>
  );
}
