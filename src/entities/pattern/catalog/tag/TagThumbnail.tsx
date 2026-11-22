import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const tag =
  "absolute top-[24px] flex h-[12px] items-center gap-[2px] rounded-[3px] px-[4px] text-[5.5px] font-medium";

/** Same tags as TagDemo: remove 접근성 → 초안 slides over → 태그 되돌리기 appears. */
export function TagThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[14px] left-[24px] h-[56px] w-[128px] rounded-md border border-slate-200">
        <p className="absolute top-[7px] left-[8px] text-[7px] font-semibold">버튼 문구 가이드</p>
        <span className={`${tag} left-[8px] bg-blue-50 text-blue-800`}>
          디자인<span>×</span>
        </span>
        <span
          className={`thumb-anim thumb-tg-gone ${tag} left-[42px] bg-emerald-50 text-emerald-800 opacity-0`}
        >
          접근성<span>×</span>
        </span>
        <span
          className={`thumb-anim thumb-tg-shift ${tag} left-[76px] bg-amber-50 text-amber-800`}
          style={{ transform: "translateX(-34px)" }}
        >
          초안<span>×</span>
        </span>
        <p className="thumb-anim thumb-tg-undo absolute top-[42px] left-[8px] text-[5.5px] text-slate-500 underline">
          태그 되돌리기
        </p>
      </div>
      <ThumbCursor motion="thumb-tg-cursor" />
    </ThumbStage>
  );
}
