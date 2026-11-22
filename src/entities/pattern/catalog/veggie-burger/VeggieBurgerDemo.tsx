import { useState } from "react";

const MENU = ["홈", "탐색", "저장함"];

export function VeggieBurgerDemo() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("홈");
  return (
    <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
        <h3 className="text-sm font-bold text-slate-900">{page}</h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-slate-800 stroke-2">
            <path d="M5 9h14M5 15h14" strokeLinecap="round" />
          </svg>
          메뉴
        </button>
      </header>
      {open ? (
        <nav
          aria-label="메뉴"
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute inset-0 grid content-start gap-1 bg-white p-4"
        >
          <button
            type="button"
            autoFocus
            onClick={() => setOpen(false)}
            className="justify-self-end rounded-lg px-2 py-1 text-sm text-slate-600 hover:bg-slate-100"
          >
            닫기
          </button>
          {MENU.map((item) => (
            <button
              key={item}
              type="button"
              aria-current={item === page ? "page" : undefined}
              onClick={() => {
                setPage(item);
                setOpen(false);
              }}
              className="rounded-lg px-3 py-3 text-left text-lg font-semibold hover:bg-slate-100 aria-[current=page]:text-blue-700"
            >
              {item}
            </button>
          ))}
        </nav>
      ) : null}
      <p className="p-4 text-sm text-slate-500">
        가로줄 두 개 아이콘 옆에 메뉴라는 글자를 함께 둬요
      </p>
    </div>
  );
}
