import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PERIODS = [
  [
    "지난주 대비",
    [
      ["매출", "1,240만 원", "▲", "12% 증가", "text-emerald-700"],
      ["반품률", "2.1%", "▼", "8% 감소", "text-emerald-700"],
    ],
  ],
  [
    "지난달 대비",
    [
      ["매출", "4,870만 원", "▼", "3% 감소", "text-rose-700"],
      ["반품률", "2.4%", "▲", "5% 증가", "text-rose-700"],
    ],
  ],
] as const;

/** Same cards as KpiCardDemo: 이번 주 → 이번 달; a fall in 반품률 is good news, so its colour follows the metric, not the arrow. */
export function KpiCardThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-kpi-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">이번 주</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">이번 달</span>
        </p>
        {PERIODS.map(([comparison, cards], index) => (
          <div
            key={comparison}
            className={`thumb-anim thumb-dv-kpi-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[30px] grid grid-cols-2 gap-[4px]`}
            style={index === 1 ? { opacity: 0 } : undefined}
          >
            {cards.map(([label, value, arrow, change, tone]) => (
              <section key={label} className="rounded-[6px] border border-slate-200 p-[5px]">
                <p className="text-[5.5px] text-slate-600">{label}</p>
                <b className="mt-[2px] block text-[10px] tabular-nums">{value}</b>
                <p className={`mt-[3px] text-[5px] font-medium ${tone}`}>
                  {arrow} {comparison} {change}
                </p>
              </section>
            ))}
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-kpi-cursor" />
    </ThumbStage>
  );
}
