import { useState } from "react";

import { CollapsiblePanel } from "@/shared/ui/patterns/collapsible-panel/CollapsiblePanel";

export function CollapsiblePanelDemo() {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-56 w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
      <main className="grid flex-1 place-items-center p-4">
        <div className="grid h-24 w-32 place-items-center rounded-lg bg-white text-xs text-slate-500 shadow-sm">
          캔버스
        </div>
      </main>
      <CollapsiblePanel
        title="속성"
        open={open}
        onOpenChange={setOpen}
        collapseLabel="속성 패널 접기"
        expandLabel="속성 패널 펼치기"
      >
        <dl className="space-y-2 text-xs">
          <div className="flex justify-between">
            <dt className="text-slate-500">너비</dt>
            <dd>128</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">높이</dt>
            <dd>96</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-slate-500">모서리</dt>
            <dd>8</dd>
          </div>
        </dl>
      </CollapsiblePanel>
    </div>
  );
}
