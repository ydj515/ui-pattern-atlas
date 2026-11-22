import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PROMPTS = ["주말 브런치 추천해 줘", "회의록을 세 줄로 요약해 줘", "영어 메일을 다듬어 줘"];

/** Same empty chat as SuggestedPromptsDemo: tap 주말 브런치 추천해 줘 → it is asked right away. */
export function SuggestedPromptsThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <div className="thumb-anim thumb-sugg-empty" style={{ opacity: 0 }}>
          <p className="text-[8px] font-bold">무엇을 도와드릴까요?</p>
          {PROMPTS.map((prompt) => (
            <p
              key={prompt}
              className="mt-[4px] rounded-md border border-slate-200 bg-white px-[5px] py-[3px]"
            >
              {prompt}
            </p>
          ))}
        </div>
        <div className="thumb-anim thumb-sugg-asked absolute inset-[6px] grid content-start gap-[5px]">
          <p className="ml-auto w-fit rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
            주말 브런치 추천해 줘
          </p>
          <p className="w-fit rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] text-slate-600 shadow-sm">
            답변을 준비하고 있어요
          </p>
          <span className="w-fit rounded border border-slate-200 bg-white px-[4px] text-[6px]">
            처음으로
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-sugg-cursor" />
    </ThumbStage>
  );
}
