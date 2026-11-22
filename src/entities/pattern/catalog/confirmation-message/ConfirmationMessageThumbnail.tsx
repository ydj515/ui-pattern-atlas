import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as ConfirmationMessageDemo: 보내기 → the form becomes the result and next steps. */
export function ConfirmationMessageThumbnail() {
  return (
    <ThumbStage>
      <div className="thumb-anim thumb-cm-form absolute opacity-0 top-[8px] left-[24px] h-[96px] w-[128px] rounded-md border border-slate-200">
        <p className="absolute top-[7px] left-[8px] text-[7.5px] font-semibold">문의 내용</p>
        <p className="absolute top-[20px] left-[8px] h-[34px] w-[112px] rounded border border-slate-300 px-[5px] pt-[3px] text-[6.5px]">
          배송지를 바꾸고 싶어요
        </p>
        <span className="absolute top-[62px] left-[8px] grid h-[16px] w-[112px] place-items-center rounded bg-slate-900 text-[7px] font-semibold text-white">
          보내기
        </span>
      </div>

      <div className="thumb-anim thumb-cm-done absolute top-[8px] left-[24px] h-[96px] w-[128px] rounded-md border border-emerald-200 text-center">
        <span className="absolute top-[9px] left-[56px] grid size-[16px] place-items-center rounded-full bg-emerald-100 text-[8px] font-bold text-emerald-700">
          ✓
        </span>
        <p className="absolute inset-x-0 top-[30px] text-[8px] font-semibold">문의를 보냈어요</p>
        <p className="absolute inset-x-0 top-[44px] text-[6px] text-slate-600">접수 번호 Q-2048</p>
        <p className="absolute inset-x-0 top-[53px] text-[6px] whitespace-nowrap text-slate-600">
          영업일 1일 안에 이메일로 답해 드려요.
        </p>
        <p className="absolute inset-x-0 top-[72px] text-[6.5px] font-medium underline">
          새 문의 쓰기
        </p>
      </div>
      <ThumbCursor motion="thumb-cm-cursor" />
    </ThumbStage>
  );
}
