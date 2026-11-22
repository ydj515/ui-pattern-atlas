import { useState } from "react";

import { FeatureDot } from "@/shared/ui/patterns/feature-dot/FeatureDot";

const MENU = ["대시보드", "보고서", "설정"] as const;

export function FeatureDotDemo() {
  const [seen, setSeen] = useState(false);
  const [current, setCurrent] = useState<string>("대시보드");

  return (
    <div className="flex w-full max-w-xs gap-3 rounded-xl border border-slate-200 bg-white p-2">
      <nav aria-label="메뉴" className="w-28">
        <ul className="space-y-0.5">
          {MENU.map((item) => (
            <li key={item}>
              <button
                type="button"
                aria-current={current === item ? "page" : undefined}
                onClick={() => {
                  setCurrent(item);
                  if (item === "보고서") setSeen(true);
                }}
                className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-100 aria-[current=page]:bg-slate-900 aria-[current=page]:text-white"
              >
                {item}
                {item === "보고서" ? <FeatureDot show={!seen} label="새 기능" /> : null}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex-1 p-2 text-sm">
        <p className="font-semibold text-slate-900">{current}</p>
        {seen ? (
          <button
            type="button"
            onClick={() => setSeen(false)}
            className="mt-2 text-xs text-slate-500 underline"
          >
            점 다시 보기
          </button>
        ) : null}
      </div>
    </div>
  );
}
