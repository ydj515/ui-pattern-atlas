export interface AvatarGroupProps {
  readonly people: readonly string[];
  /** How many faces to show before the "+N" bubble. */
  readonly max?: number;
  /** Accessible summary, e.g. (shown, rest) => `${shown.join(", ")} 외 ${rest}명`. */
  readonly summary?: (shown: readonly string[], rest: number) => string;
}

const colors = [
  "bg-amber-200",
  "bg-sky-200",
  "bg-emerald-200",
  "bg-rose-200",
  "bg-violet-200",
] as const;

/**
 * Overlapping initials for a group of people with a "+N" bubble for the rest. The whole
 * group has one accessible name that lists who is shown and how many more there are.
 */
export function AvatarGroup({
  people,
  max = 3,
  summary = (shown, rest) => (rest > 0 ? `${shown.join(", ")} 외 ${rest}명` : shown.join(", ")),
}: AvatarGroupProps) {
  const shown = people.slice(0, max);
  const rest = people.length - shown.length;
  return (
    <span role="img" aria-label={summary(shown, rest)} className="flex -space-x-2">
      {shown.map((person, index) => (
        <span
          key={person}
          aria-hidden="true"
          className={`grid size-9 place-items-center rounded-full text-sm font-semibold text-slate-800 ring-2 ring-white ${colors[index % colors.length]}`}
        >
          {[...person][0]}
        </span>
      ))}
      {rest > 0 ? (
        <span
          aria-hidden="true"
          className="grid size-9 place-items-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600 ring-2 ring-white"
        >
          +{rest}
        </span>
      ) : null}
    </span>
  );
}
