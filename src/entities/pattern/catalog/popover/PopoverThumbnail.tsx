import { ThumbCursor, ThumbStage } from "../../ui/ThumbStage";

/** Same flow as PopoverDemo: 요금 계산 방식 → panel opens → click outside → it closes. */
export function PopoverThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute inset-x-0 top-[8px] text-center">
        이번 달 예상 요금 <strong className="text-[10px] font-semibold">12,400원</strong>
      </p>
      <div className="absolute top-[24px] left-[56px] grid h-[16px] w-[64px] place-items-center rounded-md border border-slate-300 bg-white text-[7px] font-medium">
        요금 계산 방식
      </div>

      <div className="thumb-anim thumb-popover-panel absolute top-[46px] left-[24px] h-[58px] w-[128px] rounded-lg border border-slate-200 bg-white shadow-md">
        <div className="absolute -top-[4px] left-[60px] size-[7px] rotate-45 border-t border-l border-slate-200 bg-white" />
        <p className="absolute top-[7px] left-[8px] font-semibold">요금은 이렇게 계산돼요</p>
        <p className="absolute top-[20px] left-[8px] text-[7px] text-slate-600">• 기본료 9,900원</p>
        <p className="absolute top-[30px] left-[8px] text-[7px] text-slate-600">
          • 추가 사용량 1GB당 500원
        </p>
        <p className="absolute top-[42px] left-[8px] text-[7px] font-medium underline">
          요금제 바꾸기
        </p>
      </div>
      <ThumbCursor motion="thumb-popover-cursor" />
    </ThumbStage>
  );
}
