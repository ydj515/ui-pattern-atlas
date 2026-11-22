import { useState } from "react";
import { Spring } from "@/shared/ui/patterns/spring/Spring";

const PRESETS = [
  { label: "통통 튀게", stiffness: 260, damping: 10 },
  { label: "부드럽게", stiffness: 120, damping: 20 },
];

export function SpringDemo() {
  const [right, setRight] = useState(false);
  const [preset, setPreset] = useState(PRESETS[0]!);

  return (
    <section className="w-full max-w-xs">
      <div className="relative h-16 rounded-2xl bg-slate-100 px-2">
        <Spring to={right ? 216 : 0} stiffness={preset.stiffness} damping={preset.damping}>
          {(value) => (
            <span
              className="absolute top-3 left-2 size-10 rounded-full bg-blue-600 shadow"
              style={{ transform: `translateX(${value}px)` }}
            />
          )}
        </Spring>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <fieldset className="flex gap-1 text-xs">
          <legend className="sr-only">움직임</legend>
          {PRESETS.map((item) => (
            <label
              key={item.label}
              className="cursor-pointer rounded-md border border-slate-200 px-2 py-1 has-checked:border-slate-900 has-checked:font-semibold"
            >
              <input
                type="radio"
                name="spring-preset"
                className="sr-only"
                checked={preset === item}
                onChange={() => setPreset(item)}
              />
              {item.label}
            </label>
          ))}
        </fieldset>
        <button
          type="button"
          onClick={() => setRight((value) => !value)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
        >
          {right ? "왼쪽으로" : "오른쪽으로"}
        </button>
      </div>
    </section>
  );
}
