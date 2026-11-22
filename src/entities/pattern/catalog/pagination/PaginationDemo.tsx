import { useState } from "react";

import { Pagination } from "@/shared/ui/patterns/pagination/Pagination";

const TOTAL_PAGES = 20;
const PAGE_SIZE = 3;

export function PaginationDemo() {
  const [page, setPage] = useState(1);
  const firstItem = (page - 1) * PAGE_SIZE + 1;

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4">
      <ul className="w-full divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {Array.from({ length: PAGE_SIZE }, (_, index) => (
          <li key={firstItem + index} className="px-4 py-2.5 text-sm text-slate-700">
            주문 #{String(firstItem + index).padStart(4, "0")}
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalPages={TOTAL_PAGES}
        onPageChange={setPage}
        label="주문 목록 페이지"
        previousLabel="이전 페이지"
        nextLabel="다음 페이지"
        pageLabel={(value) => `${value}페이지`}
      />
    </div>
  );
}
