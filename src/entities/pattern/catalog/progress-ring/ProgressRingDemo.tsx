import { useEffect, useState } from "react";

import { ProgressRing } from "@/shared/ui/patterns/progress-ring/ProgressRing";

const STEP = 10;
const TICK_MS = 250;

export function ProgressRingDemo() {
  const [progress, setProgress] = useState<number | null>(null);
  const running = progress !== null && progress < 100;

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setProgress((value) => Math.min(100, (value ?? 0) + STEP));
    }, TICK_MS);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div className="flex w-full max-w-xs items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
      <ProgressRing value={progress ?? 0} label="사진 백업" />
      <div className="flex-1">
        <p className="text-sm font-semibold text-slate-900">사진 백업</p>
        <p role="status" className="text-xs text-slate-500">
          {progress === 100 ? "백업 완료" : running ? "사진 120장 백업 중" : "사진 120장"}
        </p>
      </div>
      <button
        type="button"
        disabled={running}
        onClick={() => setProgress(0)}
        className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-50"
      >
        백업 시작
      </button>
    </div>
  );
}
