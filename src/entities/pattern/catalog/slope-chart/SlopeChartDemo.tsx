import { SlopeChart } from "@/shared/ui/patterns/slope-chart/SlopeChart";

export function SlopeChartDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <SlopeChart
        title="결제 수단 비중"
        beforeLabel="작년"
        afterLabel="올해"
        items={[
          { label: "카드", before: 58, after: 44 },
          { label: "간편결제", before: 22, after: 41 },
          { label: "계좌이체", before: 15, after: 11 },
          { label: "휴대폰", before: 5, after: 4 },
        ]}
        format={(value) => `${value}%`}
        min={0}
        max={60}
      />
    </section>
  );
}
