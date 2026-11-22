import { useState } from "react";

import { ScrollableTabs } from "@/shared/ui/patterns/scrollable-tabs/ScrollableTabs";

const TABS = [
  "전체",
  "상의",
  "하의",
  "아우터",
  "원피스",
  "신발",
  "가방",
  "모자",
  "액세서리",
  "홈웨어",
] as const;

export function ScrollableTabsDemo() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white px-2 pb-3">
      <ScrollableTabs
        label="상품 분류"
        tabs={TABS}
        selected={selected}
        onSelect={setSelected}
        prevLabel="이전 분류"
        nextLabel="다음 분류"
      >
        <p className="px-2 text-sm text-slate-600">{TABS[selected]} 상품을 보여 드려요</p>
      </ScrollableTabs>
    </div>
  );
}
