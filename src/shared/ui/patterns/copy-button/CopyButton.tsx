import { useEffect, useRef, useState } from "react";

export interface CopyButtonProps {
  readonly text: string;
  readonly label?: string;
  readonly copiedLabel?: string;
  readonly failedLabel?: string;
  /** How long the copied state stays. */
  readonly resetMs?: number;
}

/**
 * Copies text with the Clipboard API and confirms it in place ("복사됨") for a moment.
 * The result is also announced in a polite live region. If copying is blocked, it says
 * so, so the user can select the text by hand.
 */
export function CopyButton({
  text,
  label = "복사",
  copiedLabel = "복사됨",
  failedLabel = "복사하지 못했어요",
  resetMs = 2000,
}: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setState("idle"), resetMs);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => void copy()}
        className={`inline-flex h-9 min-w-20 items-center justify-center gap-1 rounded-lg border px-3 text-sm font-medium focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
          state === "copied"
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
        }`}
      >
        {state === "copied" ? <span aria-hidden="true">✓</span> : null}
        {state === "copied" ? copiedLabel : label}
      </button>
      <span role="status" className="sr-only">
        {state === "copied" ? copiedLabel : state === "failed" ? failedLabel : ""}
      </span>
    </>
  );
}
