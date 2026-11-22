import { useState } from "react";
import { AnimatedHighlight } from "@/shared/ui/patterns/animated-highlight/AnimatedHighlight";

export function AnimatedHighlightDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h3 className="text-base font-bold text-slate-900">프리미엄 요금제</h3>
        <p key={run} className="mt-2 text-lg leading-relaxed text-slate-800">
          가입하면 <AnimatedHighlight>첫 달은 무료</AnimatedHighlight>예요. 언제든 해지할 수 있어요.
        </p>
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
