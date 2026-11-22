import type { ReactNode } from "react";

export interface MagazineStory {
  readonly id: string;
  readonly kicker: string;
  readonly title: string;
  readonly visual: ReactNode;
  readonly href: string;
}

export interface MagazineLayoutProps {
  readonly lead: MagazineStory;
  readonly stories: readonly MagazineStory[];
  readonly onOpen?: (story: MagazineStory) => void;
}

/**
 * Editorial layout: one lead story big on the left, smaller stories stacked beside it.
 * Size and position set the hierarchy; on narrow containers everything stacks with the
 * lead first. Headlines are links and the order matches the visual order.
 */
export function MagazineLayout({ lead, stories, onOpen }: MagazineLayoutProps) {
  const link = (story: MagazineStory, className: string) => (
    <a
      href={story.href}
      onClick={(event) => {
        if (!onOpen) return;
        event.preventDefault();
        onOpen(story);
      }}
      className={`hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${className}`}
    >
      {story.title}
    </a>
  );
  return (
    <div className="@container">
      <div className="grid gap-3 @md:grid-cols-[1.6fr_1fr]">
        <article>
          <div aria-hidden="true" className="aspect-[4/3] overflow-hidden rounded-xl">
            {lead.visual}
          </div>
          <p className="mt-2 text-xs font-semibold text-rose-700">{lead.kicker}</p>
          <h3>{link(lead, "text-lg leading-snug font-bold text-slate-900")}</h3>
        </article>
        <div className="grid content-start gap-3">
          {stories.map((story) => (
            <article key={story.id} className="grid grid-cols-[4rem_1fr] gap-2">
              <div aria-hidden="true" className="aspect-square overflow-hidden rounded-lg">
                {story.visual}
              </div>
              <div>
                <p className="text-[11px] font-semibold text-slate-500">{story.kicker}</p>
                <h3>{link(story, "text-sm leading-snug font-semibold text-slate-900")}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
