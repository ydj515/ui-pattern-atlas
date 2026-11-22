import { useId, useState, type ReactNode } from "react";

export interface AccordionItem {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

const headingTags = { 2: "h2", 3: "h3", 4: "h4" } as const;

export interface AccordionProps {
  readonly items: readonly AccordionItem[];
  /** Allow several sections to be open at once. */
  readonly allowMultiple?: boolean;
  readonly defaultOpenIds?: readonly string[];
  /** Heading level of each section title, so it fits the page outline. */
  readonly headingLevel?: keyof typeof headingTags;
}

/**
 * Vertically stacked sections that expand and collapse. Each header is a
 * button inside a heading, linked to its panel with `aria-controls`.
 */
export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  headingLevel = 3,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set(defaultOpenIds));
  const baseId = useId();
  const Heading = headingTags[headingLevel];

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(allowMultiple ? current : []);
      if (current.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
      {items.map((item) => {
        const open = openIds.has(item.id);
        const buttonId = `${baseId}-button-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;
        return (
          <div key={item.id}>
            <Heading className="m-0">
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                {item.title}
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`size-4 shrink-0 text-slate-400 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
                >
                  <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
                </svg>
              </button>
            </Heading>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-4 pb-4 text-sm leading-6 text-slate-600"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
