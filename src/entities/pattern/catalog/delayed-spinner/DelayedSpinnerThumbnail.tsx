import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as DelayedSpinnerDemo: a fast answer shows no spinner, a slow one does. */
export function DelayedSpinnerThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[10px] left-[12px] grid h-[18px] w-[74px] place-items-center rounded border border-slate-300 text-[7px] font-medium">
        <span>
          빠른 응답 <span className="text-slate-400">0.2초</span>
        </span>
      </span>
      <span className="absolute top-[10px] left-[90px] grid h-[18px] w-[74px] place-items-center rounded border border-slate-300 text-[7px] font-medium">
        <span>
          느린 응답 <span className="text-slate-400">2초</span>
        </span>
      </span>

      <div className="absolute top-[36px] left-[12px] h-[64px] w-[152px] rounded-md border border-slate-200 text-[7px]">
        <p className="thumb-anim thumb-ds-idle absolute inset-x-0 top-[27px] text-center text-slate-400 opacity-0">
          버튼을 눌러 보세요
        </p>
        <p className="thumb-anim thumb-ds-fast absolute inset-x-0 top-[27px] text-center opacity-0">
          주문 내역을 불러왔어요 (0.2초)
        </p>
        <p className="thumb-anim thumb-ds-wait absolute inset-x-0 top-[26px] flex items-center justify-center gap-[4px] text-slate-600">
          <span className="thumb-anim thumb-ds-spin size-[9px] rounded-full border-[1.5px] border-slate-200 border-t-blue-600" />
          불러오는 중
        </p>
        <p className="thumb-anim thumb-ds-slow absolute inset-x-0 top-[27px] text-center opacity-0">
          주문 내역을 불러왔어요 (2초)
        </p>
      </div>
      <ThumbCursor motion="thumb-ds-cursor" />
    </ThumbStage>
  );
}
