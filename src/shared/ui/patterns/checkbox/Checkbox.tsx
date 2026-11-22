import { useEffect, useRef } from "react";

interface CheckboxProps {
  readonly label: string;
  readonly checked: boolean;
  readonly mixed?: boolean;
  readonly disabled?: boolean;
  readonly onCheckedChange: (checked: boolean) => void;
}

export function Checkbox({
  label,
  checked,
  mixed = false,
  disabled,
  onCheckedChange,
}: CheckboxProps) {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (input.current) input.current.indeterminate = mixed;
  }, [mixed]);

  return (
    <label className="inline-flex w-fit items-center gap-2 text-sm text-slate-800">
      <input
        ref={input}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onCheckedChange(event.currentTarget.checked)}
        className="size-4 accent-blue-700"
      />
      {label}
    </label>
  );
}
