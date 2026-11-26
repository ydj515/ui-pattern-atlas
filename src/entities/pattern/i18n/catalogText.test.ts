import { beforeAll, describe, expect, it } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";
import {
  COMPARISON_TOPIC,
  comparisonSlug,
  ROADMAP_TOPICS,
} from "@/entities/pattern/catalog/roadmap";
import {
  categoryName,
  comparisonGroupName,
  comparisonScenario,
  comparisonTitle,
  englishGuideLoader,
  loadCatalogText,
  localizePattern,
  localizedPatterns,
  roadmapEntryText,
  topicName,
} from "@/entities/pattern/i18n/catalogText";
import { CATALOG_TEXT_EN } from "@/entities/pattern/i18n/en";

const HANGUL = /[가-힣]/;

function strings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === "object") return Object.values(value).flatMap(strings);
  return [];
}

describe("English catalog text", () => {
  it("covers every pattern, topic and comparison, and nothing else", () => {
    expect(Object.keys(CATALOG_TEXT_EN.patterns).toSorted()).toEqual(
      PATTERNS.map((pattern) => pattern.slug).toSorted(),
    );
    expect(Object.keys(CATALOG_TEXT_EN.topics).toSorted()).toEqual(
      ROADMAP_TOPICS.map((topic) => topic.id).toSorted(),
    );
    const pairs = COMPARISON_TOPIC?.entries ?? [];
    expect(Object.keys(CATALOG_TEXT_EN.comparisons.descriptions).toSorted()).toEqual(
      pairs.map((pair) => pair.name).toSorted(),
    );
    expect(Object.keys(CATALOG_TEXT_EN.comparisons.groups).toSorted()).toEqual(
      [...new Set(pairs.map((pair) => pair.group))].toSorted(),
    );
    expect(Object.keys(CATALOG_TEXT_EN.comparisons.scenarios).toSorted()).toEqual(
      pairs.map((pair) => comparisonSlug(pair)).toSorted(),
    );
  });

  it("has no Korean and no empty text", () => {
    const values = [
      ...Object.values(CATALOG_TEXT_EN.patterns).flatMap(strings),
      ...Object.values(CATALOG_TEXT_EN.topics).flatMap(strings),
      ...Object.values(CATALOG_TEXT_EN.comparisons.groups),
      ...Object.values(CATALOG_TEXT_EN.comparisons.descriptions),
      ...Object.values(CATALOG_TEXT_EN.comparisons.scenarios),
    ];
    expect(values.filter((value) => HANGUL.test(value))).toEqual([]);
    expect(values.filter((value) => value.trim() === "")).toEqual([]);
    for (const [slug, text] of Object.entries(CATALOG_TEXT_EN.patterns)) {
      expect(text.aliases.length, slug).toBeGreaterThan(0);
    }
  });
});

describe("English guidance", () => {
  beforeAll(() => loadCatalogText("en"));

  it.each(PATTERNS.map((pattern) => [pattern.slug, pattern] as const))(
    "%s mirrors its Korean guidance item for item",
    async (slug, pattern) => {
      const load = englishGuideLoader(slug);
      expect(load, `${slug} has no English guide`).toBeDefined();
      if (!load) return;
      const [korean, english] = await Promise.all([pattern.loadGuide(), load()]);
      expect(strings(english).filter((text) => HANGUL.test(text))).toEqual([]);
      expect(strings(english).filter((text) => text.trim() === "")).toEqual([]);
      expect(Boolean(english.origin)).toBe(Boolean(korean.origin));
      expect(english.whenToUse).toHaveLength(korean.whenToUse.length);
      expect(english.whenNotToUse).toHaveLength(korean.whenNotToUse.length);
      expect(english.accessibility).toHaveLength(korean.accessibility.length);
      // Alternatives point to the same patterns and read like the English page title.
      expect(english.alternatives.map((alternative) => alternative.slug)).toEqual(
        korean.alternatives.map((alternative) => alternative.slug),
      );
      for (const alternative of english.alternatives) {
        if (!alternative.slug) continue;
        const target = PATTERNS.find((candidate) => candidate.slug === alternative.slug);
        expect(alternative.name, `${slug} → ${alternative.slug}`).toBe(target?.name);
      }
    },
  );
});

describe("localized catalog", () => {
  beforeAll(() => loadCatalogText("en"));

  it("keeps Korean pages on the Korean entries", () => {
    expect(localizedPatterns("ko")).toBe(PATTERNS);
    const [first] = PATTERNS;
    if (!first) throw new Error("The catalog is empty");
    expect(localizePattern(first, "ko")).toBe(first);
  });

  it("swaps in English text and keeps everything else", () => {
    const toast = PATTERNS.find((pattern) => pattern.slug === "toast");
    if (!toast) throw new Error("Missing pattern: toast");
    const english = localizePattern(toast, "en");
    expect(english.summary).toBe(CATALOG_TEXT_EN.patterns.toast?.summary);
    expect(english.aliases).toContain("snackbar");
    expect(english.loadThumbnail).toBe(toast.loadThumbnail);
    expect(english.loadGuide).toBe(englishGuideLoader("toast"));
    expect(english.loadPreview).toBe(toast.loadPreview);
    expect(localizePattern(toast, "en")).toBe(english);
    expect(localizedPatterns("en")).toHaveLength(PATTERNS.length);
  });

  it("names topics, categories and comparisons in English", () => {
    const overlay = ROADMAP_TOPICS.find((topic) => topic.id === "overlay");
    if (!overlay || !COMPARISON_TOPIC) throw new Error("Missing roadmap topics");
    expect(topicName(overlay, "en")).toBe("Overlays");
    expect(topicName(overlay, "ko")).toBe("오버레이");
    expect(categoryName("overlay", "en")).toBe("Overlays");
    const [pair] = COMPARISON_TOPIC.entries;
    if (!pair) throw new Error("No comparison pairs");
    expect(comparisonTitle(pair, "en")).toBe(pair.name.replace(" / ", " · "));
    expect(comparisonGroupName(pair.group, "en")).not.toMatch(HANGUL);
    expect(comparisonScenario(comparisonSlug(pair), "원문", "en")).toBe(
      CATALOG_TEXT_EN.comparisons.scenarios[comparisonSlug(pair)],
    );
    expect(comparisonScenario(comparisonSlug(pair), "원문", "ko")).toBe("원문");
    const text = roadmapEntryText(COMPARISON_TOPIC, pair, "en");
    expect(text).toEqual({
      title: pair.name,
      secondaryName: null,
      description: CATALOG_TEXT_EN.comparisons.descriptions[pair.name],
    });
    const [entry] = overlay.entries;
    if (!entry) throw new Error("No overlay entries");
    expect(roadmapEntryText(overlay, entry, "ko")).toEqual({
      title: entry.nameKo,
      secondaryName: entry.name,
      description: entry.description,
    });
  });
});
