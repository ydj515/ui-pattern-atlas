import type { ComponentType } from "react";

import type { PatternCategoryId } from "./category";

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

export interface PatternSource {
  readonly fileName: string;
  /** What this file is for, e.g. "Component" or "Usage". */
  readonly role: string;
  readonly load: SourceLoader;
}

/** A catalog entry: guidance, a live demo and the code behind it. */
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
  readonly whenToUse: readonly string[];
  readonly whenNotToUse: readonly string[];
  readonly alternatives: readonly PatternAlternative[];
  readonly accessibility: readonly string[];
  readonly tags: readonly string[];
  /** Loads the interactive demo rendered on the detail page. */
  readonly loadPreview: PreviewLoader;
  /** Static miniature rendered on catalog cards. Must be decorative. */
  readonly Thumbnail: ComponentType;
}

export type Pattern = PatternEntry &
  (
    | { readonly kind?: "component"; readonly sources: readonly PatternSource[] }
    | { readonly kind: "concept"; readonly loadDemoSource: SourceLoader; readonly sources?: never }
  );

export const BASE_TAGS = ["React", "TypeScript", "Tailwind CSS", "Accessibility"] as const;
