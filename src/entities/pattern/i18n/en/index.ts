import type { CatalogText } from "@/entities/pattern/i18n/catalogText";

import comparisons from "@/entities/pattern/i18n/en/comparisons.json";
import patterns from "@/entities/pattern/i18n/en/patterns.json";
import topics from "@/entities/pattern/i18n/en/topics.json";

/** English catalog text, loaded as its own chunk by `loadCatalogText("en")`. */
export const CATALOG_TEXT_EN: CatalogText = { patterns, topics, comparisons };
