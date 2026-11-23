import { render } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";

import demosSource from "@/entities/pattern/catalog/comparisons/ComparisonDemos.tsx?raw";
import moreSource from "@/entities/pattern/catalog/comparisons/ComparisonDemosMore.tsx?raw";
import restSource from "@/entities/pattern/catalog/comparisons/ComparisonDemosRest.tsx?raw";
import { COMPARISON_GUIDES } from "@/entities/pattern/catalog/comparisons/comparisonGuides";
import { COMPARISON_THUMBNAILS } from "@/entities/pattern/catalog/comparisons/ComparisonThumbnails";
import { COMPARISON_TOPIC, comparisonSlug } from "@/entities/pattern/catalog/roadmap";

const DEMO_SOURCE = [demosSource, moreSource, restSource].join("\n");

describe("comparison thumbnails", () => {
  it("gives every comparison pair a demo and a thumbnail", () => {
    const slugs = (COMPARISON_TOPIC?.entries ?? []).map(comparisonSlug).toSorted();
    expect(Object.keys(COMPARISON_GUIDES).toSorted()).toEqual(slugs);
    expect(Object.keys(COMPARISON_THUMBNAILS).toSorted()).toEqual(slugs);
  });

  it.each(Object.entries(COMPARISON_THUMBNAILS))(
    "%s thumbnail only shows copy from the comparison demos",
    (slug, Thumbnail) => {
      const { container } = render(createElement(Thumbnail));
      const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
      const words: string[] = [];
      for (let node = walker.nextNode(); node; node = walker.nextNode()) {
        words.push(...(node.textContent?.match(/[가-힣]+/g) ?? []));
      }
      expect(words.length).toBeGreaterThan(0);
      for (const word of new Set(words)) {
        expect(DEMO_SOURCE, `"${word}" is not in the ${slug} demo`).toContain(word);
      }
    },
  );
});
