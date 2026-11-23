import { Heatmap } from "@/shared/ui/patterns/heatmap/Heatmap";

export function HeatmapDemo() {
  return (
    <section className="w-80 rounded-3xl border border-slate-200 bg-white p-5">
      <Heatmap
        title="시간대별 주문"
        rows={["월", "화", "수", "목", "금"]}
        columns={["9시", "12시", "15시", "18시", "21시"]}
        values={[
          [4, 18, 9, 30, 22],
          [6, 20, 11, 42, 25],
          [5, 16, 8, 28, 19],
          [7, 22, 12, 35, 27],
          [9, 25, 14, 48, 38],
        ]}
        describe={(row, column, value) => `${row} ${column} · ${value}건`}
        lowLabel="적음"
        highLabel="많음"
        tableLabel="표로 보기"
      />
    </section>
  );
}
