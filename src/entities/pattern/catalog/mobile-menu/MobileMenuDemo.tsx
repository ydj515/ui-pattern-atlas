import { useState } from "react";

import { MobileMenu } from "@/shared/ui/patterns/mobile-menu/MobileMenu";

const LINKS = [
  { href: "#home", label: "홈" },
  { href: "#product", label: "제품" },
  { href: "#pricing", label: "가격" },
  { href: "#blog", label: "블로그" },
] as const;

export function MobileMenuDemo() {
  const [current, setCurrent] = useState<string>("#home");
  const page = LINKS.find((link) => link.href === current)?.label;

  return (
    <div className="h-72 w-60 rounded-3xl border-4 border-slate-900 bg-white">
      <header className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
        <span className="text-sm font-bold text-slate-900">모아</span>
        <MobileMenu
          label="주 메뉴"
          openLabel="메뉴 열기"
          closeLabel="메뉴 닫기"
          links={LINKS}
          current={current}
          onNavigate={setCurrent}
        />
      </header>
      <p className="p-5 text-sm text-slate-600">{page} 페이지</p>
    </div>
  );
}
