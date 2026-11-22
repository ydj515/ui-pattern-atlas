import { useId, type ReactNode } from "react";

export interface NotFoundPageProps {
  /** Way back, usually a link to the home page. */
  readonly homeAction: ReactNode;
  readonly onSearch: (query: string) => void;
  readonly title?: string;
  readonly description?: string;
  readonly searchPlaceholder?: string;
  readonly searchLabel?: string;
}

/**
 * 404 page that admits the problem plainly and offers two ways forward: search, or
 * go home. Keep the site header and footer around it so people are not stranded.
 * The heading is the first thing read; the status code is secondary.
 */
export function NotFoundPage({
  homeAction,
  onSearch,
  title = "페이지를 찾을 수 없어요",
  description = "주소가 바뀌었거나 삭제된 페이지예요.",
  searchPlaceholder = "찾으려던 내용",
  searchLabel = "검색",
}: NotFoundPageProps) {
  const inputId = useId();
  return (
    <section className="px-6 py-8 text-center">
      <p className="text-xs font-semibold text-slate-400">404</p>
      <h1 className="mt-1 text-lg font-semibold text-slate-900">{title}</h1>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
      <form
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          const query = new FormData(event.currentTarget).get("q");
          if (typeof query === "string" && query.trim()) onSearch(query.trim());
        }}
        className="mx-auto mt-4 flex max-w-60 gap-2"
      >
        <label htmlFor={inputId} className="sr-only">
          {searchLabel}
        </label>
        <input
          id={inputId}
          name="q"
          type="search"
          placeholder={searchPlaceholder}
          className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm"
        />
        <button
          type="submit"
          className="rounded-lg bg-slate-900 px-3 text-sm font-semibold text-white"
        >
          {searchLabel}
        </button>
      </form>
      <div className="mt-3 text-sm">{homeAction}</div>
    </section>
  );
}
