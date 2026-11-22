import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

/** Same shop as BounceDemo: 장바구니 담기 → the 장바구니 count hops and lands with smaller hops. */
export function BounceThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[14px] flex h-[20px] w-[148px] items-center justify-between border-b border-slate-100 px-[4px]">
        <b>상점</b>
        <span className="thumb-anim thumb-bn-cart flex items-center gap-[2px] text-[7px] text-slate-700">
          장바구니
          <span className="grid rounded-full bg-rose-600 px-[3px] text-[6px] text-white tabular-nums">
            <span className="thumb-anim thumb-bn-c1 col-start-1 row-start-1" style={{ opacity: 0 }}>
              1
            </span>
            <span className="thumb-anim thumb-bn-c2 col-start-1 row-start-1">2</span>
          </span>
        </span>
      </div>
      <span className="absolute top-[30px] left-[22px] h-[40px] w-[132px] rounded-md bg-gradient-to-br from-amber-100 to-amber-300" />
      <p className="absolute top-[73px] left-[22px] text-[7px] font-semibold">린넨 셔츠</p>
      <span className="absolute top-[88px] left-[22px] grid h-[14px] w-[132px] place-items-center rounded bg-slate-900 text-[7px] text-white">
        장바구니 담기
      </span>
      <ThumbCursor motion="thumb-bounce-cursor" />
    </ThumbStage>
  );
}
