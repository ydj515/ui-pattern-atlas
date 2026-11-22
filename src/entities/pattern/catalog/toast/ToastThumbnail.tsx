import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

/** Same flow as ToastDemo: ♡ 찜하기 → toast "찜 목록에 저장했어요" with 되돌리기. */
export function ToastThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[34px] left-[58px] grid h-[18px] w-[60px] place-items-center rounded-full border border-slate-300 bg-white font-semibold">
        ♡ 찜하기
        <div className="thumb-anim thumb-toast-pressed absolute -inset-px grid place-items-center rounded-full border border-rose-300 bg-rose-50 text-rose-700">
          ♥ 찜했어요
        </div>
      </div>

      <div className="thumb-anim thumb-toast-message absolute bottom-[8px] left-[12px] flex h-[22px] w-[152px] items-center justify-between rounded-lg bg-emerald-700 px-[9px] text-white shadow-lg">
        <span>찜 목록에 저장했어요</span>
        <span className="font-semibold">되돌리기</span>
      </div>
      <ThumbCursor motion="thumb-toast-cursor" />
    </ThumbStage>
  );
}
