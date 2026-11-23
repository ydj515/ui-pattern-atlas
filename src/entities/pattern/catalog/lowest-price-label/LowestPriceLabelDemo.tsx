import { LowestPriceLabel } from "@/shared/ui/patterns/lowest-price-label/LowestPriceLabel";

export function LowestPriceLabelDemo() {
  return (
    <section className="grid w-72 gap-2 rounded-3xl border border-slate-200 bg-white p-5">
      <span className="h-24 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
      <h3 className="text-base font-bold text-slate-900">무선 이어폰</h3>
      <p className="text-2xl font-bold text-slate-900">29,000원</p>
      <LowestPriceLabel
        label="최근 30일 최저가"
        basis={["11월 1일~30일 판매가", "이 판매처 기준, 쿠폰 제외"]}
        basisLabel="기준 보기"
      />
    </section>
  );
}
