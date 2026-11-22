import { useState } from "react";

import { Breadcrumb, type BreadcrumbItem } from "@/shared/ui/patterns/breadcrumb/Breadcrumb";

const FULL_TRAIL: readonly BreadcrumbItem[] = [
  { label: "홈", href: "/" },
  { label: "가전", href: "/electronics" },
  { label: "주방가전", href: "/electronics/kitchen" },
  { label: "에어프라이어", href: "/electronics/kitchen/air-fryer" },
];

export function BreadcrumbDemo() {
  const [depth, setDepth] = useState(FULL_TRAIL.length);
  const trail = FULL_TRAIL.slice(0, depth);
  const current = trail.at(-1);

  return (
    <div className="w-full max-w-md space-y-4">
      <Breadcrumb
        items={trail}
        label="현재 위치"
        onNavigate={(item, event) => {
          // A client-side router would navigate here instead of reloading the page.
          event.preventDefault();
          setDepth(FULL_TRAIL.indexOf(item) + 1);
        }}
      />
      <div className="rounded-xl border border-slate-200 bg-white p-4">
        <p className="text-base font-semibold text-slate-900">{current?.label}</p>
        <p className="mt-1 text-xs text-slate-500">상위 경로를 눌러 이동해 보세요.</p>
        {depth < FULL_TRAIL.length ? (
          <button
            type="button"
            onClick={() => setDepth(FULL_TRAIL.length)}
            className="mt-3 text-xs font-medium text-slate-900 underline underline-offset-2"
          >
            상품 페이지로 돌아가기
          </button>
        ) : null}
      </div>
    </div>
  );
}
