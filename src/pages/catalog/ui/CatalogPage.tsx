import { useRef, useState } from "react";
import { Link, useLocation, useNavigationType, useSearchParams } from "react-router";

import { PATTERNS } from "@/entities/pattern/catalog";
import {
  resolveCatalogCategory,
  ROADMAP_TOPICS,
  catalogSectionFor,
  comparisonSlug,
  type RoadmapEntry,
} from "@/entities/pattern/catalog/roadmap";
import { COMPARISON_THUMBNAILS } from "@/entities/pattern/catalog/comparisons/ComparisonThumbnails";
import { roadmapEntryDestination, roadmapEntryHref } from "@/entities/pattern/catalog/roadmapLinks";
import type { Pattern } from "@/entities/pattern/model/pattern";
import { PatternCard } from "@/entities/pattern/ui/PatternCard";
import { searchPatterns } from "@/features/search-patterns/model/searchPatterns";
import { roadmapMatcher } from "@/features/search-patterns/model/searchRoadmap";
import { CategoryFilter } from "@/features/search-patterns/ui/CategoryFilter";
import { SearchField } from "@/features/search-patterns/ui/SearchField";
import { Highlight } from "@/shared/ui/Highlight";
import { Button } from "@/shared/ui/primitives/Button";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

import { BackToTopButton } from "@/pages/catalog/ui/BackToTopButton";

const QUERY_PARAM = "q";
const CATEGORY_PARAM = "category";
const SUGGESTED_QUERIES = ["확인 창", "알림", "로딩", "토글"] as const;

interface CatalogReference {
  readonly entry: RoadmapEntry;
  readonly href: string;
  readonly status: string;
  readonly hasDemo: boolean;
}

const TOPICS = ROADMAP_TOPICS.map((topic) => ({
  ...topic,
  section: catalogSectionFor(topic),
  references: topic.entries.flatMap((entry) => {
    const { href, status, hasDemo } = roadmapEntryDestination(topic, entry);
    if (topic.kind !== "비교" && hasDemo) return [];
    return [{ entry, href: href ?? roadmapEntryHref(topic, entry), status, hasDemo }];
  }),
}));

interface PatternGridProps {
  readonly label: string;
  readonly patterns: readonly Pattern[];
  readonly query: string;
  readonly returnSearch: string;
}

function PatternGrid({ label, patterns, query, returnSearch }: PatternGridProps) {
  return (
    <ul
      aria-label={label}
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
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
  return (
    <ul aria-label="로드맵과 비교 항목" className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
      {references.map(({ entry, href, status }) => (
        <li key={href} className="border-t border-rule">
          <Link to={href} state={{ returnSearch }} className="group block py-4">
            <h3 className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-serif text-headword font-semibold underline-offset-4 group-hover:underline">
                <Highlight text={entry.nameKo} query={query} />
              </span>{" "}
              <span className="text-caption text-graphite">
                <Highlight text={entry.name} query={query} />
              </span>
            </h3>
            <p className="mt-1 text-body-sm text-ink/80">
              <Highlight text={entry.description} query={query} />
            </p>
            <p className="mt-1 text-micro text-graphite">{status}</p>
          </Link>
        </li>
      ))}
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
  return (
    <ul
      aria-label="비교 가이드"
      className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {references.map(({ entry, href, status }) => {
        const Thumbnail = COMPARISON_THUMBNAILS[comparisonSlug(entry)];
        return (
          <li key={href}>
            <Link to={href} state={{ returnSearch }} className="group block">
              <div
                aria-hidden="true"
                className="grid aspect-[3/2] place-items-center rounded-surface bg-field transition-colors group-hover:bg-field-hover motion-reduce:transition-none"
              >
                {Thumbnail ? <Thumbnail /> : null}
              </div>
              <h3 className="mt-3.5">
                <span className="font-serif text-headword font-semibold decoration-1 underline-offset-4 group-hover:underline">
                  {entry.nameKo}
                </span>{" "}
                <span className="mt-0.5 block text-caption font-normal text-graphite">
                  {entry.name}
                </span>
              </h3>
              <p className="mt-1 text-body-sm text-ink/80">{entry.description}</p>
              <p className="mt-1 text-micro text-graphite">{status}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function CatalogPage() {
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
  const patternMatches = searchPatterns(PATTERNS, { text, category: "all" });
  const matchesReference = roadmapMatcher(text);
  const groups = visibleTopics.map((topic) => {
    const patterns = patternMatches.filter((pattern) => pattern.category === topic.id);
    const references = topic.references.filter(({ entry }) =>
      matchesReference(entry.nameKo, entry.name, entry.description, topic.nameKo, entry.group),
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

  return (
    <div className="mx-auto max-w-page px-4 pb-24 sm:px-6">
      <section className="pt-8 pb-6 sm:pt-12 sm:pb-9">
        {/* The search box is the page's first visible element; the title stays for screen
            readers and search engines. */}
        <h1 ref={headingRef} tabIndex={-1} className="sr-only">
          UI 패턴 사전
        </h1>
        <div className="mx-auto max-w-search">
          <SearchField value={text} onValueChange={(value) => updateParams({ text: value })} />
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-caption text-graphite">
            <span>예:</span>
            {SUGGESTED_QUERIES.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => updateParams({ text: suggestion })}
                className={textLinkClassName}
              >
                {suggestion}
              </button>
            ))}
          </p>
        </div>
      </section>

      <nav
        aria-label="둘러보기"
        className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-x-3 border-b border-rule bg-paper/95 py-2 backdrop-blur"
      >
        <CategoryFilter
          value={activeTab}
          onValueChange={(value) => updateParams({ category: value })}
        />
        <Link
          to="/roadmap"
          className="group ml-auto inline-flex min-h-10 items-center gap-1 text-caption text-ink"
        >
          <span className={`${textLinkClassName} group-hover:decoration-ink`}>전체 주제 보기</span>
          <span aria-hidden="true">›</span>
        </Link>
      </nav>

      <p
        role="status"
        className={isBrowsing && category === "all" ? "sr-only" : "mt-4 text-caption text-graphite"}
      >
        {total}개 항목 · 데모 {demoCount}개
      </p>

      {total === 0 ? (
        <div className="py-20">
          <p className="font-serif text-title font-semibold">
            {text ? `'${text}'에 맞는 패턴이 없어요` : "이 카테고리에는 아직 패턴이 없어요"}
          </p>
          <p className="mt-2 text-graphite">다른 이름이나 생김새로 찾아보세요.</p>
          <Button
            variant="primary"
            className="mt-6"
            onClick={() => updateParams({ text: "", category: "all" })}
          >
            전체 패턴 보기
          </Button>
        </div>
      ) : isBrowsing ? (
        groups.map(({ topic, patterns, references, count }) => {
          if (count === 0) return null;
          return (
            <section
              key={topic.id}
              aria-labelledby={`category-${topic.id}`}
              className="border-b border-rule py-8 last:border-b-0"
            >
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <div>
                  <h2 id={`category-${topic.id}`} className="font-serif text-title font-bold">
                    {topic.nameKo}
                  </h2>
                  <p className="mt-1.5 text-body-sm text-graphite">{topic.description}</p>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-3 text-caption text-graphite">
                  {topic.kind === "비교" && (
                    <Link to="/compare" className={textLinkClassName}>
                      비교 가이드 목차
                    </Link>
                  )}
                  <span className="tabular-nums">{count}개</span>
                </div>
              </div>
              <div className="space-y-8">
                {patterns.length > 0 ? (
                  <PatternGrid
                    label={`${topic.nameKo} 데모`}
                    patterns={patterns}
                    query=""
                    returnSearch={returnSearch}
                  />
                ) : null}
                {references.length > 0 ? (
                  topic.kind === "비교" ? (
                    <ComparisonGrid references={references} returnSearch={returnSearch} />
                  ) : (
                    <ReferenceList references={references} query="" returnSearch={returnSearch} />
                  )
                ) : null}
              </div>
            </section>
          );
        })
      ) : (
        <section aria-labelledby="search-results" className="space-y-8 py-10">
          <h2 id="search-results" className="font-serif text-title font-bold">
            검색 결과
          </h2>
          {results.length > 0 ? (
            <PatternGrid
              label="패턴 데모"
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
      <BackToTopButton headingRef={headingRef} />
    </div>
  );
}
