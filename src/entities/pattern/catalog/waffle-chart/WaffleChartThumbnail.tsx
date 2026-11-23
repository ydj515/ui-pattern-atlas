import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const TONES = ["bg-blue-600", "bg-orange-500", "bg-teal-500"];
const QUESTIONS = [
  ["다시 구매하겠다는 응답", [["그렇다", 68]], 32],
  [
    "배송 만족도",
    [
      ["만족", 52],
      ["보통", 30],
      ["불만", 18],
    ],
    0,
  ],
] as const;

/** Same answers as WaffleChartDemo: 재구매 shows 68 of 100 squares; 배송 만족 splits the 100 into three. */
export function WaffleChartThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-waf-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">재구매</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">배송 만족</span>
        </p>
        {QUESTIONS.map(([title, parts, rest], index) => {
          const cells = parts.flatMap(([, percent], part) =>
            Array.from({ length: percent }, () => part),
          );
          return (
            <div
              key={title}
              className={`thumb-anim thumb-dv-waf-${index === 0 ? "a" : "b"} absolute inset-x-[8px] top-[22px]`}
              style={index === 0 ? undefined : { opacity: 0 }}
            >
              <b>{title}</b>
              <div className="mt-[3px] flex items-start gap-[8px]">
                <div className="grid w-[48px] grid-cols-10 gap-[1px]">
                  {Array.from({ length: 100 }, (_, cell) => (
                    <span
                      key={cell}
                      className={`aspect-square rounded-[1px] ${cells[cell] === undefined ? "bg-slate-200" : TONES[cells[cell]]}`}
                    />
                  ))}
                </div>
                <ul className="grid gap-[3px] text-[5.5px]">
                  {parts.map(([label, percent], part) => (
                    <li key={label} className="flex items-center gap-[2px]">
                      <span className={`size-[4px] rounded-[1px] ${TONES[part]}`} />
                      {label} <b>{percent}%</b>
                    </li>
                  ))}
                  {rest > 0 ? (
                    <li className="flex items-center gap-[2px]">
                      <span className="size-[4px] rounded-[1px] bg-slate-200" />
                      나머지 <b>{rest}%</b>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          );
        })}
        <p className="absolute bottom-[5px] left-[8px] text-[5px] text-slate-500">
          한 칸이 응답자 1%예요
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-waf-cursor" />
    </ThumbStage>
  );
}
