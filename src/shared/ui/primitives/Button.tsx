import type { ComponentPropsWithoutRef } from "react";

/**
 * Site chrome button styles (see DESIGN.md → Components). Exported as class strings so
 * router links that look like buttons share them: `<Link className={buttonClassName("primary")}>`.
 */
const variantClasses = {
  primary: "bg-ink px-4 py-2 font-medium text-paper hover:bg-ink/85",
  quiet: "px-2 py-1 text-graphite hover:bg-field hover:text-ink aria-pressed:text-ink",
  /** Square icon-only button; give it an `aria-label`. */
  icon: "size-9 justify-center text-graphite hover:bg-field hover:text-ink",
  /** Quiet button on the always-light demo `canvas`. */
  quietOnCanvas: "px-2 py-1 text-canvas-muted hover:bg-canvas-raised hover:text-canvas-ink",
} as const;

export type ButtonVariant = keyof typeof variantClasses;

export function buttonClassName(variant: ButtonVariant): string {
  return `inline-flex items-center gap-1.5 rounded-control text-caption disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]}`;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  readonly variant?: ButtonVariant;
}

export function Button({
  variant = "quiet",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={`${buttonClassName(variant)} ${className}`} {...props} />;
}
