import { useId, useState } from "react";

export interface Language {
  readonly code: string;
  /** Name in the language itself, e.g. "日本語". */
  readonly native: string;
  /** Name in the interface language, e.g. "일본어". */
  readonly local: string;
}

export interface LanguagePickerProps {
  readonly languages: readonly Language[];
  readonly value: string;
  readonly onChange: (code: string) => void;
  readonly legend?: string;
  readonly searchLabel?: string;
  readonly emptyLabel?: string;
  readonly searchPlaceholder?: string;
}

/**
 * Language list where each option is written in its own language first, so people who
 * cannot read the current interface can still find theirs, with a filter that matches
 * either name.
 */
export function LanguagePicker({
  languages,
  value,
  onChange,
  legend = "언어",
  searchLabel = "언어 찾기",
  emptyLabel = "찾는 언어가 없어요",
  searchPlaceholder,
}: LanguagePickerProps) {
  const name = useId();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = languages.filter(
    (language) =>
      !q || `${language.native} ${language.local} ${language.code}`.toLowerCase().includes(q),
  );
  return (
    <div className="grid gap-2 text-sm">
      <input
        type="search"
        aria-label={searchLabel}
        placeholder={searchPlaceholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2"
      />
      <fieldset>
        <legend className="sr-only">{legend}</legend>
        <ul className="max-h-44 divide-y divide-slate-100 overflow-auto rounded-xl border border-slate-200">
          {shown.map((language) => (
            <li key={language.code}>
              <label className="flex cursor-pointer items-center gap-3 px-3 py-2 has-checked:bg-slate-50">
                <span className="flex-1">
                  <span lang={language.code} className="block text-slate-900">
                    {language.native}
                  </span>
                  <span className="text-xs text-slate-500">{language.local}</span>
                </span>
                <input
                  type="radio"
                  name={name}
                  checked={value === language.code}
                  onChange={() => onChange(language.code)}
                />
              </label>
            </li>
          ))}
          {shown.length === 0 ? <li className="px-3 py-2 text-slate-500">{emptyLabel}</li> : null}
        </ul>
      </fieldset>
    </div>
  );
}
