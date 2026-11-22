import type { MouseEvent } from "react";

export interface BreadcrumbItem {
  readonly label: string;
  readonly href: string;
}

export interface BreadcrumbProps {
  /** Ordered from the root to the current page. The last item is the current page. */
  readonly items: readonly BreadcrumbItem[];
  readonly label?: string;
  /** Hook for client-side routers. Call `event.preventDefault()` to handle navigation yourself. */
  readonly onNavigate?: (item: BreadcrumbItem, event: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Hierarchical trail inside a `nav` landmark. The last item is marked with
 * `aria-current="page"` and is not a link.
 */
export function Breadcrumb({ items, label = "Breadcrumb", onNavigate }: BreadcrumbProps) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="size-4 text-slate-300"
                >
                  <path d="M7.3 5.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4L10.6 10 7.3 6.7a1 1 0 0 1 0-1.4Z" />
                </svg>
              ) : null}
              {isCurrent ? (
                <span aria-current="page" className="px-1 font-medium text-slate-900">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(event) => onNavigate?.(item, event)}
                  className="rounded px-1 underline-offset-4 hover:text-slate-900 hover:underline"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
