import { useEffect, useRef, useState } from "react";

import { DelayedSpinner } from "@/shared/ui/patterns/delayed-spinner/DelayedSpinner";

const SPEEDS = [
  { label: "빠른 응답", seconds: "0.2초", ms: 200 },
  { label: "느린 응답", seconds: "2초", ms: 2000 },
] as const;

export function DelayedSpinnerDemo() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function load(ms: number, seconds: string) {
    window.clearTimeout(timerRef.current);
    setLoading(true);
    timerRef.current = window.setTimeout(() => {
      setLoading(false);
      setResult(`주문 내역을 불러왔어요 (${seconds})`);
    }, ms);
  }

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="grid grid-cols-2 gap-2">
        {SPEEDS.map((speed) => (
          <button
            key={speed.label}
            type="button"
            onClick={() => load(speed.ms, speed.seconds)}
            className="rounded-lg border border-slate-300 bg-white py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {speed.label} <span className="text-slate-400">{speed.seconds}</span>
          </button>
        ))}
      </div>
      <div className="grid h-20 place-items-center rounded-xl border border-slate-200 bg-white text-sm text-slate-800">
        <DelayedSpinner loading={loading} label="불러오는 중" delayMs={400} minDurationMs={600}>
          {result || <span className="text-slate-400">버튼을 눌러 보세요</span>}
        </DelayedSpinner>
      </div>
    </div>
  );
}
