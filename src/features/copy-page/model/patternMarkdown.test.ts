import { describe, expect, it } from "vitest";

import { findPatternBySlug } from "@/entities/pattern/catalog";
import {
  buildPatternMarkdown,
  loadPatternMarkdown,
} from "@/features/copy-page/model/patternMarkdown";

const PAGE_URL = "https://atlas.example/patterns/tabs?q=tab#accessibility";

function requirePattern(slug: string) {
  const pattern = findPatternBySlug(slug);
  if (!pattern) throw new Error(`Missing pattern: ${slug}`);
  return pattern;
}

describe("buildPatternMarkdown", () => {
  it("renders every page section with the implementation inlined", () => {
    const markdown = buildPatternMarkdown(
      requirePattern("tabs"),
      [{ fileName: "Tabs.tsx", role: "Component", code: "export const a = 1;\n\n" }],
      PAGE_URL,
    );

    expect(markdown).toContain("# 탭 (Tabs)");
    expect(markdown).toContain("Source: https://atlas.example/patterns/tabs\n");
    expect(markdown).toContain("## When to use\n\n- 상세 정보");
    expect(markdown).toContain("## When not to use");
    expect(markdown).toContain(
      "[Segmented Control](https://atlas.example/patterns/segmented-control): 같은 데이터의 보기 방식 전환",
    );
    expect(markdown).toContain("### Component: Tabs.tsx\n\n```tsx\nexport const a = 1;\n```");
    expect(markdown).toContain("## Accessibility");
    expect(markdown).not.toContain("Tech:");
    expect(markdown.endsWith("\n")).toBe(true);
  });

  it("uses a longer fence when the code contains backticks", () => {
    const markdown = buildPatternMarkdown(
      requirePattern("tabs"),
      [{ fileName: "a.ts", role: "Usage", code: "const s = ```nested```;" }],
      PAGE_URL,
    );

    expect(markdown).toContain("````ts\nconst s = ```nested```;\n````");
  });

  it("omits the implementation section when there are no sources", () => {
    const markdown = buildPatternMarkdown(requirePattern("tabs"), [], PAGE_URL);

    expect(markdown).not.toContain("## Implementation");
  });
});

describe("loadPatternMarkdown", () => {
  it("loads each source file of a component pattern", async () => {
    const pattern = requirePattern("tabs");
    const markdown = await loadPatternMarkdown(pattern, PAGE_URL);

    expect(markdown).toContain("## Implementation");
    expect(markdown).toContain(
      `: ${pattern.kind === "concept" ? "" : pattern.sources[0]?.fileName}`,
    );
  });

  it("skips implementation files for a concept entry", async () => {
    const markdown = await loadPatternMarkdown(requirePattern("decoy-effect"), PAGE_URL);

    expect(markdown).not.toContain("## Implementation");
    expect(markdown).toContain("## Accessibility");
  });
});
