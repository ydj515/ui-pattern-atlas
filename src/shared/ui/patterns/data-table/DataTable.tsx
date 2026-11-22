import { useState } from "react";

export interface Column<Row> {
  readonly key: keyof Row & string;
  readonly label: string;
  readonly numeric?: boolean;
  readonly format?: (value: Row[keyof Row]) => string;
}

export interface DataTableProps<Row> {
  readonly caption: string;
  readonly columns: readonly Column<Row>[];
  readonly rows: readonly Row[];
  readonly rowKey: (row: Row) => string;
  readonly sortLabel?: (label: string) => string;
}

type Sort<Row> = {
  readonly key: keyof Row & string;
  readonly direction: "ascending" | "descending";
} | null;

/**
 * Real <table> for comparing rows by column. Column headers are buttons that sort; the
 * active column has aria-sort, and numbers are right-aligned with tabular figures so they
 * line up. The header stays visible while the body scrolls.
 */
export function DataTable<Row>({
  caption,
  columns,
  rows,
  rowKey,
  sortLabel = (label) => `${label} 기준 정렬`,
}: DataTableProps<Row>) {
  const [sort, setSort] = useState<Sort<Row>>(null);

  const sorted = sort
    ? [...rows].sort((a, b) => {
        const left = a[sort.key];
        const right = b[sort.key];
        const order = left < right ? -1 : left > right ? 1 : 0;
        return sort.direction === "ascending" ? order : -order;
      })
    : rows;

  function toggle(key: keyof Row & string) {
    setSort((current) =>
      current?.key === key && current.direction === "descending"
        ? { key, direction: "ascending" }
        : { key, direction: "descending" },
    );
  }

  return (
    <div className="max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="sticky top-0 bg-slate-50">
          <tr>
            {columns.map((column) => {
              const active = sort?.key === column.key;
              return (
                <th
                  key={column.key}
                  scope="col"
                  aria-sort={active ? sort.direction : undefined}
                  className={`border-b border-slate-200 px-3 py-2 font-medium text-slate-600 ${column.numeric ? "text-right" : "text-left"}`}
                >
                  <button
                    type="button"
                    aria-label={sortLabel(column.label)}
                    onClick={() => toggle(column.key)}
                    className={`inline-flex items-center gap-1 rounded hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${column.numeric ? "flex-row-reverse" : ""}`}
                  >
                    {column.label}
                    <span
                      aria-hidden="true"
                      className={active ? "text-slate-900" : "text-slate-300"}
                    >
                      {active && sort.direction === "ascending" ? "▲" : "▼"}
                    </span>
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row) => (
            <tr
              key={rowKey(row)}
              className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50"
            >
              {columns.map((column, index) => {
                const value = row[column.key];
                const text = column.format ? column.format(value) : String(value);
                const Cell = index === 0 ? "th" : "td";
                return (
                  <Cell
                    key={column.key}
                    scope={index === 0 ? "row" : undefined}
                    className={`px-3 py-2 text-slate-800 ${index === 0 ? "font-medium" : ""} ${column.numeric ? "text-right tabular-nums" : "text-left"}`}
                  >
                    {text}
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
