import { useId } from "react";

export interface TimeSlot {
  readonly time: string;
  readonly available: boolean;
}

export interface TimeSlotsProps {
  readonly label: string;
  readonly slots: readonly TimeSlot[];
  readonly value: string | null;
  readonly onChange: (time: string) => void;
  /** Shown on slots that are taken. */
  readonly fullLabel?: string;
}

/**
 * Grid of bookable times. Each slot is a native radio styled as a button, so arrow keys
 * move between free slots and taken slots are disabled and say why ("마감") in text.
 */
export function TimeSlots({ label, slots, value, onChange, fullLabel = "마감" }: TimeSlotsProps) {
  const name = useId();
  return (
    <fieldset>
      <legend className="text-sm font-medium text-slate-800">{label}</legend>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {slots.map((slot) => (
          <label key={slot.time} className="relative">
            <input
              type="radio"
              name={name}
              value={slot.time}
              disabled={!slot.available}
              checked={value === slot.time}
              onChange={() => onChange(slot.time)}
              className="peer sr-only"
            />
            <span className="flex h-11 cursor-pointer flex-col items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-800 tabular-nums peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-blue-600/40 peer-disabled:cursor-not-allowed peer-disabled:border-slate-200 peer-disabled:bg-slate-50 peer-disabled:text-slate-400">
              {slot.time}
              {slot.available ? null : <span className="text-[11px] font-normal">{fullLabel}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
