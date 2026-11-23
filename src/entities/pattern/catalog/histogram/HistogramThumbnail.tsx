import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const BINS = [
  [1, 18, 27, 16, 9, 4, 1, 3, 1, 0],
  [19, 43, 13, 4, 1],
];

/** Same 80 orders as HistogramDemo: 1만 원씩 → 2만 원씩 regroups the same orders into wider bins. */
export function HistogramThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <p className="relative flex rounded-[4px] bg-slate-100 p-[2px] text-center">
          <span className="thumb-anim thumb-dv-hist-pill absolute top-[2px] left-[2px] h-[11px] w-[66px] rounded-[3px] bg-white shadow-sm" />
          <span className="relative h-[11px] flex-1 leading-[11px]">1만 원씩</span>
          <span className="relative h-[11px] flex-1 leading-[11px]">2만 원씩</span>
        </p>
        <b className="mt-[4px] block">주문 금액 분포</b>
        <div className="relative mt-[3px] h-[50px] border-b border-slate-300">
          {BINS.map((counts, index) => {
            const top = Math.max(...counts);
            return (
              <div
                key={index}
                className={`thumb-anim thumb-dv-hist-${index === 0 ? "a" : "b"} absolute inset-0 flex items-end gap-[1px]`}
                style={index === 0 ? undefined : { opacity: 0 }}
              >
                {counts.map((count, bin) => (
                  <span
                    key={bin}
                    className="flex-1 rounded-t-[1.5px] bg-blue-600"
                    style={{ height: `${(count / top) * 100}%` }}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <p className="flex justify-between text-[5px] text-slate-500">
          <span>0만 원</span>
          <span>10만 원</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-dv-hist-cursor" />
    </ThumbStage>
  );
}
