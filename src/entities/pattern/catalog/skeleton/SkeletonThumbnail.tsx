import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

/** Same card as SkeletonDemo: placeholders → 김하늘's profile → 다시 불러오기 restarts loading. */
export function SkeletonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[10px] h-[56px] w-[156px] overflow-hidden rounded-lg border border-slate-200">
        <div className="thumb-anim thumb-skeleton-placeholder absolute inset-0">
          <div className="absolute top-[12px] left-[12px] size-[30px] rounded-full bg-slate-200" />
          <div className="absolute top-[17px] left-[50px] h-[7px] w-[44px] rounded bg-slate-200" />
          <div className="absolute top-[30px] left-[50px] h-[6px] w-[80px] rounded bg-slate-100" />
          <div className="thumb-anim thumb-skeleton-shimmer absolute inset-0 bg-linear-to-r from-transparent via-white/70 to-transparent" />
        </div>
        <div className="thumb-anim thumb-skeleton-content absolute inset-0">
          <div className="absolute top-[12px] left-[12px] grid size-[30px] place-items-center rounded-full bg-amber-100 text-[11px] font-semibold text-amber-800">
            김
          </div>
          <p className="absolute top-[14px] left-[50px] text-[9px] font-semibold">김하늘</p>
          <p className="absolute top-[28px] left-[50px] text-[7px] text-slate-500">
            프로덕트 디자이너 · 서울
          </p>
        </div>
      </div>
      <div className="thumb-anim thumb-skeleton-button absolute top-[76px] left-[10px] grid h-[18px] w-[156px] place-items-center rounded-md border border-slate-300 font-medium">
        다시 불러오기
      </div>
      <ThumbCursor motion="thumb-skeleton-cursor" />
    </ThumbStage>
  );
}
