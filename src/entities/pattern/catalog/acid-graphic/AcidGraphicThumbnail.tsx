import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as AcidGraphicDemo: the style, then 기본 글자 for comparison, then back. */
export function AcidGraphicThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-acid-graphic-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-acid-graphic-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-black">
        <div className="thumb-anim thumb-ty-acid-graphic-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] inline-block origin-center -skew-x-12 scale-y-150 font-black tracking-tighter text-lime-300 [text-shadow:0_0_0.15em_#bef264,0.06em_0_0_#e879f9]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-lime-200/80">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-acid-graphic-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-white">주말 마켓</p>
          <span className="text-[5.5px] text-lime-200/80">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-acid-graphic-cursor" />
    </ThumbStage>
  );
}
