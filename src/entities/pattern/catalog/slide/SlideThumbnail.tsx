import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same panel as SlideDemo with 아래에서: 보여 주기 slides the card up from the bottom edge; 숨기기 sends it back. */
export function SlideThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[8px] grid h-[12px] w-[160px] grid-cols-4 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="rounded bg-white text-center leading-[10px] font-semibold">아래에서</span>
        <span className="text-center leading-[10px]">위에서</span>
        <span className="text-center leading-[10px]">왼쪽에서</span>
        <span className="text-center leading-[10px]">오른쪽에서</span>
      </div>
      <div className="absolute top-[20px] left-[8px] h-[58px] w-[160px] overflow-hidden rounded-lg bg-slate-100">
        <div className="thumb-anim thumb-sl-card absolute bottom-0 left-[44px] p-[6px]">
          <p className="w-[60px] rounded-md bg-white py-[4px] text-center text-[7px] shadow">
            새 메시지 1개
          </p>
        </div>
      </div>
      <span className="absolute top-[84px] left-[8px] grid h-[14px] w-[44px] rounded bg-slate-900 text-[7px] text-white">
        <span
          className="thumb-anim thumb-sl-show col-start-1 row-start-1 place-self-center"
          style={{ opacity: 0 }}
        >
          보여 주기
        </span>
        <span className="thumb-anim thumb-sl-hide col-start-1 row-start-1 place-self-center">
          숨기기
        </span>
      </span>
      <ThumbCursor motion="thumb-sl-cursor" />
    </ThumbStage>
  );
}
