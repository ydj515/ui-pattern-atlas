import { useState, type KeyboardEvent } from "react";

const TASKS = ["장보기", "운동 30분", "회의 준비"];

export function GripDemo() {
  const [tasks, setTasks] = useState(TASKS);
  const [dragging, setDragging] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function move(task: string, to: number) {
    const target = Math.max(0, Math.min(tasks.length - 1, to));
    const next = tasks.filter((item) => item !== task);
    next.splice(target, 0, task);
    setTasks(next);
    setMessage(`${task}: ${target + 1}번째`);
  }

  function handleKey(event: KeyboardEvent, task: string, index: number) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      move(task, index + (event.key === "ArrowUp" ? -1 : 1));
    }
  }

  return (
    <section className="w-72 rounded-3xl border border-slate-200 bg-white p-4">
      <h3 className="mb-2 text-sm font-bold text-slate-900">오늘 할 일</h3>
      <ul className="grid gap-1">
        {tasks.map((task, index) => (
          <li
            key={task}
            draggable
            onDragStart={() => setDragging(task)}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => {
              if (dragging) move(dragging, index);
              setDragging(null);
            }}
            className={`flex items-center gap-2 rounded-lg border px-2 py-2 text-sm ${dragging === task ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-white"}`}
          >
            <button
              type="button"
              aria-label={`${task} 순서 바꾸기, 위아래 화살표`}
              onKeyDown={(event) => handleKey(event, task, index)}
              className="grid h-7 w-5 cursor-grab place-items-center rounded text-slate-400 hover:bg-slate-100 active:cursor-grabbing"
            >
              <svg viewBox="0 0 12 18" aria-hidden="true" className="h-4 w-3 fill-current">
                {[3, 9, 15].flatMap((y) =>
                  [3, 9].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />),
                )}
              </svg>
            </button>
            {task}
          </li>
        ))}
      </ul>
      <p role="status" className="mt-2 h-4 text-xs text-slate-600">
        {message}
      </p>
    </section>
  );
}
