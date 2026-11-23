import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as ChunkyDemo: the style, then 기본 글자 for comparison, then back. */
export function ChunkyThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-chunky-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-chunky-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-orange-50">
        <div className="thumb-anim thumb-ty-chunky-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] scale-x-110 leading-none font-black tracking-[-0.06em] text-orange-500">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-orange-700">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-chunky-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-orange-700">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-chunky-cursor" />
    </ThumbStage>
  );
}
