import { useState } from "react";

import { NoResults } from "@/shared/ui/patterns/no-results/NoResults";

const MENU = ["아메리카노", "카페 라테", "바닐라 라테", "콜드 브루", "녹차 라테"] as const;

/** Edit distance, to suggest a menu item one or two typos away. */
function distance(a: string, b: string) {
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0]!;
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const current = row[j]!;
      row[j] = Math.min(row[j]! + 1, row[j - 1]! + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = current;
    }
  }
  return row[b.length]!;
}

export function NoResultsDemo() {
  const [query, setQuery] = useState("아메리가노");
  const trimmed = query.trim();
  const results = MENU.filter((item) => item.includes(trimmed));
  const suggestion = MENU.find((item) => distance(item, trimmed) <= 2);

  return (
    <div className="w-full max-w-xs space-y-3">
      <input
        type="search"
        aria-label="메뉴 검색"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
      />
      <div aria-live="polite">
        {results.length > 0 ? (
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
            {results.map((item) => (
              <li key={item} className="px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <NoResults
            title={`‘${trimmed}’ 검색 결과가 없어요`}
            suggestion={
              suggestion ? (
                <>
                  혹시{" "}
                  <button
                    type="button"
                    onClick={() => setQuery(suggestion)}
                    className="font-semibold text-blue-700 underline underline-offset-2"
                  >
                    {suggestion}
                  </button>{" "}
                  찾으셨나요?
                </>
              ) : null
            }
            tips={["맞춤법을 확인해 보세요", "더 짧은 단어로 찾아보세요"]}
            clearLabel="검색어 지우기"
            onClear={() => setQuery("")}
          />
        )}
      </div>
    </div>
  );
}
