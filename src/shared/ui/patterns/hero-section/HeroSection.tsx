import type { ReactNode } from "react";

export interface HeroSectionProps {
  readonly title: string;
  readonly description: string;
  readonly primary: ReactNode;
  readonly secondary?: ReactNode;
  /** Decorative visual on the side. */
  readonly visual?: ReactNode;
}

/**
 * First screen of a landing page: one clear headline (the page's h1), one sentence that
 * says who it is for, a single primary action and at most one secondary. The visual sits
 * beside on wide containers and below on narrow ones.
 */
export function HeroSection({ title, description, primary, secondary, visual }: HeroSectionProps) {
  return (
    <section className="@container">
      <div className="grid items-center gap-5 p-5 @md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-xl leading-tight font-bold text-balance text-slate-900">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-pretty text-slate-600">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {primary}
            {secondary}
          </div>
        </div>
        {visual ? <div aria-hidden="true">{visual}</div> : null}
      </div>
    </section>
  );
}
