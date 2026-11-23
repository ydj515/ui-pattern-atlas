import { useState } from "react";
import { HighlightText } from "@/shared/ui/patterns/search-term-highlight/HighlightText";

const ITEMS = [
  "린넨 셔츠 반팔",
  "린넨 바지",
  "옥스퍼드 셔츠",
  "린넨 원피스",
  "셔츠형 재킷",
  "캔버스 백",
];

export function SearchTermHighlightDemo() {
  const [query, setQuery] = useState("린넨");
  const words = query.trim().split(/\s+/).filter(Boolean);
  const results = ITEMS.map((item) => ({
    item,
    score: words.filter((word) => item.toLowerCase().includes(word.toLowerCase())).length,
  }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <input
        aria-label="상품 검색"
        placeholder="셔츠를 더 입력해 보세요"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <p aria-live="polite" className="text-xs text-slate-500">
        결과 {results.length}개
      </p>
      <ul className="grid gap-1.5 text-sm text-slate-800">
        {results.map(({ item }) => (
          <li key={item}>
            <HighlightText text={item} query={query} />
          </li>
        ))}
      </ul>
    </section>
  );
}
