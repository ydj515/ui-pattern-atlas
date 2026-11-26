import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { Link, useLocation, type LinkProps } from "react-router";

import { findPatternBySlug, PATTERNS } from "@/entities/pattern/catalog";
import {
  patternPath,
  type GuideLoader,
  type Pattern,
  type PatternGuide,
} from "@/entities/pattern/model/pattern";

import { CopyPageButton } from "@/features/copy-page/ui/CopyPageButton";
import { PatternPreview } from "@/widgets/pattern-detail/ui/PatternPreview";
import { SourceViewer } from "@/widgets/pattern-detail/ui/SourceViewer";
import { Button } from "@/shared/ui/primitives/Button";
import { navLinkClassName, textLinkClassName } from "@/shared/ui/primitives/textLink";

const SECTIONS = [
  { id: "when-to-use", label: "When to use" },
  { id: "when-not-to-use", label: "When not to use" },
  { id: "alternatives", label: "Alternatives" },
  { id: "implementation", label: "Implementation" },
  { id: "accessibility", label: "Accessibility" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

function SectionLink({ id, ...props }: Omit<LinkProps, "to" | "id"> & { readonly id: SectionId }) {
  const { pathname, search } = useLocation();
  return <Link to={{ pathname, search, hash: `#${id}` }} {...props} />;
}

function Section({ id, children }: { readonly id: SectionId; readonly children: ReactNode }) {
  const label = SECTIONS.find((section) => section.id === id)?.label;
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-20">
      <h2 id={`${id}-heading`} className="font-serif text-title font-bold">
        <SectionLink id={id} className="group inline-flex items-baseline gap-2">
          {label}
          <span
            aria-hidden="true"
            className={`font-sans text-headword font-medium group-hover:text-ink ${navLinkClassName}`}
          >
            #
          </span>
        </SectionLink>
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function observeSectionPosition(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("resize", onChange);
  window.addEventListener("hashchange", onChange);
  // Lazy-loaded source files can move the sections below them without a scroll.
  const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(onChange) : null;
  observer?.observe(document.body);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("resize", onChange);
    window.removeEventListener("hashchange", onChange);
    observer?.disconnect();
  };
}

function getCurrentSection(hash: string) {
  const sections = SECTIONS.flatMap(({ id }) => {
    const element = document.getElementById(id);
    return element ? [element] : [];
  });
  const first = sections[0];
  if (!first) return null;

  // Match the browser's anchor landing position, allowing for scroll rounding.
  const anchorTop = (parseFloat(getComputedStyle(first).scrollMarginTop) || 0) + 1;
  const remainingScroll =
    document.documentElement.scrollHeight - window.innerHeight - window.scrollY;
  if (window.scrollY > 0 && remainingScroll <= anchorTop) {
    // Near the end, short sections can share a landing position. Fonts and
    // lazy content may also shift the page slightly after the browser jumps.
    const target = sections.find((section) => `#${section.id}` === hash);
    if (target && target.getBoundingClientRect().top >= anchorTop - 2) return target.id;
    if (remainingScroll <= 1) return sections.at(-1)?.id ?? null;
  }
  let current: string | null = null;
  let currentTop = -Infinity;
  for (const section of sections) {
    const top = section.getBoundingClientRect().top;
    if (top > anchorTop) break;
    // In a shared row, prefer the selected anchor or the first section in reading order.
    if (top > currentTop || `#${section.id}` === hash) {
      current = section.id;
      currentTop = top;
    }
  }
  return current;
}

function SectionNavigation({ concept }: { readonly concept: boolean }) {
  const { hash } = useLocation();
  const current = useSyncExternalStore(observeSectionPosition, () => getCurrentSection(hash));
  return (
    <aside className="hidden lg:block">
      <nav aria-label="이 페이지의 섹션" className="sticky top-8">
        <ul className="space-y-2.5 border-l border-rule">
          {SECTIONS.filter((section) => !concept || section.id !== "implementation").map(
            (section) => (
              <li key={section.id}>
                <SectionLink
                  id={section.id}
                  aria-current={current === section.id ? "location" : undefined}
                  className={`-ml-px block border-l border-transparent pl-4 text-caption hover:border-ink aria-[current=location]:border-ink aria-[current=location]:font-bold aria-[current=location]:text-ink ${navLinkClassName}`}
                >
                  {section.label}
                </SectionLink>
              </li>
            ),
          )}
        </ul>
      </nav>
    </aside>
  );
}

const markers = {
  do: {
    className: "text-positive",
    path: "M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0Z",
  },
  dont: {
    className: "text-negative",
    path: "M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4Z",
  },
} as const;

function GuidanceList({
  items,
  tone,
}: {
  readonly items: readonly string[];
  readonly tone: keyof typeof markers;
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-body">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className={`mt-1.5 size-4 shrink-0 ${markers[tone].className}`}
          >
            <path d={markers[tone].path} />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

function AdjacentLink({
  pattern,
  direction,
}: {
  readonly pattern: Pattern | undefined;
  readonly direction: "previous" | "next";
}) {
  if (!pattern) return null;
  const isNext = direction === "next";
  return (
    <Link
      to={patternPath(pattern)}
      rel={isNext ? "next" : "prev"}
      aria-label={`${isNext ? "다음" : "이전"} 패턴: ${pattern.nameKo}`}
      className={`group inline-flex min-h-11 items-center gap-2 text-caption font-semibold text-ink ${isNext ? "col-start-2 flex-row-reverse justify-self-end text-right" : "justify-self-start"}`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className={`size-4 shrink-0 text-graphite group-hover:text-ink ${isNext ? "" : "rotate-180"}`}
      >
        <path d="M7.8 4.8a1 1 0 0 1 1.4 0l4.5 4.5a1 1 0 0 1 0 1.4l-4.5 4.5a1 1 0 0 1-1.4-1.4l3.8-3.8-3.8-3.8a1 1 0 0 1 0-1.4Z" />
      </svg>
      <span className="underline-offset-4 group-hover:underline">{pattern.nameKo}</span>
    </Link>
  );
}

function EntryLine({ term, children }: { readonly term: string; readonly children: ReactNode }) {
  return (
    <div className="grid gap-1 py-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-6">
      <dt className="text-caption text-graphite sm:pt-0.5">{term}</dt>
      <dd className="text-ink/80">{children}</dd>
    </div>
  );
}

const guides = new Map<GuideLoader, PatternGuide>();

type GuideState =
  | { readonly status: "ready"; readonly guide: PatternGuide }
  | { readonly status: "loading" | "failed"; readonly guide?: never };

/** Loads an entry's guidance once per page; pages seen before render it right away. */
function usePatternGuide(load: GuideLoader): GuideState & { readonly retry: () => void } {
  const [attempt, setAttempt] = useState(0);
  const [state, setState] = useState<GuideState & { readonly load: GuideLoader }>(() => {
    const guide = guides.get(load);
    return guide ? { load, status: "ready", guide } : { load, status: "loading" };
  });

  useEffect(() => {
    if (guides.has(load)) return;
    let active = true;
    load().then(
      (guide) => {
        guides.set(load, guide);
        if (active) setState({ load, status: "ready", guide });
      },
      () => {
        if (active) setState({ load, status: "failed" });
      },
    );
    return () => {
      active = false;
    };
  }, [load, attempt]);

  const cached = guides.get(load);
  const current: GuideState =
    state.load === load
      ? state
      : cached
        ? { status: "ready", guide: cached }
        : { status: "loading" };
  return {
    ...current,
    retry: () => {
      setState({ load, status: "loading" });
      setAttempt((count) => count + 1);
    },
  };
}

/** Full guidance page for a single pattern, laid out like a dictionary entry. */
export function PatternDetail({ pattern }: { readonly pattern: Pattern }) {
  const index = PATTERNS.indexOf(pattern);
  const { hash } = useLocation();
  const { status, guide, retry } = usePatternGuide(pattern.loadGuide);
  // The sections arrive after the first render on a fresh visit, so a link to one of them
  // (e.g. #accessibility) lands only once they exist.
  const arrivedLate = useRef(status !== "ready");
  useEffect(() => {
    if (status !== "ready" || !arrivedLate.current) return;
    arrivedLate.current = false;
    if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
  }, [status, hash]);
  return (
    <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-[minmax(0,1fr)_11rem]">
      <article className="min-w-0">
        <header className="pb-10">
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
            <h1 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-serif text-display font-bold">{pattern.nameKo}</span>{" "}
              <span className="text-headword text-graphite">{pattern.name}</span>
            </h1>
            <CopyPageButton pattern={pattern} />
          </div>
          <p className="mt-6 text-lead">{pattern.description}</p>
          {/* The live demo sits with the definition, so it needs no heading of its own. */}
          <section aria-label="미리보기" className="mt-8">
            <PatternPreview loadPreview={pattern.loadPreview} />
          </section>
          {/* Like the synonym and etymology lines under a dictionary headword: ruled, not boxed,
              so it never reads as another surface next to the preview. */}
          {pattern.aliases.length > 0 || guide?.origin ? (
            <dl className="mt-6 divide-y divide-rule border-y border-rule text-body-sm">
              {pattern.aliases.length > 0 ? (
                <EntryLine term="다른 이름">{pattern.aliases.join(", ")}</EntryLine>
              ) : null}
              {guide?.origin ? <EntryLine term="이름의 유래">{guide.origin}</EntryLine> : null}
            </dl>
          ) : null}
        </header>

        {guide ? (
          <div className="space-y-12">
            <div className="grid gap-y-12 lg:grid-cols-2 lg:gap-x-8">
              <Section id="when-to-use">
                <GuidanceList items={guide.whenToUse} tone="do" />
              </Section>
              <Section id="when-not-to-use">
                <GuidanceList items={guide.whenNotToUse} tone="dont" />
              </Section>
            </div>

            <Section id="alternatives">
              <dl className="divide-y divide-rule border-y border-rule">
                {guide.alternatives.map((alternative) => {
                  const target = alternative.slug ? findPatternBySlug(alternative.slug) : undefined;
                  return (
                    <div
                      key={alternative.name}
                      className="grid gap-1 py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
                    >
                      <dt className="font-medium">
                        {target ? (
                          <Link to={patternPath(target)} className={textLinkClassName}>
                            {alternative.name}
                          </Link>
                        ) : (
                          <>
                            {alternative.name}{" "}
                            <span className="text-caption font-normal text-graphite">
                              (준비 중)
                            </span>
                          </>
                        )}
                      </dt>
                      <dd className="text-graphite">{alternative.reason}</dd>
                    </div>
                  );
                })}
              </dl>
            </Section>

            {pattern.kind !== "concept" ? (
              <Section id="implementation">
                <p className="mb-5 text-body text-graphite">
                  React 19, TypeScript, Tailwind CSS v4 기준이며 UI 라이브러리 없이 동작합니다.
                  컴포넌트 파일 하나만 복사해도 됩니다.
                </p>
                <SourceViewer sources={pattern.sources} />
              </Section>
            ) : null}

            <Section id="accessibility">
              <ul className="list-disc space-y-3 pl-5 text-body">
                {guide.accessibility.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>
          </div>
        ) : status === "failed" ? (
          <div role="alert" className="flex flex-wrap items-center gap-3 text-body text-graphite">
            설명을 불러오지 못했어요.
            <Button onClick={retry}>다시 시도</Button>
          </div>
        ) : (
          <div aria-busy="true" aria-label="설명을 불러오는 중" />
        )}

        <nav aria-label="다른 패턴" className="mt-12 grid grid-cols-2 gap-x-4">
          <AdjacentLink pattern={PATTERNS[index - 1]} direction="previous" />
          <AdjacentLink pattern={PATTERNS[index + 1]} direction="next" />
        </nav>
      </article>

      <SectionNavigation concept={pattern.kind === "concept"} />
    </div>
  );
}
