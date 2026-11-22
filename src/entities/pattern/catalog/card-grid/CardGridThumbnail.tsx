import { ThumbCursor, ThumbStage } from "@/entities/pattern/ui/ThumbStage";

const PRODUCTS = [
  { name: "머그컵", price: "12,000원", lines: 1 },
  { name: "두껍고 따뜻한 겨울용 니트 머플러", price: "29,000원", lines: 3 },
  { name: "노트", price: "6,000원", lines: 1 },
] as const;

function Cards({ aligned, motion }: { readonly aligned: boolean; readonly motion: string }) {
  return (
    <div
      className={`thumb-anim ${motion} absolute top-[8px] left-[14px] flex h-[74px] w-[148px] gap-[4px]`}
    >
      {PRODUCTS.map((product) => (
        <div
          key={product.name}
          className="flex flex-1 flex-col rounded-[4px] border border-slate-200 p-[3px]"
        >
          <span className="h-[16px] rounded-[2px] bg-slate-100" />
          <p className="mt-[2px] text-[5.5px] leading-[7px] font-medium">{product.name}</p>
          <p className="text-[4.5px] text-slate-500">{product.price}</p>
          <span
            className={`${aligned ? "mt-auto" : "mt-[3px]"} grid h-[9px] place-items-center rounded-[2px] border border-slate-300 text-[4.5px]`}
          >
            담기
          </span>
        </div>
      ))}
    </div>
  );
}

/** Same cards as CardGridDemo: with 버튼 줄 맞추기 the 담기 buttons line up despite long titles. */
export function CardGridThumbnail() {
  return (
    <ThumbStage>
      <Cards aligned motion="thumb-cg-on" />
      <Cards aligned={false} motion="thumb-cg-off opacity-0" />
      <span className="absolute top-[90px] left-[98px] size-[7px] rounded-[1.5px] border border-slate-400" />
      <span className="thumb-anim thumb-cg-on absolute top-[90px] left-[98px] grid size-[7px] place-items-center rounded-[1.5px] bg-blue-600 text-[5px] text-white">
        ✓
      </span>
      <p className="absolute top-[89px] left-[108px] text-[5.5px] text-slate-600">버튼 줄 맞추기</p>
      <ThumbCursor motion="thumb-cg-cursor" />
    </ThumbStage>
  );
}
