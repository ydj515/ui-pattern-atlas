import { useId } from "react";

export interface SetupTask {
  readonly id: string;
  readonly label: string;
  readonly done: boolean;
  /** Text of the button that takes people to the task. */
  readonly action: string;
}

export interface SetupChecklistProps {
  readonly title: string;
  readonly tasks: readonly SetupTask[];
  readonly onAction: (id: string) => void;
  readonly doneLabel?: string;
}

/**
 * Short list of first things to do with a progress bar. Each open task has a button that
 * starts it; finished tasks are checked off but stay in place, so the list does not jump.
 */
export function SetupChecklist({
  title,
  tasks,
  onAction,
  doneLabel = "완료",
}: SetupChecklistProps) {
  const id = useId();
  const done = tasks.filter((task) => task.done).length;
  return (
    <section aria-labelledby={id} className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-baseline justify-between">
        <h2 id={id} className="text-sm font-semibold text-slate-900">
          {title}
        </h2>
        <span className="text-xs text-slate-600 tabular-nums">
          {done} / {tasks.length}
        </span>
      </div>
      <progress
        value={done}
        max={tasks.length}
        aria-label={title}
        className="mt-2 h-1.5 w-full overflow-hidden rounded-full [&::-moz-progress-bar]:bg-emerald-500 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-emerald-500 [&::-webkit-progress-value]:transition-all"
      />
      <ul className="mt-3 grid gap-1">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-2 rounded-lg px-1 py-1.5">
            <span
              aria-hidden="true"
              className={`grid size-5 shrink-0 place-items-center rounded-full border text-[11px] ${task.done ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300"}`}
            >
              {task.done ? "✓" : ""}
            </span>
            <span
              className={`flex-1 text-sm ${task.done ? "text-slate-400 line-through" : "text-slate-800"}`}
            >
              {task.label}
              {task.done ? <span className="sr-only"> ({doneLabel})</span> : null}
            </span>
            {task.done ? null : (
              <button
                type="button"
                onClick={() => onAction(task.id)}
                className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-700 hover:bg-slate-50"
              >
                {task.action}
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
