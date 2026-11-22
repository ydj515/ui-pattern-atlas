import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same dialog as ButtonDemo: hover 저장 → press → 저장했어요. */
export function ButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[10px] left-[16px] h-[80px] w-[144px] rounded-md border border-slate-200">
        <p className="absolute top-[8px] left-[8px] text-[7px] font-semibold">
          변경 사항을 저장할까요?
        </p>
        <p className="absolute top-[19px] left-[8px] w-[130px] text-[5px] text-slate-500">
          저장하지 않으면 지금까지 고친 내용이 사라져요.
        </p>
        <span className="absolute top-[40px] left-[46px] grid h-[13px] w-[28px] place-items-center text-[6px] font-semibold text-slate-700">
          버리기
        </span>
        <span className="absolute top-[40px] left-[77px] grid h-[13px] w-[30px] place-items-center rounded-[3px] border border-slate-300 text-[6px] font-semibold">
          나중에
        </span>
        <span className="thumb-anim thumb-btn-press absolute top-[40px] left-[110px] h-[13px] w-[26px]">
          <span className="absolute inset-0 grid place-items-center rounded-[3px] bg-slate-900 text-[6px] font-semibold text-white">
            저장
          </span>
          <span className="thumb-anim thumb-btn-hover absolute inset-0 grid place-items-center rounded-[3px] bg-slate-700 text-[6px] font-semibold text-white opacity-0">
            저장
          </span>
        </span>
        <p className="thumb-anim thumb-btn-done absolute top-[62px] left-[8px] text-[6px] text-slate-600">
          저장했어요
        </p>
      </div>
      <ThumbCursor motion="thumb-btn-cursor" />
    </ThumbStage>
  );
}
