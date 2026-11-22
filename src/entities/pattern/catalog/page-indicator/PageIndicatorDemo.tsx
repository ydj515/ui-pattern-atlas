import { useState } from "react";

import { PageIndicator } from "@/shared/ui/patterns/page-indicator/PageIndicator";

const PAGES = [
  "할 일을 한곳에 모아요",
  "마감일을 알려 드려요",
  "팀과 함께 나눠요",
  "이제 시작해 볼까요",
] as const;

export function PageIndicatorDemo() {
  const [page, setPage] = useState(0);

  return (
    <div className="flex w-60 flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <p className="grid h-20 place-items-center text-center text-base font-semibold text-slate-900">
        {PAGES[page]}
      </p>
      <PageIndicator
        count={PAGES.length}
        current={page}
        onSelect={setPage}
        pageLabel={(index, total) => `${index + 1} / ${total}`}
      />
      <button
        type="button"
        onClick={() => setPage((value) => (value + 1) % PAGES.length)}
        className="w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {page === PAGES.length - 1 ? "처음으로" : "다음"}
      </button>
    </div>
  );
}
