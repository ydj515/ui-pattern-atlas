import { useState } from "react";

const MENU = ["홈", "주문 내역", "찜 목록", "설정"];

export function HamburgerDemo() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState("홈");
  return (
    <div className="relative h-72 w-64 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <button
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="grid size-9 place-items-center rounded-lg hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-slate-800 stroke-2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
        <h3 className="text-sm font-bold text-slate-900">{page}</h3>
      </header>
      <p className="p-4 text-sm text-slate-600">동네가게 오늘의 추천</p>
      {open ? (
        <div className="absolute inset-0 flex bg-slate-900/30" onClick={() => setOpen(false)}>
          <nav
            aria-label="메뉴"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
            className="h-full w-44 bg-white p-2 shadow-xl"
          >
            {MENU.map((item, index) => (
              <button
                key={item}
                type="button"
                autoFocus={index === 0}
                aria-current={item === page ? "page" : undefined}
                onClick={() => {
                  setPage(item);
                  setOpen(false);
                }}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 aria-[current=page]:font-semibold"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
