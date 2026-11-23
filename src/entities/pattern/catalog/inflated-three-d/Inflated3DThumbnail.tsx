import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as Inflated3DDemo: the style, then 기본 글자 for comparison, then back. */
export function Inflated3DThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-inflated-three-d-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-inflated-three-d-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-sky-100">
        <div className="thumb-anim thumb-ty-inflated-three-d-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] font-black tracking-tight text-pink-400 [-webkit-text-stroke:0.03em_white] [text-shadow:0_0.04em_0_#f472b6,0_0.08em_0_#db2777,0_0.14em_0.12em_rgba(0,0,0,0.25)]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-sky-700">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-inflated-three-d-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-slate-900">주말 마켓</p>
          <span className="text-[5.5px] text-sky-700">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-inflated-three-d-cursor" />
    </ThumbStage>
  );
}
