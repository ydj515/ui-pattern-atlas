import { useState } from "react";

const SORTS = ["최신순", "인기순", "가격 낮은 순"];

export function CaretDemo() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(SORTS[0]!);
  return (
    <section className="relative h-60 w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-900">상품 24개</h3>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50"
        >
          {sort}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`size-3 fill-slate-700 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9h12l-6 7z" />
          </svg>
        </button>
      </div>
      {open ? (
        <ul
          role="listbox"
          aria-label="정렬"
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute top-14 right-4 z-10 grid w-36 rounded-xl bg-white p-1 text-sm shadow-lg ring-1 ring-slate-200"
        >
          {SORTS.map((item, index) => (
            <li
              key={item}
              role="option"
              aria-selected={item === sort}
              tabIndex={0}
              autoFocus={index === 0}
              onClick={() => {
                setSort(item);
                setOpen(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setSort(item);
                  setOpen(false);
                }
              }}
              className="cursor-pointer rounded-lg px-3 py-1.5 hover:bg-slate-100 aria-selected:font-semibold"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <p role="status" className="mt-6 text-sm text-slate-600">
        {sort}으로 보는 중
      </p>
    </section>
  );
}
