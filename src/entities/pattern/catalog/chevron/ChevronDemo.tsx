import { useState } from "react";

const ROWS = ["알림", "개인정보", "화면"];

function Chevron({ back = false }: { readonly back?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`size-4 fill-none stroke-current stroke-2 ${back ? "rotate-180" : ""}`}
    >
      <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDemo() {
  const [screen, setScreen] = useState<string | null>(null);
  return (
    <section className="h-64 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {screen ? (
        <div>
          <header className="flex items-center gap-1 border-b border-slate-100 px-2 py-2">
            <button
              type="button"
              autoFocus
              onClick={() => setScreen(null)}
              className="flex items-center rounded-lg px-2 py-1 text-sm text-blue-700 hover:bg-slate-100"
            >
              <Chevron back />
              설정
            </button>
            <h3 className="text-sm font-bold text-slate-900">{screen}</h3>
          </header>
          <p className="p-4 text-sm text-slate-600">{screen} 설정 화면</p>
        </div>
      ) : (
        <>
          <h3 className="border-b border-slate-100 px-4 py-3 text-sm font-bold text-slate-900">
            설정
          </h3>
          <ul className="divide-y divide-slate-100">
            {ROWS.map((row) => (
              <li key={row}>
                <button
                  type="button"
                  onClick={() => setScreen(row)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm hover:bg-slate-50"
                >
                  {row}
                  <span className="text-slate-400">
                    <Chevron />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
