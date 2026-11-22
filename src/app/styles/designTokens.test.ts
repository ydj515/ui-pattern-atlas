import { describe, expect, it } from "vitest";

/**
 * Site chrome must use the design tokens from global.css (documented in DESIGN.md).
 * Excluded on purpose:
 * - shared/ui/patterns: copy-paste components use the default Tailwind palette.
 * - entities/pattern/catalog: demos and thumbnails draw sample UIs, not site chrome.
 * - ThumbStage: its px sizes are a contract with thumbnail-motion.css.
 */
const sources = import.meta.glob<string>("/src/**/*.tsx", {
  query: "?raw",
  import: "default",
  eager: true,
});

const EXCLUDED = [
  /^\/src\/shared\/ui\/patterns\//,
  /^\/src\/entities\/pattern\/catalog\//,
  /\/ThumbStage\.tsx$/,
  /\.test\.tsx$/,
];

const RULES = [
  { name: "raw hex colour", pattern: /\[#[0-9a-fA-F]{3,8}\]/ },
  {
    name: "default palette colour",
    pattern:
      /\b(?:text|bg|border|ring|decoration|divide|outline|placeholder:text)-(?:slate|gray|zinc|neutral|white|black|red|rose|emerald|green|amber|yellow|blue|indigo)\b/,
  },
  { name: "arbitrary font size", pattern: /\btext-\[\d/ },
  { name: "arbitrary radius", pattern: /\brounded-\[/ },
  { name: "default type scale step", pattern: /\btext-(?:xs|sm|base|lg|xl|[2-9]xl)\b/ },
];

const chromeFiles = Object.entries(sources).filter(
  ([path]) => !EXCLUDED.some((pattern) => pattern.test(path)),
);

describe("design tokens", () => {
  it("checks a meaningful set of chrome files", () => {
    expect(chromeFiles.length).toBeGreaterThan(10);
  });

  it.each(chromeFiles)("%s uses design tokens only", (_path, source) => {
    for (const rule of RULES) {
      expect(source.match(rule.pattern)?.[0], rule.name).toBeUndefined();
    }
  });
});
