import { getCategory, type PatternCategoryId } from "@/entities/pattern/model/category";
import type { Pattern } from "@/entities/pattern/model/pattern";

export type CategoryFilter = PatternCategoryId | "all" | "status";

export function matchesCategory(pattern: Pattern, category: CategoryFilter): boolean {
  if (category === "all") return true;
  if (category === "status")
    return pattern.category === "loading" || pattern.category === "empty-error";
  return pattern.category === category;
}

export interface PatternQuery {
  readonly text: string;
  readonly category: CategoryFilter;
}

const SCORE = {
  exactName: 100,
  namePrefix: 80,
  exactAlias: 70,
  nameContains: 60,
  aliasContains: 50,
  summary: 25,
  description: 15,
  meta: 10,
} as const;

/**
 * Lowercases and strips whitespace, hyphens and underscores so that
 * "바텀 시트", "바텀시트" and "Bottom-Sheet" compare equal.
 */
export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFC")
    .toLowerCase()
    .replace(/[\s\-_]+/g, "");
}

function scoreToken(pattern: Pattern, token: string): number {
  const names = [pattern.name, pattern.nameKo].map(normalizeSearchText);
  if (names.includes(token)) return SCORE.exactName;
  if (names.some((name) => name.startsWith(token))) return SCORE.namePrefix;

  const aliases = pattern.aliases.map(normalizeSearchText);
  if (aliases.includes(token)) return SCORE.exactAlias;
  if (names.some((name) => name.includes(token))) return SCORE.nameContains;
  if (aliases.some((alias) => alias.includes(token))) return SCORE.aliasContains;

  if (normalizeSearchText(pattern.summary).includes(token)) return SCORE.summary;
  if (normalizeSearchText(pattern.description).includes(token)) return SCORE.description;

  const category = getCategory(pattern.category);
  const meta = [category.label, category.labelKo, ...pattern.tags].map(normalizeSearchText);
  if (meta.some((value) => value.includes(token))) return SCORE.meta;

  return 0;
}

/**
 * Filters patterns by category and free text.
 *
 * Every whitespace-separated token must match some field (AND search).
 * Results are ranked by how strongly they match; ties keep catalog order.
 */
export function searchPatterns(patterns: readonly Pattern[], query: PatternQuery): Pattern[] {
  const inCategory = patterns.filter((pattern) => matchesCategory(pattern, query.category));

  const tokens = query.text.split(/\s+/).map(normalizeSearchText).filter(Boolean);
  if (tokens.length === 0) return inCategory;

  // A query typed with spaces ("modal dialog") should also match as one phrase.
  const phrase = tokens.join("");

  return inCategory
    .map((pattern) => {
      const tokenScores = tokens.map((token) => scoreToken(pattern, token));
      const matchesAll = tokenScores.every((score) => score > 0);
      const phraseScore = tokens.length > 1 ? scoreToken(pattern, phrase) : 0;
      const score = matchesAll ? tokenScores.reduce((sum, value) => sum + value, 0) : phraseScore;
      return { pattern, score: Math.max(score, phraseScore) };
    })
    .filter(({ score }) => score > 0)
    .toSorted((left, right) => right.score - left.score)
    .map(({ pattern }) => pattern);
}
