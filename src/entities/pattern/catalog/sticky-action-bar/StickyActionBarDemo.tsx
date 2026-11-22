import { useState } from "react";

import { StickyActionBar } from "@/shared/ui/patterns/sticky-action-bar/StickyActionBar";

export function StickyActionBarDemo() {
  const [added, setAdded] = useState(false);

  return (
    <div className="h-72 w-56 overflow-y-auto rounded-3xl border-4 border-slate-900 bg-white">
      <div aria-hidden="true" className="h-32 bg-gradient-to-br from-amber-200 to-rose-300" />
      <div className="space-y-2 p-4 text-sm leading-6 text-slate-700">
        <h3 className="text-base font-semibold text-slate-900">린넨 셔츠</h3>
        <p>가볍고 시원한 린넨 셔츠예요. 봄부터 초가을까지 입기 좋아요.</p>
        <p>세탁기에 넣어도 되지만 찬물에 단독 세탁을 권해요.</p>
        <p>모델은 키 175cm, M 사이즈를 입었어요.</p>
      </div>
      <StickyActionBar
        summary={
          <>
            <span className="block text-xs text-slate-500">판매가</span>
            <span className="font-semibold text-slate-900">39,000원</span>
          </>
        }
        action={
          <button
            type="button"
            onClick={() => setAdded(true)}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            {added ? "담았어요" : "장바구니 담기"}
          </button>
        }
      />
    </div>
  );
}
