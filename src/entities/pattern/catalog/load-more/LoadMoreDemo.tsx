import { useState } from "react";

import { LoadMore } from "@/shared/ui/patterns/load-more/LoadMore";

const ALL = Array.from({ length: 24 }, (_, index) => `${index + 1}번째 후기`);
const BATCH = 6;

export function LoadMoreDemo() {
  const [shown, setShown] = useState(BATCH);

  return (
    <div className="h-80 w-full max-w-xs overflow-y-auto p-1">
      <LoadMore
        items={ALL.slice(0, shown)}
        total={ALL.length}
        getKey={(item) => item}
        renderItem={(item) => (
          <span className="block px-4 py-2.5 text-sm text-slate-700">{item}</span>
        )}
        buttonLabel={(count, total) => `더 보기 (${count}/${total})`}
        onLoadMore={() => setShown((value) => Math.min(ALL.length, value + BATCH))}
      />
    </div>
  );
}
