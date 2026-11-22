import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

/** Same flow as ModalDialogDemo: 삭제하기 → confirm dialog → 삭제 → status message. */
export function ModalDialogThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[40px] left-[60px] grid h-[16px] w-[56px] place-items-center rounded-full bg-slate-900 font-semibold text-white">
        삭제하기
      </div>
      <p className="thumb-anim thumb-modal-status absolute inset-x-0 top-[62px] text-center text-[7px] text-slate-500">
        프로젝트를 삭제했어요.
      </p>

      <div className="thumb-anim thumb-modal-overlay absolute inset-0 bg-slate-900/45" />
      <div className="thumb-anim thumb-modal-dialog absolute top-[18px] left-[14px] h-[76px] w-[148px] rounded-lg bg-white shadow-lg">
        <p className="absolute top-[9px] left-[10px] text-[9px] font-semibold">
          프로젝트를 삭제할까요?
        </p>
        <p className="absolute top-[24px] left-[10px] w-[128px] text-[7px] text-slate-600">
          삭제한 프로젝트와 파일은 복구할 수 없어요.
        </p>
        <div className="absolute right-[44px] bottom-[9px] grid h-[14px] w-[30px] place-items-center rounded border border-slate-300 text-[7px]">
          취소
        </div>
        <div className="absolute right-[10px] bottom-[9px] grid h-[14px] w-[30px] place-items-center rounded bg-rose-600 text-[7px] font-semibold text-white">
          삭제
        </div>
      </div>
      <ThumbCursor motion="thumb-modal-cursor" />
    </ThumbStage>
  );
}
