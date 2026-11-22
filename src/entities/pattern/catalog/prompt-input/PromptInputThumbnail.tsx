import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same box as PromptInputDemo: type and send → the send button becomes a stop button while it answers. */
export function PromptInputThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] text-[6.5px]">
        <p className="text-slate-600">
          보낸 질문: <b className="text-slate-900">주말 브런치 추천해 줘</b>
        </p>
        <p
          className="thumb-anim thumb-prompt-busy mt-[3px] text-[6px] text-slate-500"
          style={{ opacity: 0 }}
        >
          답변을 만드는 중
        </p>
        <div className="absolute inset-x-0 top-[62px] flex h-[22px] items-center gap-[4px] rounded-[10px] border border-slate-300 bg-white px-[4px]">
          <svg viewBox="0 0 24 24" className="size-[9px] fill-none stroke-slate-500 stroke-2">
            <path d="M21 12.5 13 20.5a5 5 0 0 1-7-7l8.5-8.5a3.3 3.3 0 0 1 4.7 4.7L10.7 18" />
          </svg>
          <span className="relative h-[10px] flex-1">
            <span className="thumb-anim thumb-prompt-hint absolute text-slate-400">
              무엇이든 물어보세요
            </span>
            <span className="thumb-anim thumb-prompt-text absolute" style={{ opacity: 0 }}>
              주말 브런치 추천해 줘
            </span>
          </span>
          <span className="relative grid size-[14px] place-items-center rounded-full bg-slate-900 text-white">
            <span className="thumb-anim thumb-prompt-off absolute inset-0 rounded-full bg-slate-300" />
            <svg
              viewBox="0 0 24 24"
              className="thumb-anim thumb-prompt-send relative size-[8px] fill-none stroke-current stroke-[2.5]"
            >
              <path d="M12 19V5M6 11l6-6 6 6" />
            </svg>
            <span
              className="thumb-anim thumb-prompt-stop absolute size-[5px] rounded-[1px] bg-white"
              style={{ opacity: 0 }}
            />
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-prompt-cursor" />
    </ThumbStage>
  );
}
