import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as SlidersDemo: the sliders icon opens the filter → 무료 배송만 → 적용. */
export function SlidersThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px]">
        <p className="flex h-[18px] items-center justify-between border-b border-slate-100 px-[6px]">
          <b>상품 24개</b>
          <svg viewBox="0 0 24 24" className="size-[10px] fill-none stroke-slate-800 stroke-2">
            <path d="M4 7h16M4 17h16" />
            <circle cx="9" cy="7" r="2" className="fill-white" />
            <circle cx="15" cy="17" r="2" className="fill-white" />
          </svg>
        </p>
        <p className="grid p-[6px] text-slate-600">
          <span
            className="thumb-anim thumb-sliders-none col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            필터 없음
          </span>
          <span className="thumb-anim thumb-sliders-on col-start-1 row-start-1">
            50,000원 이하, 무료 배송
          </span>
        </p>
        <div
          className="thumb-anim thumb-sliders-sheet absolute inset-0 bg-slate-900/30"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-x-0 bottom-0 grid gap-[4px] rounded-t-[8px] bg-white p-[6px]">
            <span>최대 가격 50,000원</span>
            <span className="relative h-[2px] rounded-full bg-slate-200">
              <span className="absolute top-[-3px] left-[42%] size-[8px] rounded-full bg-blue-600" />
            </span>
            <span className="flex items-center gap-[3px]">
              <span className="relative size-[7px] rounded-[1px] border border-slate-400">
                <span className="thumb-anim thumb-sliders-check absolute -inset-px grid place-items-center rounded-[1px] bg-blue-600 text-[5px] text-white">
                  ✓
                </span>
              </span>
              무료 배송만
            </span>
            <span className="rounded bg-slate-900 py-[2px] text-center font-semibold text-white">
              적용
            </span>
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-sliders-cursor" />
    </ThumbStage>
  );
}
