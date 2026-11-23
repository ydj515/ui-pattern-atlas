import { useState } from "react";
import { RecentSearches } from "@/shared/ui/patterns/recent-searches/RecentSearches";

const INITIAL = ["린넨 셔츠", "캔버스 백", "무선 이어폰"];

export function RecentSearchesDemo() {
  const [items, setItems] = useState<readonly string[]>(INITIAL);
  const [query, setQuery] = useState("");

  function select(term: string) {
    setQuery(term);
    setItems((current) => [term, ...current.filter((item) => item !== term)]);
  }

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <input
        aria-label="상품 검색"
        placeholder="상품 검색"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm"
      />
      <RecentSearches
        items={items}
        onSelect={select}
        onRemove={(term) => setItems((current) => current.filter((item) => item !== term))}
        onClear={() => setItems([])}
        title="최근 검색어"
        clearLabel="전체 삭제"
        removeLabel={(term) => `${term} 삭제`}
        emptyLabel="최근 검색어가 없어요"
      />
      <button
        type="button"
        onClick={() => {
          setItems(INITIAL);
          setQuery("");
        }}
        className="justify-self-start text-xs text-slate-500 underline"
      >
        처음부터
      </button>
    </section>
  );
}
