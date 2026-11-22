import { useRef, useState } from "react";
import { Fade } from "@/shared/ui/patterns/fade/Fade";

export function FadeDemo() {
  const [show, setShow] = useState(false);
  const timerRef = useRef(0);

  function save() {
    setShow(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setShow(false), 2000);
  }

  return (
    <section className="w-full max-w-xs">
      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-sm font-semibold text-slate-900">메모</p>
        <p className="mt-1 text-sm text-slate-600">우유, 달걀, 식빵 사기</p>
        <button
          type="button"
          onClick={save}
          className="mt-3 rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
        >
          저장
        </button>
      </div>
      <div role="status" className="mt-3 h-9">
        <Fade show={show}>
          <p className="rounded-lg bg-slate-900 px-3 py-2 text-sm text-white">저장했어요</p>
        </Fade>
      </div>
    </section>
  );
}
