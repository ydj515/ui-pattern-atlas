import { useRef, useState } from "react";
import { Link, useLocation, useNavigationType, useSearchParams } from "react-router";

import { PATTERNS } from "@/entities/pattern/catalog";
import {
  ROADMAP_TOPICS,
  comparisonSlug,
  type RoadmapEntry,
  type RoadmapTopic,
} from "@/entities/pattern/catalog/roadmap";
import { patternForRoadmapEntry, roadmapEntryHref } from "@/entities/pattern/catalog/roadmapLinks";
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

function catalogReference(topic: RoadmapTopic, entry: RoadmapEntry): CatalogReference {
  if (topic.kind === "비교") {
    const hasDemo = entry.priority === "완료";
    return {
      entry,
      href: `/compare/${comparisonSlug(entry)}`,
      status: hasDemo ? "비교 가이드 · 데모" : "비교 가이드",
      hasDemo,
    };
  }
  return { entry, href: roadmapEntryHref(topic, entry), status: "준비 중", hasDemo: false };
}

const TOPICS = ROADMAP_TOPICS.map((topic) => ({
  ...topic,
  references: topic.entries
    .filter((entry) => !patternForRoadmapEntry(topic, entry))
    .map((entry) => catalogReference(topic, entry)),
}));

function matchesTopic(id: string, category: string) {
  if (category === "all") return true;
  if (category === "status") return id === "loading" || id === "empty-error";
  return id === category;
}

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
}: {
  readonly references: readonly CatalogReference[];
  readonly query: string;
}) {
  return (
    <ul aria-label="로드맵과 비교 항목" className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
      {references.map(({ entry, href, status }) => (
        <li key={href} className="border-t border-rule">
          <Link to={href} className="group block py-4">
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
  const requestedCategory = searchParams.get(CATEGORY_PARAM);
  const categoryId = requestedCategory === "input" ? "selection" : requestedCategory;
  const category =
    categoryId === "status"
      ? categoryId
      : (TOPICS.find((topic) => topic.id === categoryId)?.id ?? "all");
  const isBrowsing = text.trim() === "" && category === "all";
  const returnSearch = searchParams.toString() ? `?${searchParams.toString()}` : "";
  const patternMatches = searchPatterns(PATTERNS, { text, category: "all" });
  const matchesReference = roadmapMatcher(text);
  const groups = TOPICS.map((topic) => {
    const patterns = patternMatches.filter((pattern) => pattern.category === topic.id);
    const references = topic.references.filter(({ entry }) =>
      matchesReference(entry.nameKo, entry.name, entry.description, topic.nameKo, entry.group),
    );
    return { topic, patterns, references, count: patterns.length + references.length };
  });
  const options = [
    { id: "all", label: "전체", count: groups.reduce((total, group) => total + group.count, 0) },
    ...(category === "status"
      ? [
          {
            id: "status",
            label: "로딩과 빈 상태",
            count: groups.reduce(
              (total, group) => total + (matchesTopic(group.topic.id, "status") ? group.count : 0),
              0,
            ),
          },
        ]
      : []),
    ...groups.map(({ topic, count }) => ({ id: topic.id, label: topic.nameKo, count })),
  ];
  const results = patternMatches.filter((pattern) => matchesTopic(pattern.category, category));
  const related = groups
    .filter(({ topic }) => matchesTopic(topic.id, category))
    .flatMap(({ references }) => references);
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
      <section className="pt-16 pb-10 sm:pt-24 sm:pb-14">
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
        className="mb-4 hidden flex-wrap justify-center gap-x-5 gap-y-2 text-caption sm:flex"
      >
        <Link to="/roadmap" className={textLinkClassName}>
          전체 주제
        </Link>
        <Link to="/compare" className={textLinkClassName}>
          헷갈리는 UI
        </Link>
      </nav>

      <div className="sticky top-0 z-10 -mx-4 border-b border-rule bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <CategoryFilter
          value={category}
          onValueChange={(value) => updateParams({ category: value })}
          options={options}
        />
      </div>

      <p role="status" className="mt-4 text-caption text-graphite">
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
              className="border-b border-rule py-12 last:border-b-0"
            >
              <div className="mb-8 flex items-baseline justify-between gap-4">
                <div>
                  <h2 id={`category-${topic.id}`} className="font-serif text-title font-bold">
                    {topic.nameKo}
                  </h2>
                  <p className="mt-1.5 text-body-sm text-graphite">{topic.description}</p>
                </div>
                <span className="shrink-0 text-caption text-graphite tabular-nums">{count}개</span>
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
                {references.length > 0 ? <ReferenceList references={references} query="" /> : null}
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
          {related.length > 0 ? <ReferenceList references={related} query={text} /> : null}
        </section>
      )}
      <BackToTopButton headingRef={headingRef} />
    </div>
  );
}
