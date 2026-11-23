import { useId, useState } from "react";

export interface TypeToConfirmProps {
  /** The exact text to type, usually the name of what is being deleted. */
  readonly target: string;
  /** What goes away with it, one line each. */
  readonly consequences: readonly string[];
  readonly onConfirm: () => void;
  readonly labels?: {
    readonly title: string;
    readonly prompt: (target: string) => string;
    readonly confirm: string;
  };
}

const DEFAULT_LABELS = {
  title: "정말 지울까요?",
  prompt: (target: string) => `지우려면 ${target}을(를) 입력하세요`,
  confirm: "영구 삭제",
};

/**
 * A destructive action that only unlocks once the user types the name of what they are
 * deleting, after reading what goes with it.
 */
export function TypeToConfirm({
  target,
  consequences,
  onConfirm,
  labels = DEFAULT_LABELS,
}: TypeToConfirmProps) {
  const id = useId();
  const [value, setValue] = useState("");
  const matches = value.trim() === target;
  return (
    <section
      role="alertdialog"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-list`}
      className="grid gap-3 text-sm"
    >
      <h3 id={`${id}-title`} className="font-semibold text-slate-900">
        {labels.title}
      </h3>
      <ul id={`${id}-list`} className="grid list-disc gap-1 pl-5 text-slate-600">
        {consequences.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <label className="grid gap-1 text-slate-700">
        {labels.prompt(target)}
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          autoComplete="off"
          spellCheck={false}
          className="rounded-lg border border-slate-300 px-3 py-2 text-slate-900"
        />
      </label>
      <button
        type="button"
        disabled={!matches}
        onClick={onConfirm}
        className="rounded-lg bg-rose-600 px-3 py-2 font-medium text-white disabled:bg-slate-200 disabled:text-slate-400"
      >
        {labels.confirm}
      </button>
    </section>
  );
}
