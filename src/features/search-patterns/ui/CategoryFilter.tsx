import { CATALOG_TABS } from "@/entities/pattern/catalog/roadmap";
import { useMessages } from "@/shared/i18n/messages";
import { Button } from "@/shared/ui/primitives/Button";

export function CategoryFilter({
  value,
  onValueChange,
}: {
  readonly value: string;
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
          className="min-h-10 shrink-0 px-3 text-body-sm whitespace-nowrap aria-pressed:bg-marker aria-pressed:text-marker-ink sm:px-4"
        >
          {messages.sections[id]}
        </Button>
      ))}
    </div>
  );
}
