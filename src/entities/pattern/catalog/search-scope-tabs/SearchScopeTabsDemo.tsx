import { useState } from "react";
import { SearchScopeTabs } from "@/shared/ui/patterns/search-scope-tabs/SearchScopeTabs";

const RESULTS = [
  { name: "린넨 셔츠", scope: "product" },
  { name: "린넨 바지", scope: "product" },
  { name: "린넨 원피스", scope: "product" },
  { name: "린넨 공방", scope: "brand" },
  { name: "여름 린넨 모음", scope: "event" },
];

const SCOPES = [
  { id: "all", label: "전체" },
  { id: "product", label: "상품" },
  { id: "brand", label: "브랜드" },
  { id: "event", label: "기획전" },
].map((scope) => ({
  ...scope,
  count: RESULTS.filter((result) => scope.id === "all" || result.scope === scope.id).length,
}));

export function SearchScopeTabsDemo() {
  const [scope, setScope] = useState("all");
  const shown = RESULTS.filter((result) => scope === "all" || result.scope === scope);
  return (
    <section className="grid h-64 w-80 content-start gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900">린넨</p>
      <SearchScopeTabs label="검색 범위" scopes={SCOPES} value={scope} onChange={setScope}>
        <ul className="grid gap-1.5 text-sm text-slate-800">
          {shown.map((result) => (
            <li key={result.name}>{result.name}</li>
          ))}
        </ul>
      </SearchScopeTabs>
    </section>
  );
}
