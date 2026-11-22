import { useEffect, useId, useRef, type ReactNode } from "react";

export interface WelcomeScreenProps {
  readonly open: boolean;
  readonly title: string;
  readonly body: string;
  readonly art?: ReactNode;
  readonly startLabel: string;
  readonly exploreLabel?: string;
  readonly onStart: () => void;
  readonly onExplore: () => void;
}

/**
 * First-visit greeting in a modal dialog: one sentence on what the service does, a start
 * button and a quieter way to look around first. It uses the native <dialog>, so focus
 * stays inside and Escape counts as looking around.
 */
export function WelcomeScreen({
  open,
  title,
  body,
  art,
  startLabel,
  exploreLabel = "먼저 둘러볼게요",
  onStart,
  onExplore,
}: WelcomeScreenProps) {
  const id = useId();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={id}
      onCancel={(event) => {
        event.preventDefault();
        onExplore();
      }}
      className="m-auto w-72 rounded-2xl p-6 text-center shadow-2xl backdrop:bg-slate-900/50"
    >
      {art ? (
        <div aria-hidden="true" className="mb-4">
          {art}
        </div>
      ) : null}
      <h2 id={id} className="text-lg font-bold text-slate-900">
        {title}
      </h2>
      <p className="mt-1 text-sm text-slate-600">{body}</p>
      <div className="mt-5 grid gap-2">
        <button
          type="button"
          autoFocus
          onClick={onStart}
          className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
        >
          {startLabel}
        </button>
        <button
          type="button"
          onClick={onExplore}
          className="rounded-lg py-2 text-sm text-slate-600 hover:bg-slate-100"
        >
          {exploreLabel}
        </button>
      </div>
    </dialog>
  );
}
