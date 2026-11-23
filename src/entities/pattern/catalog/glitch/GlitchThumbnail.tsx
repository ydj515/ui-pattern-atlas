import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as GlitchDemo: the style, then 기본 글자 for comparison, then back. */
export function GlitchThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-glitch-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-glitch-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-slate-950">
        <div className="thumb-anim thumb-ty-glitch-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] relative font-black text-white">
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-[0.04em] text-cyan-400 mix-blend-screen [clip-path:inset(10%_0_55%_0)]"
            >
              주말 마켓
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-[0.04em] text-rose-500 mix-blend-screen [clip-path:inset(55%_0_15%_0)]"
            >
              주말 마켓
            </span>
            <span className="relative">주말 마켓</span>
          </p>
          <span className="text-[5.5px] text-slate-400">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-glitch-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-white">주말 마켓</p>
          <span className="text-[5.5px] text-slate-400">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-glitch-cursor" />
    </ThumbStage>
  );
}
