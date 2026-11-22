import { useState } from "react";

export function SlidersDemo() {
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(50000);
  const [free, setFree] = useState(false);
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <section className="relative h-72 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
        <h3 className="text-sm font-bold text-slate-900">상품 24개</h3>
        <button
          type="button"
          aria-label="필터"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="grid size-9 place-items-center rounded-lg hover:bg-slate-100"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="size-5 fill-none stroke-slate-800 stroke-2"
          >
            <path d="M4 7h16M4 17h16" strokeLinecap="round" />
            <circle cx="9" cy="7" r="2" className="fill-white" />
            <circle cx="15" cy="17" r="2" className="fill-white" />
          </svg>
        </button>
      </header>
      <p role="status" className="p-4 text-sm text-slate-600">
        {applied ?? "필터 없음"}
      </p>
      {open ? (
        <div className="absolute inset-0 flex items-end bg-slate-900/30">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setApplied(`${price.toLocaleString("ko-KR")}원 이하${free ? ", 무료 배송" : ""}`);
              setOpen(false);
            }}
            className="grid w-full gap-3 rounded-t-2xl bg-white p-4"
          >
            <label className="grid gap-1 text-sm">
              최대 가격 {price.toLocaleString("ko-KR")}원
              <input
                type="range"
                min={10000}
                max={100000}
                step={10000}
                value={price}
                onChange={(event) => setPrice(Number(event.target.value))}
              />
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={free}
                onChange={(event) => setFree(event.currentTarget.checked)}
              />
              무료 배송만
            </label>
            <button
              type="submit"
              className="rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
            >
              적용
            </button>
          </form>
        </div>
      ) : null}
    </section>
  );
}
