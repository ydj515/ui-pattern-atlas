import { splitByMatches } from "@/shared/lib/splitByMatches";

/** Renders `text` with the parts that match `query` wrapped in `<mark>`. */
export function Highlight({ text, query }: { readonly text: string; readonly query: string }) {
  return (
    <>
      {splitByMatches(text, query).map((segment, index) =>
        segment.match ? <mark key={index}>{segment.text}</mark> : segment.text,
      )}
    </>
  );
}
