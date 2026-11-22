import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same chat as EditPromptDemo: 수정 → change the question → 보내기 → a new answer from that point. */
export function EditPromptThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 bg-slate-50 p-[6px] text-[6.5px]">
        <div className="relative h-[34px]">
          <p
            className="thumb-anim thumb-editp-before absolute right-0 flex items-center gap-[3px]"
            style={{ opacity: 0 }}
          >
            <span className="text-[5.5px] text-slate-500">수정</span>
            <span className="rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
              주말 브런치 추천해 줘
            </span>
          </p>
          <div
            className="thumb-anim thumb-editp-form absolute inset-x-[10px] top-0 rounded-md bg-slate-100 p-[3px]"
            style={{ opacity: 0 }}
          >
            <span className="block h-[14px] rounded border border-slate-300 bg-white px-[3px] leading-[13px]">
              아이와 가기 좋은 주말 브런치 추천해 줘
            </span>
            <span className="mt-[2px] flex justify-end gap-[3px] text-[5.5px]">
              <span>취소</span>
              <b className="rounded bg-slate-900 px-[3px] text-white">보내기</b>
            </span>
          </div>
          <p className="thumb-anim thumb-editp-after absolute right-0 flex items-center gap-[3px]">
            <span className="text-[5.5px] text-slate-500">수정</span>
            <span className="rounded-[8px] rounded-br-[2px] bg-slate-900 px-[5px] py-[2px] text-white">
              아이와 가기 좋은 주말 브런치 추천해 줘
            </span>
          </p>
        </div>
        <p className="thumb-anim thumb-editp-after text-center text-[5.5px] text-slate-500">
          이 질문부터 새로 답했어요
        </p>
        <p className="relative mt-[3px] h-[13px]">
          <span
            className="thumb-anim thumb-editp-old absolute rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm"
            style={{ opacity: 0 }}
          >
            서울숲 근처 세 곳을 골라 봤어요.
          </span>
          <span className="thumb-anim thumb-editp-after absolute rounded-[8px] rounded-bl-[2px] bg-white px-[5px] py-[2px] shadow-sm">
            아이와 가기 좋은 곳으로 다시 골랐어요.
          </span>
        </p>
      </div>
      <ThumbCursor motion="thumb-editp-cursor" />
    </ThumbStage>
  );
}
