import { useState } from "react";

const APPS = [
  ["메일", "bg-rose-200"],
  ["채팅", "bg-violet-200"],
  ["일정", "bg-sky-200"],
  ["메모", "bg-amber-200"],
  ["사진", "bg-emerald-200"],
  ["설정", "bg-slate-200"],
];

export function WaffleDemo() {
  const [open, setOpen] = useState(false);
  const [app, setApp] = useState("메일");
  return (
    <div className="relative h-64 w-72 rounded-3xl border border-slate-200 bg-white">
      <header className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
        <button
          type="button"
          aria-label="앱 전환"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-9 place-items-center rounded-lg hover:bg-slate-100"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-slate-700">
            {[5, 12, 19].flatMap((y) =>
              [5, 12, 19].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2" />),
            )}
          </svg>
        </button>
        <h3 className="text-sm font-bold text-slate-900">{app}</h3>
      </header>
      {open ? (
        <div
          role="dialog"
          aria-label="앱 전환"
          onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
          className="absolute top-12 left-3 z-10 grid w-52 grid-cols-3 gap-1 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200"
        >
          {APPS.map(([name, tone], index) => (
            <button
              key={name}
              type="button"
              autoFocus={index === 0}
              onClick={() => {
                setApp(name!);
                setOpen(false);
              }}
              className="grid justify-items-center gap-1 rounded-xl py-2 text-xs text-slate-700 hover:bg-slate-100"
            >
              <span aria-hidden="true" className={`size-8 rounded-full ${tone}`} />
              {name}
            </button>
          ))}
        </div>
      ) : null}
      <p className="p-4 text-sm text-slate-500">둥근 점 아홉 개 아이콘으로 다른 앱으로 이동해요</p>
    </div>
  );
}
