import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const MONTHS = [
  ["11월", 1200, [-480, -300, -150, 60]],
  ["10월", 1000, [-420, -300, -220, 20]],
] as const;
const LABELS = ["매출", "원가", "인건비", "광고", "기타 수익", "순이익"];
const TONE = { up: "bg-blue-600", down: "bg-orange-500", total: "bg-slate-600" };
const y = (value: number) => 48 - (value / 1200) * 44;

function bars(sales: number, steps: readonly number[]) {
  const after = steps.map(
    (_, index) => sales + steps.slice(0, index + 1).reduce((a, b) => a + b, 0),
  );
  const end = after.at(-1) ?? sales;
  return [
    { from: 0, to: sales, kind: "total" as const, text: sales.toLocaleString("ko-KR") },
    ...steps.map((step, index) => ({
      from: index === 0 ? sales : (after[index - 1] ?? 0),
      to: after[index] ?? 0,
      kind: step >= 0 ? ("up" as const) : ("down" as const),
      text: `${step > 0 ? "+" : "−"}${Math.abs(step)}`,
    })),
    { from: 0, to: end, kind: "total" as const, text: end.toLocaleString("ko-KR") },
  ];
}

/** Same statement as WaterfallChartDemo: 11월 → 10월, the same costs eat more of the sales and 순이익 shrinks. */
export function WaterfallChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span
            className="thumb-anim thumb-dv-wf-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm"
            style={{ transform: "translateX(66px)" }}
          />
          <span className="relative h-[11px] flex-1 leading-[11px]">10월</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">11월</span>
        </p>
        {MONTHS.map(([month, sales, steps], index) => (
          <div
            key={month}
            className={`thumb-anim thumb-dv-wf-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[22px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <b>{month} 손익(만 원)</b>
            <div className="relative mt-[6px] flex h-[48px] gap-[2px] border-b border-slate-300">
              {bars(sales, steps).map((bar, i) => (
                <span key={LABELS[i]} className="relative flex-1">
                  <span
                    className={`absolute inset-x-[1px] rounded-[1px] ${TONE[bar.kind]}`}
                    style={{
                      top: y(Math.max(bar.from, bar.to)),
                      height: Math.max(
                        y(Math.min(bar.from, bar.to)) - y(Math.max(bar.from, bar.to)),
                        1,
                      ),
                    }}
                  />
                  <span
                    className="absolute inset-x-0 text-center text-[4.5px] text-slate-700"
                    style={{ top: y(Math.max(bar.from, bar.to)) - 6 }}
                  >
                    {bar.text}
                  </span>
                </span>
              ))}
            </div>
            <p className="flex gap-[2px] text-[4.5px] text-slate-500">
              {LABELS.map((label) => (
                <span key={label} className="flex-1 truncate text-center">
                  {label}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-wf-cursor" />
    </ThumbStage>
  );
}
