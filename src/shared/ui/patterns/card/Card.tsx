import type { ReactNode } from "react";

export interface CardProps {
  readonly href: string;
  readonly title: string;
  readonly summary: string;
  /** Decorative image area. */
  readonly media: ReactNode;
  readonly meta?: string;
  /** Extra control (e.g. a bookmark button); stays clickable above the card link. */
  readonly action?: ReactNode;
  readonly onOpen?: (href: string) => void;
}

/**
 * Image, title and summary grouped in one box. The title is the only link, stretched over
 * the whole card with a pseudo-element, so screen readers hear one short link instead of
 * the whole card text, and a secondary button inside still works on its own.
 */
export function Card({ href, title, summary, media, meta, action, onOpen }: CardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md has-focus-visible:ring-2 has-focus-visible:ring-blue-600">
      <div aria-hidden="true" className="aspect-[16/10] overflow-hidden bg-slate-100">
        {media}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        {meta ? <p className="text-xs text-slate-500">{meta}</p> : null}
        <h3 className="text-sm font-semibold text-slate-900">
          <a
            href={href}
            onClick={(event) => {
              if (!onOpen) return;
              event.preventDefault();
              onOpen(href);
            }}
            className="after:absolute after:inset-0 focus:outline-none group-hover:underline"
          >
            {title}
          </a>
        </h3>
        <p className="line-clamp-2 text-xs leading-5 text-slate-600">{summary}</p>
      </div>
      {action ? <div className="absolute top-2 right-2 z-10">{action}</div> : null}
    </article>
  );
}
