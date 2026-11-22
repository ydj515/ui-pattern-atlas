import { useState } from "react";
import { CompletionStamp } from "@/shared/ui/patterns/completion-stamp/CompletionStamp";

const GOAL = 8;

export function CompletionStampDemo() {
  const [cups, setCups] = useState(7);
  const done = cups >= GOAL;
  return (
    <section className="relative w-72 rounded-3xl border border-slate-200 bg-white p-5">
      <h3 className="text-base font-bold text-slate-900">물 8잔 마시기</h3>
      <p className="mt-1 text-sm text-slate-600 tabular-nums">
        {cups}/{GOAL}잔
      </p>
      <ul aria-hidden="true" className="mt-3 flex gap-1">
        {Array.from({ length: GOAL }, (_, index) => (
          <li
            key={index}
            className={`h-8 w-5 rounded-b-md border-2 ${index < cups ? "border-sky-500 bg-sky-200" : "border-slate-200"}`}
          />
        ))}
      </ul>
      <p role="status" className="mt-3 h-4 text-xs font-semibold text-rose-700">
        {done ? "미션을 끝냈어요" : ""}
      </p>
      <button
        type="button"
        onClick={() => setCups(done ? 7 : GOAL)}
        className="mt-3 w-full rounded-lg bg-slate-900 py-2 text-sm font-semibold text-white"
      >
        {done ? "처음부터" : "한 잔 더"}
      </button>
      <CompletionStamp show={done} text="완료" />
    </section>
  );
}
