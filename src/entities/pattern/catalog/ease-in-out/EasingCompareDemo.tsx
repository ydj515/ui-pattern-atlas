import { useState } from "react";
import { EasingCompare } from "@/shared/ui/patterns/ease-in-out/EasingCompare";

const CURVES = [
  { label: "일정하게", easing: "linear" },
  { label: "천천히 시작", easing: "ease-in" },
  { label: "천천히 멈춤", easing: "ease-out" },
  { label: "양쪽 천천히", easing: "ease-in-out" },
];

export function EasingCompareDemo() {
  const [runKey, setRunKey] = useState(0);
  return (
    <section className="w-full max-w-xs">
      <EasingCompare curves={CURVES} runKey={runKey} duration={1200} />
      <button
        type="button"
        onClick={() => setRunKey((value) => value + 1)}
        className="mt-4 rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
      >
        재생
      </button>
    </section>
  );
}
