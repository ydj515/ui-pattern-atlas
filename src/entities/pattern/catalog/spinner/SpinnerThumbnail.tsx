import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

export function SpinnerThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[24px] left-[44px] grid h-[22px] w-[88px] place-items-center rounded bg-blue-700 font-medium text-white">
        새 소식 확인
      </span>
      <div className="absolute inset-x-3 top-[61px] grid place-items-center">
        <span className="thumb-anim thumb-single-working flex items-center gap-1.5 text-slate-700">
          <span className="size-3 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 motion-reduce:animate-none" />
          소식을 확인하고 있어요
        </span>
        <span className="thumb-anim thumb-single-done absolute text-slate-700">
          새 소식이 없어요
        </span>
      </div>
      <ThumbCursor motion="thumb-single-cursor" />
    </ThumbStage>
  );
}
