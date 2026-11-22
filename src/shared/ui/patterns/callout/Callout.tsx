import type { ReactNode } from "react";

const tones = {
  note: {
    label: "참고",
    icon: "i",
    box: "border-sky-200 bg-sky-50 text-sky-950",
    mark: "bg-sky-600",
  },
  tip: {
    label: "팁",
    icon: "✓",
    box: "border-emerald-200 bg-emerald-50 text-emerald-950",
    mark: "bg-emerald-600",
  },
  warning: {
    label: "주의",
    icon: "!",
    box: "border-amber-200 bg-amber-50 text-amber-950",
    mark: "bg-amber-500",
  },
} as const;

export type CalloutTone = keyof typeof tones;

export interface CalloutProps {
  readonly tone?: CalloutTone;
  /** Defaults to the tone name (참고, 팁, 주의), so the kind is never conveyed by colour alone. */
  readonly title?: string;
  readonly children: ReactNode;
}

/**
 * Highlighted aside inside body content: a note, a tip or a warning about the text
 * around it. It is part of the reading flow (role="note"), not a live announcement.
 */
export function Callout({ tone = "note", title, children }: CalloutProps) {
  const style = tones[tone];
  return (
    <aside role="note" className={`flex gap-3 rounded-xl border px-4 py-3 text-sm ${style.box}`}>
      <span
        aria-hidden="true"
        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-xs font-bold text-white ${style.mark}`}
      >
        {style.icon}
      </span>
      <div>
        <p className="font-semibold">{title ?? style.label}</p>
        <div className="mt-0.5 leading-6 opacity-90">{children}</div>
      </div>
    </aside>
  );
}
