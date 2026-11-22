import { useState } from "react";
import { SwipeToDelete } from "@/shared/ui/patterns/swipe-to-delete/SwipeToDelete";

const TASKS = ["회의록 정리", "장보기", "운동 30분"];

export function SwipeToDeleteDemo() {
  const [tasks, setTasks] = useState<readonly string[]>(TASKS);
  const [removed, setRemoved] = useState<{ task: string; index: number } | null>(null);

  function remove(task: string) {
    setRemoved({ task, index: tasks.indexOf(task) });
    setTasks((current) => current.filter((item) => item !== task));
  }

  function undo() {
    if (!removed) return;
    setTasks((current) => current.toSpliced(removed.index, 0, removed.task));
    setRemoved(null);
  }

  return (
    <section className="w-full max-w-xs">
      <h2 className="mb-2 text-sm font-semibold text-slate-900">할 일</h2>
      <ul className="divide-y divide-slate-100 overflow-hidden rounded-xl border border-slate-200">
        {tasks.map((task) => (
          <li key={task}>
            <SwipeToDelete
              deleteLabel={`${task} 삭제`}
              actionText="삭제"
              onDelete={() => remove(task)}
            >
              <p className="px-3 py-3 text-sm text-slate-800">{task}</p>
            </SwipeToDelete>
          </li>
        ))}
      </ul>
      <p
        role="status"
        className="mt-2 flex h-8 items-center justify-between rounded-lg px-3 text-xs data-[on=true]:bg-slate-900 data-[on=true]:text-white"
        data-on={removed !== null}
      >
        {removed ? (
          <>
            <span>
              <strong>{removed.task}</strong> 삭제됨
            </span>
            <button type="button" onClick={undo} className="font-semibold text-sky-300">
              되돌리기
            </button>
          </>
        ) : null}
      </p>
    </section>
  );
}
