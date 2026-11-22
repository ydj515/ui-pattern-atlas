export interface RatingTagsProps {
  readonly label: string;
  /** Tags that fit the chosen score (praise for high, problems for low). */
  readonly tags: readonly string[];
  readonly selected: readonly string[];
  readonly onChange: (selected: readonly string[]) => void;
}

/**
 * Reason chips shown after a star rating, so people can say why in one tap. The chips
 * are toggle buttons (aria-pressed); swap the set when the score crosses from good to
 * bad, and keep writing optional.
 */
export function RatingTags({ label, tags, selected, onChange }: RatingTagsProps) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-1.5">
      {tags.map((tag) => {
        const on = selected.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={on}
            onClick={() =>
              onChange(on ? selected.filter((item) => item !== tag) : [...selected, tag])
            }
            className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 hover:bg-slate-50 aria-pressed:border-blue-600 aria-pressed:bg-blue-50 aria-pressed:text-blue-800"
          >
            {on ? <span aria-hidden="true">✓ </span> : null}
            {tag}
          </button>
        );
      })}
    </div>
  );
}
