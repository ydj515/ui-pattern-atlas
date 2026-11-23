import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MINUTES = [
  30, 0, 20, 0, 45, 0, 60, 40, 0, 25, 0, 50, 0, 0, 35, 20, 0, 30, 0, 55, 70, 30, 0, 40, 0, 20, 0,
  60, 45, 0,
];
const STEPS = [
  "bg-slate-100",
  "bg-emerald-200",
  "bg-emerald-400",
  "bg-emerald-600",
  "bg-emerald-800",
];
const step = (value: number) =>
  value <= 0 ? STEPS[0] : STEPS[Math.min(4, 1 + Math.floor((value / 70) * 3.999))];
const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
const PICKS = [
  [20, "11월 21일 · 70분"],
  [1, "11월 2일 · 쉰 날"],
] as const;

/** Same month as CalendarHeatmapDemo: the darkest day reads 70분, a grey day reads 쉰 날. */
export function CalendarHeatmapThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>11월 운동 기록</b>
        <div className="mt-[4px] flex gap-[3px] text-[5px] text-slate-500">
          <div className="grid grid-rows-7 gap-[2px]">
            {DAYS.map((day) => (
              <span key={day} className="flex h-[7px] items-center">
                {day}
              </span>
            ))}
          </div>
          <div
            className="grid grid-flow-col grid-rows-7 gap-[2px]"
            style={{ gridTemplateColumns: "repeat(6, 7px)" }}
          >
            {Array.from({ length: 42 }, (_, cell) => {
              const day = cell - 6;
              const value = MINUTES[day];
              if (day < 0 || value === undefined) return <span key={cell} />;
              const pick = PICKS.findIndex(([d]) => d === day);
              return (
                <span key={cell} className={`relative size-[7px] rounded-[1.5px] ${step(value)}`}>
                  {pick >= 0 ? (
                    <span
                      className={`thumb-anim thumb-dv-cal-${pick === 0 ? "a" : "b"} absolute -inset-[1px] rounded-[2px] ring-[1.5px] ring-slate-900`}
                      style={{ opacity: 0 }}
                    />
                  ) : null}
                </span>
              );
            })}
          </div>
        </div>
        <p className="relative mt-[3px] h-[8px] text-[5.5px] text-slate-800">
          {PICKS.map(([day, text], pick) => (
            <span
              key={day}
              className={`thumb-anim thumb-dv-cal-${pick === 0 ? "a" : "b"} absolute`}
              style={{ opacity: 0 }}
            >
              {text}
            </span>
          ))}
        </p>
        <p className="text-[5px] text-slate-600">30일 중 17일 운동, 한 번에 평균 40분</p>
      </div>
      <ThumbCursor motion="thumb-dv-cal-cursor" />
    </ThumbStage>
  );
}
