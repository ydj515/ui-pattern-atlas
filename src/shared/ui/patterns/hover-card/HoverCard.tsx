import { useEffect, useRef, useState, type ReactNode } from "react";

export interface HoverCardProps {
  /** A focusable trigger, usually a link to the full page (e.g. a profile). */
  readonly children: ReactNode;
  /** Preview shown while hovering or focusing the trigger. Keep it non-interactive. */
  readonly content: ReactNode;
  /** Wait before opening, so passing the pointer over a link does not flash the card. */
  readonly openDelay?: number;
  /** Grace period that lets the pointer travel from the trigger into the card. */
  readonly closeDelay?: number;
}

/**
 * Rich preview of a link, shown on hover (after a delay) and on keyboard focus.
 *
 * The card only repeats what the link leads to, so it is hidden from assistive
 * technology and contains nothing focusable; the link itself stays the way to the
 * full information. Escape hides the card.
 */
export function HoverCard({
  children,
  content,
  openDelay = 500,
  closeDelay = 250,
}: HoverCardProps) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function schedule(next: boolean, delay: number) {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setOpen(next), delay);
  }

  return (
    <span
      className="relative inline-block"
      onPointerEnter={() => schedule(true, openDelay)}
      onPointerLeave={() => schedule(false, closeDelay)}
      onFocus={() => schedule(true, 0)}
      onBlur={() => schedule(false, 0)}
      onKeyDown={(event) => {
        if (event.key === "Escape") schedule(false, 0);
      }}
    >
      {children}
      {open ? (
        <span
          aria-hidden="true"
          className="absolute top-full left-0 z-20 mt-2 block w-64 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-lg"
        >
          {content}
        </span>
      ) : null}
    </span>
  );
}
