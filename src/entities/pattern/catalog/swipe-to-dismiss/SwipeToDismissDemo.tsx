import { useRef, useState } from "react";
import { SwipeToDismiss } from "@/shared/ui/patterns/swipe-to-dismiss/SwipeToDismiss";

const SHARE = ["링크 복사", "메시지로 보내기", "저장"];

export function SwipeToDismissDemo() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <section className="relative h-72 w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <div className="p-4">
        <p className="text-sm font-semibold text-slate-900">주말 사진</p>
        <span className="mt-2 block h-28 rounded-xl bg-gradient-to-br from-amber-200 to-rose-300" />
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen(true)}
          className="mt-3 rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
        >
          공유하기
        </button>
      </div>
      {open ? (
        <div className="absolute inset-0 flex flex-col justify-end bg-slate-900/30">
          <SwipeToDismiss title="공유" closeLabel="닫기" onDismiss={close}>
            <ul className="grid gap-1">
              {SHARE.map((item, index) => (
                <li key={item}>
                  <button
                    type="button"
                    autoFocus={index === 0}
                    onClick={close}
                    className="w-full rounded-lg px-2 py-2 text-left hover:bg-slate-100"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </SwipeToDismiss>
        </div>
      ) : null}
    </section>
  );
}
