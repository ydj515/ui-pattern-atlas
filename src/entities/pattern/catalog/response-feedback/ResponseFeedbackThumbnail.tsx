import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const THUMB =
  "M7 11v9H4v-9h3Zm0 0 4-8c1.5 0 2.5 1 2.5 2.5V9h5a2 2 0 0 1 2 2.3l-1.2 6.5A2.5 2.5 0 0 1 16.8 20H7";

/** Same answer as ResponseFeedbackDemo: mark it good, then 다시 생성 replaces it. */
export function ResponseFeedbackThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <div className="relative h-[24px]">
          <p
            className="thumb-anim thumb-rfb-a1 absolute w-fit rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm"
            style={{ opacity: 0 }}
          >
            서울숲 근처 세 곳을 골라 봤어요.
          </p>
          <p className="thumb-anim thumb-rfb-a2 absolute w-[130px] rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
            다시 만든 답변이에요. 예약이 되는 두 곳만 골랐어요.
          </p>
        </div>
        <p className="mt-[3px] flex gap-[2px] text-slate-500">
          <svg
            viewBox="0 0 24 24"
            className="size-[12px] p-[2px] fill-none stroke-current stroke-2"
          >
            <path d="M9 9h10v10H9zM5 15V5h10" />
          </svg>
          <span className="relative size-[12px] p-[2px]">
            <svg viewBox="0 0 24 24" className="size-[8px] fill-none stroke-current stroke-2">
              <path d={THUMB} />
            </svg>
            <svg
              viewBox="0 0 24 24"
              className="thumb-anim thumb-rfb-good absolute inset-[2px] size-[8px] fill-slate-900 stroke-slate-900 stroke-2"
              style={{ opacity: 0 }}
            >
              <path d={THUMB} />
            </svg>
          </span>
          <svg
            viewBox="0 0 24 24"
            className="size-[12px] rotate-180 p-[2px] fill-none stroke-current stroke-2"
          >
            <path d={THUMB} />
          </svg>
          <svg
            viewBox="0 0 24 24"
            className="size-[12px] p-[2px] fill-none stroke-current stroke-2"
          >
            <path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7" />
          </svg>
        </p>
        <p className="relative mt-[4px] h-[9px] text-[6px] text-slate-600">
          <span className="thumb-anim thumb-rfb-s1 absolute" style={{ opacity: 0 }}>
            좋은 답변으로 표시했어요
          </span>
          <span className="thumb-anim thumb-rfb-s2 absolute">새 답변을 만들었어요</span>
        </p>
      </div>
      <ThumbCursor motion="thumb-rfb-cursor" />
    </ThumbStage>
  );
}
