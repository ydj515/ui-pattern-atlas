import { useState } from "react";
import { BlurIn } from "@/shared/ui/patterns/blur-in/BlurIn";

export function BlurInDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-sky-50 p-6">
        <p className="text-xs text-slate-600">오늘의 문장</p>
        <BlurIn key={run}>
          <p className="mt-2 text-2xl font-semibold text-slate-900">
            작은 습관이 큰 변화를 만듭니다
          </p>
        </BlurIn>
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
