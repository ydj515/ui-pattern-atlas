export interface RatingSummaryProps {
  readonly average: number;
  /** Review counts for 5, 4, 3, 2 and 1 stars, in that order. */
  readonly counts: readonly [number, number, number, number, number];
  readonly filter: number | null;
  readonly onFilter: (stars: number | null) => void;
  readonly totalLabel?: (total: number) => string;
  readonly rowLabel?: (stars: number, count: number) => string;
}

/**
 * Average score with a bar per star level. Each bar is a toggle that filters the
 * reviews to that level, and every bar has its count in text, so the chart is never
 * the only way to read the numbers.
 */
export function RatingSummary({
  average,
  counts,
  filter,
  onFilter,
  totalLabel = (total) => `리뷰 ${total.toLocaleString("ko-KR")}개`,
  rowLabel = (stars, count) => `${stars}점 ${count.toLocaleString("ko-KR")}개`,
}: RatingSummaryProps) {
  const total = counts.reduce((sum, count) => sum + count, 0);
  return (
    <section className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="grid content-center justify-items-center">
        <p className="text-4xl font-bold text-slate-900 tabular-nums">{average.toFixed(1)}</p>
        <p aria-hidden="true" className="text-amber-400">
          ★★★★★
        </p>
        <p className="mt-1 text-xs text-slate-500">{totalLabel(total)}</p>
      </div>
      <ul className="grid flex-1 gap-1">
        {counts.map((count, index) => {
          const stars = 5 - index;
          const active = filter === stars;
          return (
            <li key={stars}>
              <button
                type="button"
                aria-pressed={active}
                aria-label={rowLabel(stars, count)}
                onClick={() => onFilter(active ? null : stars)}
                className="grid w-full grid-cols-[1.5rem_1fr_2.5rem] items-center gap-2 rounded px-1 text-xs text-slate-600 hover:bg-slate-50 aria-pressed:bg-amber-50 aria-pressed:font-semibold aria-pressed:text-slate-900"
              >
                <span>{stars}점</span>
                <span aria-hidden="true" className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-amber-400"
                    style={{ width: `${total ? (count / total) * 100 : 0}%` }}
                  />
                </span>
                <span className="text-right tabular-nums">{count.toLocaleString("ko-KR")}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
