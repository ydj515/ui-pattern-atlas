import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same phrase as BlackletterDemo: the style, then 기본 글자 for comparison, then back. */
export function BlackletterThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] grid h-[13px] w-[152px] grid-cols-2 gap-[2px] rounded bg-slate-100 p-[1px] text-[6px]">
        <span className="relative grid place-items-center">
          <span className="thumb-anim thumb-ty-blackletter-sa absolute inset-0 rounded bg-white shadow-sm" />
          <span className="relative">이 스타일</span>
        </span>
        <span className="relative grid place-items-center">
          <span
            className="thumb-anim thumb-ty-blackletter-sb absolute inset-0 rounded bg-white shadow-sm"
            style={{ opacity: 0 }}
          />
          <span className="relative">기본 글자</span>
        </span>
      </div>
      <div className="absolute top-[22px] left-[12px] h-[86px] w-[152px] overflow-hidden rounded-[10px] text-center bg-stone-100">
        <div className="thumb-anim thumb-ty-blackletter-styled absolute inset-0 grid place-content-center justify-items-center gap-[4px]">
          <p className="text-[22px] font-serif text-stone-900">
            <span aria-label="Weekend Market" role="img">
              𝔚𝔢𝔢𝔨𝔢𝔫𝔡 𝔐𝔞𝔯𝔨𝔢𝔱
            </span>
            <span className="mt-[0.1em] block text-[0.35em] tracking-widest">주말 마켓</span>
          </p>
          <span className="text-[5.5px] text-stone-600">11월 29일 서울숲</span>
        </div>
        <div
          className="thumb-anim thumb-ty-blackletter-plain absolute inset-0 grid place-content-center justify-items-center gap-[4px]"
          style={{ opacity: 0 }}
        >
          <p className="text-[22px] text-stone-900">주말 마켓</p>
          <span className="text-[5.5px] text-stone-600">11월 29일 서울숲</span>
        </div>
      </div>
      <ThumbCursor motion="thumb-ty-blackletter-cursor" />
    </ThumbStage>
  );
}
