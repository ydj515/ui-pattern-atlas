import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as MonospaceTypeDemo: the style, then 기본 글자 for comparison, then back. */
export function MonospaceTypeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-monospace-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-monospace-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-slate-100">
        <div className="thumb-anim thumb-ty-monospace-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p
            aria-label="주말 마켓"
            className="text-[22px] flex font-mono font-semibold text-slate-900"
          >
            {Array.from("주말 마켓").map((char, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="grid w-[1.1em] place-items-center border border-slate-300 bg-white"
              >
                {char}
              </span>
            ))}
          </p>
          <span className="text-[5.5px] text-slate-500">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-monospace-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-slate-500">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-monospace-cursor" />
    </ThumbStage>
  );
}
