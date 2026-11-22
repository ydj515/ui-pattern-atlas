import { useState } from "react";
import { RatingBadge } from "@/shared/ui/patterns/rating-badge/RatingBadge";

const CAFES = [
  { name: "숲속 카페", score: 4.9, count: 7 },
  { name: "한강 브루어리", score: 4.6, count: 1284 },
  { name: "골목 베이커리", score: 4.4, count: 356 },
];

export function RatingBadgeDemo() {
  const [sort, setSort] = useState<"score" | "count">("score");
  const sorted = [...CAFES].sort((a, b) =>
    sort === "score" ? b.score - a.score : b.count - a.count,
  );
  return (
    <section className="grid w-80 gap-3">
      <div className="flex gap-1 text-xs">
        {(["score", "count"] as const).map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={sort === value}
            onClick={() => setSort(value)}
            className="rounded-full border border-slate-200 px-3 py-1 aria-pressed:border-slate-900 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {value === "score" ? "평점순" : "리뷰 많은 순"}
          </button>
        ))}
      </div>
      <ul className="grid gap-2">
        {sorted.map((cafe) => (
          <li
            key={cafe.name}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3"
          >
            <span className="size-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-200" />
            <span className="grid gap-0.5">
              <b className="text-sm text-slate-900">{cafe.name}</b>
              <RatingBadge score={cafe.score} count={cafe.count} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
