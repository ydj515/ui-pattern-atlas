export interface CompletionStampProps {
  readonly show: boolean;
  /** Word inside the stamp, e.g. "완료". */
  readonly text: string;
}

/**
 * Ink-stamp mark pressed onto a finished card: it drops from slightly larger and
 * settles at a small tilt. Place it in a relative card; it is aria-hidden, so say the
 * finished state in text too. Reduced motion shows it without the drop.
 */
export function CompletionStamp({ show, text }: CompletionStampProps) {
  if (!show) return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute top-3 right-3 grid size-16 -rotate-12 place-items-center rounded-full border-[3px] border-rose-600 text-sm font-black tracking-widest text-rose-600 opacity-90 transition duration-300 ease-[cubic-bezier(0.3,1.4,0.5,1)] motion-reduce:transition-none starting:scale-150 starting:opacity-0"
    >
      <span className="grid size-[52px] place-items-center rounded-full border border-rose-600">
        {text}
      </span>
    </span>
  );
}
