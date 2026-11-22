import { useId, type InputHTMLAttributes } from "react";

export interface FloatingLabelInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "id" | "placeholder" | "className"
> {
  readonly label: string;
}

/**
 * Input whose label sits inside the box and moves up on focus or once there is a value.
 * It is still a real <label>, always visible, so it never disappears like a placeholder.
 * Pure CSS: the input keeps a blank placeholder and `:placeholder-shown` tells empty apart.
 */
export function FloatingLabelInput({ label, ...inputProps }: FloatingLabelInputProps) {
  const id = useId();
  return (
    <div className="relative">
      <input
        id={id}
        placeholder=" "
        className="peer block h-12 w-full rounded-lg border border-slate-300 bg-white px-3 pt-4 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
        {...inputProps}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1.5 left-3 origin-left text-xs text-slate-500 transition-all duration-150 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-700 motion-reduce:transition-none"
      >
        {label}
      </label>
    </div>
  );
}
