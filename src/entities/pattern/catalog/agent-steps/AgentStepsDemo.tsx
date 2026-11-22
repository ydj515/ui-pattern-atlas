import { useEffect, useState } from "react";
import { AgentSteps, type AgentStep } from "@/shared/ui/patterns/agent-steps/AgentSteps";

const PLAN = [
  { id: "find", title: "자료 찾기", detail: "매출 문서 3개를 찾았어요" },
  { id: "table", title: "표로 정리", detail: "요일별 매출 표를 만들었어요" },
  { id: "summary", title: "요약 쓰기", detail: "주말 매출이 가장 높아요" },
];
const STATUS = { done: "완료", running: "진행 중", waiting: "대기", failed: "실패" };

export function AgentStepsDemo() {
  const [run, setRun] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= PLAN.length) return;
    const timer = window.setTimeout(() => setProgress((value) => value + 1), 1200);
    return () => window.clearTimeout(timer);
  }, [progress, run]);

  const steps: AgentStep[] = PLAN.map((step, index) => ({
    id: step.id,
    title: step.title,
    status: index < progress ? "done" : index === progress ? "running" : "waiting",
    detail: index < progress ? step.detail : undefined,
  }));

  return (
    <section className="grid w-80 gap-3 rounded-3xl border border-slate-200 bg-white p-5">
      <p className="max-w-[85%] justify-self-end rounded-2xl rounded-br-sm bg-slate-900 px-3 py-2 text-sm text-white">
        지난주 매출을 표로 정리해 줘
      </p>
      <AgentSteps label="작업 단계" steps={steps} statusLabels={STATUS} />
      <div className="flex items-center justify-between">
        <p role="status" className="text-xs text-emerald-700">
          {progress >= PLAN.length ? "작업을 마쳤어요" : ""}
        </p>
        <button
          type="button"
          onClick={() => {
            setProgress(0);
            setRun((value) => value + 1);
          }}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs"
        >
          다시 실행
        </button>
      </div>
    </section>
  );
}
