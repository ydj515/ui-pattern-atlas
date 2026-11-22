import { describe, expect, it } from "vitest";

import { splitByMatches } from "./splitByMatches";

describe("splitByMatches", () => {
  it("returns the whole text when the query is empty", () => {
    expect(splitByMatches("Modal Dialog", "  ")).toEqual([{ text: "Modal Dialog", match: false }]);
  });

  it("marks every case-insensitive occurrence of each token", () => {
    expect(splitByMatches("Modal Dialog", "dia mod")).toEqual([
      { text: "Mod", match: true },
      { text: "al ", match: false },
      { text: "Dia", match: true },
      { text: "log", match: false },
    ]);
  });

  it("treats regex characters literally", () => {
    expect(splitByMatches("a.b (c)", "(c)")).toEqual([
      { text: "a.b ", match: false },
      { text: "(c)", match: true },
    ]);
  });
});
