import { useCallback, useRef } from "react";

/**
 * Remembers where a list was (scroll position and the item that was opened) so that
 * coming back from a detail view returns the reader to the same spot. Call `save` before
 * leaving the list and `restore` when the list shows again; `restore` returns the id of
 * the opened item so you can put focus back on it.
 */
export function useListPosition() {
  const savedRef = useRef<{ readonly scrollTop: number; readonly itemId: string } | null>(null);

  const save = useCallback((list: HTMLElement | null, itemId: string) => {
    savedRef.current = { scrollTop: list?.scrollTop ?? 0, itemId };
  }, []);

  const restore = useCallback((list: HTMLElement | null) => {
    const saved = savedRef.current;
    if (!saved || !list) return null;
    list.scrollTop = saved.scrollTop;
    savedRef.current = null;
    return saved.itemId;
  }, []);

  return { save, restore };
}

export interface BackButtonProps {
  /** Where it goes, e.g. "목록". Read as "목록으로 돌아가기". */
  readonly label: string;
  readonly onBack: () => void;
  readonly suffix?: string;
}

/**
 * Back link at the top of a detail view that names where it goes ("← 목록"), instead
 * of a bare arrow. Pair it with useListPosition so the list comes back as it was.
 */
export function BackButton({ label, onBack, suffix = "으로 돌아가기" }: BackButtonProps) {
  return (
    <button
      type="button"
      aria-label={`${label}${suffix}`}
      onClick={onBack}
      className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
    >
      <span aria-hidden="true">←</span>
      {label}
    </button>
  );
}
