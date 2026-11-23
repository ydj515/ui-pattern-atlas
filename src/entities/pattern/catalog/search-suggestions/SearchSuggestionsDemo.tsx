import { useState } from "react";
import { SearchSuggestions } from "@/shared/ui/patterns/search-suggestions/SearchSuggestions";

const TERMS = [
  "린넨 셔츠",
  "린넨 셔츠 반팔",
  "린넨 바지",
  "린넨 원피스",
  "무선 이어폰",
  "무선 충전기",
];

export function SearchSuggestionsDemo() {
  const [value, setValue] = useState("");
  const [searched, setSearched] = useState("");
  const query = value.trim();
  const suggestions =
    query === ""
      ? []
      : TERMS.filter((term) => term.startsWith(query) && term !== query).slice(0, 4);
  return (
    <section className="grid h-64 w-80 content-start gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <SearchSuggestions
        label="상품 검색"
        placeholder="린넨을 입력해 보세요"
        value={value}
        onChange={setValue}
        onSearch={setSearched}
        suggestions={suggestions}
        submitLabel="검색"
      />
      <p role="status" className="text-sm text-slate-700">
        {searched ? `${searched} 검색 결과` : ""}
      </p>
    </section>
  );
}
