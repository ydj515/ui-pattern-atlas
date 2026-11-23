import { describe, expect, it } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";
import { COMPARISON_GUIDES } from "@/entities/pattern/catalog/comparisons/comparisonGuides";
import {
  COMPARISON_TOPIC,
  resolveCatalogCategory,
  ROADMAP_PATTERN_TOPICS,
  ROADMAP_TOPICS,
  comparisonSlug,
} from "@/entities/pattern/catalog/roadmap";
import { patternForRoadmapEntry } from "@/entities/pattern/catalog/roadmapLinks";

describe("roadmap catalog", () => {
  it("links completed roadmap rows to the corresponding pattern and category", () => {
    const implemented = ROADMAP_PATTERN_TOPICS.flatMap((topic) =>
      topic.entries.flatMap((entry) => {
        if (entry.priority !== "완료") return [];
        const pattern = patternForRoadmapEntry(topic, entry);
        expect(pattern?.category, entry.nameKo).toBe(topic.id);
        return pattern?.slug ?? [];
      }),
    );
    expect(implemented.toSorted()).toEqual(PATTERNS.map((pattern) => pattern.slug).toSorted());
  });

  it("assigns one route per comparison and connects every completed demo", () => {
    const pairs = COMPARISON_TOPIC?.entries ?? [];
    const urls = pairs.map(comparisonSlug);
    expect(urls).toHaveLength(51);
    expect(new Set(urls).size).toBe(urls.length);
    expect(
      pairs
        .filter(({ priority }) => priority === "완료")
        .map(comparisonSlug)
        .toSorted(),
    ).toEqual(Object.keys(COMPARISON_GUIDES).toSorted());
  });

  it("keeps every topic and item available in the catalog data", () => {
    expect(ROADMAP_TOPICS).toHaveLength(37);
    expect(new Set(ROADMAP_TOPICS.map(({ id }) => id)).size).toBe(ROADMAP_TOPICS.length);
    expect(ROADMAP_TOPICS.flatMap(({ entries }) => entries)).toHaveLength(442);
  });

  it("keeps the old combined dark pattern link working after the split", () => {
    expect(resolveCatalogCategory("dark-pattern-ux")).toMatchObject({
      category: "dark-patterns",
      activeTab: "ux-psychology",
    });
  });
});
