import { useEffect, useId, useRef, type ReactNode } from "react";

export interface CoachMarkProps {
  readonly open: boolean;
  readonly message: string;
  readonly onClose: () => void;
  /** The control the tip points at. */
  readonly children: ReactNode;
  readonly closeLabel?: string;
  readonly align?: "start" | "end";
}

/**
 * One-time tip that dims everything except one control and points at it with a short
 * message. The control stays usable; 확인 or Escape closes the tip, and focus goes to
 * 확인 when it opens. Put it inside an overflow-hidden screen so the dim stays there.
 */
export function CoachMark({
  open,
  message,
  onClose,
  children,
  closeLabel = "확인",
  align = "end",
}: CoachMarkProps) {
  const id = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <span className="relative inline-flex">
      {children}
      {open ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-1 rounded-xl ring-2 ring-white shadow-[0_0_0_9999px_rgba(15,23,42,0.55)]"
          />
          <span
            role="dialog"
            aria-labelledby={id}
            onKeyDown={(event) => {
              if (event.key === "Escape") onClose();
            }}
            className={`absolute top-full z-10 mt-3 w-52 rounded-xl bg-white p-3 text-left shadow-xl ${align === "end" ? "right-0" : "left-0"}`}
          >
            <span
              aria-hidden="true"
              className={`absolute -top-1.5 size-3 rotate-45 bg-white ${align === "end" ? "right-4" : "left-4"}`}
            />
            <span id={id} className="relative block text-sm text-slate-800">
              {message}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="relative mt-2 rounded-md bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
            >
              {closeLabel}
            </button>
          </span>
        </>
      ) : null}
    </span>
  );
}
