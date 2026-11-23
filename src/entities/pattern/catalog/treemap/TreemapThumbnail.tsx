import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const SHADES = [
  "fill-blue-800",
  "fill-blue-700",
  "fill-blue-600",
  "fill-blue-500",
  "fill-blue-400",
];
const LAYOUTS = [
  [
    ["사진", 42, 0, 0, 126, 180],
    ["동영상", 28, 126, 0, 174, 86.9],
    ["앱", 18, 126, 86.9, 104.4, 93.1],
    ["문서", 6, 230.4, 86.9, 69.6, 46.6],
    ["기타", 6, 230.4, 133.4, 69.6, 46.6],
  ],
  [
    ["동영상", 48, 0, 0, 144, 180],
    ["앱", 22, 144, 0, 156, 76.2],
    ["사진", 14, 144, 76.2, 72.8, 103.8],
    ["문서", 10, 216.8, 76.2, 83.2, 64.9],
    ["기타", 6, 216.8, 141.1, 83.2, 38.9],
  ],
] as const;

/** Same storage as TreemapDemo: 휴대폰 → 태블릿, and 동영상 takes the biggest block. */
export function TreemapThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-tree-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">휴대폰</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">태블릿</span>
        </p>
        <b className="mt-[4px] block">저장 공간</b>
        {LAYOUTS.map((rects, index) => (
          <svg
            key={index}
            viewBox="0 0 300 180"
            className={`thumb-anim thumb-dv-tree-${index === 0 ? "a" : "b"} absolute top-[34px] left-[8px] w-[112px]`}
            style={index === 0 ? undefined : { opacity: 0 }}
          >
            {rects.map(([label, value, x, y, w, h], rank) => (
              <g key={label}>
                <rect
                  x={x + 1.5}
                  y={y + 1.5}
                  width={w - 3}
                  height={h - 3}
                  rx={4}
                  className={SHADES[rank]}
                />
                {w > 56 && h > 30 ? (
                  <text x={x + 9} y={y + 24} className="fill-white text-[17px] font-semibold">
                    {label}
                    <tspan x={x + 9} dy={22} className="font-normal">
                      {value}GB
                    </tspan>
                  </text>
                ) : null}
              </g>
            ))}
          </svg>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-tree-cursor" />
    </ThumbStage>
  );
}
