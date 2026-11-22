import { useEffect, useState } from "react";

import {
  ProgressToast,
  type ProgressToastStatus,
} from "@/shared/ui/patterns/progress-toast/ProgressToast";

type Upload = { readonly status: ProgressToastStatus; readonly progress: number } | null;

const STEP = 12;
const TICK_MS = 300;

export function ProgressToastDemo() {
  const [upload, setUpload] = useState<Upload>(null);
  const running = upload?.status === "running";

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setUpload((current) => {
        if (!current || current.status !== "running") return current;
        const progress = Math.min(100, current.progress + STEP);
        return { progress, status: progress === 100 ? "done" : "running" };
      });
    }, TICK_MS);
    return () => window.clearInterval(timer);
  }, [running]);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        disabled={running}
        onClick={() => setUpload({ status: "running", progress: 0 })}
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-50"
      >
        파일 올리기
      </button>
      {upload ? (
        <ProgressToast
          title="회의록.pdf 올리는 중"
          progress={upload.progress}
          status={upload.status}
          resultText={upload.status === "done" ? "회의록.pdf 올리기 완료" : "올리기를 취소했어요"}
          onCancel={() => setUpload({ status: "error", progress: upload.progress })}
        />
      ) : null}
    </div>
  );
}
