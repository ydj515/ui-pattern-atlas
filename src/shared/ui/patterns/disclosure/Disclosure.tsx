import { useId, useState, type ReactNode } from "react";

export interface DisclosureProps {
  readonly summary: string;
  readonly children: ReactNode;
  readonly defaultOpen?: boolean;
}

/**
 * One block of content that the user opens and closes (WAI-ARIA disclosure). The heading
 * is a button with aria-expanded; the content is removed from the tab order while closed.
 * For several related blocks use an accordion; for plain HTML, <details> works the same.
 */
export function Disclosure({ summary, children, defaultOpen = false }: DisclosureProps) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none"
        >
          {summary}
          <span
            aria-hidden="true"
            className={`text-slate-500 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
      </h3>
      <div
        id={id}
        hidden={!open}
        className="border-t border-slate-100 px-4 py-3 text-sm leading-6 text-slate-600"
      >
        {children}
      </div>
    </div>
  );
}
