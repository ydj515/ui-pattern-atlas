import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same field as CopyButtonDemo: 복사 → 복사됨 for a moment → back. */
export function CopyButtonThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[26px] left-[20px] text-[7px] font-medium">초대 링크</p>
      <p className="absolute top-[37px] left-[20px] h-[16px] w-[98px] overflow-hidden rounded-[4px] border border-slate-300 bg-slate-50 px-[5px] text-[5.5px] leading-[14px] whitespace-nowrap text-slate-700">
        https://atlas.example/invite/7KQ2
      </p>
      <span className="absolute top-[37px] left-[122px] grid h-[16px] w-[34px] place-items-center rounded-[4px] border border-slate-300 text-[6.5px] font-medium">
        복사
      </span>
      <span className="thumb-anim thumb-copy-done absolute top-[37px] left-[122px] grid h-[16px] w-[34px] place-items-center rounded-[4px] border border-emerald-200 bg-emerald-50 text-[6.5px] font-medium text-emerald-700">
        ✓ 복사됨
      </span>
      <ThumbCursor motion="thumb-copy-cursor" />
    </ThumbStage>
  );
}
