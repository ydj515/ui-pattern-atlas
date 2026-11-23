import { useId, useRef, useState, type FormEvent } from "react";

export interface AddressResult {
  readonly zip: string;
  readonly road: string;
}

export interface AddressFormLabels {
  readonly search: string;
  readonly searchButton: string;
  readonly noResults: string;
  readonly picked: string;
  readonly detail: string;
  readonly makeDefault: string;
  readonly save: string;
}

export interface AddressFormProps {
  readonly searchAddress: (query: string) => readonly AddressResult[];
  readonly onSave: (address: AddressResult & { detail: string; isDefault: boolean }) => void;
  readonly searchPlaceholder?: string;
  readonly detailPlaceholder?: string;
  readonly labels?: AddressFormLabels;
}

const DEFAULT_LABELS: AddressFormLabels = {
  search: "주소 검색",
  searchButton: "검색",
  noResults: "찾는 주소가 없어요. 도로명이나 건물 이름으로 찾아보세요",
  picked: "선택한 주소",
  detail: "상세 주소",
  makeDefault: "기본 배송지로 저장",
  save: "배송지 저장",
};

const field =
  "block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400";

/**
 * Delivery address entry: search a road or building name, pick the matching address
 * from the list, then type only the detail part. Picking moves focus to the detail
 * field so the next step is obvious.
 */
export function AddressForm({
  searchAddress,
  onSave,
  searchPlaceholder,
  detailPlaceholder,
  labels = DEFAULT_LABELS,
}: AddressFormProps) {
  const id = useId();
  const detailRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<readonly AddressResult[] | null>(null);
  const [picked, setPicked] = useState<AddressResult | null>(null);
  const [detail, setDetail] = useState("");
  const [isDefault, setIsDefault] = useState(true);

  function handleSearch(event: FormEvent) {
    event.preventDefault();
    setResults(searchAddress(query.trim()));
  }

  return (
    <div className="grid gap-3 text-sm">
      <form role="search" onSubmit={handleSearch} className="grid gap-1">
        <label htmlFor={`${id}-search`} className="font-medium text-slate-800">
          {labels.search}
        </label>
        <span className="flex gap-2">
          <input
            id={`${id}-search`}
            value={query}
            placeholder={searchPlaceholder}
            onChange={(event) => setQuery(event.target.value)}
            className={field}
          />
          <button type="submit" className="shrink-0 rounded-lg border border-slate-300 px-3">
            {labels.searchButton}
          </button>
        </span>
      </form>
      {results && !picked ? (
        results.length === 0 ? (
          <p role="status" className="text-xs text-slate-500">
            {labels.noResults}
          </p>
        ) : (
          <ul
            aria-label={labels.search}
            className="grid divide-y divide-slate-100 rounded-lg border border-slate-200"
          >
            {results.map((result) => (
              <li key={result.zip + result.road}>
                <button
                  type="button"
                  onClick={() => {
                    setPicked(result);
                    window.setTimeout(() => detailRef.current?.focus());
                  }}
                  className="w-full px-3 py-2 text-left hover:bg-slate-50"
                >
                  <span className="mr-2 text-xs text-slate-500 tabular-nums">{result.zip}</span>
                  {result.road}
                </button>
              </li>
            ))}
          </ul>
        )
      ) : null}
      {picked ? (
        <div className="grid gap-2">
          <p className="rounded-lg bg-slate-50 px-3 py-2">
            <span className="block text-xs text-slate-500">
              {labels.picked} · {picked.zip}
            </span>
            {picked.road}
          </p>
          <label className="grid gap-1 font-medium text-slate-800">
            {labels.detail}
            <input
              ref={detailRef}
              value={detail}
              placeholder={detailPlaceholder}
              autoComplete="address-line2"
              onChange={(event) => setDetail(event.target.value)}
              className={field}
            />
          </label>
          <label className="flex items-center gap-2 text-slate-700">
            <input
              type="checkbox"
              checked={isDefault}
              onChange={(event) => setIsDefault(event.target.checked)}
            />
            {labels.makeDefault}
          </label>
          <button
            type="button"
            disabled={detail.trim() === ""}
            onClick={() => onSave({ ...picked, detail: detail.trim(), isDefault })}
            className="rounded-lg bg-slate-900 py-2 font-semibold text-white disabled:opacity-40"
          >
            {labels.save}
          </button>
        </div>
      ) : null}
    </div>
  );
}
