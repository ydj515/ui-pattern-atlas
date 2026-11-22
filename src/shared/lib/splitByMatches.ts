export interface TextSegment {
  readonly text: string;
  readonly match: boolean;
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Splits `text` into plain and matching segments for every whitespace-separated
 * token in `query` (case-insensitive). Longer tokens win when they overlap.
 */
export function splitByMatches(text: string, query: string): TextSegment[] {
  const tokens = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .toSorted((left, right) => right.length - left.length)
    .map(escapeRegExp);
  if (tokens.length === 0) return [{ text, match: false }];

  // With one capture group, String#split puts the matches at odd indices.
  return text
    .split(new RegExp(`(${tokens.join("|")})`, "gi"))
    .map((part, index) => ({ text: part, match: index % 2 === 1 }))
    .filter((segment) => segment.text !== "");
}
