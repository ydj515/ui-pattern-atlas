import { useId } from "react";

export type ThemeChoice = "system" | "light" | "dark";

export interface ThemeSwitcherProps {
  readonly value: ThemeChoice;
  readonly onChange: (value: ThemeChoice) => void;
  /** What the system setting resolves to right now, shown next to the system option. */
  readonly systemTheme: "light" | "dark";
  readonly labels?: {
    readonly legend: string;
    readonly system: string;
    readonly light: string;
    readonly dark: string;
    readonly now: (theme: string) => string;
  };
}

const DEFAULT_LABELS = {
  legend: "화면 모드",
  system: "시스템 설정",
  light: "라이트",
  dark: "다크",
  now: (theme: string) => `지금은 ${theme}`,
};

/**
 * Light, dark or follow the device, as three radio cards with a small preview each. The
 * system option also says what it currently resolves to, so choosing it is not a guess.
 */
export function ThemeSwitcher({
  value,
  onChange,
  systemTheme,
  labels = DEFAULT_LABELS,
}: ThemeSwitcherProps) {
  const name = useId();
  const options: readonly {
    readonly id: ThemeChoice;
    readonly label: string;
    readonly preview: "light" | "dark" | "split";
  }[] = [
    { id: "system", label: labels.system, preview: "split" },
    { id: "light", label: labels.light, preview: "light" },
    { id: "dark", label: labels.dark, preview: "dark" },
  ];
  return (
    <fieldset className="grid gap-2 text-sm">
      <legend className="mb-1 font-semibold text-slate-900">{labels.legend}</legend>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <label
            key={option.id}
            className="grid cursor-pointer gap-1.5 rounded-xl border border-slate-200 p-2 text-center has-checked:border-slate-900 has-checked:ring-1 has-checked:ring-slate-900 has-focus-visible:ring-2 has-focus-visible:ring-blue-600"
          >
            <input
              type="radio"
              name={name}
              checked={value === option.id}
              onChange={() => onChange(option.id)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className="flex h-12 overflow-hidden rounded-md border border-slate-200"
            >
              {option.preview !== "dark" ? (
                <span className="grid flex-1 content-start gap-1 bg-white p-1.5">
                  <span className="h-1.5 w-3/4 rounded bg-slate-300" />
                  <span className="h-1.5 w-1/2 rounded bg-slate-200" />
                </span>
              ) : null}
              {option.preview !== "light" ? (
                <span className="grid flex-1 content-start gap-1 bg-slate-900 p-1.5">
                  <span className="h-1.5 w-3/4 rounded bg-slate-600" />
                  <span className="h-1.5 w-1/2 rounded bg-slate-700" />
                </span>
              ) : null}
            </span>
            <span className="text-slate-900">{option.label}</span>
            {option.id === "system" ? (
              <span className="text-[11px] text-slate-500">
                {labels.now(systemTheme === "dark" ? labels.dark : labels.light)}
              </span>
            ) : null}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
