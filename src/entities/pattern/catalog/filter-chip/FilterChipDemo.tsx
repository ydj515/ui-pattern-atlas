import { useState } from "react";

import { FilterChips } from "@/shared/ui/patterns/filter-chip/FilterChips";

const OPTIONS = ["와이파이", "콘센트", "주차", "반려동물"] as const;
const CAFES = [
  { name: "모퉁이 카페", tags: ["와이파이", "콘센트"] },
  { name: "숲길 커피", tags: ["주차", "반려동물"] },
  { name: "오후의 빵", tags: ["와이파이", "주차"] },
  { name: "골목 로스터스", tags: ["와이파이", "콘센트", "반려동물"] },
] as const;

export function FilterChipDemo() {
  const [selected, setSelected] = useState<readonly string[]>([]);
  const results = CAFES.filter((cafe) =>
    selected.every((tag) => (cafe.tags as readonly string[]).includes(tag)),
  );

  return (
    <div className="w-full max-w-xs space-y-3">
      <FilterChips label="편의시설" options={OPTIONS} selected={selected} onChange={setSelected} />
      <p aria-live="polite" className="text-sm font-semibold text-slate-900">
        카페 {results.length}곳
      </p>
      <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
        {results.map((cafe) => (
          <li key={cafe.name} className="px-4 py-2">
            {cafe.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
