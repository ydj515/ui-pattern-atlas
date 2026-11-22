const tones = {
  slate: "bg-slate-100 text-slate-700",
  blue: "bg-blue-50 text-blue-800",
  green: "bg-emerald-50 text-emerald-800",
  amber: "bg-amber-50 text-amber-800",
} as const;

export interface TagProps {
  readonly children: string;
  readonly tone?: keyof typeof tones;
  /** Shows a remove button named "<tag> 태그 빼기". */
  readonly onRemove?: () => void;
  readonly removeLabel?: (tag: string) => string;
}

/** Small label that classifies something (분류, 주제). Optionally removable. */
export function Tag({
  children,
  tone = "slate",
  onRemove,
  removeLabel = (tag) => `${tag} 태그 빼기`,
}: TagProps) {
  return (
    <span
      className={`inline-flex h-6 items-center gap-1 rounded-md px-2 text-xs font-medium ${tones[tone]}`}
    >
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label={removeLabel(children)}
          onClick={onRemove}
          className="-mr-1 grid size-4 place-items-center rounded hover:bg-black/10 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          <span aria-hidden="true">×</span>
        </button>
      ) : null}
    </span>
  );
}
