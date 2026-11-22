export interface UnreadIndicatorProps {
  readonly unread: boolean;
  /** Read only by screen readers, e.g. "안 읽음". */
  readonly label?: string;
}

/**
 * Blue dot that marks a new item in a list. Pair it with bold text for the item; the dot
 * is decorative and the state is given as hidden text after the title.
 */
export function UnreadIndicator({ unread, label = "안 읽음" }: UnreadIndicatorProps) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`size-2 shrink-0 rounded-full ${unread ? "bg-blue-600" : "bg-transparent"}`}
      />
      {unread ? <span className="sr-only">{label}</span> : null}
    </>
  );
}
