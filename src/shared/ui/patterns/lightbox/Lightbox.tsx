import { useEffect, useRef, type ReactNode } from "react";

export interface LightboxItem {
  readonly id: string;
  readonly caption: string;
  readonly content: ReactNode;
}

export interface LightboxProps {
  readonly items: readonly LightboxItem[];
  /** Index of the open item, or null when closed. */
  readonly index: number | null;
  readonly onIndexChange: (index: number | null) => void;
  readonly closeLabel?: string;
  readonly prevLabel?: string;
  readonly nextLabel?: string;
  readonly counter?: (index: number, total: number) => string;
}

/**
 * Picture shown large over the page (native modal <dialog>), with previous/next buttons,
 * ←/→ keys, a counter and Escape to close. Focus returns to the thumbnail that opened it.
 */
export function Lightbox({
  items,
  index,
  onIndexChange,
  closeLabel = "닫기",
  prevLabel = "이전 사진",
  nextLabel = "다음 사진",
  counter = (current, total) => `${current + 1} / ${total}`,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const open = index !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      returnRef.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>("[data-autofocus]")?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
      returnRef.current?.focus();
    }
  }, [open]);

  const item = index !== null ? items[index] : undefined;
  const go = (next: number) => onIndexChange((next + items.length) % items.length);
  const buttonClass =
    "grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none";

  return (
    <dialog
      ref={dialogRef}
      aria-label={item?.caption}
      onCancel={(event) => {
        event.preventDefault();
        onIndexChange(null);
      }}
      onKeyDown={(event) => {
        if (index === null) return;
        if (event.key === "ArrowRight") go(index + 1);
        if (event.key === "ArrowLeft") go(index - 1);
      }}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-slate-950/85"
    >
      {item && index !== null ? (
        <div className="flex w-[min(90vw,28rem)] flex-col items-center gap-3 text-white">
          <div className="flex w-full items-center justify-between text-sm">
            <span aria-live="polite">{counter(index, items.length)}</span>
            <button
              type="button"
              data-autofocus
              aria-label={closeLabel}
              onClick={() => onIndexChange(null)}
              className={buttonClass}
            >
              <span aria-hidden="true">✕</span>
            </button>
          </div>
          <figure className="w-full">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-800">
              {item.content}
            </div>
            <figcaption className="mt-2 text-center text-sm text-slate-200">
              {item.caption}
            </figcaption>
          </figure>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label={prevLabel}
              onClick={() => go(index - 1)}
              className={buttonClass}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              aria-label={nextLabel}
              onClick={() => go(index + 1)}
              className={buttonClass}
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
