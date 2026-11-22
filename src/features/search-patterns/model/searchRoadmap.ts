import { normalizeSearchText } from "./searchPatterns";

export function roadmapMatcher(query: string) {
  const tokens = query.split(/\s+/).map(normalizeSearchText).filter(Boolean);
  return (...fields: readonly string[]) => {
    const searchableFields = fields.map(normalizeSearchText);
    return tokens.every((token) => searchableFields.some((field) => field.includes(token)));
  };
}
