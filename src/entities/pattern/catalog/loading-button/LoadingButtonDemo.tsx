import { useEffect, useRef, useState } from "react";

import {
  LoadingButton,
  type LoadingButtonState,
} from "@/shared/ui/patterns/loading-button/LoadingButton";

const LABELS: Record<LoadingButtonState, string> = {
  idle: "저장",
  loading: "저장하는 중",
  success: "저장했어요",
  error: "다시 시도",
};

export function LoadingButtonDemo() {
  const [state, setState] = useState<LoadingButtonState>("idle");
  const [fail, setFail] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function save() {
    setState("loading");
    timerRef.current = window.setTimeout(() => {
      setState(fail ? "error" : "success");
      if (!fail) timerRef.current = window.setTimeout(() => setState("idle"), 2000);
    }, 1200);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <LoadingButton state={state} onClick={save} labels={LABELS} />
      <label className="flex items-center gap-2 text-xs text-slate-600">
        <input type="checkbox" checked={fail} onChange={(event) => setFail(event.target.checked)} />
        실패하게 하기
      </label>
    </div>
  );
}
