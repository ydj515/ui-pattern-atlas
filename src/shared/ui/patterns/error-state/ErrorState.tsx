interface ErrorStateProps {
  readonly title: string;
  readonly description: string;
  readonly retryLabel: string;
  readonly retryingLabel: string;
  readonly retrying?: boolean;
  readonly onRetry: () => void;
}

export function ErrorState({
  title,
  description,
  retryLabel,
  retryingLabel,
  retrying = false,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="grid justify-items-center rounded-xl border border-slate-200 bg-white p-6 text-center">
      <span
        aria-hidden="true"
        className="mb-3 grid size-9 place-items-center rounded-full bg-rose-100 font-bold text-rose-700"
      >
        !
      </span>
      <div role="alert">
        <p className="text-base font-semibold text-slate-900">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
      </div>
      <button
        type="button"
        aria-disabled={retrying}
        onClick={() => {
          if (!retrying) onRetry();
        }}
        className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700 aria-disabled:cursor-wait aria-disabled:opacity-70"
      >
        {retrying ? retryingLabel : retryLabel}
      </button>
      <p role="status" className="sr-only">
        {retrying ? retryingLabel : ""}
      </p>
    </div>
  );
}
