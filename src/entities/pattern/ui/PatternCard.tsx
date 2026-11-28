import { Link } from "react-router";

import { useLocale } from "@/shared/i18n/locale";
import { useMessages } from "@/shared/i18n/messages";
import { Highlight } from "@/shared/ui/Highlight";

import {
  patternHeadword,
  patternPath,
  patternSecondaryName,
  type Pattern,
} from "@/entities/pattern/model/pattern";
import { ThumbnailFrame } from "@/entities/pattern/ui/ThumbnailFrame";

/**
 * Outlined catalog card: the thumbnail fills the top and the text sits under a rule. The card
 * clips the thumbnail frame to its corners. Shared by pattern and comparison cards.
 */
export const catalogCardClassName =
  "group flex h-full flex-col overflow-hidden rounded-surface border border-rule transition-colors hover:border-rule-strong motion-reduce:transition-none";
export const catalogCardBodyClassName = "flex-1 border-t border-rule px-4 pt-3.5 pb-4";
export const catalogCardHeadwordClassName =
  "font-serif text-headword font-semibold decoration-1 underline-offset-4 group-hover:underline";

export interface PatternCardProps {
  readonly pattern: Pattern;
  /** Current search text; matching parts of the name and summary are highlighted. */
  readonly query?: string;
  /** Catalog search string to restore when the user comes back from the detail page. */
  readonly returnSearch?: string;
}

/**
 * Dictionary-style entry: a live miniature of the pattern, the Korean headword with
 * its English term, and a one-line definition. The whole entry is one link.
 */
export function PatternCard({ pattern, query = "", returnSearch }: PatternCardProps) {
  const locale = useLocale();
  const messages = useMessages();
  const secondaryName = patternSecondaryName(pattern, locale);
  return (
    <Link to={patternPath(pattern)} state={{ returnSearch }} className={catalogCardClassName}>
      <ThumbnailFrame load={pattern.loadThumbnail} />
      <div className={catalogCardBodyClassName}>
        <h3 className="flex flex-wrap items-baseline gap-x-2">
          <span className={catalogCardHeadwordClassName}>
            <Highlight text={patternHeadword(pattern, locale)} query={query} />
          </span>
          {secondaryName ? (
            <>
              {" "}
              <span className="text-caption font-normal text-graphite">
                <Highlight text={secondaryName} query={query} />
              </span>
            </>
          ) : null}
        </h3>
        <p className="mt-1 text-body-sm text-ink/80">
          <Highlight text={pattern.summary} query={query} />
        </p>
      </div>
      <span className="sr-only">{messages.catalog.demo}</span>
    </Link>
  );
}
