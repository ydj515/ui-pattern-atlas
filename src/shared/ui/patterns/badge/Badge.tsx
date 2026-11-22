export interface BadgeProps {
  readonly count: number;
  /** Larger counts show as "99+". */
  readonly max?: number;
  readonly className?: string;
}

/**
 * Small count bubble on top of an icon (new items, cart size). It is decorative:
 * put the number in the control's accessible name too ("장바구니, 상품 3개"),
 * because a bubble alone is not read. Nothing is shown for zero.
 */
export function Badge({ count, max = 99, className = "" }: BadgeProps) {
  if (count <= 0) return null;
  return (
    <span
      aria-hidden="true"
      className={`grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1.5 text-[11px] leading-none font-semibold text-white tabular-nums ring-2 ring-white ${className}`}
    >
      {count > max ? `${max}+` : count}
    </span>
  );
}
