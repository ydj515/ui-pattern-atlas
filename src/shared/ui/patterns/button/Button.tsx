import type { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "text";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-slate-900 text-white hover:bg-slate-700 active:bg-slate-800",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100",
  text: "text-slate-700 underline-offset-2 hover:bg-slate-100 hover:underline active:bg-slate-200",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
};

/**
 * Button with three levels of emphasis. Use one primary button per area for the main
 * action, secondary for the alternatives, text for low-stakes ones. Hover, pressed and
 * keyboard focus each look different; the focus ring only shows for keyboard use.
 */
export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg font-semibold transition-[background-color,transform] duration-100 select-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none motion-reduce:active:scale-100 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
