import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same chat as ThinkingIndicatorDemo: 질문하기 → dots while thinking, then the seconds → the answer. */
export function ThinkingIndicatorThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <p className="ml-auto w-fit rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          주말 브런치 추천해 줘
        </p>
        <p
          className="thumb-anim thumb-think-dots absolute top-[24px] left-[6px] flex items-center gap-[3px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[3px] text-slate-600 shadow-sm"
          style={{ opacity: 0 }}
        >
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`thumb-anim thumb-think-d${dot} size-[3px] rounded-full bg-slate-400`}
            />
          ))}
          생각하는 중
          <span className="thumb-anim thumb-think-sec text-[5.5px] text-slate-400">3초</span>
        </p>
        <p className="thumb-anim thumb-think-answer absolute top-[24px] left-[6px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
          서울숲 근처 세 곳을 골라 봤어요.
        </p>
        <span className="absolute bottom-[6px] left-[6px] grid rounded bg-slate-900 px-[5px] py-[2px] font-semibold text-white">
          <span
            className="thumb-anim thumb-think-ask col-start-1 row-start-1"
            style={{ opacity: 0 }}
          >
            질문하기
          </span>
          <span className="thumb-anim thumb-think-again col-start-1 row-start-1">다시 묻기</span>
        </span>
      </div>
      <ThumbCursor motion="thumb-think-cursor" />
    </ThumbStage>
  );
}
