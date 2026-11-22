import { useEffect, useRef, type ReactNode } from "react";

export interface SelectableTableProps<Row> {
  readonly caption: string;
  readonly headers: readonly string[];
  readonly rows: readonly Row[];
  readonly rowKey: (row: Row) => string;
  /** Cells after the checkbox; the first one names the row. */
  readonly renderCells: (row: Row) => readonly ReactNode[];
  readonly selected: ReadonlySet<string>;
  readonly onSelectedChange: (selected: ReadonlySet<string>) => void;
  /** Bar shown while something is selected, e.g. the count and bulk buttons. */
  readonly actions: ReactNode;
  readonly selectAllLabel?: string;
  readonly selectRowLabel?: (row: Row) => string;
}

/**
 * Table with a checkbox per row and a select-all checkbox in the header that turns
 * indeterminate when only some rows are picked. A bar with bulk actions appears above
 * the table while anything is selected, and each checkbox is named after its row.
 */
export function SelectableTable<Row>({
  caption,
  headers,
  rows,
  rowKey,
  renderCells,
  selected,
  onSelectedChange,
  actions,
  selectAllLabel = "모두 선택",
  selectRowLabel = () => "선택",
}: SelectableTableProps<Row>) {
  const allRef = useRef<HTMLInputElement>(null);
  const all = rows.length > 0 && rows.every((row) => selected.has(rowKey(row)));
  const some = !all && rows.some((row) => selected.has(rowKey(row)));

  useEffect(() => {
    if (allRef.current) allRef.current.indeterminate = some;
  }, [some]);

  function toggle(key: string) {
    const next = new Set(selected);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    onSelectedChange(next);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div
        aria-live="polite"
        className={`flex min-h-11 items-center gap-2 border-b border-slate-100 px-3 text-sm ${selected.size > 0 ? "bg-blue-50" : ""}`}
      >
        {selected.size > 0 ? actions : null}
      </div>
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left text-slate-600">
            <th scope="col" className="w-10 px-3 py-2">
              <input
                ref={allRef}
                type="checkbox"
                aria-label={selectAllLabel}
                checked={all}
                onChange={() => onSelectedChange(all ? new Set() : new Set(rows.map(rowKey)))}
                className="size-4 accent-blue-600"
              />
            </th>
            {headers.map((header) => (
              <th key={header} scope="col" className="px-3 py-2 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const key = rowKey(row);
            const isSelected = selected.has(key);
            const cells = renderCells(row);
            return (
              <tr
                key={key}
                aria-selected={isSelected}
                className="border-b border-slate-100 last:border-b-0 aria-selected:bg-blue-50/60"
              >
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    aria-label={selectRowLabel(row)}
                    checked={isSelected}
                    onChange={() => toggle(key)}
                    className="size-4 accent-blue-600"
                  />
                </td>
                {cells.map((cell, index) =>
                  index === 0 ? (
                    <th
                      key={index}
                      scope="row"
                      className="px-3 py-2 text-left font-medium text-slate-900"
                    >
                      {cell}
                    </th>
                  ) : (
                    <td key={index} className="px-3 py-2 text-slate-700">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
