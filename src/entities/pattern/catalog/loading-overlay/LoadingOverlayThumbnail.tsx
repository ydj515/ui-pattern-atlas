import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as LoadingOverlayDemo: 저장 → the profile card is covered while saving → 저장했어요. */
export function LoadingOverlayThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[90px] w-[120px] overflow-hidden rounded-md border border-slate-200">
        <p className="absolute top-[6px] left-[8px] text-[7.5px] font-semibold">프로필</p>
        <p className="absolute top-[19px] left-[8px] text-[6px] text-slate-600">이름</p>
        <p className="absolute top-[27px] left-[8px] h-[12px] w-[104px] rounded border border-slate-300 px-[4px] text-[6.5px] leading-[10px]">
          김하늘
        </p>
        <p className="absolute top-[42px] left-[8px] text-[6px] text-slate-600">소개</p>
        <p className="absolute top-[50px] left-[8px] h-[12px] w-[104px] rounded border border-slate-300 px-[4px] text-[6.5px] leading-[10px]">
          프로덕트 디자이너
        </p>
        <span className="absolute top-[68px] left-[8px] grid h-[14px] w-[104px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          저장
        </span>

        <div className="thumb-anim thumb-lo-overlay absolute inset-0 flex items-center justify-center gap-[4px] bg-white/75 text-[7px] font-medium text-slate-700">
          <span className="thumb-anim thumb-lo-spin size-[9px] rounded-full border-[1.5px] border-slate-200 border-t-blue-600" />
          저장하는 중
        </div>
      </div>
      <p className="thumb-anim thumb-lo-done absolute inset-x-0 top-[98px] text-center text-[6.5px] text-emerald-700 opacity-0">
        저장했어요
      </p>
      <ThumbCursor motion="thumb-lo-cursor" />
    </ThumbStage>
  );
}
