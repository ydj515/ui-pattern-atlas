import { useEffect, useRef, useState } from "react";

import { useMessages } from "@/shared/i18n/messages";

type CopyStatus = "idle" | "copied" | "failed";

const RESET_DELAY_MS = 2000;

export interface CopyCodeButtonProps {
  readonly code: string;
  readonly fileName: string;
}

/** Copies source code to the clipboard and reports the result in a live region. */
export function CopyCodeButton({ code, fileName }: CopyCodeButtonProps) {
  const messages = useMessages();
  const statusLabel: Record<CopyStatus, string> = {
    idle: messages.source.copy,
    copied: messages.source.copied,
    failed: messages.source.copyFailed,
  };
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function copy() {
    window.clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    timerRef.current = window.setTimeout(() => setStatus("idle"), RESET_DELAY_MS);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={messages.source.copyFile(fileName)}
      className="inline-flex items-center gap-1.5 rounded-control border border-code-rule px-2.5 py-1 text-micro font-medium text-code-fg hover:bg-code-rule"
    >
      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-3.5">
        {status === "copied" ? (
          <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z" />
        ) : (
          <path d="M7 3.5A1.5 1.5 0 0 1 8.5 2h6A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 7 12.5v-9ZM4 7a1 1 0 0 1 1 1v7.5c0 .3.2.5.5.5H11a1 1 0 1 1 0 2H5.5A2.5 2.5 0 0 1 3 15.5V8a1 1 0 0 1 1-1Z" />
        )}
      </svg>
      <span aria-live="polite">{statusLabel[status]}</span>
    </button>
  );
}
