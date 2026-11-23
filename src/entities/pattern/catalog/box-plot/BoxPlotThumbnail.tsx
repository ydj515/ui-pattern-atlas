import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const GROUPS = [
  ["서울", 6, 9.5, 12, 14.5, 18, [40]],
  ["경기", 10, 14.5, 18, 23, 30, []],
  ["강원", 18, 25, 30, 38, 46, []],
] as const;
const x = (value: number) => `${(value / 48) * 100}%`;
const PICKS = [
  [0, "서울 · 중앙값 12 · 가운데 50% 9.5~14.5"],
  [2, "강원 · 중앙값 30 · 가운데 50% 25~38"],
] as const;

/** Same deliveries as BoxPlotDemo: 서울 is quick but has one far-off 40시간; 강원 is slower and spread wider. */
export function BoxPlotThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b>지역별 배송 시간(시간)</b>
        <div className="mt-[6px] grid gap-[6px]">
          {GROUPS.map(([label, low, q1, median, q3, high, outliers], index) => {
            const pick = PICKS.findIndex(([i]) => i === index);
            return (
              <p key={label} className="grid grid-cols-[14px_1fr] items-center gap-[4px]">
                <span className="text-slate-600">{label}</span>
                <span className="relative h-[12px]">
                  {pick >= 0 ? (
                    <span
                      className={`thumb-anim thumb-dv-box-${pick === 0 ? "a" : "b"} absolute -inset-x-[2px] inset-y-0 rounded-[2px] bg-slate-100`}
                      style={{ opacity: 0 }}
                    />
                  ) : null}
                  <span
                    className="absolute top-1/2 h-px bg-slate-500"
                    style={{ left: x(low), width: `calc(${x(high)} - ${x(low)})` }}
                  />
                  <span
                    className="absolute inset-y-[1px] rounded-[1px] border border-blue-600 bg-blue-100"
                    style={{ left: x(q1), width: `calc(${x(q3)} - ${x(q1)})` }}
                  />
                  <span
                    className="absolute inset-y-0 w-[1px] bg-slate-900"
                    style={{ left: x(median) }}
                  />
                  {outliers.map((value) => (
                    <span
                      key={value}
                      className="absolute top-1/2 size-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-500 bg-white"
                      style={{ left: x(value) }}
                    />
                  ))}
                </span>
              </p>
            );
          })}
        </div>
        <p className="mt-[2px] ml-[18px] flex justify-between text-[5px] text-slate-500">
          <span>0</span>
          <span>48</span>
        </p>
        {PICKS.map(([index, text], pick) => (
          <p
            key={index}
            className={`thumb-anim thumb-dv-box-${pick === 0 ? "a" : "b"} absolute bottom-[6px] left-[8px] text-[5.5px] text-slate-700`}
            style={{ opacity: 0 }}
          >
            {text}
          </p>
        ))}
      </div>
      <ThumbCursor motion="thumb-dv-box-cursor" />
    </ThumbStage>
  );
}
