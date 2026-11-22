import { useState } from "react";
import { RatingSummary } from "@/shared/ui/patterns/rating-summary/RatingSummary";

const REVIEWS = [
  { id: 1, stars: 5, body: "핏이 딱 좋아요" },
  { id: 2, stars: 4, body: "색이 사진보다 조금 진해요" },
  { id: 3, stars: 2, body: "배송이 늦었어요" },
];

export function RatingSummaryDemo() {
  const [filter, setFilter] = useState<number | null>(null);
  const shown = REVIEWS.filter((review) => filter === null || review.stars === filter);
  return (
    <section className="grid w-80 gap-3">
      <RatingSummary
        average={4.6}
        counts={[812, 301, 98, 41, 32]}
        filter={filter}
        onFilter={setFilter}
        totalLabel={(total) => `리뷰 ${total.toLocaleString("ko-KR")}개`}
        rowLabel={(stars, count) => `${stars}점 ${count.toLocaleString("ko-KR")}개`}
      />
      <p role="status" className="text-xs text-slate-600">
        {filter === null ? "모든 리뷰" : `${filter}점 리뷰만 보는 중`}
      </p>
      <ul className="grid gap-1.5 text-sm">
        {shown.map((review) => (
          <li key={review.id} className="rounded-lg bg-slate-50 px-3 py-2">
            <span className="text-amber-500">{"★".repeat(review.stars)}</span> {review.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
