export interface SparklineProps {
  readonly values: readonly number[];
  /** What the line shows, e.g. "최근 7일 방문 추이, 120에서 180으로 증가". */
  readonly label: string;
  readonly width?: number;
  readonly height?: number;
}

/**
 * Word-sized line for a trend inside a card or table row: no axes, no grid, just the
 * shape and a dot on the latest value. The line is an image with a text description;
 * put the exact latest value next to it as text.
 */
export function Sparkline({ values, label, width = 80, height = 24 }: SparklineProps) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const x = (index: number) => 2 + (index / Math.max(values.length - 1, 1)) * (width - 4);
  const y = (value: number) => 2 + (1 - (value - min) / span) * (height - 4);
  const last = values.length - 1;
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className="overflow-visible"
    >
      <polyline
        points={values.map((value, index) => `${x(index)},${y(value)}`).join(" ")}
        fill="none"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
        className="stroke-blue-600"
      />
      <circle cx={x(last)} cy={y(values[last] ?? 0)} r={2} className="fill-blue-600" />
    </svg>
  );
}
