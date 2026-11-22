import { useId, type ButtonHTMLAttributes, type ReactNode } from "react";

export interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-label" | "children"
> {
  /** Accessible name and tooltip text, e.g. "공유". */
  readonly label: string;
  readonly icon: ReactNode;
}

/**
 * Button with only an icon. The label is its accessible name and also appears as a
 * tooltip on hover and keyboard focus, so sighted users can check what it does too.
 * The hit area stays 40×40 even when the icon is small.
 */
export function IconButton({
  label,
  icon,
  type = "button",
  className = "",
  ...props
}: IconButtonProps) {
  const tipId = useId();
  return (
    <span className="group relative inline-flex">
      <button
        type={type}
        aria-label={label}
        aria-describedby={tipId}
        className={`grid size-10 place-items-center rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none active:bg-slate-200 ${className}`}
        {...props}
      >
        <span aria-hidden="true" className="size-5">
          {icon}
        </span>
      </button>
      <span
        id={tipId}
        role="tooltip"
        className="pointer-events-none absolute top-full left-1/2 z-10 mt-1 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 motion-reduce:transition-none"
      >
        {label}
      </span>
    </span>
  );
}
