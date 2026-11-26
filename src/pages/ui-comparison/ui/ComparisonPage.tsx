import { useState } from "react";
import { patternPath } from "@/entities/pattern/model/pattern";
import { Link, useParams } from "react-router";

import { COMPARISON_GUIDES } from "@/entities/pattern/catalog/comparisons/comparisonGuides";
import {
  COMPARISON_TOPIC,
  catalogCategoryHref,
  comparisonSlug,
  type RoadmapEntry,
} from "@/entities/pattern/catalog/roadmap";
import { findPatternByTerm } from "@/entities/pattern/catalog/roadmapLinks";
import { roadmapMatcher } from "@/features/search-patterns/model/searchRoadmap";
import { NotFoundView } from "@/shared/ui/feedback/NotFoundView";
import { CatalogBreadcrumb } from "@/entities/pattern/ui/CatalogBreadcrumb";
import { useMessages } from "@/shared/i18n/messages";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";
import { PatternPreview } from "@/widgets/pattern-detail/ui/PatternPreview";

const comparisons = COMPARISON_TOPIC?.entries ?? [];
const groupNames = [...new Set(comparisons.map((pair) => pair.group))];

export function ComparisonPage() {
  const { slug } = useParams();
  return slug ? <ComparisonDetail slug={slug} /> : <ComparisonIndex />;
}

function ComparisonIndex() {
  const messages = useMessages();
  const [query, setQuery] = useState("");
  const matches = roadmapMatcher(query);
  const matching = comparisons.filter((pair) => matches(pair.nameKo, pair.name, pair.description));

  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>{`${messages.comparison.title} · UI Pattern Atlas`}</title>
      <CatalogBreadcrumb
        parents={[{ label: messages.comparison.title, to: catalogCategoryHref("ui-comparison") }]}
        current={messages.comparison.index}
      />
      <h1 className="mt-8 font-serif text-display font-bold">{messages.comparison.title}</h1>
      <p className="mt-3 text-lead text-graphite">{messages.comparison.lead}</p>
      <label className="mt-8 grid max-w-search gap-1 text-caption">
        {messages.comparison.search}
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="min-h-11 rounded-input border border-rule-strong bg-paper px-3 text-body"
        />
      </label>
      {groupNames.map((group) => {
        const pairs = matching.filter((pair) => pair.group === group);
        if (pairs.length === 0) return null;
        return (
          <section key={group} className="mt-10 border-t border-rule pt-6">
            <h2 className="font-serif text-title font-bold">{group}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pairs.map((pair) => (
                <li key={pair.name}>
                  <Link
                    to={`/compare/${comparisonSlug(pair)}`}
                    className="group block h-full rounded-surface bg-field p-4 hover:bg-field-hover"
                  >
                    <h3 className="font-serif text-headword font-semibold underline-offset-4 group-hover:underline">
                      {pair.nameKo.replace(" / ", " · ")}
                    </h3>
                    <p className="mt-1 text-caption text-graphite">{pair.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      {matching.length === 0 && (
        <p role="status" className="mt-8 text-body">
          {messages.comparison.empty}
        </p>
      )}
    </div>
  );
}

function RelatedPatterns({ pair }: { readonly pair: RoadmapEntry }) {
  const messages = useMessages();
  const patterns = new Set(pair.name.split(" / ").map(findPatternByTerm));
  return (
    <ul className="mt-5 flex flex-wrap gap-4 text-body-sm">
      {Array.from(patterns, (pattern) =>
        pattern ? (
          <li key={pattern.slug}>
            <Link to={patternPath(pattern)} className={textLinkClassName}>
              {messages.comparison.pattern(pattern.nameKo)}
            </Link>
          </li>
        ) : null,
      )}
    </ul>
  );
}

function ComparisonDetail({ slug }: { readonly slug: string }) {
  const messages = useMessages();
  const pair = comparisons.find((entry) => comparisonSlug(entry) === slug);
  if (!pair) return <NotFoundView />;
  const demo = COMPARISON_GUIDES[slug];
  const title = pair.nameKo.replace(" / ", " · ");
  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>{`${pair.nameKo} · UI Pattern Atlas`}</title>
      <CatalogBreadcrumb
        parents={[{ label: messages.comparison.title, to: catalogCategoryHref("ui-comparison") }]}
        current={title}
      />
      <header className="mt-8">
        <p className="text-caption text-graphite">{pair.group}</p>
        <h1 className="mt-2 font-serif text-display font-bold">{title}</h1>
        <p className="mt-2 text-headword text-graphite">{pair.name}</p>
      </header>
      {demo ? (
        <section aria-labelledby="comparison-preview" className="mt-8">
          <h2 id="comparison-preview" className="sr-only">
            {messages.comparison.preview}
          </h2>
          <p className="mb-3 text-body text-graphite">{demo.scenario}</p>
          <PatternPreview key={slug} loadPreview={demo.loadPreview} />
        </section>
      ) : null}
      <section aria-labelledby="selection-guide" className="mt-10 border-t border-rule pt-6">
        <h2 id="selection-guide" className="font-serif text-title font-bold">
          {messages.comparison.criteria}
        </h2>
        <p className="mt-3 text-lead">{pair.description}</p>
        <RelatedPatterns pair={pair} />
      </section>
    </div>
  );
}
