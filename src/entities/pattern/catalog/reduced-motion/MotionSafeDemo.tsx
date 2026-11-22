import { useState } from "react";
import {
  MotionSafe,
  usePrefersReducedMotion,
} from "@/shared/ui/patterns/reduced-motion/MotionSafe";

const SLIDE_IN: Keyframe[] = [
  { transform: "translateX(110%)" },
  { transform: "translateX(-6%)", offset: 0.7 },
  { transform: "none" },
];

export function MotionSafeDemo() {
  const system = usePrefersReducedMotion();
  const [preview, setPreview] = useState(system);
  const [count, setCount] = useState(0);

  return (
    <section className="w-full max-w-xs">
      <div className="h-28 overflow-hidden rounded-2xl bg-slate-100 p-3">
        {count > 0 ? (
          <MotionSafe key={`${count}-${preview}`} full={SLIDE_IN} forceReduced={preview}>
            <p className="rounded-xl bg-white p-3 text-sm text-slate-900 shadow">
              새 메시지가 왔어요
            </p>
          </MotionSafe>
        ) : null}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <label className="flex items-center gap-2 text-xs text-slate-700">
          <input
            type="checkbox"
            checked={preview}
            onChange={(event) => setPreview(event.currentTarget.checked)}
          />
          동작 줄이기
        </label>
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm text-white"
        >
          알림 보내기
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-600">
        {preview ? "제자리에서 나타나요" : "옆에서 밀려 들어와요"}
      </p>
    </section>
  );
}
