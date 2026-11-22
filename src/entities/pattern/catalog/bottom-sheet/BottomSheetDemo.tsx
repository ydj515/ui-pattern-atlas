import { useState } from "react";
import { BottomSheet } from "@/shared/ui/patterns/bottom-sheet/BottomSheet";

export function BottomSheetDemo() {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("추천순");

  return (
    <div className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4">
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className="justify-self-start rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white"
      >
        정렬 옵션
      </button>
      <p role="status" className="text-sm text-slate-700">
        {sort}
      </p>
      <BottomSheet open={open} title="정렬 기준" closeLabel="닫기" onClose={() => setOpen(false)}>
        <div className="grid gap-2">
          {["추천순", "낮은 가격순"].map((choice) => (
            <button
              key={choice}
              type="button"
              onClick={() => {
                setSort(choice);
                setOpen(false);
              }}
              className="rounded-md bg-slate-100 px-3 py-2 text-left text-sm hover:bg-slate-200"
            >
              {choice}
            </button>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}
