import "@/entities/pattern/ui/thumbnail-motion.css";

import { Link } from "react-router";

import { Highlight } from "@/shared/ui/Highlight";

import { patternPath, type Pattern } from "@/entities/pattern/model/pattern";

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
  const { Thumbnail } = pattern;

  return (
    <Link to={patternPath(pattern)} state={{ returnSearch }} className="group block">
      <div
        aria-hidden="true"
        className="grid aspect-[3/2] place-items-center rounded-surface bg-field transition-colors group-hover:bg-field-hover motion-reduce:transition-none"
      >
        <Thumbnail />
      </div>
      <h3 className="mt-3.5">
        <span className="font-serif text-headword font-semibold decoration-1 underline-offset-4 group-hover:underline">
          <Highlight text={pattern.nameKo} query={query} />
        </span>{" "}
        <span className="mt-0.5 block text-caption font-normal text-graphite">
          <Highlight text={pattern.name} query={query} />
        </span>
      </h3>
      <p className="mt-1 text-body-sm text-ink/80">
        <Highlight text={pattern.summary} query={query} />
      </p>
      <span className="sr-only">데모</span>
    </Link>
  );
}
