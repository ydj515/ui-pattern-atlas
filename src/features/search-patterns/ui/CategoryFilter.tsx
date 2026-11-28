import { CATALOG_TABS } from "@/entities/pattern/catalog/roadmap";
import { useMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/primitives/Button";

export function CategoryFilter({
  value,
  counts,
  onValueChange,
}: {
  readonly value: string;
  /** Number of entries under each tab, shown beside its name. */
  readonly counts?: Readonly<Record<string, number>>;
  readonly onValueChange: (value: string) => void;
}) {
  const messages = useMessages();
  return (
    <div
      role="group"
      aria-label={messages.nav.categories}
      className="flex min-w-0 gap-1 overflow-x-auto p-1 sm:gap-2"
    >
      {CATALOG_TABS.map(({ id }) => (
        <Button
          key={id}
          aria-pressed={value === id}
          onClick={() => onValueChange(id)}
          className="group/tab min-h-10 shrink-0 gap-1.5 px-3 text-body-sm whitespace-nowrap aria-pressed:bg-marker aria-pressed:text-marker-ink sm:px-4"
        >
          {messages.sections[id]}
          {/* The count is a visual aid; the button keeps the category name as its name. */}
          {counts?.[id] !== undefined ? (
            <span
              aria-hidden="true"
              className="text-micro leading-6 text-subtle tabular-nums group-aria-pressed/tab:text-marker-ink/70"
            >
              {counts[id]}
            </span>
          ) : null}
        </Button>
      ))}
    </div>
  );
}
