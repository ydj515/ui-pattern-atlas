import { useCallback, useRef, useState } from "react";
import { Link, useLocation, useNavigationType, useSearchParams } from "react-router";

import {
  CATALOG_TABS,
  resolveCatalogCategory,
  ROADMAP_TOPICS,
  catalogSectionFor,
  comparisonSlug,
  type RoadmapEntry,
  type RoadmapTopic,
} from "@/entities/pattern/catalog/roadmap";
import {
  localizedPatterns,
  roadmapEntryText,
  topicDescription,
  topicName,
} from "@/entities/pattern/i18n/catalogText";
import { PATTERNS } from "@/entities/pattern/catalog";
import { comparisonThumbnailLoader } from "@/entities/pattern/catalog/comparisons/comparisonThumbnailLoader";
import {
  roadmapEntryDestination,
  roadmapEntryHref,
  type RoadmapEntryStatus,
} from "@/entities/pattern/catalog/roadmapLinks";
import type { Pattern } from "@/entities/pattern/model/pattern";
import {
  catalogCardBodyClassName,
  catalogCardClassName,
  catalogCardHeadwordClassName,
  PatternCard,
} from "@/entities/pattern/ui/PatternCard";
import { ThumbnailFrame } from "@/entities/pattern/ui/ThumbnailFrame";
import { searchPatterns } from "@/features/search-patterns/model/searchPatterns";
import { roadmapMatcher } from "@/features/search-patterns/model/searchRoadmap";
import { CategoryFilter } from "@/features/search-patterns/ui/CategoryFilter";
import { SearchField } from "@/features/search-patterns/ui/SearchField";
import { useLocale } from "@/shared/i18n/locale";
import { useMessages } from "@/shared/i18n/messages";
import { useCurrentSection } from "@/shared/lib/useCurrentSection";
import { Highlight } from "@/shared/ui/Highlight";
import { Button } from "@/shared/ui/primitives/Button";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

import { BackToTopButton } from "@/shared/ui/BackToTopButton";

import {
  TopicIndex,
  TopicPicker,
  topicHeadingId,
  topicSectionId,
} from "@/pages/catalog/ui/TopicNavigation";

const QUERY_PARAM = "q";
const CATEGORY_PARAM = "category";

interface CatalogReference {
  readonly topic: RoadmapTopic;
  readonly entry: RoadmapEntry;
  readonly href: string;
  readonly status: RoadmapEntryStatus;
  readonly hasDemo: boolean;
}

const TOPICS = ROADMAP_TOPICS.map((topic) => ({
  ...topic,
  section: catalogSectionFor(topic),
  references: topic.entries.flatMap((entry) => {
    const { href, status, hasDemo } = roadmapEntryDestination(topic, entry);
    if (topic.kind !== "비교" && hasDemo) return [];
    return [{ topic, entry, href: href ?? roadmapEntryHref(topic, entry), status, hasDemo }];
  }),
}));

/** Entries under each category tab while browsing: demos plus roadmap and comparison entries. */
const TAB_COUNTS: Readonly<Record<string, number>> = Object.fromEntries(
  CATALOG_TABS.map(({ id }) => [
    id,
    TOPICS.filter((topic) => id === "all" || topic.section?.id === id).reduce(
      (sum, topic) =>
        sum +
        PATTERNS.filter((pattern) => pattern.category === topic.id).length +
        topic.references.length,
      0,
    ),
  ]),
);

const GRID_CLASS_NAME = "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3";

interface PatternGridProps {
  readonly label: string;
  readonly patterns: readonly Pattern[];
  readonly query: string;
  readonly returnSearch: string;
}

function PatternGrid({ label, patterns, query, returnSearch }: PatternGridProps) {
  return (
    <ul aria-label={label} className={GRID_CLASS_NAME}>
      {patterns.map((pattern) => (
        <li key={pattern.slug}>
          <PatternCard pattern={pattern} query={query} returnSearch={returnSearch} />
        </li>
      ))}
    </ul>
  );
}

function ReferenceList({
  references,
  query,
  returnSearch,
}: {
  readonly references: readonly CatalogReference[];
  readonly returnSearch: string;
  readonly query: string;
}) {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <ul
      aria-label={messages.catalog.references}
      className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {references.map(({ topic, entry, href, status }) => {
        const text = roadmapEntryText(topic, entry, locale);
        return (
          <li key={href} className="border-t border-rule">
            <Link to={href} state={{ returnSearch }} className="group block py-4">
              <h3 className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-serif text-headword font-semibold underline-offset-4 group-hover:underline">
                  <Highlight text={text.title} query={query} />
                </span>
                {text.secondaryName ? (
                  <>
                    {" "}
                    <span className="text-caption text-graphite">
                      <Highlight text={text.secondaryName} query={query} />
                    </span>
                  </>
                ) : null}
              </h3>
              <p className="mt-1 text-body-sm text-ink/80">
                <Highlight text={text.description} query={query} />
              </p>
              <p className="mt-1 text-micro text-graphite">{messages.entryStatus[status]}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Comparison guides as dictionary-style cards: a looping miniature of both sides, then the pair. */
function ComparisonGrid({
  references,
  returnSearch,
}: {
  readonly references: readonly CatalogReference[];
  readonly returnSearch: string;
}) {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <ul aria-label={messages.catalog.comparisonGuides} className={GRID_CLASS_NAME}>
      {references.map(({ topic, entry, href, status }) => {
        const loadThumbnail = comparisonThumbnailLoader(comparisonSlug(entry));
        const text = roadmapEntryText(topic, entry, locale);
        return (
          <li key={href}>
            <Link to={href} state={{ returnSearch }} className={catalogCardClassName}>
              <ThumbnailFrame load={loadThumbnail} />
              <div className={catalogCardBodyClassName}>
                <h3 className="flex flex-wrap items-baseline gap-x-2">
                  <span className={catalogCardHeadwordClassName}>{text.title}</span>
                  {text.secondaryName ? (
                    <>
                      {" "}
                      <span className="text-caption font-normal text-graphite">
                        {text.secondaryName}
                      </span>
                    </>
                  ) : null}
                </h3>
                <p className="mt-1 text-body-sm text-ink/80">{text.description}</p>
                <p className="mt-1 text-micro text-graphite">{messages.entryStatus[status]}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function CatalogPage() {
  const locale = useLocale();
  const messages = useMessages();
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigationType = useNavigationType();
  const urlText = searchParams.get(QUERY_PARAM) ?? "";

  // The router commits URL changes inside a React transition, so a value read back from the
  // URL lags one render behind the input. React then restores the stale value after each input
  // event, which breaks Korean IME composition. The input therefore owns `text`, and the URL
  // follows it. Our own writes are REPLACE navigations; any other navigation (link, back/forward)
  // is an outside change and resets the text from the URL.
  const [text, setText] = useState(urlText);
  const [syncedLocationKey, setSyncedLocationKey] = useState(location.key);
  if (location.key !== syncedLocationKey) {
    setSyncedLocationKey(location.key);
    if (navigationType !== "REPLACE") setText(urlText);
  }
  const {
    category,
    section: selectedSection,
    activeTab,
  } = resolveCatalogCategory(searchParams.get(CATEGORY_PARAM));
  const isBrowsing = !text.trim();
  const visibleTopics = TOPICS.filter((topic) => {
    if (selectedSection) return topic.section?.id === selectedSection.id;
    if (category === "status") return topic.id === "loading" || topic.id === "empty-error";
    return category === "all" || topic.id === category;
  });
  const returnSearch = searchParams.toString() ? `?${searchParams.toString()}` : "";
  const patternMatches = searchPatterns(localizedPatterns(locale), { text, category: "all" });
  const matchesReference = roadmapMatcher(text);
  const groups = visibleTopics.map((topic) => {
    const patterns = patternMatches.filter((pattern) => pattern.category === topic.id);
    const references = topic.references.filter(({ entry }) =>
      matchesReference(
        entry.nameKo,
        entry.name,
        entry.description,
        topic.nameKo,
        entry.group,
        roadmapEntryText(topic, entry, locale).description,
        topicName(topic, locale),
      ),
    );
    return { topic, patterns, references, count: patterns.length + references.length };
  });
  const visibleIds = new Set(visibleTopics.map((topic) => topic.id));
  const results = patternMatches.filter((pattern) => visibleIds.has(pattern.category));
  const related = groups.flatMap(({ references }) => references);
  const total = results.length + related.length;
  const demoCount = results.length + related.filter(({ hasDemo }) => hasDemo).length;

  function updateParams(next: { text?: string; category?: string }) {
    if (next.text !== undefined) setText(next.text);
    setSearchParams(
      (current) => {
        const params = new URLSearchParams(current);
        const nextText = next.text ?? text;
        const nextCategory = next.category ?? category;
        if (nextText) params.set(QUERY_PARAM, nextText);
        else params.delete(QUERY_PARAM);
        if (nextCategory === "all") params.delete(CATEGORY_PARAM);
        else params.set(CATEGORY_PARAM, nextCategory);
        return params;
      },
      { replace: true },
    );
  }

  const topicLinks = groups
    .filter(({ count }) => count > 0)
    .map(({ topic, count }) => ({ id: topic.id, name: topicName(topic, locale), count }));
  const navRef = useRef<HTMLElement>(null);
  // Sections count as reached once they pass under the sticky category bar.
  const readLine = useCallback(() => navRef.current?.getBoundingClientRect().bottom ?? 0, []);
  const currentTopic = useCurrentSection(
    isBrowsing ? topicLinks.map(({ id }) => topicSectionId(id)) : [],
    readLine,
  );
  const currentTopicId = currentTopic?.slice(topicSectionId("").length) ?? null;
  const showTopics = isBrowsing && total > 0;

  return (
    <div className="mx-auto max-w-page px-4 pb-24 sm:px-6">
      <title>{`UI Pattern Atlas · ${messages.site.name}`}</title>
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-9">
        {/* The search box is the page's first visible element; the title stays for screen
            readers and search engines. */}
        <h1 ref={headingRef} tabIndex={-1} className="sr-only">
          {messages.site.name}
        </h1>
        <div className="mx-auto max-w-search">
          <SearchField value={text} onValueChange={(value) => updateParams({ text: value })} />
          <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-caption text-graphite">
            <span>{messages.catalog.suggestionsLabel}</span>
            {messages.catalog.suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => updateParams({ text: suggestion })}
                className="inline-flex min-h-8 items-center rounded-full border border-rule bg-field px-3 text-ink hover:border-rule-strong hover:bg-field-hover"
              >
                {suggestion}
              </button>
            ))}
          </p>
          {messages.catalog.demoLanguageNote ? (
            <p className="mt-2 text-center text-caption text-graphite">
              {messages.catalog.demoLanguageNote}
            </p>
          ) : null}
        </div>
      </section>

      <div className={showTopics ? "lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-x-10" : ""}>
        {showTopics ? (
          <aside className="hidden lg:block">
            <TopicIndex topics={topicLinks} current={currentTopicId} />
          </aside>
        ) : null}

        <div className="min-w-0">
          <nav
            ref={navRef}
            aria-label={messages.nav.browse}
            className="sticky top-0 z-10 border-b border-rule bg-paper/95 py-2 backdrop-blur"
          >
            <div className="flex flex-wrap items-center justify-between gap-x-3">
              <CategoryFilter
                value={activeTab}
                counts={TAB_COUNTS}
                onValueChange={(value) => updateParams({ category: value })}
              />
              {showTopics ? null : (
                <Link
                  to="/roadmap"
                  className="group ml-auto inline-flex min-h-10 items-center gap-1 text-caption text-ink"
                >
                  <span className={`${textLinkClassName} group-hover:decoration-ink`}>
                    {messages.nav.allTopics}
                  </span>
                  <span aria-hidden="true">›</span>
                </Link>
              )}
            </div>
            {showTopics ? (
              <div className="mt-2 lg:hidden">
                <TopicPicker topics={topicLinks} current={currentTopicId} />
              </div>
            ) : null}
          </nav>

          <p
            role="status"
            className={
              isBrowsing && category === "all" ? "sr-only" : "mt-4 text-caption text-graphite"
            }
          >
            {messages.catalog.status(total, demoCount)}
          </p>

          {total === 0 ? (
            <div className="py-20">
              <p className="font-serif text-title font-semibold">
                {text ? messages.search.noMatch(text) : messages.catalog.emptyCategory}
              </p>
              <p className="mt-2 text-graphite">{messages.catalog.tryOtherWords}</p>
              <Button
                variant="primary"
                className="mt-6"
                onClick={() => updateParams({ text: "", category: "all" })}
              >
                {messages.catalog.showAll}
              </Button>
            </div>
          ) : isBrowsing ? (
            groups.map(({ topic, patterns, references, count }) => {
              if (count === 0) return null;
              return (
                <section
                  key={topic.id}
                  id={topicSectionId(topic.id)}
                  aria-labelledby={topicHeadingId(topic.id)}
                  className="scroll-mt-16 border-b border-rule py-8 last:border-b-0 max-lg:scroll-mt-28"
                >
                  <div className="mb-5 flex items-baseline justify-between gap-4">
                    <div>
                      <h2
                        id={topicHeadingId(topic.id)}
                        tabIndex={-1}
                        className="font-serif text-title font-bold"
                      >
                        {topicName(topic, locale)}
                      </h2>
                      <p className="mt-1.5 text-body-sm text-graphite">
                        {topicDescription(topic, locale)}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-3 text-caption text-graphite">
                      {topic.kind === "비교" && (
                        <Link to="/compare" className={textLinkClassName}>
                          {messages.catalog.comparisonIndex}
                        </Link>
                      )}
                      <span className="tabular-nums">
                        {messages.catalog.topicCount(count, topic.kind === "비교")}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-8">
                    {patterns.length > 0 ? (
                      <PatternGrid
                        label={messages.catalog.topicDemos(topicName(topic, locale))}
                        patterns={patterns}
                        query=""
                        returnSearch={returnSearch}
                      />
                    ) : null}
                    {references.length > 0 ? (
                      topic.kind === "비교" ? (
                        <ComparisonGrid references={references} returnSearch={returnSearch} />
                      ) : (
                        <ReferenceList
                          references={references}
                          query=""
                          returnSearch={returnSearch}
                        />
                      )
                    ) : null}
                  </div>
                </section>
              );
            })
          ) : (
            <section aria-labelledby="search-results" className="space-y-8 py-10">
              <h2 id="search-results" className="font-serif text-title font-bold">
                {messages.catalog.searchResults}
              </h2>
              {results.length > 0 ? (
                <PatternGrid
                  label={messages.catalog.patternDemos}
                  patterns={results}
                  query={text}
                  returnSearch={returnSearch}
                />
              ) : null}
              {related.length > 0 ? (
                <ReferenceList references={related} query={text} returnSearch={returnSearch} />
              ) : null}
            </section>
          )}
        </div>
      </div>
      <BackToTopButton headingRef={headingRef} />
    </div>
  );
}
