import { useEffect, useRef, useState } from "react";

import { TopLoadingBar } from "@/shared/ui/patterns/top-loading-bar/TopLoadingBar";

const PAGES = [
  { href: "#home", label: "홈", body: "새 소식 3건이 있어요" },
  { href: "#news", label: "소식", body: "이번 주 업데이트를 정리했어요" },
  { href: "#contact", label: "문의", body: "평일 오전 10시부터 답해 드려요" },
] as const;

export function TopLoadingBarDemo() {
  const [current, setCurrent] = useState<string>("#home");
  const [loading, setLoading] = useState(false);
  const [slow, setSlow] = useState(false);
  const timerRef = useRef(0);
  const page = PAGES.find((item) => item.href === current)!;

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function navigate(href: string) {
    if (href === current) return;
    window.clearTimeout(timerRef.current);
    setLoading(true);
    timerRef.current = window.setTimeout(
      () => {
        setCurrent(href);
        setLoading(false);
      },
      slow ? 2500 : 1200,
    );
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <div
        className="relative overflow-hidden rounded-xl border border-slate-200 bg-white"
        aria-busy={loading}
      >
        <TopLoadingBar
          loading={loading}
          label="페이지 불러오는 중"
          className="absolute inset-x-0 top-0"
        />
        <nav aria-label="사이트" className="flex gap-1 border-b border-slate-100 px-3 py-2">
          {PAGES.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.href === current ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault();
                navigate(item.href);
              }}
              className="rounded-md px-2.5 py-1 text-sm text-slate-600 hover:bg-slate-100 aria-[current=page]:font-semibold aria-[current=page]:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="px-4 py-8">
          <h3 className="text-base font-semibold text-slate-900">{page.label}</h3>
          <p className="mt-1 text-sm text-slate-600">{page.body}</p>
        </div>
      </div>
      <label className="flex items-center justify-end gap-2 text-xs text-slate-600">
        <input type="checkbox" checked={slow} onChange={(event) => setSlow(event.target.checked)} />
        느린 네트워크
      </label>
    </div>
  );
}
