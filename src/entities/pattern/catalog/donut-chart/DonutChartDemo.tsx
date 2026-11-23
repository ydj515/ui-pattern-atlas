import { DonutChart } from "@/shared/ui/patterns/donut-chart/DonutChart";

export function DonutChartDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <DonutChart
        title="11월 지출"
        data={[
          { label: "식비", value: 52 },
          { label: "주거", value: 20 },
          { label: "교통", value: 18 },
          { label: "기타", value: 10 },
        ]}
        format={(value) => `${value}만 원`}
        totalLabel="합계"
        otherLabel="기타"
      />
    </section>
  );
}
