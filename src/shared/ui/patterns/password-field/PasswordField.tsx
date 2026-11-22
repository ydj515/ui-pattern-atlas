import { useId, useState } from "react";

export interface PasswordRule {
  readonly label: string;
  readonly test: (value: string) => boolean;
}

export interface PasswordFieldProps {
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly rules?: readonly PasswordRule[];
  readonly showLabel?: string;
  readonly autoComplete?: "new-password" | "current-password";
}

/**
 * Password input with a show/hide toggle and a live checklist of the rules.
 *
 * The toggle is a pressed/unpressed button next to the field. Rules are listed before
 * typing starts (not only as an error afterwards) and each one says whether it is met
 * in text, not only by colour.
 */
export function PasswordField({
  label,
  value,
  onChange,
  rules = [],
  showLabel = "비밀번호 보기",
  autoComplete = "new-password",
}: PasswordFieldProps) {
  const id = useId();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="relative mt-1.5">
        <input
          id={id}
          type={visible ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete={autoComplete}
          aria-describedby={rules.length > 0 ? `${id}-rules` : undefined}
          className="block w-full rounded-lg border border-slate-300 bg-white py-2 pr-10 pl-3 text-sm text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
        />
        <button
          type="button"
          aria-label={showLabel}
          aria-pressed={visible}
          onClick={() => setVisible((current) => !current)}
          className="absolute inset-y-0 right-0 grid w-10 place-items-center text-slate-500 hover:text-slate-800 aria-pressed:text-blue-700"
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
            className="size-4"
          >
            <path d="M1.5 10S4.5 4 10 4s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6Z" />
            <circle cx="10" cy="10" r="2.5" />
            {visible ? null : <path d="M3 17 17 3" strokeLinecap="round" />}
          </svg>
        </button>
      </div>
      {rules.length > 0 ? (
        <ul id={`${id}-rules`} className="mt-2 space-y-1 text-xs">
          {rules.map((rule) => {
            const met = rule.test(value);
            return (
              <li
                key={rule.label}
                className={`flex items-center gap-1.5 ${met ? "text-emerald-700" : "text-slate-500"}`}
              >
                <span aria-hidden="true">{met ? "✓" : "·"}</span>
                {rule.label}
                <span className="sr-only">{met ? "(충족)" : "(미충족)"}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
