import type { ComponentType } from "react";

import type { PatternCategoryId } from "@/entities/pattern/model/category";

export interface PatternAlternative {
  readonly name: string;
  /** Slug of a catalog pattern. Omit when the alternative is not in the catalog yet. */
  readonly slug?: string;
  readonly reason: string;
}

/**
 * Loads a source file as text, e.g. `() => import("@/shared/ui/patterns/tabs/Tabs.tsx?raw")`.
 * Source text is only needed on the detail page, so it stays out of the main bundle.
 */
export type SourceLoader = () => Promise<{ readonly default: string }>;

/**
 * Loads an interactive demo component on demand so the catalog page does not download every demo.
 */
export type PreviewLoader = () => Promise<ComponentType>;

/**
 * Loads a catalog thumbnail when its card nears the viewport, so the initial catalog bundle
 * does not carry every miniature.
 */
export type ThumbnailLoader = () => Promise<ComponentType>;

export interface PatternSource {
  readonly fileName: string;
  /** What this file is for, e.g. "Component" or "Usage". */
  readonly role: string;
  readonly load: SourceLoader;
}

/**
 * Guidance shown only on an entry's detail page. It lives in `<slug>/guide.ts` and is loaded
 * with the page, so the catalog bundle carries only what cards and search need.
 */
export interface PatternGuide {
  /**
   * Where the name comes from, when the story helps people remember the pattern
   * (e.g. why a toast is called a toast). Leave it out when the name explains itself.
   */
  readonly origin?: string;
  readonly whenToUse: readonly string[];
  readonly whenNotToUse: readonly string[];
  readonly alternatives: readonly PatternAlternative[];
  readonly accessibility: readonly string[];
}

export type GuideLoader = () => Promise<PatternGuide>;

/** A catalog entry: what cards and search need, plus loaders for the detail page. */
interface PatternEntry {
  readonly slug: string;
  readonly name: string;
  readonly nameKo: string;
  /** Other names people search for, in Korean or English. */
  readonly aliases: readonly string[];
  readonly category: PatternCategoryId;
  /** One line shown on catalog cards. */
  readonly summary: string;
  readonly description: string;
  readonly tags: readonly string[];
  /** Loads the detail-page guidance (when to use, alternatives, accessibility). */
  readonly loadGuide: GuideLoader;
  /** Loads the interactive demo rendered on the detail page. */
  readonly loadPreview: PreviewLoader;
  /** Loads the looping miniature rendered on catalog cards. It must be decorative. */
  readonly loadThumbnail: ThumbnailLoader;
}

export type Pattern = PatternEntry &
  (
    | { readonly kind?: "component"; readonly sources: readonly PatternSource[] }
    | { readonly kind: "concept"; readonly loadDemoSource: SourceLoader; readonly sources?: never }
  );

export const BASE_TAGS = ["React", "TypeScript", "Tailwind CSS", "Accessibility"] as const;

/**
 * Detail page address. UI patterns live under /patterns and concepts (styles, psychology,
 * icon names, research methods) under /concepts. The address follows what an entry is,
 * not which catalog tab shows it, so regrouping the catalog never changes a link.
 */
export function patternPath(pattern: Pick<Pattern, "slug" | "kind">): string {
  return `${pattern.kind === "concept" ? "/concepts" : "/patterns"}/${pattern.slug}`;
}
