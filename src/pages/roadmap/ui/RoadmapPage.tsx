import { useState } from "react";
import { Link, useSearchParams } from "react-router";

import {
  CATALOG_SECTIONS,
  catalogSectionFor,
  ROADMAP_TOPICS,
} from "@/entities/pattern/catalog/roadmap";
import {
  roadmapEntryDestination,
  roadmapEntryAnchor,
} from "@/entities/pattern/catalog/roadmapLinks";
import { roadmapMatcher } from "@/features/search-patterns/model/searchRoadmap";
import { CatalogBreadcrumb } from "@/entities/pattern/ui/CatalogBreadcrumb";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

const topicGroups = [...CATALOG_SECTIONS, { id: "other", label: "기타 주제" }].map((section) => ({
  ...section,
  topics: ROADMAP_TOPICS.filter(
    (topic) => (catalogSectionFor(topic)?.id ?? "other") === section.id,
  ),
}));

export function RoadmapPage() {
  const [params] = useSearchParams();
  return <TopicIndex key={params.get("q") ?? ""} initialQuery={params.get("q") ?? ""} />;
}

function TopicIndex({ initialQuery }: { readonly initialQuery: string }) {
  const [params, setParams] = useSearchParams();
  const selectedTopic = ROADMAP_TOPICS.find((topic) => topic.id === params.get("category"));
  const category = selectedTopic?.id ?? "";
  const [query, setQuery] = useState(initialQuery);
  const matches = roadmapMatcher(query);
  const sections = ROADMAP_TOPICS.filter((topic) => !category || topic.id === category)
    .map((topic) => ({
      ...topic,
      entries: topic.entries.filter((entry) =>
        matches(entry.nameKo, entry.name, entry.description, topic.nameKo),
      ),
    }))
    .filter((topic) => topic.entries.length > 0);

  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>전체 주제 · UI Pattern Atlas</title>
      <CatalogBreadcrumb
        parents={selectedTopic ? [{ label: "전체 주제", to: "/roadmap" }] : []}
        current={selectedTopic?.nameKo ?? "전체 주제"}
      />
      <h1 className="mt-8 font-serif text-display font-bold">전체 주제</h1>
      <p className="mt-3 text-lead text-graphite">
        카탈로그의 패턴과 구현 예정 항목을 주제별로 찾아보세요.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-caption">
          주제
          <select
            value={category}
            onChange={(event) =>
              setParams(event.target.value ? { category: event.target.value } : {}, {
                replace: true,
              })
            }
            className="min-h-11 w-full rounded-input border border-rule-strong bg-paper px-3 text-body"
          >
            <option value="">모든 주제</option>
            {topicGroups.map((section) => (
              <optgroup key={section.id} label={section.label}>
                {section.topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topic.nameKo}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-caption">
          로드맵 검색
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-h-11 rounded-input border border-rule-strong bg-paper px-3 text-body"
          />
        </label>
      </div>
      <p role="status" className="mt-4 text-caption text-graphite">
        {sections.reduce((count, topic) => count + topic.entries.length, 0)}개 항목
      </p>

      {sections.map((topic) => (
        <section
          key={topic.id}
          aria-labelledby={`roadmap-${topic.id}`}
          className="mt-10 border-t border-rule pt-6"
        >
          <h2 id={`roadmap-${topic.id}`} className="font-serif text-title font-bold">
            {topic.nameKo}
          </h2>
          <p className="mt-1 text-body-sm text-graphite">{topic.description}</p>
          <ul className="mt-4 divide-y divide-rule">
            {topic.entries.map((entry) => {
              const { href, status } = roadmapEntryDestination(topic, entry);
              return (
                <li
                  key={entry.name}
                  id={roadmapEntryAnchor(topic, entry)}
                  className="grid scroll-mt-6 gap-1 py-3 target:bg-field sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:gap-4"
                >
                  <div>
                    {href ? (
                      <Link to={href} className={textLinkClassName}>
                        {entry.nameKo}
                      </Link>
                    ) : (
                      <span className="font-medium">{entry.nameKo}</span>
                    )}
                    <span className="ml-2 text-caption text-graphite">{entry.name}</span>
                  </div>
                  <p className="text-body-sm text-graphite">{entry.description}</p>
                  <span className="text-caption text-graphite">
                    {href ? status : `${status} · ${entry.priority}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      {sections.length === 0 && <p className="mt-8 text-body">검색에 맞는 항목이 없어요.</p>}
    </div>
  );
}
