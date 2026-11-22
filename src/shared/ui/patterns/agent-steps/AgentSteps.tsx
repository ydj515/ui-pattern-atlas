export interface AgentStep {
  readonly id: string;
  readonly title: string;
  readonly status: "done" | "running" | "waiting" | "failed";
  /** Short result or detail, shown under the title. */
  readonly detail?: string;
}

export interface AgentStepsProps {
  readonly label: string;
  readonly steps: readonly AgentStep[];
  readonly statusLabels?: Record<AgentStep["status"], string>;
}

const DEFAULT_STATUS = { done: "완료", running: "진행 중", waiting: "대기", failed: "실패" };

function Mark({ status }: { readonly status: AgentStep["status"] }) {
  if (status === "done")
    return (
      <span className="grid size-5 place-items-center rounded-full bg-emerald-500 text-[11px] text-white">
        ✓
      </span>
    );
  if (status === "failed")
    return (
      <span className="grid size-5 place-items-center rounded-full bg-rose-500 text-[11px] text-white">
        !
      </span>
    );
  if (status === "running")
    return (
      <span className="size-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600 motion-reduce:animate-none" />
    );
  return <span className="size-5 rounded-full border-2 border-slate-200" />;
}

/**
 * What an agent is doing, as an ordered list: finished steps with their result, the
 * current step with a spinner, and the ones still waiting. Each step says its state in
 * words, and the list is a live region so progress is announced.
 */
export function AgentSteps({ label, steps, statusLabels = DEFAULT_STATUS }: AgentStepsProps) {
  return (
    <ol aria-label={label} aria-live="polite" className="grid gap-0">
      {steps.map((step, index) => (
        <li key={step.id} className="relative flex gap-3 pb-3 last:pb-0">
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute top-6 bottom-0 left-2.5 w-px bg-slate-200"
            />
          ) : null}
          <span aria-hidden="true" className="relative shrink-0">
            <Mark status={step.status} />
          </span>
          <span className="min-w-0">
            <span
              className={`block text-sm ${step.status === "waiting" ? "text-slate-400" : "font-medium text-slate-900"}`}
            >
              {step.title}
              <span className="sr-only">, {statusLabels[step.status]}</span>
            </span>
            {step.detail ? (
              <span className="block text-xs text-slate-500">{step.detail}</span>
            ) : null}
          </span>
        </li>
      ))}
    </ol>
  );
}
