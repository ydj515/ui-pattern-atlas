import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

export function ProgressBarThumbnail() {
  return (
    <ThumbStage>
      <span className="absolute top-[24px] left-[44px] grid h-[22px] w-[88px] place-items-center rounded bg-blue-700 font-medium text-white">
        업로드 시작
      </span>
      <div className="absolute inset-x-4 top-[54px]">
        <div className="flex justify-between text-slate-700">
          <span>포트폴리오 파일</span>
          <span className="relative tabular-nums">
            <span className="thumb-anim thumb-progress-percent-start absolute right-0">0%</span>
            <span className="thumb-anim thumb-progress-percent-done">100%</span>
            <span className="thumb-anim thumb-progress-percent-twenty absolute right-0">20%</span>
            <span className="thumb-anim thumb-progress-percent-forty absolute right-0">40%</span>
            <span className="thumb-anim thumb-progress-percent-sixty absolute right-0">60%</span>
            <span className="thumb-anim thumb-progress-percent-eighty absolute right-0">80%</span>
          </span>
        </div>
        <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-slate-200">
          <div className="thumb-anim thumb-progress-value h-full origin-left rounded-full bg-blue-700" />
        </div>
        <p className="thumb-anim thumb-progress-percent-done mt-1 text-slate-700">업로드 완료</p>
      </div>
      <ThumbCursor motion="thumb-single-cursor" />
    </ThumbStage>
  );
}
