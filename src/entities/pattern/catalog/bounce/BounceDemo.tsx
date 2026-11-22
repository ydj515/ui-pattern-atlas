import { useState } from "react";
import { Bounce } from "@/shared/ui/patterns/bounce/Bounce";

export function BounceDemo() {
  const [count, setCount] = useState(1);
  const [trigger, setTrigger] = useState(0);

  return (
    <section className="w-full max-w-xs overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <span className="text-sm font-semibold text-slate-900">상점</span>
        <Bounce trigger={trigger}>
          <span className="relative text-sm text-slate-700">
            장바구니
            <span className="ml-1 rounded-full bg-rose-600 px-1.5 text-xs text-white tabular-nums">
              {count}
            </span>
          </span>
        </Bounce>
      </header>
      <div className="p-4">
        <span className="block h-28 rounded-xl bg-gradient-to-br from-amber-100 to-amber-300" />
        <p className="mt-2 text-sm font-semibold text-slate-900">린넨 셔츠</p>
        <button
          type="button"
          onClick={() => {
            setCount((value) => value + 1);
            setTrigger((value) => value + 1);
          }}
          className="mt-2 w-full rounded-lg bg-slate-900 py-2 text-sm text-white"
        >
          장바구니 담기
        </button>
      </div>
      <p role="status" className="sr-only">
        장바구니 {count}개
      </p>
    </section>
  );
}
