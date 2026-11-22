import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same question as RegenerateResponseDemo: 다시 생성 → a second name → ‹ goes back to the first. */
export function RegenerateResponseThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <p className="ml-auto w-fit rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
          브런치 가게 이름 지어 줘
        </p>
        <p className="relative mt-[6px] h-[14px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
          <span className="thumb-anim thumb-regen-v1 absolute">숲속 한 접시</span>
          <span
            className="thumb-anim thumb-regen-busy absolute text-slate-500"
            style={{ opacity: 0 }}
          >
            새 답변을 만드는 중
          </span>
          <span className="thumb-anim thumb-regen-v2 absolute" style={{ opacity: 0 }}>
            토요일 아침
          </span>
        </p>
        <p className="mt-[4px] flex items-center gap-[4px] text-[6px] text-slate-600">
          <span>‹</span>
          <span className="grid tabular-nums">
            <span
              className="thumb-anim thumb-regen-p11 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              1 / 1
            </span>
            <span
              className="thumb-anim thumb-regen-p22 col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              2 / 2
            </span>
            <span className="thumb-anim thumb-regen-p12 col-start-1 row-start-1">1 / 2</span>
          </span>
          <span>›</span>
          <span className="ml-[4px] rounded border border-slate-200 px-[3px]">다시 생성</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-regen-cursor" />
    </ThumbStage>
  );
}
