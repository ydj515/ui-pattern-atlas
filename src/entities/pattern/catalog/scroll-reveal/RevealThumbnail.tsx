import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PRODUCTS = [
  ["린넨 셔츠", "39,000원", "from-amber-100 to-amber-200", "thumb-rv-c1"],
  ["와이드 팬츠", "45,000원", "from-sky-100 to-sky-200", "thumb-rv-c2"],
  ["캔버스 백", "29,000원", "from-emerald-100 to-emerald-200", "thumb-rv-c3"],
];

/** Same list as RevealDemo: as 봄 신상품 scrolls, each product fades up into view. */
export function RevealThumbnail() {
  return (
    <ThumbStage>
      <div className="absolute top-[4px] left-[24px] h-[104px] w-[128px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <div
          className="thumb-anim thumb-rv-content absolute inset-x-[6px] top-0"
          style={{ transform: "translateY(-60px)" }}
        >
          <p className="mt-[6px] text-[9px] font-semibold">봄 신상품</p>
          <p className="text-[6px] text-slate-600">아래로 내려 보세요</p>
          <div className="mt-[34px] grid gap-[4px]">
            {PRODUCTS.map(([name, price, tone, motion]) => (
              <div
                key={name}
                className={`thumb-anim ${motion} flex h-[22px] items-center gap-[5px] rounded-md bg-white px-[4px] shadow-sm`}
              >
                <span className={`size-[14px] rounded bg-gradient-to-br ${tone}`} />
                <span className="text-[6.5px] leading-[8px]">
                  <b className="block">{name}</b>
                  <span className="text-slate-600">{price}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ThumbCursor motion="thumb-rv-cursor" />
    </ThumbStage>
  );
}
