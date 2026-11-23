import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as EditorialTypographyDemo: the style, then 기본 글자 for comparison, then back. */
export function EditorialTypographyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-editorial-typography-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-editorial-typography-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-stone-50">
        <div className="thumb-anim thumb-ty-editorial-typography-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] border-b border-stone-300 pb-[0.1em] font-serif font-semibold tracking-tight text-stone-900">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-stone-500 italic">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-editorial-typography-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-stone-900">주말 마켓</p>
          <span className="text-[5.5px] text-stone-500 italic">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-editorial-typography-cursor" />
    </ThumbStage>
  );
}
