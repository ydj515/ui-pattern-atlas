import { useState } from "react";
import { Typewriter } from "@/shared/ui/patterns/typewriter/Typewriter";

export function TypewriterDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div className="rounded-2xl bg-slate-900 p-5 text-white">
        <p className="text-xs text-white/70">추천 도우미</p>
        <p className="mt-2 min-h-16 text-2xl font-bold">
          <Typewriter key={run} text="오늘 저녁 메뉴를 골라 드릴게요" />
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
