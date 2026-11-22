export interface FeatureDotProps {
  readonly show: boolean;
  /** Read by screen readers next to the menu item, e.g. "새 기능". */
  readonly label?: string;
}

/**
 * Small dot on a menu item that just appeared. Hide it once the item has been opened and
 * remember that (e.g. in localStorage), so it stays meaningful. The state is given as
 * hidden text.
 */
export function FeatureDot({ show, label = "새 기능" }: FeatureDotProps) {
  if (!show) return null;
  return (
    <>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-rose-500" />
      <span className="sr-only">, {label}</span>
    </>
  );
}
