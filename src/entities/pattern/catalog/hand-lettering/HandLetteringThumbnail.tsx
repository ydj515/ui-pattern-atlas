import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as HandLetteringDemo: the style, then 기본 글자 for comparison, then back. */
export function HandLetteringThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-hand-lettering-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-hand-lettering-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-rose-50">
        <div className="thumb-anim thumb-ty-hand-lettering-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] relative inline-block -rotate-3 font-[cursive] font-bold text-rose-700 italic">
            주말 마켓
            <svg
              aria-hidden="true"
              viewBox="0 0 100 10"
              className="absolute -bottom-[0.25em] left-0 h-[0.25em] w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6 C 20 2, 40 9, 60 5 S 90 3, 98 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </p>
          <span className="text-[5.5px] text-rose-700">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-hand-lettering-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-rose-700">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-hand-lettering-cursor" />
    </ThumbStage>
  );
}
