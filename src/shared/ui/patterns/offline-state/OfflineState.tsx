import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("online", onChange);
  window.addEventListener("offline", onChange);
  return () => {
    window.removeEventListener("online", onChange);
    window.removeEventListener("offline", onChange);
  };
}

/** True while the browser reports a network connection. */
export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true,
  );
}

export interface OfflineStateProps {
  readonly onRetry: () => void;
  readonly title?: string;
  readonly description?: string;
  readonly retryLabel?: string;
}

/**
 * Shown in place of content that needs the network. Says what happened, that it will
 * reload on its own once the connection is back, and offers a manual retry.
 * It is a status region, so the change is announced without moving focus.
 */
export function OfflineState({
  onRetry,
  title = "인터넷 연결이 끊겼어요",
  description = "연결되면 자동으로 다시 불러와요.",
  retryLabel = "다시 시도",
}: OfflineStateProps) {
  return (
    <div role="status" className="rounded-xl border border-slate-200 bg-white p-5 text-center">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto size-8 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M2 8.5a15 15 0 0 1 20 0M5.5 12a10 10 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01M3 3l18 18" />
      </svg>
      <p className="mt-2 text-sm font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
      >
        {retryLabel}
      </button>
    </div>
  );
}
