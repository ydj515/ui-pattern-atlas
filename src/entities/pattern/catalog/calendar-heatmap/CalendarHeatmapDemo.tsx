import { CalendarHeatmap } from "@/shared/ui/patterns/calendar-heatmap/CalendarHeatmap";

const MINUTES = [
  30, 0, 20, 0, 45, 0, 60, 40, 0, 25, 0, 50, 0, 0, 35, 20, 0, 30, 0, 55, 70, 30, 0, 40, 0, 20, 0,
  60, 45, 0,
];
const ACTIVE = MINUTES.filter((minutes) => minutes > 0);

export function CalendarHeatmapDemo() {
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <CalendarHeatmap
        title="11월 운동 기록"
        values={MINUTES}
        firstWeekday={6}
        weekdays={["월", "화", "수", "목", "금", "토", "일"]}
        describe={(day, minutes) =>
          minutes > 0 ? `11월 ${day}일 · ${minutes}분` : `11월 ${day}일 · 쉰 날`
        }
        lowLabel="적음"
        highLabel="많음"
      />
      <p className="text-xs text-slate-600">
        30일 중 {ACTIVE.length}일 운동, 한 번에 평균{" "}
        {Math.round(ACTIVE.reduce((a, b) => a + b, 0) / ACTIVE.length)}분
      </p>
    </section>
  );
}
