import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same article as ThumbsFeedbackDemo: 아니요 → pick 설명이 어려워요 → 보내기 → 의견 고마워요. */
export function ThumbsFeedbackThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[28px] h-[104px] w-[120px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="text-[7.5px] font-bold">비밀번호를 바꾸려면</p>
        <p className="mt-[2px] leading-[8px] text-slate-600">
          내 정보 → 보안에서 새 비밀번호를 두 번 입력하세요.
        </p>
        <div className="absolute inset-x-[6px] top-[44px] h-[56px] rounded-md border border-slate-200 p-[4px]">
          <p className="text-[6.5px] font-semibold">이 도움말이 도움이 됐나요?</p>
          <p className="thumb-anim thumb-tf-ask mt-[4px] flex gap-[3px]" style={{ opacity: 0 }}>
            <span className="rounded border border-slate-200 px-[5px] py-[1px]">네</span>
            <span className="rounded border border-slate-200 px-[5px] py-[1px]">아니요</span>
          </p>
          <div
            className="thumb-anim thumb-tf-why absolute inset-x-[4px] top-[14px]"
            style={{ opacity: 0 }}
          >
            <p className="flex flex-wrap gap-[2px] text-[5.5px]">
              <span className="rounded-full border border-slate-200 px-[3px]">정보가 틀려요</span>
              <span className="relative rounded-full border border-slate-200 px-[3px]">
                설명이 어려워요
                <span className="thumb-anim thumb-tf-pick absolute -inset-px rounded-full bg-slate-900 px-[3px] text-white">
                  설명이 어려워요
                </span>
              </span>
              <span className="rounded-full border border-slate-200 px-[3px]">
                찾던 내용이 아니에요
              </span>
            </p>
            <span className="mt-[3px] inline-block rounded bg-slate-900 px-[4px] py-[1px] font-semibold text-white">
              보내기
            </span>
          </div>
          <p className="thumb-anim thumb-tf-done mt-[4px] text-emerald-700">의견 고마워요</p>
        </div>
      </div>
      <ThumbCursor motion="thumb-thumbs-feedback-cursor" />
    </ThumbStage>
  );
}
