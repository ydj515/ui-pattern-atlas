import { useState } from "react";
import { SearchSort } from "@/shared/ui/patterns/search-sort/SearchSort";

const ITEMS = [
  { name: "린넨 셔츠", price: 29000, reviews: 120 },
  { name: "린넨 바지", price: 35000, reviews: 48 },
  { name: "린넨 원피스", price: 49000, reviews: 210 },
  { name: "린넨 셔츠 반팔", price: 25000, reviews: 86 },
];

const OPTIONS = [
  { value: "recommended", label: "추천순" },
  { value: "low", label: "낮은 가격순" },
  { value: "high", label: "높은 가격순" },
  { value: "reviews", label: "리뷰 많은순" },
];

function sorted(order: string) {
  if (order === "low") return [...ITEMS].sort((a, b) => a.price - b.price);
  if (order === "high") return [...ITEMS].sort((a, b) => b.price - a.price);
  if (order === "reviews") return [...ITEMS].sort((a, b) => b.reviews - a.reviews);
  return ITEMS;
}

export function SearchSortDemo() {
  const [order, setOrder] = useState("recommended");
  return (
    <section className="grid h-72 w-80 content-start gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">린넨 검색 결과 {ITEMS.length}개</h3>
        <SearchSort options={OPTIONS} value={order} onChange={setOrder} label="정렬" />
      </div>
      <ul className="grid gap-2 text-sm">
        {sorted(order).map((item) => (
          <li key={item.name} className="flex justify-between text-slate-800">
            {item.name}
            <span className="text-slate-500 tabular-nums">
              {item.price.toLocaleString("ko-KR")}원 · 리뷰 {item.reviews}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
