import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as BauhausDemo: the style, then 기본 글자 for comparison, then back. */
export function BauhausThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-bauhaus-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-bauhaus-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-amber-50">
        <div className="thumb-anim thumb-ty-bauhaus-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] relative font-black text-slate-900">
            <span
              aria-hidden="true"
              className="absolute -top-[0.2em] -left-[0.3em] size-[0.9em] rounded-full bg-red-500"
            />
            <span
              aria-hidden="true"
              className="absolute -right-[0.2em] -bottom-[0.15em] size-[0.6em] bg-blue-600"
            />
            <span
              aria-hidden="true"
              className="absolute top-[0.1em] right-[1.6em] size-0 border-x-[0.3em] border-b-[0.5em] border-x-transparent border-b-yellow-400"
            />
            <span className="relative">주말 마켓</span>
          </p>
          <span className="text-[5.5px] text-slate-700">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-bauhaus-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-slate-700">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-bauhaus-cursor" />
    </ThumbStage>
  );
}
