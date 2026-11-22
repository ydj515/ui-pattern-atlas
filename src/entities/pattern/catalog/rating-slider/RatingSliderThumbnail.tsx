import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same class survey as RatingSliderDemo: drag from 5점 to 8점. */
export function RatingSliderThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[24px] left-[12px] h-[64px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[7px] font-semibold">오늘 수업 만족도</p>
        <span className="absolute top-[34px] left-[9px] h-[3px] w-[134px] rounded-full bg-slate-200" />
        <div
          className="thumb-anim thumb-rsl-knob absolute top-[20px] left-[72px] w-[16px]"
          style={{ transform: "translateX(40px)" }}
        >
          <span className="relative grid h-[9px] rounded bg-slate-900 text-[5.5px] font-semibold text-white">
            {["5점", "6점", "7점", "8점"].map((label, index) => (
              <span
                key={label}
                className={`thumb-anim thumb-rsl-v${index} col-start-1 row-start-1 place-self-center`}
                style={index === 3 ? undefined : { opacity: 0 }}
              >
                {label}
              </span>
            ))}
          </span>
          <span className="mx-auto mt-[3px] block size-[9px] rounded-full border-2 border-white bg-blue-600 shadow" />
        </div>
        <p className="absolute inset-x-[8px] top-[46px] flex justify-between text-[5.5px] text-slate-500">
          <span>아쉬웠어요</span>
          <span>최고였어요</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-rsl-cursor" />
    </ThumbStage>
  );
}
