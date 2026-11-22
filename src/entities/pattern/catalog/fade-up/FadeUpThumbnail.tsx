import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same card as FadeUpDemo: 다시 보기 → badge, heading and text rise in, a little apart. */
export function FadeUpThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[6px] left-[12px] h-[68px] w-[152px] rounded-lg border border-slate-200 p-[8px]">
        <span className="thumb-anim thumb-fu-0 inline-block rounded-full bg-blue-50 px-[4px] text-[6px] font-semibold text-blue-700">
          새 기능
        </span>
        <p className="thumb-anim thumb-fu-1 mt-[4px] text-[9px] font-bold">
          이제 사진으로 검색하세요
        </p>
        <p className="thumb-anim thumb-fu-2 mt-[3px] text-[6.5px] leading-[9px] text-slate-600">
          찍거나 고른 사진과 비슷한 상품을 찾아 드려요.
        </p>
      </div>
      <span className="absolute top-[82px] left-[12px] rounded border border-slate-200 px-[6px] py-[2px] text-[7px]">
        다시 보기
      </span>
      <ThumbCursor motion="thumb-fu-cursor" />
    </ThumbStage>
  );
}
