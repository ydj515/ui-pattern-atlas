import { useCallback, useState } from "react";
import { StreamingText } from "@/shared/ui/patterns/streaming-text/StreamingText";

const ANSWER =
  "다음 주 출시 일정을 확정했어요.\n디자인 검토는 수요일에 해요.\n남은 버그는 다섯 개예요.";

export function StreamingTextDemo() {
  const [run, setRun] = useState(0);
  const [running, setRunning] = useState(false);
  const done = useCallback(() => setRunning(false), []);

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-4">
      <p className="max-w-[85%] self-end justify-self-end rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">
        회의록을 세 줄로 요약해 줘
      </p>
      <div className="min-h-24 rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm">
        {run > 0 ? (
          <StreamingText
            key={run}
            text={ANSWER}
            running={running}
            onDone={done}
            chunk={2}
            interval={40}
          />
        ) : (
          <p className="text-sm text-slate-400">아직 답변이 없어요</p>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          if (running) {
            setRunning(false);
          } else {
            setRun((value) => value + 1);
            setRunning(true);
          }
        }}
        className="justify-self-start rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
      >
        {running ? "멈추기" : "답변 받기"}
      </button>
    </section>
  );
}
