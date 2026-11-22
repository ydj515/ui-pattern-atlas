import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same lock screen as SlideToUnlockDemo: slide the knob to the end → 잠금이 해제됐어요. */
export function SlideToUnlockThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-indigo-900 text-center text-white">
        <div className="thumb-anim thumb-stu-lock absolute inset-0">
          <p className="mt-[14px] text-[22px] leading-none font-light tabular-nums">9:41</p>
          <p className="mt-[3px] text-[7px] text-white/80">11월 23일 월요일</p>
          <div className="absolute top-[74px] left-[28px] h-[22px] w-[120px] rounded-full bg-slate-800">
            <span className="thumb-anim thumb-stu-hint absolute inset-0 grid place-items-center pl-[18px] text-[7px] text-white/70">
              밀어서 잠금 해제
            </span>
            <span className="thumb-anim thumb-stu-knob absolute top-[2px] left-[2px] grid size-[18px] place-items-center rounded-full bg-white text-[9px] text-slate-800">
              →
            </span>
          </div>
        </div>
        <div
          className="thumb-anim thumb-stu-open absolute inset-0 grid place-content-center gap-[6px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[10px] font-semibold">잠금이 해제됐어요</p>
          <span className="mx-auto rounded-full bg-white/15 px-[8px] py-[3px] text-[7px]">
            다시 잠그기
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-stu-cursor" />
    </ThumbStage>
  );
}
