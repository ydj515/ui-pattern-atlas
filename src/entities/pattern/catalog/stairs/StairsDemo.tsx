import { useState } from "react";

const SECTIONS = ["서울숲", "한강공원", "인왕산"];

export function StairsDemo() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  return (
    <section className="relative h-64 w-72 rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
        <h3 className="text-sm font-bold text-slate-900">주말 산책 코스</h3>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 stroke-slate-800 stroke-2">
            <path d="M4 6h10M8 12h10M12 18h8" strokeLinecap="round" />
          </svg>
          목차
        </button>
      </header>
      {open ? (
        <nav
          aria-label="목차"
          className="absolute top-12 right-3 z-10 grid w-40 rounded-xl bg-white p-1 text-sm shadow-lg ring-1 ring-slate-200"
        >
          {SECTIONS.map((item, index) => (
            <button
              key={item}
              type="button"
              autoFocus={index === 0}
              onClick={() => {
                setSection(item);
                setOpen(false);
              }}
              className="rounded-lg px-3 py-1.5 text-left hover:bg-slate-100"
            >
              {item}
            </button>
          ))}
        </nav>
      ) : null}
      <p role="status" className="p-4 text-sm text-slate-600">
        {section
          ? `${section} 부분으로 이동했어요`
          : "엇갈린 가로줄 아이콘은 뜻이 덜 알려져 있어 글자를 함께 둬요"}
      </p>
    </section>
  );
}
