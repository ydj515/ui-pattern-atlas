import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same list as CaretDemo: 최신순 ▾ opens the choices → 인기순. */
export function CaretThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px] p-[6px]">
        <p className="flex items-center justify-between">
          <b>상품 24개</b>
          <span className="flex items-center gap-[2px] rounded border border-slate-200 px-[3px] py-[1px]">
            <span className="grid">
              <span
                className="thumb-anim thumb-caret-a col-start-1 row-start-1"
                style={{ opacity: 0 }}
              >
                최신순
              </span>
              <span className="thumb-anim thumb-caret-b col-start-1 row-start-1">인기순</span>
            </span>
            <svg viewBox="0 0 24 24" className="size-[6px] fill-slate-700">
              <path d="M6 9h12l-6 7z" />
            </svg>
          </span>
        </p>
        <p className="mt-[14px] grid text-slate-600">
          <span className="thumb-anim thumb-caret-a col-start-1 row-start-1" style={{ opacity: 0 }}>
            <span>최신순</span>으로 보는 중
          </span>
          <span className="thumb-anim thumb-caret-b col-start-1 row-start-1">
            <span>인기순</span>으로 보는 중
          </span>
        </p>
        <div
          className="thumb-anim thumb-caret-list absolute top-[20px] right-[6px] grid w-[56px] rounded-md bg-white p-[2px] shadow-lg ring-1 ring-slate-200"
          style={{ opacity: 0 }}
        >
          <span className="px-[3px] py-[2px] font-semibold">최신순</span>
          <span className="rounded bg-slate-100 px-[3px] py-[2px]">인기순</span>
          <span className="px-[3px] py-[2px]">가격 낮은 순</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-caret-cursor" />
    </ThumbStage>
  );
}
