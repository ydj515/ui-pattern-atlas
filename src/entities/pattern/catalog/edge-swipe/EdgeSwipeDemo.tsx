import { useState } from "react";
import { EdgeSwipe } from "@/shared/ui/patterns/edge-swipe/EdgeSwipe";

const FOLDERS = ["받은 편지함", "보낸 편지함", "임시 보관함"];
const MAILS = ["주간 회의 안내", "결제 영수증", "새 댓글 알림"];

export function EdgeSwipeDemo() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(FOLDERS[0]);

  return (
    <div className="h-64 w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <EdgeSwipe
        open={open}
        onOpenChange={setOpen}
        panelLabel="편지함"
        width={168}
        panel={
          <ul className="grid gap-1 p-2 pt-4">
            {FOLDERS.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  aria-current={item === folder ? "page" : undefined}
                  onClick={() => {
                    setFolder(item);
                    setOpen(false);
                  }}
                  className="w-full rounded-lg px-2 py-2 text-left text-sm aria-[current=page]:bg-blue-50 aria-[current=page]:font-semibold aria-[current=page]:text-blue-700"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        }
      >
        <header className="flex items-center gap-2 border-b border-slate-100 px-2 py-2">
          <button
            type="button"
            aria-label="편지함 열기"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="grid size-8 place-items-center rounded-md hover:bg-slate-100"
          >
            <span aria-hidden="true">☰</span>
          </button>
          <h2 className="text-sm font-semibold text-slate-900">{folder}</h2>
        </header>
        <ul className="divide-y divide-slate-100 text-sm">
          {MAILS.map((mail) => (
            <li key={mail} className="px-4 py-3 text-slate-700">
              {mail}
            </li>
          ))}
        </ul>
      </EdgeSwipe>
    </div>
  );
}
