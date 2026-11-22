import { describe, expect, it } from "vitest";

import css from "@/entities/pattern/ui/thumbnail-motion.css?raw";

describe("thumbnail motion", () => {
  it("defines every keyframes name once, so no thumbnail overrides another", () => {
    const names = [...css.matchAll(/@keyframes ([\w-]+) \{/g)].map((match) => match[1]);
    const repeated = names.filter((name, index) => names.indexOf(name) !== index);
    expect(repeated).toEqual([]);
  });
});
