import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same survey as NpsScaleDemo: pick 9 → a follow-up question fits the score. */
export function NpsScaleThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[7px] font-semibold">친구에게 추천할 의향이 있나요?</p>
        <p className="mt-[4px] flex gap-[1px]">
          {Array.from({ length: 11 }, (_, score) => (
            <span
              key={score}
              className="relative grid h-[12px] w-[12px] place-items-center rounded-[2px] border border-slate-200 text-[6px]"
            >
              {score}
              {score === 9 ? (
                <span className="thumb-anim thumb-nps-on absolute -inset-px grid place-items-center rounded-[2px] bg-slate-900 text-white">
                  9
                </span>
              ) : null}
            </span>
          ))}
        </p>
        <p className="mt-[1px] flex justify-between text-[5px] text-slate-500">
          <span>0 전혀 아니에요</span>
          <span>10 매우 그래요</span>
        </p>
        <div className="thumb-anim thumb-nps-on">
          <p className="mt-[4px]">가장 좋았던 점은 무엇인가요?</p>
          <span className="mt-[2px] block h-[16px] rounded border border-slate-300 px-[3px] text-[5.5px] leading-[12px] text-slate-400">
            자유롭게 써 주세요
          </span>
        </div>
        <span className="absolute inset-x-[8px] bottom-[6px] grid h-[11px] place-items-center rounded bg-slate-300 font-semibold text-white">
          <span className="thumb-anim thumb-nps-on absolute inset-0 rounded bg-slate-900" />
          <span className="relative">보내기</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-nps-cursor" />
    </ThumbStage>
  );
}
