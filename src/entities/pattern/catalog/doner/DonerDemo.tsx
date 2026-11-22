import { useState } from "react";

const SORTS = ["추천순", "가격 낮은 순", "후기 많은 순"];

export function DonerDemo() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(SORTS[0]!);
  return (
    <section className="relative h-60 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
        <h3 className="text-sm font-bold text-slate-900">검색 결과 24개</h3>
        <button
          type="button"
          aria-label="정렬"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="grid size-9 place-items-center rounded-lg hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-slate-800 stroke-2">
            <path d="M4 7h16M7 12h10M10 17h4" strokeLinecap="round" />
          </svg>
        </button>
      </header>
      <p role="status" className="p-4 text-sm text-slate-600">
        {sort}으로 보는 중
      </p>
      {open ? (
        <div
          className="absolute inset-0 flex items-end bg-slate-900/30"
          onClick={() => setOpen(false)}
        >
          <fieldset
            onClick={(event) => event.stopPropagation()}
            className="w-full rounded-t-2xl bg-white p-4"
          >
            <legend className="mb-2 text-sm font-bold text-slate-900">정렬</legend>
            {SORTS.map((item) => (
              <label key={item} className="flex items-center gap-2 py-1.5 text-sm">
                <input
                  type="radio"
                  name="doner-sort"
                  checked={item === sort}
                  onChange={() => {
                    setSort(item);
                    setOpen(false);
                  }}
                />
                {item}
              </label>
            ))}
          </fieldset>
        </div>
      ) : null}
    </section>
  );
}
