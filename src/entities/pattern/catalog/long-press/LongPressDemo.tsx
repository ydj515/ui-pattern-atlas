import { useEffect, useRef, useState } from "react";
import { LongPress } from "@/shared/ui/patterns/long-press/LongPress";

const ACTIONS = ["답장", "복사", "고정"];

export function LongPressDemo() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) menuRef.current?.querySelector("button")?.focus();
  }, [open]);

  function choose(action: string) {
    setDone(action);
    setOpen(false);
  }

  return (
    <section className="w-full max-w-xs rounded-2xl bg-slate-50 p-4">
      <LongPress label="메시지, 길게 눌러 더 보기" onLongPress={() => setOpen(true)}>
        <span className="block rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition-transform active:scale-95 motion-reduce:transition-none">
          내일 몇 시에 만나요?
        </span>
      </LongPress>
      {open ? (
        <div
          ref={menuRef}
          role="menu"
          aria-label="메시지 메뉴"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
          className="mt-2 flex w-fit gap-1 rounded-xl bg-white p-1 shadow-lg"
        >
          {ACTIONS.map((action) => (
            <button
              key={action}
              type="button"
              role="menuitem"
              onClick={() => choose(action)}
              className="rounded-lg px-3 py-1.5 text-sm hover:bg-slate-100 focus-visible:bg-slate-100"
            >
              {action}
            </button>
          ))}
        </div>
      ) : null}
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {done ? `${done} 선택함` : ""}
      </p>
    </section>
  );
}
