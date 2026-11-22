import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const STEPS = [24, 60, 96] as const;

/** Same flow as ProgressToastDemo: 파일 올리기 → progress toast with 취소 → 올리기 완료. */
export function ProgressToastThumbnail() {
  return (
    <ThumbStage>
      <span className="thumb-anim thumb-pt-btn absolute top-[14px] left-[60px] grid h-[16px] w-[56px] place-items-center rounded-full bg-slate-900 text-[7px] font-semibold text-white">
        파일 올리기
      </span>

      <div className="thumb-anim thumb-pt-toast absolute top-[50px] left-[16px] h-[38px] w-[144px] rounded-lg bg-slate-900 text-[7px] text-white shadow-lg">
        {STEPS.map((step, index) => (
          <p
            key={step}
            className={`thumb-anim thumb-pt-t${index + 1} ${step === 60 ? "" : "opacity-0"} absolute top-[8px] left-[10px]`}
          >
            회의록.pdf 올리는 중 {step}%
          </p>
        ))}
        <p className="thumb-anim thumb-pt-done absolute opacity-0 top-[8px] left-[10px]">
          회의록.pdf 올리기 완료
        </p>
        <p className="thumb-anim thumb-pt-cancel absolute top-[8px] right-[10px] font-semibold text-slate-300">
          취소
        </p>
        <span className="absolute top-[26px] left-[10px] h-[3px] w-[124px] overflow-hidden rounded-full bg-white/15">
          <span
            className="thumb-anim thumb-pt-bar absolute inset-0 origin-left rounded-full bg-blue-500"
            style={{ transform: "scaleX(0.6)" }}
          />
          <span className="thumb-anim thumb-pt-bar-done absolute inset-0 rounded-full opacity-0 bg-emerald-500" />
        </span>
      </div>
      <ThumbCursor motion="thumb-pt-cursor" />
    </ThumbStage>
  );
}
