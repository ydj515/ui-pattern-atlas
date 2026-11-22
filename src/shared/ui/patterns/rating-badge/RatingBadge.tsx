export interface RatingBadgeProps {
  readonly score: number;
  readonly count: number;
  readonly max?: number;
  /** Spoken summary, e.g. "평점 5점 만점에 4.6점, 리뷰 1,284개". */
  readonly label?: (score: number, max: number, count: number) => string;
}

/**
 * Compact star, score and review count for cards and lists. The count keeps a score
 * honest (4.9 from 7 reviews reads differently), and screen readers get one full
 * sentence instead of a star glyph and two numbers.
 */
export function RatingBadge({
  score,
  count,
  max = 5,
  label = (value, top, total) =>
    `평점 ${top}점 만점에 ${value}점, 리뷰 ${total.toLocaleString("ko-KR")}개`,
}: RatingBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-slate-700 tabular-nums">
      <span className="sr-only">{label(score, max, count)}</span>
      <span aria-hidden="true" className="text-amber-500">
        ★
      </span>
      <span aria-hidden="true" className="font-semibold text-slate-900">
        {score.toFixed(1)}
      </span>
      <span aria-hidden="true" className="text-slate-500">
        ({count.toLocaleString("ko-KR")})
      </span>
    </span>
  );
}
