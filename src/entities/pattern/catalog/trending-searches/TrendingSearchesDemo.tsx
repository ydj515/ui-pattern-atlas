import { useState } from "react";
import {
  TrendingSearches,
  type TrendingItem,
} from "@/shared/ui/patterns/trending-searches/TrendingSearches";

const PERIODS: Record<string, { label: string; basis: string; items: readonly TrendingItem[] }> = {
  now: {
    label: "지금",
    basis: "오늘 14:00 기준, 최근 1시간",
    items: [
      { term: "겨울 패딩", change: "up" },
      { term: "전기요", change: "new" },
      { term: "니트", change: "same" },
      { term: "부츠", change: "down" },
    ],
  },
  week: {
    label: "이번 주",
    basis: "11월 17일~23일 기준",
    items: [
      { term: "니트", change: "same" },
      { term: "겨울 패딩", change: "up" },
      { term: "가습기", change: "new" },
      { term: "전기요", change: "down" },
    ],
  },
};

export function TrendingSearchesDemo() {
  const [period, setPeriod] = useState("now");
  const [searched, setSearched] = useState("");
  const current = PERIODS[period] ?? PERIODS.now!;
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <fieldset className="flex gap-1 rounded-lg bg-slate-100 p-1 text-sm">
        <legend className="sr-only">집계 기간</legend>
        {Object.entries(PERIODS).map(([id, { label }]) => (
          <label
            key={id}
            className="flex-1 cursor-pointer rounded-md py-1 text-center text-slate-600 has-checked:bg-white has-checked:font-semibold has-checked:text-slate-900 has-checked:shadow-sm"
          >
            <input
              type="radio"
              name="trending-period"
              className="sr-only"
              checked={period === id}
              onChange={() => setPeriod(id)}
            />
            {label}
          </label>
        ))}
      </fieldset>
      <TrendingSearches
        items={current.items}
        basis={current.basis}
        onSelect={setSearched}
        title="인기 검색어"
        changeLabels={{ up: "상승", down: "하락", same: "변동 없음", new: "새로 들어옴" }}
      />
      <p role="status" className="h-4 text-xs text-slate-600">
        {searched ? `${searched} 검색 결과` : ""}
      </p>
    </section>
  );
}
