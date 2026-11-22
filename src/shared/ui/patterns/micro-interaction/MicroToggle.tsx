import { useRef, type ReactNode } from "react";

const POP: Keyframe[] = [
  { transform: "scale(1)" },
  { transform: "scale(0.85)", offset: 0.3 },
  { transform: "scale(1.12)", offset: 0.7 },
  { transform: "scale(1)" },
];

export interface MicroToggleProps {
  readonly pressed: boolean;
  readonly onPressedChange: (pressed: boolean) => void;
  readonly label: string;
  readonly pressedLabel: string;
  readonly icon: (pressed: boolean) => ReactNode;
}

/**
 * Toggle that answers a press with a small, quick reaction: the icon squeezes and pops
 * while it fills in, and the label changes. The pop is skipped for reduced motion; the
 * filled icon and the new label still show the result.
 */
export function MicroToggle({
  pressed,
  onPressedChange,
  label,
  pressedLabel,
  icon,
}: MicroToggleProps) {
  const iconRef = useRef<HTMLSpanElement>(null);

  function toggle() {
    const next = !pressed;
    onPressedChange(next);
    if (next && !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      iconRef.current?.animate?.(POP, { duration: 320, easing: "ease-out" });
    }
  }

  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={toggle}
      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 active:bg-slate-100 aria-pressed:border-slate-900 aria-pressed:text-slate-900"
    >
      <span ref={iconRef} aria-hidden="true" className="inline-flex">
        {icon(pressed)}
      </span>
      {pressed ? pressedLabel : label}
    </button>
  );
}
