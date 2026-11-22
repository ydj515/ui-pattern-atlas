import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

export function BottomSheetThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[15px] left-[50px] grid h-[20px] w-[76px] place-items-center rounded bg-blue-700 font-medium text-white">
        정렬 옵션
      </span>
      <span className="thumb-anim thumb-sheet-before absolute inset-x-0 top-[43px] text-center text-slate-700">
        추천순
      </span>
      <span className="thumb-anim thumb-sheet-after absolute inset-x-0 top-[43px] text-center text-slate-700">
        낮은 가격순
      </span>
      <span className="thumb-anim thumb-sheet-scrim absolute inset-0 bg-slate-900/50" />
      <div className="thumb-anim thumb-sheet-panel absolute inset-x-0 bottom-0 rounded-t-md bg-white px-3 pt-1.5 pb-1">
        <div className="mb-1.5 flex justify-between font-semibold">
          <span>정렬 기준</span>
          <span>닫기</span>
        </div>
        <div className="grid gap-1">
          <span className="rounded bg-slate-100 px-2 py-0.5">추천순</span>
          <span className="rounded bg-slate-100 px-2 py-0.5">낮은 가격순</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-sheet-cursor" />
    </ThumbStage>
  );
}
