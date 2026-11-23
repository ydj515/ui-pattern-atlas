import { BubbleChart } from "@/shared/ui/patterns/bubble-chart/BubbleChart";

export function BubbleChartDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <BubbleChart
        title="카테고리별 가격과 판매량"
        xLabel="평균 가격(만 원)"
        yLabel="판매량(개)"
        sizeLabel="리뷰 수"
        xMax={10}
        yMax={1000}
        data={[
          { label: "모자", x: 2, y: 900, size: 150 },
          { label: "셔츠", x: 4, y: 820, size: 320 },
          { label: "바지", x: 5, y: 540, size: 180 },
          { label: "니트", x: 6, y: 610, size: 410 },
          { label: "원피스", x: 7, y: 300, size: 260 },
          { label: "가방", x: 9, y: 180, size: 90 },
        ]}
        describe={(d) => `${d.label} · ${d.x}만 원 · ${d.y}개 · 리뷰 ${d.size}개`}
        sizeNote={(label) => `원 크기: ${label}`}
        tableLabel="표로 보기"
      />
    </section>
  );
}
