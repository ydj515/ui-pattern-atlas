import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const AXES = ["성능", "배터리", "가벼움", "화면", "가격"];
const PRO = [5, 3, 2, 4, 2];
const AIR = [3, 5, 5, 3, 4];
const point = (index: number, value: number) => {
  const angle = (index / 5) * 2 * Math.PI - Math.PI / 2;
  return [
    120 + (value / 5) * 78 * Math.cos(angle),
    110 + (value / 5) * 78 * Math.sin(angle),
  ] as const;
};
const shape = (values: readonly number[]) =>
  values.map((value, index) => point(index, value).join(",")).join(" ");

/** Same laptops as RadarChartDemo: 에어 14와 비교 overlays the second shape, strong where 프로 16 is weak. */
export function RadarChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>노트북 비교</b>
        <p
          className="thumb-anim thumb-dv-radar-b absolute top-[8px] right-[8px] flex gap-[4px] text-[5px] text-slate-600"
          style={{ opacity: 0 }}
        >
          <span className="flex items-center gap-[2px]">
            <span className="size-[4px] rounded-[1px] bg-blue-600" />
            프로 16
          </span>
          <span className="flex items-center gap-[2px]">
            <span className="size-[4px] rounded-[1px] bg-orange-500" />
            에어 14
          </span>
        </p>
        <svg viewBox="0 0 240 220" className="mx-auto block w-[80px]">
          {[0.25, 0.5, 0.75, 1].map((ratio) => (
            <polygon
              key={ratio}
              points={shape([5, 5, 5, 5, 5].map((v) => v * ratio))}
              fill="none"
              className="stroke-slate-200"
            />
          ))}
          {AXES.map((axis, index) => {
            const [lx, ly] = point(index, 6);
            return (
              <text
                key={axis}
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-slate-600 text-[16px]"
              >
                {axis}
              </text>
            );
          })}
          <polygon
            points={shape(PRO)}
            strokeWidth={3}
            strokeLinejoin="round"
            className="fill-blue-600/15 stroke-blue-600"
          />
          <polygon
            points={shape(AIR)}
            strokeWidth={3}
            strokeLinejoin="round"
            className="thumb-anim thumb-dv-radar-b fill-orange-500/15 stroke-orange-500"
            style={{ opacity: 0 }}
          />
        </svg>
        <p className="absolute bottom-[6px] left-[8px] flex items-center gap-[3px]">
          <span className="relative size-[7px] rounded-[2px] border border-slate-400">
            <span
              className="thumb-anim thumb-dv-radar-b absolute -inset-px rounded-[2px] bg-blue-600 text-center text-[5px] leading-[7px] text-white"
              style={{ opacity: 0 }}
            >
              ✓
            </span>
          </span>
          에어 14와 비교
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-radar-cursor" />
    </ThumbStage>
  );
}
