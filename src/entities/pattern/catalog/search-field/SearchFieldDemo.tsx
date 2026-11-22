import { useState } from "react";

import { SearchField } from "@/shared/ui/patterns/search-field/SearchField";

const DOCS = ["버튼 크기 정하기", "버튼 문구 쓰는 법", "입력 필드 상태", "색상 대비 확인"] as const;

export function SearchFieldDemo() {
  const [query, setQuery] = useState("");
  const results = DOCS.filter((doc) => doc.includes(query.trim()));

  return (
    <div className="w-full max-w-xs space-y-2">
      <SearchField
        label="문서 검색"
        shortcut="/"
        clearLabel="검색어 지우기"
        value={query}
        onChange={setQuery}
      />
      <ul
        aria-live="polite"
        className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm"
      >
        {results.map((doc) => (
          <li key={doc} className="px-4 py-2">
            {doc}
          </li>
        ))}
        {results.length === 0 ? <li className="px-4 py-2 text-slate-500">결과가 없어요</li> : null}
      </ul>
      <p className="text-center text-xs text-slate-500">
        <kbd className="rounded border border-slate-300 px-1">/</kbd> 키로 바로 검색할 수 있어요
      </p>
    </div>
  );
}
