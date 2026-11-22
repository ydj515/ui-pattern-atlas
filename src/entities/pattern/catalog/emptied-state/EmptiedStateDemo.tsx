import { useEffect, useRef, useState } from "react";

import { EmptiedState } from "@/shared/ui/patterns/emptied-state/EmptiedState";

export function EmptiedStateDemo() {
  const [inCart, setInCart] = useState(true);
  const removeRef = useRef<HTMLButtonElement>(null);
  const restoredRef = useRef(false);

  useEffect(() => {
    // After undo, put focus back on the restored item's button.
    if (inCart && restoredRef.current) {
      restoredRef.current = false;
      removeRef.current?.focus();
    }
  }, [inCart]);

  if (!inCart) {
    return (
      <div className="w-full max-w-xs">
        <EmptiedState
          title="장바구니가 비었어요"
          description="방금 ‘무선 이어폰’을 뺐어요."
          undoLabel="되돌리기"
          onUndo={() => {
            restoredRef.current = true;
            setInCart(true);
          }}
          nextAction={{ label: "쇼핑 계속하기", href: "#shop" }}
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white">
      <p className="border-b border-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900">
        장바구니
      </p>
      <div className="flex items-center justify-between px-4 py-3 text-sm">
        <span>
          무선 이어폰
          <span className="block text-xs text-slate-500">89,000원</span>
        </span>
        <button
          ref={removeRef}
          type="button"
          onClick={() => setInCart(false)}
          className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
        >
          삭제
        </button>
      </div>
    </div>
  );
}
