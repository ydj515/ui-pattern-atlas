import { BoxPlot } from "@/shared/ui/patterns/box-plot/BoxPlot";

export function BoxPlotDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <BoxPlot
        title="지역별 배송 시간(시간)"
        min={0}
        max={48}
        groups={[
          { label: "서울", values: [6, 8, 9, 10, 11, 12, 12, 14, 15, 18, 40] },
          { label: "경기", values: [10, 12, 14, 15, 16, 18, 20, 22, 24, 26, 30] },
          { label: "강원", values: [18, 20, 24, 26, 28, 30, 32, 36, 40, 44, 46] },
        ]}
        labels={{ median: "중앙값", middle: "가운데 50%", range: "범위", outliers: "동떨어진 값" }}
        tableLabel="표로 보기"
      />
    </section>
  );
}
