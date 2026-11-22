import { useState } from "react";
import { MaskReveal } from "@/shared/ui/patterns/mask-reveal/MaskReveal";

export function MaskRevealDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="grid w-full max-w-sm gap-4">
      <div className="rounded-2xl bg-stone-900 p-6 text-stone-50">
        <MaskReveal
          key={run}
          lines={["가을 컬렉션", "10월 1일 공개"]}
          gap={140}
          className="text-3xl leading-tight font-bold"
        />
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
