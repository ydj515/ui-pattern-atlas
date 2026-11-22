import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

function Room({ edited }: { readonly edited: boolean }) {
  return (
    <span className={`absolute inset-0 ${edited ? "bg-amber-50" : "bg-slate-300"}`}>
      <span
        className={`absolute right-[14px] bottom-0 left-[14px] h-[30px] rounded-t-[8px] ${edited ? "bg-emerald-600" : "bg-slate-500"}`}
      />
      <span
        className={`absolute top-[12px] left-[16px] size-[20px] rounded-full ${edited ? "bg-amber-300" : "bg-slate-400"}`}
      />
      <span
        className={`absolute top-[14px] right-[16px] h-[26px] w-[32px] rounded-[3px] ${edited ? "bg-sky-300" : "bg-slate-400"}`}
      />
    </span>
  );
}

/** Same room as BeforeAfterSliderDemo: drag the handle right, then left, to compare. */
export function BeforeAfterSliderThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[8px] left-[28px] h-[90px] w-[120px] overflow-hidden rounded-md">
        <Room edited />
        <div
          className="thumb-anim thumb-ba-clip absolute inset-0 overflow-hidden"
          style={{ transform: "translateX(-60px)" }}
        >
          <div
            className="thumb-anim thumb-ba-inner absolute inset-0"
            style={{ transform: "translateX(60px)" }}
          >
            <Room edited={false} />
          </div>
        </div>
        <span className="absolute top-[4px] left-[4px] rounded-full bg-black/50 px-[4px] text-[5px] text-white">
          보정 전
        </span>
        <span className="absolute top-[4px] right-[4px] rounded-full bg-black/50 px-[4px] text-[5px] text-white">
          보정 후
        </span>
        <span className="thumb-anim thumb-ba-line absolute inset-y-0 left-[59px] w-[2px] bg-white">
          <span className="absolute top-[38px] left-[-6px] grid size-[14px] place-items-center rounded-full bg-white text-[5px] text-slate-700 shadow">
            ‹›
          </span>
        </span>
      </div>
      <ThumbCursor motion="thumb-ba-cursor" />
    </ThumbStage>
  );
}
