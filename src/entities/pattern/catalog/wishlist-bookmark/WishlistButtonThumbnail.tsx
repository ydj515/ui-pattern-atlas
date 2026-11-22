import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const HEART = "M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z";

/** Same shelf as WishlistButtonDemo: tap the heart on 린넨 셔츠 → 찜 2 and a short note. */
export function WishlistButtonThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[12px] h-[104px] w-[152px] rounded-[12px] border border-slate-200 p-[8px] text-[6px]">
        <p className="flex justify-between">
          <b className="text-[7px]">신상품</b>
          <span className="grid tabular-nums">
            <span
              className="thumb-anim thumb-wl-off col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              찜 1
            </span>
            <span className="thumb-anim thumb-wl-on col-start-1 row-start-1">찜 2</span>
          </span>
        </p>
        <div className="mt-[4px] grid grid-cols-2 gap-[4px]">
          {[
            ["린넨 셔츠", "39,000원", "from-sky-100 to-sky-200", false],
            ["캔버스 백", "29,000원", "from-amber-100 to-amber-200", true],
          ].map(([name, price, tone, saved]) => (
            <div key={String(name)}>
              <span className={`relative block h-[46px] rounded-md bg-gradient-to-br ${tone}`}>
                <span className="absolute top-[3px] right-[3px] grid size-[12px] place-items-center rounded-full bg-white/90 text-rose-600 shadow">
                  <svg
                    viewBox="0 0 24 24"
                    className={`size-[7px] ${saved ? "fill-current" : "fill-none stroke-slate-700 stroke-2"}`}
                  >
                    <path d={HEART} />
                  </svg>
                  {saved ? null : (
                    <svg
                      viewBox="0 0 24 24"
                      className="thumb-anim thumb-wl-heart absolute size-[7px] fill-current"
                    >
                      <path d={HEART} />
                    </svg>
                  )}
                </span>
              </span>
              <p className="mt-[1px]">{name}</p>
              <b>{price}</b>
            </div>
          ))}
        </div>
        <p className="thumb-anim thumb-wl-on mt-[4px] text-slate-600">
          찜 목록에 담았어요: 린넨 셔츠
        </p>
      </div>
      <ThumbCursor motion="thumb-wl-cursor" />
    </ThumbStage>
  );
}
