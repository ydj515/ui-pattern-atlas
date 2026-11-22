import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface TapTargetProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly children: ReactNode;
  /** Show the real hit area (for design reviews). */
  readonly showArea?: boolean;
}

/**
 * Small visible control with a hit area of at least 44×44 px (WCAG 2.5.8 asks for 24,
 * platform guides for 44–48). The visible part can stay small; the padding makes the
 * target. Pressed feedback appears immediately on touch.
 */
export function TapTarget({
  children,
  showArea = false,
  className = "",
  type = "button",
  ...props
}: TapTargetProps) {
  return (
    <button
      type={type}
      className={`relative grid min-h-11 min-w-11 touch-manipulation place-items-center rounded-lg active:bg-slate-200 ${showArea ? "outline-2 outline-rose-400 outline-dashed" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
