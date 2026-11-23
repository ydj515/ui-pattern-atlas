import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HIDDEN = { opacity: 0 };

/** Same return as ResumePromptDemo: where it stopped, how far, one button to go on. */
export function ResumePromptThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] overflow-hidden rounded-[12px] border border-slate-200 p-[8px] text-[6px] leading-[1.35] bg-slate-50">
        <div className="thumb-anim thumb-lr-rp-card relative grid gap-[3px] rounded-[6px] border border-slate-200 bg-white p-[6px]">
          <span className="absolute top-[3px] right-[5px] text-slate-400">×</span>
          <span className="text-[5px] text-slate-500">다시 오셨네요</span>
          <b className="text-[7.5px]">서울 야경 사진 강의</b>
          <span className="text-slate-600">3강 12:40에서 멈췄어요</span>
          <span className="h-[3px] overflow-hidden rounded-full bg-slate-200">
            <span className="block h-full w-2/5 bg-slate-900" />
          </span>
          <span className="mt-[2px] flex gap-[3px] text-center">
            <span className="flex-1 rounded-[3px] bg-slate-900 py-[2px] text-white">
              이어서 보기
            </span>
            <span className="rounded-[3px] border border-slate-300 px-[5px] py-[2px]">
              처음부터
            </span>
          </span>
        </div>
        <p
          className="thumb-anim thumb-lr-rp-done absolute inset-x-[8px] top-[40px] text-center text-[7px] text-slate-700"
          style={HIDDEN}
        >
          3강 12:40부터 재생해요
        </p>
      </div>
      <ThumbCursor motion="thumb-lr-rp-cursor" />
    </ThumbStage>
  );
}
