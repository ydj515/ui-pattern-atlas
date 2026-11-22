import { HorizontalScroll } from "@/shared/ui/patterns/horizontal-scroll/HorizontalScroll";

const PRODUCTS = [
  { name: "린넨 셔츠", price: "39,000원", tone: "bg-amber-100" },
  { name: "캔버스 백", price: "24,000원", tone: "bg-sky-100" },
  { name: "머그컵", price: "12,000원", tone: "bg-rose-100" },
  { name: "노트 세트", price: "9,000원", tone: "bg-emerald-100" },
  { name: "향초", price: "18,000원", tone: "bg-violet-100" },
  { name: "우산", price: "21,000원", tone: "bg-slate-200" },
] as const;

export function HorizontalScrollDemo() {
  return (
    <div className="w-full max-w-sm">
      <HorizontalScroll label="오늘의 추천" prevLabel="이전 상품" nextLabel="다음 상품">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="w-32 shrink-0 snap-start rounded-xl border border-slate-200 bg-white p-2"
          >
            <div aria-hidden="true" className={`h-20 rounded-lg ${product.tone}`} />
            <p className="mt-2 text-sm font-medium text-slate-900">{product.name}</p>
            <p className="text-xs text-slate-500">{product.price}</p>
          </article>
        ))}
      </HorizontalScroll>
    </div>
  );
}
