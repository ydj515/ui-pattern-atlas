import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const ITEMS = [
  ["카드", 58, 44],
  ["간편결제", 22, 41],
  ["계좌이체", 15, 11],
  ["휴대폰", 5, 4],
] as const;
const y = (value: number) => 28 + (1 - value / 60) * 136;
// Label positions after the same 12-unit dodge the chart applies (41% sits below 44%).
const LEFT_LABELS = ITEMS.map(([, before]) => y(before));
const RIGHT_LABELS = [y(44), y(44) + 12, y(11), y(4)];

function Lines({ focus }: { readonly focus?: number }) {
  return ITEMS.map(([label, before, after], index) => {
    const tone = after >= before ? "stroke-blue-600" : "stroke-orange-500";
    const fill = after >= before ? "fill-blue-600" : "fill-orange-500";
    return (
      <g key={label} style={{ opacity: focus === undefined || focus === index ? 1 : 0.25 }}>
        <line
          x1={92}
          x2={208}
          y1={y(before)}
          y2={y(after)}
          strokeWidth={focus === index ? 4 : 2.5}
          className={tone}
        />
        <circle cx={92} cy={y(before)} r={5} className={fill} />
        <circle cx={208} cy={y(after)} r={5} className={fill} />
        <text
          x={84}
          y={LEFT_LABELS[index]}
          textAnchor="end"
          dominantBaseline="middle"
          className="fill-slate-800 text-[13px]"
        >
          {label} {before}%
        </text>
        <text
          x={216}
          y={RIGHT_LABELS[index]}
          dominantBaseline="middle"
          className="fill-slate-800 text-[13px]"
        >
          {after}%
        </text>
      </g>
    );
  });
}

/** Same payment mix as SlopeChartDemo: pointing at 간편결제, then 카드, isolates each line between 작년 and 올해. */
export function SlopeChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>결제 수단 비중</b>
        {[undefined, 1, 0].map((focus, index) => (
          <svg
            key={index}
            viewBox="0 0 300 180"
            className={`${index === 0 ? "" : `thumb-anim thumb-dv-slope-${index === 1 ? "a" : "b"} `}absolute top-[18px] left-[8px] w-[136px] bg-white`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            <text x={92} y={12} textAnchor="middle" className="fill-slate-500 text-[13px]">
              작년
            </text>
            <text x={208} y={12} textAnchor="middle" className="fill-slate-500 text-[13px]">
              올해
            </text>
            <line x1={92} x2={92} y1={20} y2={172} className="stroke-slate-200" />
            <line x1={208} x2={208} y1={20} y2={172} className="stroke-slate-200" />
            <Lines focus={focus} />
          </svg>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-slope-cursor" />
    </ThumbStage>
  );
}
