import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const COUNTS = [812, 301, 98, 41, 32];

/** Same reviews as RatingSummaryDemo: tap the 5점 bar → only 5점 reviews stay. */
export function RatingSummaryThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] flex h-[56px] w-[152px] gap-[8px] rounded-lg border border-slate-200 p-[4px]">
        <div className="grid w-[40px] content-center justify-items-center">
          <b className="text-[15px] leading-[16px]">4.6</b>
          <span className="text-[5px] text-amber-400">★★★★★</span>
          <span className="text-[4.5px] text-slate-500">리뷰 1,284개</span>
        </div>
        <div className="relative grid flex-1 gap-[1px] text-[5px] text-slate-600">
          <span className="thumb-anim thumb-rsm-on absolute inset-x-0 top-0 h-[9px] rounded bg-amber-50" />
          {COUNTS.map((count, index) => (
            <span
              key={count}
              className="relative grid h-[8.4px] grid-cols-[10px_1fr_16px] items-center gap-[3px]"
            >
              <span>{5 - index}점</span>
              <span className="h-[3px] overflow-hidden rounded-full bg-slate-100">
                <span
                  className="block h-full bg-amber-400"
                  style={{ width: `${(count / 1284) * 100}%` }}
                />
              </span>
              <span className="text-right tabular-nums">{count}</span>
            </span>
          ))}
        </div>
      </div>
      <p className="absolute top-[64px] left-[12px] grid text-[5.5px] text-slate-600">
        <span className="thumb-anim thumb-rsm-all col-start-1 row-start-1" style={{ opacity: 0 }}>
          모든 리뷰
        </span>
        <span className="thumb-anim thumb-rsm-on col-start-1 row-start-1">5점 리뷰만 보는 중</span>
      </p>
      <div className="absolute top-[74px] left-[12px] grid w-[152px] gap-[2px] text-[6px]">
        <p className="rounded bg-slate-50 px-[4px] py-[1px]">
          <span className="text-amber-500">★★★★★</span> 핏이 딱 좋아요
        </p>
        <p
          className="thumb-anim thumb-rsm-all rounded bg-slate-50 px-[4px] py-[1px]"
          style={{ opacity: 0 }}
        >
          <span className="text-amber-500">★★★★</span> 색이 사진보다 조금 진해요
        </p>
        <p
          className="thumb-anim thumb-rsm-all rounded bg-slate-50 px-[4px] py-[1px]"
          style={{ opacity: 0 }}
        >
          <span className="text-amber-500">★★</span> 배송이 늦었어요
        </p>
      </div>
      <ThumbCursor motion="thumb-rsm-cursor" />
    </ThumbStage>
  );
}
