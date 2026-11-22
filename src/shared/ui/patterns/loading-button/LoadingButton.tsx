export type LoadingButtonState = "idle" | "loading" | "success" | "error";

export interface LoadingButtonProps {
  readonly state: LoadingButtonState;
  readonly onClick: () => void;
  readonly labels: Record<LoadingButtonState, string>;
}

const tone: Record<LoadingButtonState, string> = {
  idle: "bg-slate-900 text-white hover:bg-slate-700",
  loading: "bg-slate-700 text-white",
  success: "bg-emerald-600 text-white",
  error: "bg-rose-600 text-white hover:bg-rose-500",
};

/**
 * Button that shows its own progress: a spinner while the request runs, then success or
 * failure in place. It keeps its width so the layout does not jump, ignores clicks while
 * busy (aria-disabled instead of disabled, so focus stays on it), and announces each
 * state through a polite live region.
 */
export function LoadingButton({ state, onClick, labels }: LoadingButtonProps) {
  const busy = state === "loading";
  return (
    <>
      <button
        type="button"
        aria-disabled={busy || undefined}
        aria-busy={busy || undefined}
        onClick={() => {
          if (!busy && state !== "success") onClick();
        }}
        className={`inline-flex h-10 min-w-36 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none ${tone[state]}`}
      >
        {state === "loading" ? (
          <span
            aria-hidden="true"
            className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none"
          />
        ) : null}
        {state === "success" ? <span aria-hidden="true">✓</span> : null}
        {state === "error" ? <span aria-hidden="true">!</span> : null}
        {labels[state]}
      </button>
      <span role="status" className="sr-only">
        {state === "idle" ? "" : labels[state]}
      </span>
    </>
  );
}
