import { useId, useState } from "react";

export interface CitationSource {
  readonly title: string;
  readonly site: string;
  readonly url: string;
}

export interface CitationProps {
  readonly index: number;
  readonly source: CitationSource;
  readonly openLabel?: string;
}

/**
 * Numbered marker after a claim that opens a small card with the source's title and
 * site, and a link to it. The number matches the source list under the answer, so
 * the claim can be checked either way.
 */
export function Citation({ index, source, openLabel = "원문 열기" }: CitationProps) {
  const id = useId();
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-block">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`출처 ${index}: ${source.title}`}
        onClick={() => setOpen((value) => !value)}
        className="mx-0.5 inline-grid h-4 min-w-4 -translate-y-1 place-items-center rounded bg-slate-200 px-1 text-[10px] font-semibold text-slate-700 hover:bg-slate-300"
      >
        {index}
      </button>
      {open ? (
        <span
          id={id}
          role="note"
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute top-full left-0 z-10 mt-1 block w-56 rounded-xl bg-white p-3 text-left text-xs shadow-lg ring-1 ring-slate-200"
        >
          <span className="block text-slate-500">{source.site}</span>
          <span className="mt-0.5 block font-semibold text-slate-900">{source.title}</span>
          <a
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-blue-700 underline underline-offset-2"
          >
            {openLabel}
          </a>
        </span>
      ) : null}
    </span>
  );
}

/** Source list under an answer, numbered the same as the markers. */
export function CitationList({
  sources,
  label = "출처",
}: {
  readonly sources: readonly CitationSource[];
  readonly label?: string;
}) {
  return (
    <section aria-label={label} className="mt-3 border-t border-slate-100 pt-2">
      <ol className="grid gap-1 text-xs text-slate-600">
        {sources.map((source, index) => (
          <li key={source.url} className="flex gap-2">
            <span className="text-slate-400 tabular-nums">{index + 1}</span>
            <a href={source.url} target="_blank" rel="noreferrer" className="hover:underline">
              {source.title} · {source.site}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
