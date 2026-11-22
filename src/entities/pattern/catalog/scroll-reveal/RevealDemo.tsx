import { Reveal } from "@/shared/ui/patterns/scroll-reveal/Reveal";

const PRODUCTS = [
  { name: "린넨 셔츠", price: "39,000원", tone: "from-amber-100 to-amber-200" },
  { name: "와이드 팬츠", price: "45,000원", tone: "from-sky-100 to-sky-200" },
  { name: "캔버스 백", price: "29,000원", tone: "from-emerald-100 to-emerald-200" },
  { name: "버킷 햇", price: "19,000원", tone: "from-rose-100 to-rose-200" },
];

export function RevealDemo() {
  return (
    <section
      className="h-72 w-full max-w-xs overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50 p-3"
      tabIndex={0}
      aria-label="봄 신상품"
    >
      <h3 className="text-base font-semibold text-slate-900">봄 신상품</h3>
      <p className="mb-24 text-xs text-slate-600">아래로 내려 보세요</p>
      <div className="grid gap-3">
        {PRODUCTS.map((product, index) => (
          <Reveal key={product.name} variant={index % 2 === 0 ? "fade-up" : "scale-in"}>
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm">
              <span className={`size-12 rounded-lg bg-gradient-to-br ${product.tone}`} />
              <span className="text-sm">
                <b className="block text-slate-900">{product.name}</b>
                <span className="text-slate-600">{product.price}</span>
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
