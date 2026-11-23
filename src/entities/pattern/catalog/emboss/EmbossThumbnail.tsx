import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as EmbossDemo: the style, then 기본 글자 for comparison, then back. */
export function EmbossThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-emboss-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-emboss-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-stone-300">
        <div className="thumb-anim thumb-ty-emboss-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] font-black text-stone-300 [text-shadow:-0.02em_-0.02em_0_rgba(255,255,255,0.85),0.025em_0.025em_0.02em_rgba(0,0,0,0.35)]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-stone-600">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-emboss-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-stone-800">주말 마켓</p>
          <span className="text-[5.5px] text-stone-600">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-emboss-cursor" />
    </ThumbStage>
  );
}
