import { useEffect, useId, useRef, useState, type ReactNode } from "react";

const alignClasses = {
  start: "left-0",
  end: "right-0",
} as const;

export interface PopoverProps {
  /** Content of the trigger button. */
  readonly trigger: ReactNode;
  /** Accessible name of the panel. */
  readonly title: string;
  readonly children: ReactNode;
  readonly align?: keyof typeof alignClasses;
}

/**
 * Non-modal popover anchored to a trigger button.
 *
 * Closes on Escape (returning focus to the trigger) and on pointer down outside.
 * The rest of the page stays interactive.
 */
export function Popover({ trigger, title, children, align = "start" }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      ref={rootRef}
      className="relative inline-block"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          close();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-xs hover:bg-slate-50"
      >
        {trigger}
      </button>
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-labelledby={titleId}
        tabIndex={-1}
        hidden={!open}
        className={`absolute top-full z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-lg focus:outline-none ${alignClasses[align]}`}
      >
        <p id={titleId} className="text-sm font-semibold text-slate-900">
          {title}
        </p>
        <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
      </div>
    </div>
  );
}
