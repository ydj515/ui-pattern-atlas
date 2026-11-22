export interface WishlistButtonProps {
  readonly saved: boolean;
  readonly onToggle: (saved: boolean) => void;
  /** Item name, so the button reads "린넨 셔츠 찜하기". */
  readonly itemName: string;
  readonly addLabel?: string;
  readonly removeLabel?: string;
}

/**
 * Save-for-later toggle that sits on a product or post. Unlike a public like, it puts
 * the item in the person's own list, so pair it with a list count and a short message
 * that links there.
 */
export function WishlistButton({
  saved,
  onToggle,
  itemName,
  addLabel = "찜하기",
  removeLabel = "찜 해제",
}: WishlistButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={`${itemName} ${saved ? removeLabel : addLabel}`}
      onClick={() => onToggle(!saved)}
      className="grid size-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow hover:bg-white aria-pressed:text-rose-600"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`size-5 ${saved ? "fill-current" : "fill-none stroke-current stroke-2"}`}
      >
        <path d="M12 21s-8-4.9-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.1-8 11-8 11Z" />
      </svg>
    </button>
  );
}
