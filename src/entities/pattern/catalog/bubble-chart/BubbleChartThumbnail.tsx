import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const DATA = [
  ["모자", 2, 900, 150],
  ["셔츠", 4, 820, 320],
  ["바지", 5, 540, 180],
  ["니트", 6, 610, 410],
  ["원피스", 7, 300, 260],
  ["가방", 9, 180, 90],
] as const;
const x = (value: number) => 36 + (value / 10) * 268;
const y = (value: number) => 12 + (1 - value / 1000) * 160;
const r = (size: number) => 4 + Math.sqrt(size / 410) * 24;
const PICKS = [
  [3, "니트 · 6만 원 · 610개 · 리뷰 410개"],
  [5, "가방 · 9만 원 · 180개 · 리뷰 90개"],
] as const;

/** Same categories as BubbleChartDemo: pointing at 니트, then 가방, brings it forward and reads price, sales and reviews. */
export function BubbleChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>카테고리별 가격과 판매량</b>
        <p className="text-[5px] text-slate-500">원 크기: 리뷰 수</p>
        <svg viewBox="0 0 320 200" className="mt-[1px] w-[136px]">
          <line x1={36} x2={304} y1={172} y2={172} className="stroke-slate-300" />
          <line x1={36} x2={36} y1={12} y2={172} className="stroke-slate-300" />
          <text x={304} y={194} textAnchor="end" className="fill-slate-500 text-[13px]">
            평균 가격(만 원) →
          </text>
          <text x={4} y={16} className="fill-slate-500 text-[13px]">
            ↑ 판매량(개)
          </text>
          {DATA.map(([label, px, py, size]) => (
            <g key={label}>
              <circle
                cx={x(px)}
                cy={y(py)}
                r={r(size)}
                strokeWidth={2}
                className="fill-blue-600/45 stroke-white"
              />
              <text
                x={x(px)}
                y={y(py)}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-900 text-[12px]"
              >
                {label}
              </text>
            </g>
          ))}
          {PICKS.map(([index], pick) => {
            const [label, px, py, size] = DATA[index];
            return (
              <g
                key={label}
                className={`thumb-anim thumb-dv-bub-${pick === 0 ? "a" : "b"}`}
                style={{ opacity: 0 }}
              >
                <circle
                  cx={x(px)}
                  cy={y(py)}
                  r={r(size)}
                  strokeWidth={2}
                  className="fill-blue-600 stroke-white"
                />
                <text
                  x={x(px)}
                  y={y(py)}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white text-[12px] font-semibold"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
        {PICKS.map(([index, text], pick) => (
          <p
            key={index}
            className={`thumb-anim thumb-dv-bub-${pick === 0 ? "a" : "b"} absolute bottom-[4px] left-[8px] text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {text}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-bub-cursor" />
    </ThumbStage>
  );
}
