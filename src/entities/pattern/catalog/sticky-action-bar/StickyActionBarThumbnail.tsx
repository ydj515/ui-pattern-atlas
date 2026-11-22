import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same product as StickyActionBarDemo: the text scrolls under the bar; 장바구니 담기 stays in reach. */
export function StickyActionBarThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[2px] left-[58px] h-[108px] w-[60px] overflow-hidden rounded-[10px] border-2 border-slate-900 bg-white">
        <div
          className="thumb-anim thumb-sab-page text-[5px] leading-[7px] text-slate-700"
          style={{ transform: "translateY(-30px)" }}
        >
          <span className="block h-[34px] bg-gradient-to-br from-amber-200 to-rose-300" />
          <div className="space-y-[3px] p-[4px]">
            <p className="text-[6.5px] font-semibold text-slate-900">린넨 셔츠</p>
            <p>가볍고 시원한 린넨 셔츠예요. 봄부터 초가을까지 입기 좋아요.</p>
            <p>세탁기에 넣어도 되지만 찬물에 단독 세탁을 권해요.</p>
            <p>모델은 키 175cm, M 사이즈를 입었어요.</p>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex h-[22px] items-center justify-between border-t border-slate-200 bg-white px-[3px]">
          <span className="text-[4px] leading-[6px] text-slate-500">
            판매가
            <b className="block text-[5px] text-slate-900">39,000원</b>
          </span>
          <span className="relative grid h-[12px] w-[30px] place-items-center rounded-[3px] bg-slate-900 text-[4.5px] font-semibold text-white">
            <span className="thumb-anim thumb-sab-idle opacity-0">장바구니 담기</span>
            <span className="thumb-anim thumb-sab-done absolute">담았어요</span>
          </span>
        </div>
      </div>
      <ThumbCursor motion="thumb-sab-cursor" />
    </ThumbStage>
  );
}
