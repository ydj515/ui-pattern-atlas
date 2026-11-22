import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as LoadingButtonDemo: 저장 → 저장하는 중 → 저장했어요 → back to 저장. */
export function LoadingButtonThumbnail() {
  const base =
    "absolute top-[34px] left-[52px] flex h-[18px] w-[72px] items-center justify-center gap-[3px] rounded-[4px] text-[6.5px] font-semibold text-white";
  return (
    <ThumbStage>
      <span className={`thumb-anim thumb-lbtn-idle ${base} bg-slate-900 opacity-0`}>저장</span>
      <span className={`thumb-anim thumb-lbtn-busy ${base} bg-slate-700 opacity-0`}>
        <span className="thumb-anim thumb-lo-spin size-[7px] rounded-full border-[1.5px] border-white/40 border-t-white" />
        저장하는 중
      </span>
      <span className={`thumb-anim thumb-lbtn-ok ${base} bg-emerald-600`}>✓ 저장했어요</span>
      <p className="absolute inset-x-0 top-[64px] flex items-center justify-center gap-[3px] text-[6px] text-slate-600">
        <span className="size-[6px] rounded-[1.5px] border border-slate-400" />
        실패하게 하기
      </p>
      <ThumbCursor motion="thumb-lbtn-cursor" />
    </ThumbStage>
  );
}
