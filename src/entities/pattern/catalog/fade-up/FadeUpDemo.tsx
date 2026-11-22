import { useState } from "react";
import { FadeUp } from "@/shared/ui/patterns/fade-up/FadeUp";

export function FadeUpDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div key={run} className="grid gap-2 rounded-2xl border border-slate-200 bg-white p-5">
        <FadeUp>
          <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700">
            새 기능
          </span>
        </FadeUp>
        <FadeUp delay={120}>
          <h3 className="text-xl font-bold text-slate-900">이제 사진으로 검색하세요</h3>
        </FadeUp>
        <FadeUp delay={240}>
          <p className="text-sm text-slate-600">찍거나 고른 사진과 비슷한 상품을 찾아 드려요.</p>
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
