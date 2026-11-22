import type { ReactNode } from "react";
import { Link } from "react-router";

import { findPatternBySlug, PATTERNS } from "@/entities/pattern/catalog";
import type { Pattern } from "@/entities/pattern/model/pattern";

import { CopyPageButton } from "@/features/copy-page/ui/CopyPageButton";
import { PatternPreview } from "@/widgets/pattern-detail/ui/PatternPreview";
import { SourceViewer } from "@/widgets/pattern-detail/ui/SourceViewer";
import { textLinkClassName } from "@/shared/ui/primitives/textLink";

const SECTIONS = [
  { id: "when-to-use", label: "When to use" },
  { id: "when-not-to-use", label: "When not to use" },
  { id: "alternatives", label: "Alternatives" },
  { id: "implementation", label: "Implementation" },
  { id: "accessibility", label: "Accessibility" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

function Section({ id, children }: { readonly id: SectionId; readonly children: ReactNode }) {
  const label = SECTIONS.find((section) => section.id === id)?.label;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-20 border-t border-rule pt-8"
    >
      <h2 id={`${id}-heading`} className="font-serif text-title font-bold">
        {label}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
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
  readonly tone: keyof typeof markers | "plain";
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-body">
          {tone === "plain" ? (
            <span aria-hidden="true" className="mt-3.5 h-px w-3 shrink-0 bg-ink" />
          ) : (
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className={`mt-1.5 size-4 shrink-0 ${markers[tone].className}`}
            >
              <path d={markers[tone].path} />
            </svg>
          )}
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
  if (!pattern) return <div />;
  const isNext = direction === "next";
  return (
    <Link
      to={`/patterns/${pattern.slug}`}
      className={`group block py-5 ${isNext ? "text-right" : ""}`}
    >
      <span className="text-caption text-graphite">{isNext ? "다음" : "이전"}</span>
      <span className="mt-1 block font-serif text-headword font-semibold underline-offset-4 group-hover:underline">
        {pattern.nameKo}
      </span>
    </Link>
  );
}

/** Full guidance page for a single pattern, laid out like a dictionary entry. */
export function PatternDetail({ pattern }: { readonly pattern: Pattern }) {
  const index = PATTERNS.indexOf(pattern);
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
          {pattern.aliases.length > 0 ? (
            <p className="mt-4 text-body-sm text-graphite">
              다른 이름: {pattern.aliases.join(", ")}
            </p>
          ) : null}
        </header>

        <div className="space-y-12">
          <Section id="when-to-use">
            <GuidanceList items={pattern.whenToUse} tone="do" />
          </Section>

          <Section id="when-not-to-use">
            <GuidanceList items={pattern.whenNotToUse} tone="dont" />
          </Section>

          <Section id="alternatives">
            <dl className="divide-y divide-rule border-y border-rule">
              {pattern.alternatives.map((alternative) => {
                const target = alternative.slug ? findPatternBySlug(alternative.slug) : undefined;
                return (
                  <div
                    key={alternative.name}
                    className="grid gap-1 py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <dt className="font-medium">
                      {target ? (
                        <Link to={`/patterns/${target.slug}`} className={textLinkClassName}>
                          {alternative.name}
                        </Link>
                      ) : (
                        <>
                          {alternative.name}{" "}
                          <span className="text-caption font-normal text-graphite">(준비 중)</span>
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
            <GuidanceList items={pattern.accessibility} tone="plain" />
          </Section>
        </div>

        <nav aria-label="다른 패턴" className="mt-12 grid grid-cols-2 border-t border-rule">
          <AdjacentLink pattern={PATTERNS[index - 1]} direction="previous" />
          <AdjacentLink pattern={PATTERNS[index + 1]} direction="next" />
        </nav>
      </article>

      <aside className="hidden lg:block">
        <nav aria-label="이 페이지의 섹션" className="sticky top-8">
          <ul className="space-y-2.5 border-l border-rule">
            {SECTIONS.filter(
              (section) => pattern.kind !== "concept" || section.id !== "implementation",
            ).map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="-ml-px block border-l border-transparent pl-4 text-caption text-graphite hover:border-ink hover:text-ink"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
