import { useId } from "react";

export interface UpdatePromptProps {
  /** Optional updates can be skipped; required ones say why they cannot. */
  readonly kind: "optional" | "required";
  readonly version: string;
  readonly notes: readonly string[];
  readonly onUpdate: () => void;
  readonly onLater: () => void;
  readonly labels?: {
    readonly optionalTitle: (version: string) => string;
    readonly requiredTitle: (version: string) => string;
    readonly requiredReason: string;
    readonly update: string;
    readonly later: string;
  };
}

const DEFAULT_LABELS = {
  optionalTitle: (version: string) => `새 버전(${version})이 나왔어요`,
  requiredTitle: (version: string) => `${version} 버전으로 업데이트해야 쓸 수 있어요`,
  requiredReason: "보안 문제를 고친 버전이라 이전 버전으로는 로그인할 수 없어요",
  update: "업데이트",
  later: "나중에",
};

/**
 * Tells what a new version brings. An optional update can wait; a required one gives the
 * reason instead of a dismiss button.
 */
export function UpdatePrompt({
  kind,
  version,
  notes,
  onUpdate,
  onLater,
  labels = DEFAULT_LABELS,
}: UpdatePromptProps) {
  const id = useId();
  const required = kind === "required";
  return (
    <section
      role={required ? "alertdialog" : "dialog"}
      aria-labelledby={`${id}-title`}
      className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-lg"
    >
      <h3 id={`${id}-title`} className="font-semibold text-slate-900">
        {required ? labels.requiredTitle(version) : labels.optionalTitle(version)}
      </h3>
      {required ? <p className="text-rose-700">{labels.requiredReason}</p> : null}
      <ul className="grid list-disc gap-1 pl-5 text-slate-600">
        {notes.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {required ? null : (
          <button
            type="button"
            onClick={onLater}
            className="rounded-lg border border-slate-300 px-3 py-2 font-medium text-slate-700"
          >
            {labels.later}
          </button>
        )}
        <button
          type="button"
          onClick={onUpdate}
          className="flex-1 rounded-lg bg-slate-900 px-3 py-2 font-medium text-white"
        >
          {labels.update}
        </button>
      </div>
    </section>
  );
}
