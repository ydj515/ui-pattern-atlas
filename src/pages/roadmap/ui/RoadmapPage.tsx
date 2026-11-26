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
import { roadmapEntryText, topicDescription, topicName } from "@/entities/pattern/i18n/catalogText";
import { roadmapMatcher } from "@/features/search-patterns/model/searchRoadmap";
import { CatalogBreadcrumb } from "@/entities/pattern/ui/CatalogBreadcrumb";
import { useLocale } from "@/shared/i18n/locale";
import { useMessages } from "@/shared/i18n/messages";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

const topicGroups = [...CATALOG_SECTIONS, { id: "other" as const }].map((section) => ({
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
  const locale = useLocale();
  const messages = useMessages();
  const [params, setParams] = useSearchParams();
  const selectedTopic = ROADMAP_TOPICS.find((topic) => topic.id === params.get("category"));
  const category = selectedTopic?.id ?? "";
  const [query, setQuery] = useState(initialQuery);
  const matches = roadmapMatcher(query);
  const sections = ROADMAP_TOPICS.filter((topic) => !category || topic.id === category)
    .map((topic) => ({
      ...topic,
      entries: topic.entries.filter((entry) =>
        matches(
          entry.nameKo,
          entry.name,
          entry.description,
          topic.nameKo,
          roadmapEntryText(topic, entry, locale).description,
          topicName(topic, locale),
        ),
      ),
    }))
    .filter((topic) => topic.entries.length > 0);

  return (
    <div className="mx-auto max-w-page px-4 pt-8 pb-24 sm:px-6">
      <title>{`${messages.roadmap.title} · UI Pattern Atlas`}</title>
      <CatalogBreadcrumb
        parents={selectedTopic ? [{ label: messages.roadmap.title, to: "/roadmap" }] : []}
        current={selectedTopic ? topicName(selectedTopic, locale) : messages.roadmap.title}
      />
      <h1 className="mt-8 font-serif text-display font-bold">{messages.roadmap.title}</h1>
      <p className="mt-3 text-lead text-graphite">{messages.roadmap.lead}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-caption">
          {messages.roadmap.topic}
          <select
            value={category}
            onChange={(event) =>
              setParams(event.target.value ? { category: event.target.value } : {}, {
                replace: true,
              })
            }
            className="min-h-11 w-full rounded-input border border-rule-strong bg-paper px-3 text-body"
          >
            <option value="">{messages.roadmap.allTopics}</option>
            {topicGroups.map((section) => (
              <optgroup key={section.id} label={messages.sections[section.id]}>
                {section.topics.map((topic) => (
                  <option key={topic.id} value={topic.id}>
                    {topicName(topic, locale)}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-caption">
          {messages.roadmap.search}
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="min-h-11 rounded-input border border-rule-strong bg-paper px-3 text-body"
          />
        </label>
      </div>
      <p role="status" className="mt-4 text-caption text-graphite">
        {messages.roadmap.status(
          sections.reduce((count, topic) => count + topic.entries.length, 0),
        )}
      </p>

      {sections.map((topic) => (
        <section
          key={topic.id}
          aria-labelledby={`roadmap-${topic.id}`}
          className="mt-10 border-t border-rule pt-6"
        >
          <h2 id={`roadmap-${topic.id}`} className="font-serif text-title font-bold">
            {topicName(topic, locale)}
          </h2>
          <p className="mt-1 text-body-sm text-graphite">{topicDescription(topic, locale)}</p>
          <ul className="mt-4 divide-y divide-rule">
            {topic.entries.map((entry) => {
              const { href, status } = roadmapEntryDestination(topic, entry);
              const text = roadmapEntryText(topic, entry, locale);
              return (
                <li
                  key={entry.name}
                  id={roadmapEntryAnchor(topic, entry)}
                  className="grid scroll-mt-6 gap-1 py-3 target:bg-field sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] sm:gap-4"
                >
                  <div>
                    {href ? (
                      <Link to={href} className={textLinkClassName}>
                        {text.title}
                      </Link>
                    ) : (
                      <span className="font-medium">{text.title}</span>
                    )}
                    {text.secondaryName ? (
                      <span className="ml-2 text-caption text-graphite">{text.secondaryName}</span>
                    ) : null}
                  </div>
                  <p className="text-body-sm text-graphite">{text.description}</p>
                  <span className="text-caption text-graphite">
                    {href
                      ? messages.entryStatus[status]
                      : `${messages.entryStatus[status]} · ${entry.priority}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      {sections.length === 0 && <p className="mt-8 text-body">{messages.roadmap.empty}</p>}
    </div>
  );
}
