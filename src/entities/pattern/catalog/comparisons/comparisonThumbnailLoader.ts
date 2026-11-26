import type { ThumbnailLoader } from "@/entities/pattern/model/pattern";

const loaders = new Map<string, ThumbnailLoader>();

/**
 * Loader for a comparison guide's thumbnail. The miniatures live in one lazily loaded module;
 * each slug gets one stable loader so a card that scrolls back reuses what was loaded.
 */
export function comparisonThumbnailLoader(slug: string): ThumbnailLoader {
  let loader = loaders.get(slug);
  if (!loader) {
    loader = () =>
      import("@/entities/pattern/catalog/comparisons/ComparisonThumbnails").then((module) => {
        const Thumbnail = module.COMPARISON_THUMBNAILS[slug];
        if (!Thumbnail) throw new Error(`No comparison thumbnail for "${slug}"`);
        return Thumbnail;
      });
    loaders.set(slug, loader);
  }
  return loader;
}
