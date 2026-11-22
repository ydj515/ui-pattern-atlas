import { useState } from "react";
import { SuccessCheckmark } from "@/shared/ui/patterns/success-checkmark/SuccessCheckmark";

export function SuccessCheckmarkDemo() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  function send() {
    setState("sending");
    window.setTimeout(() => setState("sent"), 800);
  }

  return (
    <section className="grid h-64 w-64 content-center justify-items-center gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-center">
      {state === "sent" ? (
        <>
          <SuccessCheckmark label="보냈어요" size={64} />
          <p role="status" className="text-base font-bold text-slate-900">
            보냈어요
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
          >
            다시 보내기
          </button>
        </>
      ) : (
        <>
          <p className="text-sm text-slate-600">받는 분 하늘</p>
          <p className="text-2xl font-bold text-slate-900 tabular-nums">50,000원</p>
          <button
            type="button"
            disabled={state === "sending"}
            onClick={send}
            className="w-full rounded-lg bg-blue-600 py-2 text-sm font-semibold text-white disabled:bg-blue-400"
          >
            {state === "sending" ? "보내는 중" : "보내기"}
          </button>
        </>
      )}
    </section>
  );
}
