import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as RetroGroovyDemo: the style, then 기본 글자 for comparison, then back. */
export function RetroGroovyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-retro-groovy-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-retro-groovy-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-orange-100">
        <div className="thumb-anim thumb-ty-retro-groovy-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p
            aria-label="주말 마켓"
            className="text-[22px] flex font-black text-orange-500 [text-shadow:0.05em_0.05em_0_#facc15,0.1em_0.1em_0_#9a3412]"
          >
            {Array.from("주말 마켓").map((char, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="inline-block whitespace-pre"
                style={{
                  transform: `translateY(${Math.sin(index * 1.1) * 0.12}em) rotate(${Math.sin(index * 1.3) * 8}deg)`,
                }}
              >
                {char}
              </span>
            ))}
          </p>
          <span className="text-[5.5px] text-orange-800">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-retro-groovy-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-orange-800">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-retro-groovy-cursor" />
    </ThumbStage>
  );
}
