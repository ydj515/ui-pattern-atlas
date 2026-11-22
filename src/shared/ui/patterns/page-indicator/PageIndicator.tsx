export interface PageIndicatorProps {
  readonly count: number;
  readonly current: number;
  /** Make the dots buttons that jump to a page. */
  readonly onSelect?: (index: number) => void;
  readonly pageLabel?: (index: number, count: number) => string;
}

/**
 * Dots showing which page of a short sequence is shown (onboarding, carousel). The current
 * dot is wider, not only darker. With onSelect the dots are buttons; without it the
 * position is given as text for screen readers ("2 / 4").
 */
export function PageIndicator({
  count,
  current,
  onSelect,
  pageLabel = (index, total) => `${index + 1} / ${total}`,
}: PageIndicatorProps) {
  const dots = Array.from({ length: count }, (_, index) => index);
  const dotClass = (index: number) =>
    `block h-2 rounded-full transition-[width,background-color] duration-200 motion-reduce:transition-none ${index === current ? "w-5 bg-slate-900" : "w-2 bg-slate-300"}`;

  if (!onSelect) {
    return (
      <span className="flex items-center gap-1.5">
        <span className="sr-only">{pageLabel(current, count)}</span>
        {dots.map((index) => (
          <span key={index} aria-hidden="true" className={dotClass(index)} />
        ))}
      </span>
    );
  }

  return (
    <span className="flex items-center gap-1">
      {dots.map((index) => (
        <button
          key={index}
          type="button"
          aria-label={pageLabel(index, count)}
          aria-current={index === current ? "true" : undefined}
          onClick={() => onSelect(index)}
          className="grid h-6 place-items-center rounded-full px-0.5 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <span className={dotClass(index)} />
        </button>
      ))}
    </span>
  );
}
