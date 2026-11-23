import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same towel as BundleDealDemo: + to 2 → the bundle price applies and the full price is struck through. */
export function BundleDealThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6.5px]">
        <b className="text-[8px]">주방 행주</b>
        <p className="text-slate-600">1개 12,000원 · 2개부터 10% 할인</p>
        <p className="mt-[6px] flex items-center gap-[4px]">
          <span className="grid size-[12px] place-items-center rounded border border-slate-300">
            −
          </span>
          <b className="grid w-[10px] text-center tabular-nums">
            <span className="thumb-anim thumb-pbd-a col-start-1 row-start-1" style={{ opacity: 0 }}>
              1
            </span>
            <span className="thumb-anim thumb-pbd-b col-start-1 row-start-1">2</span>
          </b>
          <span className="grid size-[12px] place-items-center rounded border border-slate-300">
            +
          </span>
          <span className="grid">
            <span
              className="thumb-anim thumb-pbd-a col-start-1 row-start-1 rounded-full bg-slate-100 px-[4px] text-[5.5px] text-slate-600"
              style={{ opacity: 0 }}
            >
              1개 더 담으면 10% 할인
            </span>
            <span className="thumb-anim thumb-pbd-b col-start-1 row-start-1 rounded-full bg-emerald-100 px-[4px] text-[5.5px] font-semibold text-emerald-800">
              묶음 10% 할인 적용
            </span>
          </span>
        </p>
        <p className="mt-[6px] grid tabular-nums">
          <b
            className="thumb-anim thumb-pbd-a col-start-1 row-start-1 text-[11px]"
            style={{ opacity: 0 }}
          >
            12,000원
          </b>
          <span className="thumb-anim thumb-pbd-b col-start-1 row-start-1">
            <s className="mr-[3px] text-slate-400">24,000원</s>
            <b className="text-[11px]">21,600원</b>
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-pbd-cursor" />
    </ThumbStage>
  );
}
