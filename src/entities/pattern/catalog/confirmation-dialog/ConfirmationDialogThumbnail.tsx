import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as ConfirmationDialogDemo: 목록으로 with unsaved text → confirm → 나가기 → list. */
export function ConfirmationDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-confirm-edit absolute top-[8px] left-[24px] h-[74px] w-[128px] rounded-md border border-slate-200 bg-white">
        <p className="absolute top-[7px] left-[10px] text-[8px] font-semibold">회의록</p>
        <p className="absolute top-[19px] left-[10px] h-[22px] w-[108px] rounded border border-slate-300 px-[5px] pt-[5px] text-[7px]">
          다음 주 출시 일정 정리
        </p>
        <span className="absolute top-[48px] left-[10px] grid h-[16px] w-[52px] place-items-center rounded border border-slate-300 text-[7px]">
          목록으로
        </span>
        <span className="absolute top-[48px] left-[66px] grid h-[16px] w-[52px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          저장
        </span>
      </div>
      <div className="thumb-anim thumb-confirm-list absolute top-[8px] left-[24px] h-[74px] w-[128px] rounded-md border border-slate-200 bg-white">
        <p className="absolute top-[7px] left-[10px] text-[8px] font-semibold">회의록 목록</p>
        <p className="absolute top-[21px] left-[10px] text-[7px] text-slate-500">
          저장된 회의록이 없어요
        </p>
        <span className="absolute top-[48px] left-[10px] grid h-[16px] w-[108px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          새로 작성
        </span>
      </div>

      <div className="thumb-anim thumb-confirm-overlay absolute inset-0 bg-slate-950/50" />
      <div className="thumb-anim thumb-confirm-dialog absolute top-[22px] left-[22px] h-[66px] w-[132px] rounded-lg bg-white shadow-lg">
        <p className="absolute top-[9px] left-[10px] text-[8.5px] font-semibold">
          저장하지 않고 나갈까요?
        </p>
        <p className="absolute top-[23px] left-[10px] text-[7px] text-slate-600">
          작성 중인 내용이 사라져요.
        </p>
        <span className="absolute right-[50px] bottom-[8px] grid h-[14px] w-[40px] place-items-center rounded border border-slate-300 text-[6.5px]">
          계속 작성
        </span>
        <span className="absolute right-[8px] bottom-[8px] grid h-[14px] w-[36px] place-items-center rounded bg-rose-600 text-[6.5px] font-semibold text-white">
          나가기
        </span>
      </div>
      <ThumbCursor motion="thumb-confirm-cursor" />
    </ThumbStage>
  );
}
