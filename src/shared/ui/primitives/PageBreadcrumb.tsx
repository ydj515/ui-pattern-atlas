import { Link, type To } from "react-router";

import { navLinkClassName } from "@/shared/ui/primitives/textLink";

interface BreadcrumbParent {
  readonly label: string;
  readonly to: To;
}

function Separator({ className = "" }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`size-3 shrink-0 text-subtle ${className}`}
    >
      <path d="M7.3 5.3a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.3-3.3-3.3-3.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function PageBreadcrumb({
  label,
  parents,
  current,
  hideFirstOnSmallScreens = false,
}: {
  /** Accessible name of the trail, in the page's language. */
  readonly label: string;
  readonly parents: readonly BreadcrumbParent[];
  readonly current: string;
  /** Drops the first step on small screens, where the header already links back. */
  readonly hideFirstOnSmallScreens?: boolean;
}) {
  const hidden = (index: number) => hideFirstOnSmallScreens && index === 0;
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-caption">
        {parents.map(({ label, to }, index) => (
          <li
            key={label}
            className={`flex items-center gap-2 ${hidden(index) ? "max-sm:hidden" : ""}`}
          >
            {index > 0 ? <Separator className={hidden(index - 1) ? "max-sm:hidden" : ""} /> : null}
            <Link to={to} className={`${navLinkClassName} underline-offset-4 hover:underline`}>
              {label}
            </Link>
          </li>
        ))}
        <li className="flex items-center gap-2 font-medium text-ink" aria-current="page">
          <Separator />
          {current}
        </li>
      </ol>
    </nav>
  );
}
