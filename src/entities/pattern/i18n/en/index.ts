import type { CatalogText } from "@/entities/pattern/i18n/catalogText";
import type { PatternGuide } from "@/entities/pattern/model/pattern";

import comparisons from "@/entities/pattern/i18n/en/comparisons.json";
import patterns from "@/entities/pattern/i18n/en/patterns.json";
import topics from "@/entities/pattern/i18n/en/topics.json";

const guideFiles = import.meta.glob<PatternGuide>("./guides/*.json", { import: "default" });

/** Guide loaders keyed by slug: `./guides/toast.json` becomes `toast`. */
const guides = Object.fromEntries(
  Object.entries(guideFiles).map(([path, load]) => [
    path.slice("./guides/".length, -".json".length),
    load,
  ]),
);

/** English catalog text, loaded as its own chunk by `loadCatalogText("en")`. */
export const CATALOG_TEXT_EN: CatalogText = { patterns, topics, comparisons, guides };
