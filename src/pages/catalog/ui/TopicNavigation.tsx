import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";

import { useMessages } from "@/shared/i18n/messages";
import { goToSection } from "@/shared/lib/useCurrentSection";
import { navLinkClassName } from "@/shared/ui/primitives/textLink";

export interface TopicLink {
  readonly id: string;
  readonly name: string;
  readonly count: number;
}

export const topicSectionId = (id: string) => `topic-${id}`;
export const topicHeadingId = (id: string) => `category-${id}`;

const ROADMAP_OPTION = "__roadmap";

/**
 * Desktop topic index beside the catalog: every topic on the page with its count. The one the
 * reader is in carries a marker dot; a click scrolls to it. The full topic index closes the list.
 */
export function TopicIndex({
  topics,
  current,
}: {
  readonly topics: readonly TopicLink[];
  readonly current: string | null;
}) {
  const messages = useMessages();
  const listRef = useRef<HTMLUListElement>(null);
  // The list scrolls on its own when it is taller than the screen; keep the current topic in it.
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>("[aria-current]");
    if (!list || !item) return;
    const top = item.offsetTop - list.offsetTop;
    if (top < list.scrollTop || top + item.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = top - (list.clientHeight - item.offsetHeight) / 2;
    }
  }, [current]);
  return (
    <nav aria-label={messages.catalog.topicIndex} className="sticky top-6">
      <p className="flex items-baseline justify-between px-3 text-caption text-graphite">
        {messages.catalog.topicIndex}
        <span className="text-micro tabular-nums">
          {messages.catalog.topicTotal(topics.length)}
        </span>
      </p>
      <ul
        ref={listRef}
        className="relative mt-2 max-h-[calc(100dvh-10rem)] space-y-0.5 overflow-y-auto"
      >
        {topics.map((topic) => (
          <li key={topic.id}>
            <a
              href={`#${topicSectionId(topic.id)}`}
              aria-current={current === topic.id ? "location" : undefined}
              onClick={(event) => {
                event.preventDefault();
                goToSection(topicSectionId(topic.id), topicHeadingId(topic.id));
              }}
              className={`group/topic flex min-h-10 items-center gap-2 rounded-control px-3 text-body-sm hover:bg-field aria-[current=location]:bg-field aria-[current=location]:font-semibold aria-[current=location]:text-ink ${navLinkClassName}`}
            >
              <span
                aria-hidden="true"
                className="hidden size-1.5 shrink-0 rounded-full bg-marker group-aria-[current=location]/topic:block"
              />
              <span className="min-w-0 flex-1 truncate">{topic.name}</span>
              <span className="text-micro font-normal text-subtle tabular-nums">{topic.count}</span>
            </a>
          </li>
        ))}
      </ul>
      <Link
        to="/roadmap"
        className={`mt-3 flex min-h-10 items-center justify-between border-t border-rule px-3 pt-3 text-body-sm ${navLinkClassName}`}
      >
        {messages.nav.allTopics}
        <span aria-hidden="true">›</span>
      </Link>
    </nav>
  );
}

/**
 * Narrow-screen counterpart of the topic index, under the category tabs: the topic the reader
 * is in with its count, and a native select to jump to another topic or the full index.
 */
export function TopicPicker({
  topics,
  current,
}: {
  readonly topics: readonly TopicLink[];
  readonly current: string | null;
}) {
  const messages = useMessages();
  const navigate = useNavigate();
  const active = topics.find((topic) => topic.id === current) ?? topics[0];
  if (!active) return null;
  return (
    <div className="flex min-h-10 items-center justify-between gap-3 border-t border-rule px-1">
      <p aria-hidden="true" className="flex min-w-0 items-baseline gap-2">
        <span className="truncate text-body-sm font-semibold">{active.name}</span>
        <span className="text-micro text-graphite tabular-nums">
          {messages.catalog.topicCount(active.count, false)}
        </span>
      </p>
      <label className="relative inline-flex min-h-10 shrink-0 items-center gap-1 text-caption text-graphite has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ink">
        {messages.catalog.chooseTopic}
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-4">
          <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
        </svg>
        <select
          value={active.id}
          onChange={(event) => {
            const id = event.target.value;
            if (id === ROADMAP_OPTION) navigate("/roadmap");
            else goToSection(topicSectionId(id), topicHeadingId(id));
          }}
          className="absolute inset-0 cursor-pointer opacity-0 focus-visible:outline-none"
        >
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {`${topic.name} (${topic.count})`}
            </option>
          ))}
          <option value={ROADMAP_OPTION}>{messages.nav.allTopics}</option>
        </select>
      </label>
    </div>
  );
}
