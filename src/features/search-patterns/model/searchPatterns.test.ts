import { describe, expect, it } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";

import {
  normalizeSearchText,
  searchPatterns,
} from "@/features/search-patterns/model/searchPatterns";

function slugsFor(
  text: string,
  category: Parameters<typeof searchPatterns>[1]["category"] = "all",
) {
  return searchPatterns(PATTERNS, { text, category }).map((pattern) => pattern.slug);
}

describe("normalizeSearchText", () => {
  it("ignores case, whitespace, hyphens and underscores", () => {
    expect(normalizeSearchText(" Bottom-Sheet ")).toBe("bottomsheet");
    expect(normalizeSearchText("바텀 시트")).toBe(normalizeSearchText("바텀시트"));
    expect(normalizeSearchText("empty_state")).toBe("emptystate");
  });
});

describe("searchPatterns", () => {
  it("returns every pattern in catalog order for an empty query", () => {
    expect(slugsFor("   ")).toEqual(PATTERNS.map((pattern) => pattern.slug));
  });

  it("matches English and Korean names", () => {
    expect(slugsFor("modal")[0]).toBe("modal-dialog");
    expect(slugsFor("모달")[0]).toBe("modal-dialog");
    expect(slugsFor("토스트")[0]).toBe("toast");
  });

  it("matches aliases people actually type", () => {
    expect(slugsFor("확인 창")).toContain("modal-dialog");
    expect(slugsFor("스낵바")).toContain("toast");
    expect(slugsFor("토글").slice(0, 2)).toEqual(
      expect.arrayContaining(["switch", "toggle-button"]),
    );
  });

  it("matches a multi-word name typed with or without spaces", () => {
    expect(slugsFor("modal dialog")[0]).toBe("modal-dialog");
    expect(slugsFor("emptystate")[0]).toBe("empty-state");
    expect(slugsFor("segmented control")[0]).toBe("segmented-control");
  });

  it("ranks name matches above description matches", () => {
    const results = slugsFor("tabs");
    expect(results[0]).toBe("tabs");
  });

  it("requires every token to match when the phrase does not", () => {
    expect(slugsFor("modal zzzz")).toEqual([]);
  });

  it("filters by category before matching text", () => {
    expect(slugsFor("", "navigation")).toEqual(
      PATTERNS.filter((pattern) => pattern.category === "navigation").map(
        (pattern) => pattern.slug,
      ),
    );
    expect(slugsFor("모달", "feedback")).not.toContain("modal-dialog");
  });

  it("returns nothing when no field matches", () => {
    expect(slugsFor("존재하지않는패턴")).toEqual([]);
  });
});
