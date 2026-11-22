import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "@/shared/ui/patterns/progress-bar/ProgressBar";

export function ProgressBarDemo() {
  const [percent, setPercent] = useState(0);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearInterval(timer.current), []);

  function upload() {
    if (timer.current !== undefined) return;
    let current = 0;
    setPercent(current);
    timer.current = window.setInterval(() => {
      current += 20;
      setPercent(current);
      if (current === 100) {
        window.clearInterval(timer.current);
        timer.current = undefined;
      }
    }, 220);
  }

  return (
    <div className="grid w-full max-w-xs gap-3 rounded-xl bg-white p-4">
      <button
        type="button"
        onClick={upload}
        disabled={percent > 0 && percent < 100}
        className="justify-self-start rounded-md bg-blue-700 px-3 py-2 text-sm font-medium text-white disabled:opacity-60"
      >
        업로드 시작
      </button>
      <ProgressBar label="포트폴리오 파일" percent={percent} smoothMs={220} />
      <p role="status" className="min-h-5 text-sm text-slate-700">
        {percent === 100 ? "업로드 완료" : ""}
      </p>
    </div>
  );
}
