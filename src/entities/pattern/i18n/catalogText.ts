import type { Locale } from "@/shared/i18n/locale";

import { PATTERNS } from "@/entities/pattern/catalog";
import type { RoadmapEntry, RoadmapTopic } from "@/entities/pattern/catalog/roadmap";
import { patternForRoadmapEntry } from "@/entities/pattern/catalog/roadmapLinks";
import { getCategory, type PatternCategoryId } from "@/entities/pattern/model/category";
import type { GuideLoader, Pattern } from "@/entities/pattern/model/pattern";

/** What cards and search show for a pattern, in one language. */
export interface PatternText {
  readonly summary: string;
  readonly description: string;
  readonly aliases: readonly string[];
}

export interface TopicText {
  readonly name: string;
  readonly description: string;
}

/**
 * Catalog text in a language other than Korean. Korean stays in the pattern entries; other
 * languages load as one chunk before their pages render, so Korean pages never download it.
 */
export interface CatalogText {
  readonly patterns: Readonly<Record<string, PatternText>>;
  readonly topics: Readonly<Record<string, TopicText>>;
  readonly comparisons: {
    /** Comparison group names, keyed by the Korean group name. */
    readonly groups: Readonly<Record<string, string>>;
    /** Comparison pair descriptions, keyed by the pair's English name. */
    readonly descriptions: Readonly<Record<string, string>>;
    /** What each comparison demo asks the reader to try, keyed by comparison slug. */
    readonly scenarios: Readonly<Record<string, string>>;
  };
  /** Detail guidance loaders, keyed by pattern slug; each guide is its own chunk. */
  readonly guides: Readonly<Record<string, GuideLoader>>;
}

let english: CatalogText | undefined;

/**
 * Loads a pattern's English guidance, or undefined when it has none or the English catalog
 * text has not loaded. The list of guide files ships with the English text, not the main
 * bundle.
 */
export function englishGuideLoader(slug: string): GuideLoader | undefined {
  return english?.guides[slug];
}

/** Loads a language's catalog text. English pages await this before their first render. */
export async function loadCatalogText(locale: Locale): Promise<void> {
  if (locale !== "en" || english) return;
  english = (await import("@/entities/pattern/i18n/en")).CATALOG_TEXT_EN;
}

function catalogText(locale: Locale): CatalogText | undefined {
  return locale === "en" ? english : undefined;
}

const localizedCopies = new Map<Pattern, Pattern>();

/**
 * The pattern with its summary, description, aliases and detail guidance in the page
 * language. Every other field and loader is shared with the Korean entry. Falls back to
 * Korean when the text has not loaded.
 */
export function localizePattern(pattern: Pattern, locale: Locale): Pattern {
  const text = catalogText(locale)?.patterns[pattern.slug];
  if (!text) return pattern;
  let copy = localizedCopies.get(pattern);
  if (!copy) {
    copy = {
      ...pattern,
      summary: text.summary,
      description: text.description,
      aliases: text.aliases,
      loadGuide: englishGuideLoader(pattern.slug) ?? pattern.loadGuide,
    };
    localizedCopies.set(pattern, copy);
  }
  return copy;
}

const localizedLists = new Map<Locale, readonly Pattern[]>();

export function localizedPatterns(locale: Locale): readonly Pattern[] {
  if (!catalogText(locale)) return PATTERNS;
  let list = localizedLists.get(locale);
  if (!list) {
    list = PATTERNS.map((pattern) => localizePattern(pattern, locale));
    localizedLists.set(locale, list);
  }
  return list;
}

export function topicName(topic: Pick<RoadmapTopic, "id" | "nameKo">, locale: Locale): string {
  return catalogText(locale)?.topics[topic.id]?.name ?? topic.nameKo;
}

export function topicDescription(
  topic: Pick<RoadmapTopic, "id" | "description">,
  locale: Locale,
): string {
  return catalogText(locale)?.topics[topic.id]?.description ?? topic.description;
}

/** A pattern category's name, as its topic is called in the page language. */
export function categoryName(category: PatternCategoryId, locale: Locale): string {
  return catalogText(locale)?.topics[category]?.name ?? getCategory(category).labelKo;
}

export function comparisonGroupName(group: string, locale: Locale): string {
  return catalogText(locale)?.comparisons.groups[group] ?? group;
}

/** What a comparison demo asks the reader to try, in the page language. */
export function comparisonScenario(slug: string, scenario: string, locale: Locale): string {
  return catalogText(locale)?.comparisons.scenarios[slug] ?? scenario;
}

/** A comparison pair's title, "A · B", in the page language. */
export function comparisonTitle(pair: RoadmapEntry, locale: Locale): string {
  return (locale === "en" ? pair.name : pair.nameKo).replace(" / ", " · ");
}

/**
 * How a roadmap entry reads in the page language: its title, the second name shown beside it
 * (Korean pages only), and a one-line description.
 */
export function roadmapEntryText(
  topic: RoadmapTopic,
  entry: RoadmapEntry,
  locale: Locale,
): { title: string; secondaryName: string | null; description: string } {
  const text = catalogText(locale);
  if (!text)
    return { title: entry.nameKo, secondaryName: entry.name, description: entry.description };
  const pattern = topic.kind === "비교" ? undefined : patternForRoadmapEntry(topic, entry);
  const description =
    text.comparisons.descriptions[entry.name] ??
    (pattern ? text.patterns[pattern.slug]?.summary : undefined) ??
    entry.description;
  return { title: entry.name, secondaryName: null, description };
}
