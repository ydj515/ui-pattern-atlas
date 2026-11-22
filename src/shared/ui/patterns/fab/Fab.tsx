import type { ReactNode } from "react";

export interface FabProps {
  readonly label: string;
  readonly icon: ReactNode;
  /** Show the label next to the icon; collapse it (e.g. while scrolling down). */
  readonly extended?: boolean;
  readonly onClick: () => void;
  readonly className?: string;
}

/**
 * Floating action button for the one main action on a screen (새 메일, 글쓰기). Position
 * it yourself (fixed or sticky, bottom right, clear of the home indicator). It can shrink
 * to the icon while the user scrolls; the label stays as the accessible name.
 */
export function Fab({ label, icon, extended = true, onClick, className = "" }: FabProps) {
  return (
    <button
      type="button"
      aria-label={extended ? undefined : label}
      onClick={onClick}
      className={`inline-flex h-14 items-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
    >
      <span aria-hidden="true" className="grid size-6 place-items-center">
        {icon}
      </span>
      {extended ? <span>{label}</span> : null}
    </button>
  );
}
