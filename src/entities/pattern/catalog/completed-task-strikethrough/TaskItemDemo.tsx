import { useState } from "react";
import { TaskItem } from "@/shared/ui/patterns/completed-task-strikethrough/TaskItem";

const TASKS = ["우유 사기", "택배 보내기", "운동 30분"];

export function TaskItemDemo() {
  const [done, setDone] = useState<ReadonlySet<string>>(new Set(["우유 사기"]));
  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-base font-bold text-slate-900">오늘 할 일</h3>
        <span className="text-xs text-slate-600 tabular-nums">
          완료 {done.size}/{TASKS.length}
        </span>
      </div>
      <ul className="mt-2 divide-y divide-slate-100">
        {TASKS.map((task) => (
          <li key={task}>
            <TaskItem
              label={task}
              done={done.has(task)}
              onToggle={(checked) =>
                setDone((current) => {
                  const next = new Set(current);
                  if (checked) next.add(task);
                  else next.delete(task);
                  return next;
                })
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
