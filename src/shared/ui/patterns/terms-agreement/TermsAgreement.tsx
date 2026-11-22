import { useEffect, useRef } from "react";

export interface TermsItem {
  readonly id: string;
  readonly label: string;
  readonly required: boolean;
}

export interface TermsAgreementProps {
  readonly items: readonly TermsItem[];
  readonly checked: ReadonlySet<string>;
  readonly onChange: (checked: ReadonlySet<string>) => void;
  readonly onView: (id: string) => void;
  readonly allLabel?: string;
  readonly requiredLabel?: string;
  readonly optionalLabel?: string;
  readonly viewLabel?: string;
}

/**
 * Sign-up agreements with 전체 동의 on top and each item marked 필수 or 선택. 전체 동의
 * is mixed (indeterminate) when only some are checked, and every item can be opened to
 * read. Optional items are never checked for people.
 */
export function TermsAgreement({
  items,
  checked,
  onChange,
  onView,
  allLabel = "전체 동의",
  requiredLabel = "필수",
  optionalLabel = "선택",
  viewLabel = "보기",
}: TermsAgreementProps) {
  const allRef = useRef<HTMLInputElement>(null);
  const all = items.every((item) => checked.has(item.id));
  const some = items.some((item) => checked.has(item.id));

  useEffect(() => {
    if (allRef.current) allRef.current.indeterminate = some && !all;
  }, [some, all]);

  function toggle(id: string) {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onChange(next);
  }

  return (
    <fieldset className="grid gap-1">
      <legend className="sr-only">약관 동의</legend>
      <label className="flex items-center gap-3 rounded-lg bg-slate-100 px-3 py-3 text-sm font-semibold text-slate-900">
        <input
          ref={allRef}
          type="checkbox"
          checked={all}
          onChange={() => onChange(all ? new Set() : new Set(items.map((item) => item.id)))}
          className="size-4 accent-slate-900"
        />
        {allLabel}
      </label>
      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-3 px-3 py-2">
          <label className="flex flex-1 items-center gap-3 text-sm text-slate-800">
            <input
              type="checkbox"
              checked={checked.has(item.id)}
              onChange={() => toggle(item.id)}
              className="size-4 accent-slate-900"
            />
            <span>
              <span className={item.required ? "text-blue-700" : "text-slate-500"}>
                [{item.required ? requiredLabel : optionalLabel}]
              </span>{" "}
              {item.label}
            </span>
          </label>
          <button
            type="button"
            onClick={() => onView(item.id)}
            aria-label={`${item.label} ${viewLabel}`}
            className="text-xs text-slate-500 underline underline-offset-2"
          >
            {viewLabel}
          </button>
        </div>
      ))}
    </fieldset>
  );
}
