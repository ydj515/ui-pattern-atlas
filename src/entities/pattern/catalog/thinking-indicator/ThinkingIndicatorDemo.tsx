import { useState } from "react";
import { ThinkingIndicator } from "@/shared/ui/patterns/thinking-indicator/ThinkingIndicator";

export function ThinkingIndicatorDemo() {
  const [state, setState] = useState<"idle" | "thinking" | "answered">("idle");

  function ask() {
    setState("thinking");
    window.setTimeout(() => setState("answered"), 4000);
  }

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="max-w-[85%] justify-self-end rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">
        주말 브런치 추천해 줘
      </p>
      <div className="min-h-10">
        {state === "thinking" ? (
          <ThinkingIndicator
            label="생각하는 중"
            showSecondsAfter={3}
            seconds={(value) => `${value}초`}
          />
        ) : null}
        {state === "answered" ? (
          <p className="w-fit rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-sm shadow-sm">
            서울숲 근처 세 곳을 골라 봤어요.
          </p>
        ) : null}
      </div>
      <button
        type="button"
        disabled={state === "thinking"}
        onClick={ask}
        className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white disabled:bg-slate-300"
      >
        {state === "answered" ? "다시 묻기" : "질문하기"}
      </button>
    </section>
  );
}
