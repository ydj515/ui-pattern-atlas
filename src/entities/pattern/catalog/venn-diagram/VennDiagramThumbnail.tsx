import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SETS = [
  ["이메일", 95, 82, "fill-blue-600 stroke-blue-600", "stroke-blue-600", "bg-blue-600"],
  ["앱 푸시", 145, 82, "fill-orange-500 stroke-orange-500", "stroke-orange-500", "bg-orange-500"],
  ["문자", 120, 125, "fill-teal-500 stroke-teal-500", "stroke-teal-500", "bg-teal-500"],
] as const;
const REGIONS = [
  [67.5, 66, 320],
  [172.5, 66, 280],
  [120, 172, 150],
  [120, 59, 120],
  [87.5, 115, 60],
  [152.5, 115, 90],
  [120, 100, 40],
] as const;
const PICKS = [
  [0, "이메일 동의 540명, 세 가지 모두 40명"],
  [2, "문자 동의 340명, 세 가지 모두 40명"],
] as const;

/** Same consent counts as VennDiagramDemo: choosing 이메일, then 문자, outlines that circle and reads its total. */
export function VennDiagramThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>마케팅 수신 동의</b>
        <svg viewBox="0 0 240 200" className="mx-auto mt-[1px] block w-[64px]">
          {SETS.map(([label, cx, cy, tone]) => (
            <circle
              key={label}
              cx={cx}
              cy={cy}
              r={60}
              strokeWidth={1.5}
              fillOpacity={0.18}
              className={tone}
            />
          ))}
          {PICKS.map(([index], pick) => {
            const [, cx, cy, , ring] = SETS[index];
            return (
              <circle
                key={index}
                cx={cx}
                cy={cy}
                r={60}
                strokeWidth={5}
                fill="none"
                className={`thumb-anim thumb-dv-venn-${pick === 0 ? "a" : "b"} ${ring}`}
                style={{ opacity: 0 }}
              />
            );
          })}
          {REGIONS.map(([x, y, value]) => (
            <text
              key={value}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-900 text-[15px] font-semibold"
            >
              {value}명
            </text>
          ))}
        </svg>
        <p className="mt-[2px] flex justify-center gap-[3px]">
          {SETS.map(([label, , , , , swatch], index) => {
            const pick = PICKS.findIndex(([i]) => i === index);
            return (
              <span
                key={label}
                className="relative flex items-center gap-[2px] rounded-full border border-slate-200 px-[4px] py-[1px]"
              >
                {pick >= 0 ? (
                  <span
                    className={`thumb-anim thumb-dv-venn-${pick === 0 ? "a" : "b"} absolute -inset-px rounded-full border border-slate-900`}
                    style={{ opacity: 0 }}
                  />
                ) : null}
                <span className={`size-[4px] rounded-full ${swatch}`} />
                {label}
              </span>
            );
          })}
        </p>
        {PICKS.map(([index, text], pick) => (
          <p
            key={index}
            className={`thumb-anim thumb-dv-venn-${pick === 0 ? "a" : "b"} absolute inset-x-0 bottom-[3px] text-center text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {text}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-venn-cursor" />
    </ThumbStage>
  );
}
