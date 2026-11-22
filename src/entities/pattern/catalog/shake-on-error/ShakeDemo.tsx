import { useId, useState, type FormEvent } from "react";
import { Shake } from "@/shared/ui/patterns/shake-on-error/Shake";

const PASSWORD = "1234";

export function ShakeDemo() {
  const id = useId();
  const [value, setValue] = useState("");
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<"idle" | "wrong" | "ok">("idle");

  function submit(event: FormEvent) {
    event.preventDefault();
    if (value === PASSWORD) {
      setResult("ok");
    } else {
      setResult("wrong");
      setAttempt((count) => count + 1);
    }
  }

  return (
    <form onSubmit={submit} className="grid w-full max-w-xs gap-2">
      <label htmlFor={id} className="text-sm font-medium text-slate-900">
        비밀번호
      </label>
      <div className="flex gap-2">
        <Shake trigger={attempt}>
          <input
            id={id}
            type="password"
            inputMode="numeric"
            value={value}
            placeholder="1234"
            aria-invalid={result === "wrong"}
            aria-describedby={`${id}-message`}
            onChange={(event) => {
              setValue(event.target.value);
              setResult("idle");
            }}
            className="w-40 rounded-lg border border-slate-300 px-3 py-2 text-sm aria-invalid:border-rose-500 aria-invalid:ring-2 aria-invalid:ring-rose-500/20"
          />
        </Shake>
        <button type="submit" className="rounded-lg bg-slate-900 px-3 text-sm text-white">
          확인
        </button>
      </div>
      <p
        id={`${id}-message`}
        role="status"
        className={`h-4 text-xs ${result === "wrong" ? "text-rose-600" : "text-emerald-700"}`}
      >
        {result === "wrong" ? "비밀번호가 맞지 않아요" : result === "ok" ? "확인했어요" : ""}
      </p>
    </form>
  );
}
