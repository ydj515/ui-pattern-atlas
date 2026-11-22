import { useEffect, useId, useRef, useState } from "react";

export interface NotificationItem {
  readonly id: string;
  readonly title: string;
  readonly time: string;
  readonly read: boolean;
}

export interface NotificationCenterProps {
  readonly notifications: readonly NotificationItem[];
  readonly onRead: (id: string) => void;
  readonly onReadAll: () => void;
  /** Panel heading and the bell's base name. */
  readonly title?: string;
  readonly readAllLabel?: string;
}

/**
 * Bell button with an unread count that opens the list of recent notifications.
 *
 * The unread count is part of the button's name ("알림, 안 읽음 3개"), so it is not
 * conveyed by the red badge alone. The panel is a non-modal dialog: Escape or a click
 * outside closes it and focus returns to the bell.
 */
export function NotificationCenter({
  notifications,
  onRead,
  onReadAll,
  title = "알림",
  readAllLabel = "모두 읽음",
}: NotificationCenterProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const titleId = useId();
  const unread = notifications.filter((item) => !item.read).length;

  useEffect(() => {
    if (!open) return;
    panelRef.current?.focus();
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        aria-label={unread > 0 ? `${title}, 안 읽음 ${unread}개` : title}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative grid size-10 place-items-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
          <path d="M10 2a5 5 0 0 0-5 5v2.6L3.7 12.2A1 1 0 0 0 4.6 14h10.8a1 1 0 0 0 .9-1.8L15 9.6V7a5 5 0 0 0-5-5Zm-2 13.5a2 2 0 0 0 4 0H8Z" />
        </svg>
        {unread > 0 ? (
          <span
            aria-hidden="true"
            className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-rose-600 px-1 text-xs font-semibold text-white"
          >
            {unread}
          </span>
        ) : null}
      </button>
      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-labelledby={titleId}
        tabIndex={-1}
        hidden={!open}
        className="absolute top-full right-0 z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white text-left shadow-lg focus:outline-none"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-2.5">
          <h2 id={titleId} className="text-sm font-semibold text-slate-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => {
              onReadAll();
              // The button disables itself; keep focus inside the panel.
              panelRef.current?.focus();
            }}
            disabled={unread === 0}
            className="text-xs font-medium text-slate-600 underline-offset-2 hover:underline disabled:no-underline disabled:opacity-40"
          >
            {readAllLabel}
          </button>
        </div>
        <ul className="max-h-64 overflow-y-auto py-1">
          {notifications.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onRead(item.id)}
                className="flex w-full items-start gap-3 px-4 py-2.5 text-left hover:bg-slate-50"
              >
                <span
                  aria-hidden="true"
                  className={`mt-1.5 size-2 shrink-0 rounded-full ${item.read ? "bg-transparent" : "bg-blue-600"}`}
                />
                <span className="flex-1">
                  <span
                    className={`block text-sm ${item.read ? "text-slate-500" : "font-medium text-slate-900"}`}
                  >
                    {item.title}
                    {item.read ? null : <span className="sr-only"> (안 읽음)</span>}
                  </span>
                  <span className="block text-xs text-slate-400">{item.time}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
