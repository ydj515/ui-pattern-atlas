import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as ComicPopArtDemo: the style, then 기본 글자 for comparison, then back. */
export function ComicPopArtThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-comic-pop-art-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-comic-pop-art-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-yellow-300 bg-[radial-gradient(circle,rgba(239,68,68,0.35)_1.5px,transparent_1.6px)] bg-[length:8px_8px]">
        <div className="thumb-anim thumb-ty-comic-pop-art-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] -rotate-3 font-black text-white italic [-webkit-text-stroke:0.04em_#000] [text-shadow:0.07em_0.07em_0_#ef4444]">
            주말 마켓
          </p>
          <span className="text-[5.5px] text-black">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-comic-pop-art-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-black">주말 마켓</p>
          <span className="text-[5.5px] text-black">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-comic-pop-art-cursor" />
    </ThumbStage>
  );
}
