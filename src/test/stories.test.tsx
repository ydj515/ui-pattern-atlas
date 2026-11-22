import { composeStories, setProjectAnnotations } from "@storybook/react-vite";
import { render } from "@testing-library/react";
import type { ComponentType } from "react";
import { describe, expect, it } from "vitest";

import { PATTERNS } from "@/entities/pattern/catalog";

import preview from "../../.storybook/preview";

// Apply the same decorators and globals as Storybook (theme on <html>).
setProjectAnnotations(preview);

type StoryModule = Parameters<typeof composeStories>[0];

const modules = import.meta.glob<StoryModule>("/src/**/*.stories.tsx", { eager: true });

describe("stories", () => {
  it("covers every reusable pattern component", () => {
    const patternStories = Object.keys(modules).filter((path) =>
      path.includes("/shared/ui/patterns/"),
    );
    // One story file per catalog pattern, next to its component in shared/ui/patterns.
    expect(patternStories).toHaveLength(
      PATTERNS.filter((pattern) => pattern.kind !== "concept").length,
    );
  });

  for (const [path, module] of Object.entries(modules)) {
    // Composed stories are plain React components with all annotations applied.
    const stories = Object.entries(composeStories(module)) as [string, ComponentType][];

    it.each(stories)(`${path} › %s renders`, (_name, Story) => {
      const { container } = render(<Story />);
      expect(container.innerHTML).not.toBe("");
    });
  }
});
