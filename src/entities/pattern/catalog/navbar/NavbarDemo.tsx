import { useState } from "react";

import { Navbar } from "@/shared/ui/patterns/navbar/Navbar";

const ITEMS = [
  { href: "#home", label: "홈" },
  { href: "#product", label: "제품" },
  { href: "#pricing", label: "가격" },
  { href: "#blog", label: "블로그" },
] as const;

export function NavbarDemo() {
  const [current, setCurrent] = useState<string>("#home");
  const page = ITEMS.find((item) => item.href === current)?.label;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white">
      <Navbar
        brand="모아"
        label="주 메뉴"
        items={ITEMS}
        current={current}
        onNavigate={setCurrent}
        action={
          <button
            type="button"
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
          >
            시작하기
          </button>
        }
      />
      <p className="px-4 py-10 text-center text-sm text-slate-600">{page} 페이지</p>
    </div>
  );
}
