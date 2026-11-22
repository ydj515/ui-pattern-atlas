import { useState } from "react";
import { TextScramble } from "@/shared/ui/patterns/text-scramble/TextScramble";

export function TextScrambleDemo() {
  const [run, setRun] = useState(0);
  return (
    <section className="w-full max-w-sm rounded-2xl bg-slate-900 p-5 text-white">
      <p className="text-xs text-white/70">서버 연결</p>
      <p role="status" className="mt-2 h-8 text-2xl font-bold">
        {run > 0 ? (
          <TextScramble key={run} text="보안 연결 완료" />
        ) : (
          <span className="text-white/50">연결 대기 중</span>
        )}
      </p>
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="mt-4 rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-900"
      >
        연결하기
      </button>
    </section>
  );
}
