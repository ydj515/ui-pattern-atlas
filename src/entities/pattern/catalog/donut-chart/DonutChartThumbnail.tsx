import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PARTS = [
  ["식비", 52, "stroke-blue-600", "bg-blue-600"],
  ["주거", 20, "stroke-orange-500", "bg-orange-500"],
  ["교통", 18, "stroke-teal-500", "bg-teal-500"],
  ["기타", 10, "stroke-slate-400", "bg-slate-400"],
] as const;
const C = 2 * Math.PI * 60;
const STARTS = PARTS.map((_, index) =>
  PARTS.slice(0, index).reduce((sum, [, value]) => sum + (value / 100) * C, 0),
);

/** Same spending as DonutChartDemo: pointing at 교통, then 식비, puts that part's share in the centre. */
export function DonutChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>11월 지출</b>
        <div className="mt-[6px] flex items-center gap-[6px]">
          <div className="relative size-[64px] shrink-0">
            <svg viewBox="0 0 160 160" className="-rotate-90">
              {PARTS.map(([label, value, stroke], index) => {
                const dash = (value / 100) * C - 3;
                return (
                  <circle
                    key={label}
                    cx={80}
                    cy={80}
                    r={60}
                    fill="none"
                    strokeWidth={22}
                    strokeDasharray={`${dash} ${C - dash}`}
                    strokeDashoffset={-(STARTS[index] ?? 0)}
                    className={stroke}
                  />
                );
              })}
            </svg>
            <p className="thumb-anim thumb-dv-donut-total absolute inset-0 grid place-content-center text-center leading-tight">
              <span className="text-[5.5px] text-slate-500">합계</span>
              <b className="text-[8px]">100만 원</b>
            </p>
            {[
              ["교통", "18%", "thumb-dv-donut-a"],
              ["식비", "52%", "thumb-dv-donut-b"],
            ].map(([label, share, motion]) => (
              <p
                key={label}
                className={`thumb-anim ${motion} absolute inset-0 grid place-content-center text-center leading-tight`}
                style={{ opacity: 0 }}
              >
                <span className="text-[5.5px] text-slate-500">{label}</span>
                <b className="text-[10px]">{share}</b>
              </p>
            ))}
          </div>
          <ul className="grid gap-[4px] text-[5.5px]">
            {PARTS.map(([label, value, , swatch]) => (
              <li key={label} className="flex items-center gap-[3px] whitespace-nowrap">
                <span className={`size-[5px] rounded-[1px] ${swatch}`} />
                {label}{" "}
                <b>
                  {value}만 원 · {value}%
                </b>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ThumbCursor motion="thumb-dv-donut-cursor" />
    </ThumbStage>
  );
}
