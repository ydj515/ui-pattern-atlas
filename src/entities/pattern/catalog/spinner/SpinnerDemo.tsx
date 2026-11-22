import { useEffect, useRef, useState } from "react";
import { Spinner } from "@/shared/ui/patterns/spinner/Spinner";

export function SpinnerDemo() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  function load() {
    if (timer.current !== undefined) return;
    setState("loading");
    timer.current = window.setTimeout(() => {
      timer.current = undefined;
      setState("done");
    }, 1200);
  }

  return (
    <div className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4">
      <button
        type="button"
        onClick={load}
        disabled={state === "loading"}
        className="justify-self-start rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        새 소식 확인
      </button>
      {state === "loading" ? <Spinner label="소식을 확인하고 있어요" /> : null}
      {state === "done" ? (
        <p role="status" className="text-sm text-slate-700">
          새 소식이 없어요
        </p>
      ) : null}
    </div>
  );
}
