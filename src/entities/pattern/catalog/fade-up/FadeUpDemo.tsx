import { useState } from "react";
import { FadeUp } from "@/shared/ui/patterns/fade-up/FadeUp";

export function FadeUpDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div key={run} className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-5">
        <FadeUp>
          <h3 className="text-xl font-bold text-slate-900">이제 사진으로 검색하세요</h3>
        </FadeUp>
        <FadeUp delay={120}>
          <p className="text-sm text-slate-600">찍거나 고른 사진과 비슷한 상품을 찾아 드려요.</p>
        </FadeUp>
        <FadeUp delay={240}>
          <button
            type="button"
            className="mt-1 rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
          >
            써 보기
          </button>
        </FadeUp>
      </div>
      <div>
        <button
          type="button"
          onClick={() => setRun((value) => value + 1)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
        >
          다시 보기
        </button>
      </div>
    </section>
  );
}
