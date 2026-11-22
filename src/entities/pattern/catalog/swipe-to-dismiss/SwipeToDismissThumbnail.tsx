import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same screen as SwipeToDismissDemo: 공유하기 opens the sheet; dragging its handle down closes it. */
export function SwipeToDismissThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 bg-slate-50 p-[8px]">
        <p className="font-semibold">주말 사진</p>
        <span className="mt-[3px] block h-[48px] w-[100px] rounded-md bg-gradient-to-br from-amber-200 to-rose-300" />
        <span className="mt-[5px] inline-block rounded bg-slate-900 px-[6px] py-[2px] text-[7px] text-white">
          공유하기
        </span>
      </div>
      <span className="thumb-anim thumb-sdm-scrim absolute inset-0 bg-slate-900/30" />
      <div className="thumb-anim thumb-sdm-sheet absolute inset-x-0 bottom-0 h-[64px] rounded-t-[10px] bg-white px-[10px] text-[7px] shadow-xl">
        <span className="mx-auto mt-[4px] block h-[2px] w-[20px] rounded-full bg-slate-300" />
        <p className="mt-[3px] flex justify-between">
          <b className="text-[7.5px]">공유</b>
          <span className="text-slate-600">닫기</span>
        </p>
        <p className="mt-[3px]">링크 복사</p>
        <p className="mt-[2px]">메시지로 보내기</p>
        <p className="mt-[2px]">저장</p>
      </div>
      <ThumbCursor motion="thumb-sdm-cursor" />
    </ThumbStage>
  );
}
