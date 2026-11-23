import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as ThreeDExtrudeDemo: the style, then 기본 글자 for comparison, then back. */
export function ThreeDExtrudeThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-three-d-extrude-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-three-d-extrude-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-sky-50">
        <div className="thumb-anim thumb-ty-three-d-extrude-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] font-black text-sky-400 [text-shadow:0.02em_0.02em_0_#0284c7,0.04em_0.04em_0_#0284c7,0.06em_0.06em_0_#0369a1,0.08em_0.08em_0_#0369a1,0.1em_0.1em_0_#075985]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-sky-700">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-three-d-extrude-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-sky-700">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-three-d-extrude-cursor" />
    </ThumbStage>
  );
}
