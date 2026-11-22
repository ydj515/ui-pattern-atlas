import { useState } from "react";

import {
  NoFilterResults,
  type AppliedFilter,
} from "@/shared/ui/patterns/no-filter-results/NoFilterResults";

const STAYS = [
  { name: "바다 앞 민박", price: 4, pet: true, pool: false },
  { name: "숲속 오두막", price: 7, pet: true, pool: true },
  { name: "시내 호텔", price: 9, pet: false, pool: true },
] as const;

const FILTERS: readonly AppliedFilter[] = [
  { id: "price", label: "5만원 이하" },
  { id: "pet", label: "반려동물" },
  { id: "pool", label: "수영장" },
];

export function NoFilterResultsDemo() {
  const [active, setActive] = useState<readonly string[]>(FILTERS.map((filter) => filter.id));
  const results = STAYS.filter(
    (stay) =>
      (!active.includes("price") || stay.price <= 5) &&
      (!active.includes("pet") || stay.pet) &&
      (!active.includes("pool") || stay.pool),
  );

  return (
    <div className="w-full max-w-xs space-y-2" aria-live="polite">
      {results.length > 0 ? (
        <>
          <ul className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white text-sm">
            {results.map((stay) => (
              <li key={stay.name} className="flex justify-between px-4 py-2.5">
                {stay.name}
                <span className="text-slate-500">{stay.price}만원</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setActive(FILTERS.map((filter) => filter.id))}
            className="text-xs text-slate-500 underline underline-offset-2"
          >
            필터 다시 걸기
          </button>
        </>
      ) : (
        <NoFilterResults
          title="조건에 맞는 숙소가 없어요"
          hint="필터를 하나 빼 보세요."
          resetLabel="필터 모두 지우기"
          filters={FILTERS.filter((filter) => active.includes(filter.id))}
          onRemove={(id) => setActive((current) => current.filter((item) => item !== id))}
          onReset={() => setActive([])}
        />
      )}
    </div>
  );
}
