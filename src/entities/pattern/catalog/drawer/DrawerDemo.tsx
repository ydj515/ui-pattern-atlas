import { useState } from "react";

import { Drawer } from "@/shared/ui/patterns/drawer/Drawer";

const SORT_OPTIONS = ["추천순", "최신순", "가격 낮은순", "가격 높은순"] as const;

export function DrawerDemo() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState<(typeof SORT_OPTIONS)[number]>("추천순");
  const [draftSort, setDraftSort] = useState(sort);

  function openDrawer() {
    setDraftSort(sort);
    setOpen(true);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={openDrawer}
        className="rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
      >
        필터 열기
      </button>
      <p className="text-xs text-slate-500">현재 정렬: {sort}</p>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="필터"
        footer={
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDraftSort("추천순")}
              className="flex-1 rounded-lg border border-slate-300 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              초기화
            </button>
            <button
              type="button"
              onClick={() => {
                setSort(draftSort);
                setOpen(false);
              }}
              className="flex-[2] rounded-lg bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
            >
              적용하기
            </button>
          </div>
        }
      >
        <fieldset>
          <legend className="text-sm font-semibold text-slate-900">정렬</legend>
          <div className="mt-3 space-y-2">
            {SORT_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 text-sm has-checked:border-slate-900"
              >
                <input
                  type="radio"
                  name="drawer-demo-sort"
                  checked={draftSort === option}
                  onChange={() => setDraftSort(option)}
                  className="accent-slate-900"
                />
                {option}
              </label>
            ))}
          </div>
        </fieldset>
      </Drawer>
    </div>
  );
}
