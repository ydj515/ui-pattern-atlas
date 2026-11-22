import { useRef, type ClipboardEvent, type KeyboardEvent } from "react";

export interface OtpInputProps {
  readonly value: string;
  readonly onChange: (value: string) => void;
  /** Called once every box is filled. */
  readonly onComplete?: (value: string) => void;
  readonly length?: number;
  /** Group name, e.g. "인증번호". Each box is named "인증번호 1/6자리". */
  readonly label: string;
  readonly invalid?: boolean;
}

/**
 * One-time code split into boxes. Typing moves to the next box, Backspace goes back,
 * pasting or SMS autofill (autocomplete="one-time-code") fills every box at once.
 * Only digits are accepted, and mobile keyboards open on the number pad.
 */
export function OtpInput({
  value,
  onChange,
  onComplete,
  length = 6,
  label,
  invalid = false,
}: OtpInputProps) {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = Array.from({ length }, (_, index) => value[index] ?? "");

  function commit(next: string, focusIndex: number) {
    const clean = next.replace(/\D/g, "").slice(0, length);
    onChange(clean);
    refs.current[Math.min(focusIndex, length - 1)]?.focus();
    if (clean.length === length) onComplete?.(clean);
  }

  function handleInput(index: number, typed: string) {
    const digitsOnly = typed.replace(/\D/g, "");
    if (!digitsOnly) return;
    // Autofill and fast typing can put several digits into one box.
    const next = (value.slice(0, index) + digitsOnly).slice(0, length);
    commit(next, index + digitsOnly.length);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace") {
      event.preventDefault();
      const target = digits[index] ? index : index - 1;
      if (target < 0) return;
      commit(value.slice(0, target) + value.slice(target + 1), target);
    } else if (event.key === "ArrowLeft") {
      refs.current[index - 1]?.focus();
    } else if (event.key === "ArrowRight") {
      refs.current[index + 1]?.focus();
    }
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    event.preventDefault();
    const pasted = event.clipboardData.getData("text");
    commit(pasted, pasted.replace(/\D/g, "").length);
  }

  return (
    <div role="group" aria-label={label} className="flex gap-2">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(element) => {
            refs.current[index] = element;
          }}
          value={digit}
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          aria-label={`${label} ${index + 1}/${length}자리`}
          aria-invalid={invalid || undefined}
          onChange={(event) => handleInput(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.target.select()}
          className="size-11 rounded-lg border border-slate-300 bg-white text-center text-lg font-semibold text-slate-900 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none aria-invalid:border-rose-500"
        />
      ))}
    </div>
  );
}
