import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as BrutalistTypographyDemo: the style, then 기본 글자 for comparison, then back. */
export function BrutalistTypographyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-brutalist-typography-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-brutalist-typography-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-white">
        <div className="thumb-anim thumb-ty-brutalist-typography-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] relative leading-[0.8] font-black tracking-tighter text-black">
            <span className="block scale-125 origin-left">주말</span>
            <span className="relative -mt-[0.1em] ml-[0.6em] block bg-red-600 px-[0.05em] text-white">
              마켓
            </span>
          </p>
          <span className="text-[5.5px] text-black">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-brutalist-typography-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-black">주말 마켓</p>
          <span className="text-[5.5px] text-black">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-brutalist-typography-cursor" />
    </ThumbStage>
  );
}
