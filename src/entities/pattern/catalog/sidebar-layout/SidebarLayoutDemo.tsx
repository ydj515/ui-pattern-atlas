import { useState } from "react";

import { SidebarLayout } from "@/shared/ui/patterns/sidebar-layout/SidebarLayout";

const MENU = ["개요", "멤버", "결제", "설정"] as const;

export function SidebarLayoutDemo() {
  const [wide, setWide] = useState(true);
  const [current, setCurrent] = useState<string>("개요");

  return (
    <div className="space-y-2">
      <div role="group" aria-label="화면 폭" className="flex justify-center gap-1 text-xs">
        {[
          [true, "넓은 화면"],
          [false, "좁은 화면"],
        ].map(([value, label]) => (
          <button
            key={String(label)}
            type="button"
            aria-pressed={wide === value}
            onClick={() => setWide(value as boolean)}
            className="rounded-md border border-slate-300 px-2 py-1 aria-pressed:bg-slate-900 aria-pressed:text-white"
          >
            {label}
          </button>
        ))}
      </div>
      <div
        className="mx-auto h-56 overflow-hidden rounded-xl border border-slate-200 bg-white transition-[width] duration-300 motion-reduce:transition-none"
        style={{ width: wide ? 420 : 260 }}
      >
        <SidebarLayout
          sidebarLabel="워크스페이스 메뉴"
          sidebar={
            <ul className="flex gap-1 @sm:flex-col">
              {MENU.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    aria-current={current === item ? "page" : undefined}
                    onClick={() => setCurrent(item)}
                    className="rounded-md px-2.5 py-1.5 text-sm text-slate-600 hover:bg-slate-200 aria-[current=page]:bg-slate-900 aria-[current=page]:text-white @sm:w-full @sm:text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          }
        >
          <h3 className="text-sm font-semibold text-slate-900">{current}</h3>
          <p className="mt-2 text-sm text-slate-600">{current} 화면의 내용이에요.</p>
        </SidebarLayout>
      </div>
    </div>
  );
}
