import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same memo as FadeDemo: 저장 → 저장했어요 fades in, waits, then fades out. */
export function FadeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[16px] h-[62px] w-[144px] rounded-lg border border-slate-200 p-[8px]">
        <p className="font-semibold">메모</p>
        <p className="text-[7px] text-slate-600">우유, 달걀, 식빵 사기</p>
        <span className="mt-[6px] inline-block rounded bg-slate-900 px-[6px] py-[2px] text-[7px] text-white">
          저장
        </span>
      </div>
      <p className="thumb-anim thumb-fade-toast absolute top-[76px] left-[16px] w-[144px] rounded bg-slate-900 px-[8px] py-[4px] text-[7px] text-white">
        저장했어요
      </p>
      <ThumbCursor motion="thumb-fade-cursor" />
    </ThumbStage>
  );
}
