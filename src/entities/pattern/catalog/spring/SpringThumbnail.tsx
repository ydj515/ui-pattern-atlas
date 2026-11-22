import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same ball as SpringDemo with 통통 튀게: it overshoots the far side, swings back and settles. */
export function SpringThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[20px] left-[8px] h-[30px] w-[160px] rounded-lg bg-slate-100">
        <span
          className="thumb-anim thumb-spr-ball absolute top-[5px] left-[4px] size-[20px] rounded-full bg-blue-600 shadow"
          style={{ transform: "translateX(132px)" }}
        />
      </div>
      <div className="absolute top-[60px] left-[8px] flex gap-[3px] text-[6.5px]">
        <span className="rounded border border-slate-900 px-[4px] py-[2px] font-semibold">
          통통 튀게
        </span>
        <span className="rounded border border-slate-200 px-[4px] py-[2px]">부드럽게</span>
      </div>
      <span className="absolute top-[58px] left-[112px] grid h-[14px] w-[56px] rounded bg-slate-900 text-[7px] text-white">
        <span
          className="thumb-anim thumb-spr-right col-start-1 row-start-1 place-self-center"
          style={{ opacity: 0 }}
        >
          오른쪽으로
        </span>
        <span className="thumb-anim thumb-spr-left col-start-1 row-start-1 place-self-center">
          왼쪽으로
        </span>
      </span>
      <ThumbCursor motion="thumb-spr-cursor" />
    </ThumbStage>
  );
}
