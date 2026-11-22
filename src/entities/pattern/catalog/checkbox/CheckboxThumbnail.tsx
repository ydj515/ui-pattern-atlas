import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

export function CheckboxThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-x-5 top-[21px] grid gap-2 font-medium text-slate-800">
        <div className="relative flex h-[14px] items-center gap-2">
          <span className="size-3 rounded-sm border border-slate-300" />
          <span className="thumb-anim thumb-check-mixed absolute left-0 grid size-3 place-items-center rounded-sm bg-blue-700 text-white">
            −
          </span>
          <span className="thumb-anim thumb-check-all absolute left-0 grid size-3 place-items-center rounded-sm bg-blue-700 text-white">
            ✓
          </span>
          전체 선택
        </div>
        <div className="relative flex h-[14px] items-center gap-2">
          <span className="size-3 rounded-sm border border-slate-300" />
          <span className="thumb-anim thumb-check-first absolute left-0 grid size-3 place-items-center rounded-sm bg-blue-700 text-white">
            ✓
          </span>
          공지사항
        </div>
        <div className="relative flex h-[14px] items-center gap-2">
          <span className="size-3 rounded-sm border border-slate-300" />
          <span className="thumb-anim thumb-check-all absolute left-0 grid size-3 place-items-center rounded-sm bg-blue-700 text-white">
            ✓
          </span>
          이벤트 소식
        </div>
      </div>
      <ThumbCursor motion="thumb-check-cursor" />
    </ThumbStage>
  );
}
