import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PRODUCTS = [
  { name: "린넨 셔츠", price: "39,000원", tone: "bg-amber-100" },
  { name: "캔버스 백", price: "24,000원", tone: "bg-sky-100" },
  { name: "머그컵", price: "12,000원", tone: "bg-rose-100" },
  { name: "노트 세트", price: "9,000원", tone: "bg-emerald-100" },
  { name: "향초", price: "18,000원", tone: "bg-violet-100" },
  { name: "우산", price: "21,000원", tone: "bg-slate-200" },
] as const;

/** Same row as HorizontalScrollDemo: › twice → the row slides to the end and › turns off. */
export function HorizontalScrollThumbnail() {
  return (
    <ThumbStage>
      <p className="absolute top-[8px] left-[16px] text-[7px] font-semibold">오늘의 추천</p>
      <span className="thumb-anim thumb-hs-prev absolute top-[6px] left-[128px] grid size-[12px] place-items-center rounded-full border border-slate-300 text-[7px]">
        ‹
      </span>
      <span className="absolute top-[6px] left-[144px] grid size-[12px] place-items-center rounded-full border border-slate-300 text-[7px]">
        ›
      </span>
      <span className="thumb-anim thumb-hs-end absolute top-[6px] left-[144px] grid size-[12px] place-items-center rounded-full border border-slate-200 bg-white text-[7px] text-slate-300">
        ›
      </span>
      <div className="absolute top-[24px] left-[16px] h-[66px] w-[144px] overflow-hidden">
        <div
          className="thumb-anim thumb-hs-row flex gap-[6px]"
          style={{ transform: "translateX(-126px)" }}
        >
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="h-[62px] w-[40px] shrink-0 rounded-[4px] border border-slate-200 p-[2px]"
            >
              <span className={`block h-[36px] rounded-[3px] ${product.tone}`} />
              <p className="mt-[2px] text-[5px] font-medium whitespace-nowrap">{product.name}</p>
              <p className="text-[4.5px] text-slate-500">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <ThumbCursor motion="thumb-hs-cursor" />
    </ThumbStage>
  );
}
