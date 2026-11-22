import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same flow as TagInputDemo: type 개발 + Enter → a chip → remove 디자인 with ×. */
export function TagInputThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[10px] left-[20px] text-[7px] font-medium">관심 분야</p>
      <span className="absolute top-[21px] left-[20px] h-[18px] w-[136px] rounded border border-slate-300" />
      <span className="thumb-anim thumb-tag-design absolute top-[24px] left-[24px] flex h-[12px] w-[34px] items-center justify-center gap-[3px] rounded-full bg-slate-100 text-[6px]">
        디자인<span className="text-slate-500">×</span>
      </span>
      <span className="thumb-anim thumb-tag-typing absolute top-[26px] left-[62px] text-[6.5px] opacity-0">
        개발
      </span>
      <span className="thumb-anim thumb-tag-dev absolute top-[24px] left-[62px] flex h-[12px] w-[28px] items-center justify-center gap-[3px] rounded-full bg-slate-100 text-[6px]">
        개발<span className="text-slate-500">×</span>
      </span>
      <p className="absolute top-[44px] left-[20px] text-[6px] text-slate-500">
        Enter나 쉼표로 추가해요. 예: 개발, 마케팅
      </p>
      <span className="thumb-anim thumb-tag-enter absolute top-[62px] left-[76px] grid h-[13px] w-[26px] place-items-center rounded-[3px] border border-slate-300 bg-white text-[6px] text-slate-600 shadow-sm opacity-0">
        Enter
      </span>
      <ThumbCursor motion="thumb-tag-cursor" />
    </ThumbStage>
  );
}
