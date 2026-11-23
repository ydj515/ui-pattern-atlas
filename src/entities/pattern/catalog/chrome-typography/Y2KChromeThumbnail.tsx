import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as Y2KChromeDemo: the style, then 기본 글자 for comparison, then back. */
export function Y2KChromeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-chrome-typography-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-chrome-typography-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-gradient-to-b from-violet-950 to-slate-950">
        <div className="thumb-anim thumb-ty-chrome-typography-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] bg-gradient-to-b from-white via-slate-400 to-slate-100 bg-clip-text font-black text-transparent italic [-webkit-text-stroke:0.015em_#e2e8f0] [filter:drop-shadow(0_0_0.08em_rgba(167,139,250,0.9))]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-violet-200">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-chrome-typography-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-white">주말 마켓</p>
          <span className="text-[5.5px] text-violet-200">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-chrome-typography-cursor" />
    </ThumbStage>
  );
}
