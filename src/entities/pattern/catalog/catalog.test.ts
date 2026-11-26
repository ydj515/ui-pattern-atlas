import { render } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";

import { isPatternCategoryId, PATTERN_CATEGORIES } from "@/entities/pattern/model/category";
import { findPatternBySlug, PATTERNS } from "@/entities/pattern/catalog";

describe("pattern catalog", () => {
  it("has unique, URL-safe slugs", () => {
    const slugs = PATTERNS.map((pattern) => pattern.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z]+(-[a-z]+)*$/);
  });

  it.each(PATTERNS.map((pattern) => [pattern.slug, pattern] as const))(
    "%s has complete guidance and sources",
    async (_slug, pattern) => {
      expect(isPatternCategoryId(pattern.category)).toBe(true);
      expect(pattern.description.length).toBeGreaterThan(0);
      expect(pattern.whenToUse.length).toBeGreaterThan(0);
      expect(pattern.whenNotToUse.length).toBeGreaterThan(0);
      expect(pattern.alternatives.length).toBeGreaterThan(0);
      expect(pattern.accessibility.length).toBeGreaterThan(0);
      if (pattern.kind === "concept") {
        expect(pattern.sources).toBeUndefined();
        expect((await pattern.loadDemoSource()).default).toContain("export function");
      } else {
        expect(pattern.sources.map((source) => source.role)).toEqual(["Component", "Usage"]);
        for (const source of pattern.sources) {
          expect((await source.load()).default).toContain("export function");
        }
      }
    },
  );

  it("links alternatives only to patterns that exist", () => {
    for (const pattern of PATTERNS) {
      for (const alternative of pattern.alternatives) {
        if (alternative.slug) {
          expect(
            findPatternBySlug(alternative.slug),
            `${pattern.slug} → ${alternative.slug}`,
          ).toBeDefined();
          expect(alternative.slug).not.toBe(pattern.slug);
          // The link text should read like the title the reader lands on.
          expect(alternative.name, `${pattern.slug} → ${alternative.slug}`).toBe(
            findPatternBySlug(alternative.slug)?.nameKo,
          );
        }
      }
    }
  });

  it("keeps patterns grouped in category order", () => {
    const order = PATTERN_CATEGORIES.map((category) => category.id);
    const positions = PATTERNS.map((pattern) => order.indexOf(pattern.category));
    expect(positions).toEqual(positions.toSorted((left, right) => left - right));
  });

  it("returns undefined for unknown slugs", () => {
    expect(findPatternBySlug("unknown")).toBeUndefined();
  });

  it.each(PATTERNS.map((pattern) => [pattern.slug, pattern] as const))(
    "%s thumbnail replays the same scenario (copy) as its demo",
    async (_slug, pattern) => {
      const { container } = render(createElement(await pattern.loadThumbnail()));
      const loadUsage =
        pattern.kind === "concept"
          ? pattern.loadDemoSource
          : pattern.sources.find((source) => source.role === "Usage")?.load;
      const usage = loadUsage ? (await loadUsage()).default : "";
      // Read text node by node; textContent would glue neighbouring elements together.
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      const koreanWords: string[] = [];
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        koreanWords.push(...(node.textContent?.match(/[가-힣]+/g) ?? []));
      }

      expect(koreanWords.length).toBeGreaterThan(0);
      for (const word of new Set(koreanWords)) {
        expect(usage, `"${word}" is not in the ${pattern.slug} demo`).toContain(word);
      }
    },
  );
});
