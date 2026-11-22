import { useState } from "react";
import { SlideToUnlock } from "@/shared/ui/patterns/slide-to-unlock/SlideToUnlock";

export function SlideToUnlockDemo() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="grid h-72 w-full max-w-xs place-items-center rounded-3xl bg-gradient-to-b from-slate-800 to-indigo-900 p-6 text-center text-white">
      {unlocked ? (
        <div role="status" className="grid gap-3">
          <p className="text-lg font-semibold">잠금이 해제됐어요</p>
          <button
            type="button"
            onClick={() => setUnlocked(false)}
            className="rounded-full bg-white/15 px-4 py-2 text-sm"
          >
            다시 잠그기
          </button>
        </div>
      ) : (
        <>
          <div>
            <p className="text-5xl font-light tabular-nums">9:41</p>
            <p className="mt-1 text-sm text-white/80">11월 23일 월요일</p>
          </div>
          <SlideToUnlock
            label="잠금 해제"
            hint="밀어서 잠금 해제"
            onUnlock={() => setUnlocked(true)}
          />
        </>
      )}
    </section>
  );
}
