import { useState } from "react";
import { SearchFilters, type FilterGroup } from "@/shared/ui/patterns/search-filters/SearchFilters";

const PRODUCTS = [
  { name: "린넨 셔츠 흰색", price: 29000, color: "white" },
  { name: "린넨 셔츠 베이지", price: 29000, color: "beige" },
  { name: "린넨 셔츠 네이비", price: 32000, color: "navy" },
  { name: "오버핏 린넨 셔츠 흰색", price: 39000, color: "white" },
  { name: "린넨 셔츠 반팔 흰색", price: 25000, color: "white" },
  { name: "린넨 블렌드 셔츠 베이지", price: 45000, color: "beige" },
  { name: "린넨 셔츠 반팔 네이비", price: 27000, color: "navy" },
  { name: "프리미엄 린넨 셔츠 흰색", price: 59000, color: "white" },
];

const GROUPS: readonly FilterGroup[] = [
  {
    id: "price",
    label: "가격",
    options: [
      { value: "low", label: "3만 원 이하" },
      { value: "mid", label: "3만~5만 원" },
    ],
  },
  {
    id: "color",
    label: "색상",
    options: [
      { value: "white", label: "흰색" },
      { value: "beige", label: "베이지" },
      { value: "navy", label: "네이비" },
    ],
  },
];

const inPrice = (price: number, range: string) =>
  range === "low" ? price <= 30000 : price > 30000 && price <= 50000;

export function SearchFiltersDemo() {
  const [selected, setSelected] = useState<Record<string, readonly string[]>>({});
  const prices = selected.price ?? [];
  const colors = selected.color ?? [];
  const results = PRODUCTS.filter(
    (product) =>
      (prices.length === 0 || prices.some((range) => inPrice(product.price, range))) &&
      (colors.length === 0 || colors.includes(product.color)),
  );
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">린넨 셔츠 검색 결과</h3>
      <SearchFilters
        groups={GROUPS}
        selected={selected}
        onChange={(groupId, values) =>
          setSelected((current) => ({ ...current, [groupId]: values }))
        }
        resultLabel={`결과 ${results.length}개`}
        clearLabel="모두 지우기"
        removeLabel={(label) => `${label} 필터 해제`}
      />
      <ul className="grid gap-1 text-sm text-slate-700">
        {results.slice(0, 3).map((product) => (
          <li key={product.name} className="flex justify-between">
            {product.name}
            <span className="tabular-nums">{product.price.toLocaleString("ko-KR")}원</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
