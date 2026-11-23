import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as GraffitiDemo: the style, then 기본 글자 for comparison, then back. */
export function GraffitiThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-graffiti-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-graffiti-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-[repeating-linear-gradient(0deg,#b45309_0_18px,#92400e_18px_20px)]">
        <div className="thumb-anim thumb-ty-graffiti-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] -rotate-6 -skew-x-12 bg-gradient-to-r from-lime-300 to-cyan-300 bg-clip-text font-black text-transparent italic [-webkit-text-stroke:0.04em_#000] [filter:drop-shadow(0.05em_0.05em_0_#000)]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-amber-100">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-graffiti-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-white">주말 마켓</p>
          <span className="text-[5.5px] text-amber-100">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-graffiti-cursor" />
    </ThumbStage>
  );
}
