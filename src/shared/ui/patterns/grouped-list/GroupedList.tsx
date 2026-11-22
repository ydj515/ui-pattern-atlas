import { useId } from "react";

export interface ListGroup {
  readonly title: string;
  readonly items: readonly string[];
}

export interface GroupedListProps {
  readonly label: string;
  readonly groups: readonly ListGroup[];
  readonly height?: number;
}

/**
 * Long list split into groups whose header sticks to the top while its items scroll
 * past (position: sticky). Each group is a labelled list, so screen readers can jump
 * between headings and hear each group's size.
 */
export function GroupedList({ label, groups, height = 260 }: GroupedListProps) {
  const id = useId();
  return (
    <div
      role="region"
      aria-label={label}
      tabIndex={0}
      className="overflow-y-auto rounded-xl border border-slate-200 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      style={{ height }}
    >
      {groups.map((group, index) => (
        <section key={group.title} aria-labelledby={`${id}-${index}`}>
          <h3
            id={`${id}-${index}`}
            className="sticky top-0 border-b border-slate-200 bg-slate-50/95 px-4 py-1 text-xs font-semibold text-slate-600 backdrop-blur"
          >
            {group.title}
          </h3>
          <ul aria-labelledby={`${id}-${index}`} className="divide-y divide-slate-100">
            {group.items.map((item) => (
              <li key={item} className="px-4 py-2.5 text-sm text-slate-800">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
