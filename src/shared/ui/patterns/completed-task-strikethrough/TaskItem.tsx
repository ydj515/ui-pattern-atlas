import { useId } from "react";

export interface TaskItemProps {
  readonly label: string;
  readonly done: boolean;
  readonly onToggle: (done: boolean) => void;
}

/**
 * To-do row whose label gets a line drawn through it, left to right, when checked, and
 * fades to grey. The checkbox carries the real state, so the strike is only a visual
 * echo; reduced motion draws it at once.
 */
export function TaskItem({ label, done, onToggle }: TaskItemProps) {
  const id = useId();
  return (
    <div className="flex items-center gap-3 py-2">
      <input
        id={id}
        type="checkbox"
        checked={done}
        onChange={(event) => onToggle(event.target.checked)}
        className="size-5 accent-emerald-600"
      />
      <label
        htmlFor={id}
        className={`relative text-sm transition-colors duration-300 motion-reduce:transition-none ${done ? "text-slate-400" : "text-slate-900"}`}
      >
        {label}
        <span
          aria-hidden="true"
          className={`absolute top-1/2 left-0 h-px w-full origin-left bg-current transition-transform duration-300 ease-out motion-reduce:transition-none ${done ? "scale-x-100" : "scale-x-0"}`}
        />
      </label>
    </div>
  );
}
