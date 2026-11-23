export interface HighlightTextProps {
  readonly text: string;
  /** Search text; each space-separated word is marked wherever it appears. */
  readonly query: string;
}

function escape(word: string) {
  return word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Text with the parts that match the search marked (<mark>), case-insensitive and for
 * every word of the query. The text itself is not changed, so it reads the same.
 */
export function HighlightText({ text, query }: HighlightTextProps) {
  const words = query.trim().split(/\s+/).filter(Boolean).map(escape);
  if (words.length === 0) return <>{text}</>;
  const pattern = new RegExp(`(${words.join("|")})`, "gi");
  return (
    <>
      {text.split(pattern).map((part, index) =>
        index % 2 === 1 ? (
          <mark key={index} className="rounded-sm bg-amber-100 font-semibold text-inherit">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
