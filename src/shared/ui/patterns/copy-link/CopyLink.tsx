import { useEffect, useId, useRef, useState } from "react";

export interface CopyLinkProps {
  readonly label: string;
  readonly url: string;
  readonly copyLabel?: string;
  readonly copiedLabel?: string;
}

/**
 * Read-only link field with a copy button. Copying selects the text as well, so a
 * manual copy still works if the clipboard is blocked, and the result is announced.
 */
export function CopyLink({
  label,
  url,
  copyLabel = "복사",
  copiedLabel = "링크를 복사했어요",
}: CopyLinkProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const timer = window.setTimeout(() => setState("idle"), 2000);
    return () => window.clearTimeout(timer);
  }, [state]);

  async function copy() {
    inputRef.current?.select();
    try {
      await navigator.clipboard.writeText(url);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <div className="grid gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-900">
        {label}
      </label>
      <div className="flex gap-2">
        <input
          ref={inputRef}
          id={id}
          readOnly
          value={url}
          onFocus={(event) => event.currentTarget.select()}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-700"
        />
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-lg bg-slate-900 px-3 text-sm font-semibold text-white"
        >
          {copyLabel}
        </button>
      </div>
      <p
        role="status"
        className={`h-4 text-xs ${state === "failed" ? "text-rose-600" : "text-emerald-700"}`}
      >
        {state === "copied"
          ? copiedLabel
          : state === "failed"
            ? "복사하지 못했어요. 선택된 주소를 직접 복사해 주세요"
            : ""}
      </p>
    </div>
  );
}
