import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same message as SparklesDemo: ✦ AI로 다듬기 rewrites the draft and offers 되돌리기. */
export function SparklesThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] overflow-hidden rounded-[12px] border border-slate-200 text-[6.5px] p-[6px]">
        <p className="font-medium">메시지</p>
        <span className="relative mt-[2px] block h-[28px] rounded border border-slate-300 px-[4px] py-[2px]">
          <span className="thumb-anim thumb-spark-draft absolute" style={{ opacity: 0 }}>
            내일 회의 시간 바꿔도 되나요
          </span>
          <span className="thumb-anim thumb-spark-done absolute">
            내일 회의를 오후 3시로 옮겨도 괜찮을까요?
          </span>
        </span>
        <p className="mt-[5px] flex gap-[3px]">
          <span className="flex items-center gap-[2px] rounded bg-violet-600 px-[4px] py-[2px] font-semibold text-white">
            <svg viewBox="0 0 24 24" className="size-[7px] fill-current">
              <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z" />
            </svg>
            AI로 다듬기
          </span>
          <span className="thumb-anim thumb-spark-done rounded border border-slate-200 px-[4px] py-[2px]">
            되돌리기
          </span>
        </p>
        <p className="thumb-anim thumb-spark-done mt-[4px] text-[6px] text-slate-600">
          AI가 다듬은 문장이에요
        </p>
      </div>
      <ThumbCursor motion="thumb-spark-cursor" />
    </ThumbStage>
  );
}
