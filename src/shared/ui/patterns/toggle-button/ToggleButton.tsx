import type { ReactNode } from "react";

export interface ToggleButtonProps {
  /** Accessible name; it stays the same whether pressed or not. */
  readonly label: string;
  readonly pressed: boolean;
  readonly onChange: (pressed: boolean) => void;
  /** Visible content, e.g. an icon or a letter. */
  readonly children: ReactNode;
}

/**
 * Button that stays on or off after it is pressed (aria-pressed). The name does not
 * change with the state; the state is announced as "눌림"/"안 눌림". Group related
 * toggles in a toolbar.
 */
export function ToggleButton({ label, pressed, onChange, children }: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={() => onChange(!pressed)}
      className="grid size-9 place-items-center rounded-md text-sm text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none aria-pressed:bg-slate-900 aria-pressed:text-white"
    >
      {children}
    </button>
  );
}
