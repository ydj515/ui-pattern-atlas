import { useEffect, useId, useRef, useState } from "react";

export interface ModelOption {
  readonly id: string;
  readonly name: string;
  /** What it is good for, in plain words. */
  readonly hint: string;
}

export interface ModelPickerProps {
  readonly label: string;
  readonly models: readonly ModelOption[];
  readonly value: string;
  readonly onChange: (id: string) => void;
}

/**
 * Compact button that shows the current model and opens a menu of choices, each with a
 * one-line hint about when to use it. It is a menu of radio items: arrow keys move,
 * Enter picks, Escape closes and returns focus.
 */
export function ModelPicker({ label, models, value, onChange }: ModelPickerProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const current = models.find((model) => model.id === value);

  useEffect(() => {
    if (open) itemsRef.current[active]?.focus();
  }, [open, active]);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${label}: ${current?.name ?? ""}`}
        onClick={() => {
          setActive(
            Math.max(
              0,
              models.findIndex((model) => model.id === value),
            ),
          );
          setOpen((state) => !state);
        }}
        className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold text-slate-800 hover:bg-slate-100"
      >
        {current?.name}
        <span aria-hidden="true" className="text-xs text-slate-500">
          ▾
        </span>
      </button>
      {open ? (
        <div
          id={id}
          role="menu"
          aria-label={label}
          onKeyDown={(event) => {
            if (event.key === "Escape") close();
            if (event.key === "ArrowDown") setActive((index) => (index + 1) % models.length);
            if (event.key === "ArrowUp")
              setActive((index) => (index - 1 + models.length) % models.length);
          }}
          className="absolute top-full left-0 z-10 mt-1 grid w-60 gap-0.5 rounded-xl bg-white p-1 shadow-lg ring-1 ring-slate-200"
        >
          {models.map((model, index) => (
            <button
              key={model.id}
              ref={(element) => {
                itemsRef.current[index] = element;
              }}
              type="button"
              role="menuitemradio"
              aria-checked={model.id === value}
              tabIndex={index === active ? 0 : -1}
              onClick={() => {
                onChange(model.id);
                close();
              }}
              className="flex items-start gap-2 rounded-lg px-2 py-1.5 text-left hover:bg-slate-100 focus-visible:bg-slate-100 focus-visible:outline-none"
            >
              <span aria-hidden="true" className="w-3 text-sm text-blue-600">
                {model.id === value ? "✓" : ""}
              </span>
              <span>
                <span className="block text-sm font-semibold text-slate-900">{model.name}</span>
                <span className="block text-xs text-slate-500">{model.hint}</span>
              </span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
