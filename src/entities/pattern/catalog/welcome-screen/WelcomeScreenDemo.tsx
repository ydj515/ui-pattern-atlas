import { useState } from "react";
import { WelcomeScreen } from "@/shared/ui/patterns/welcome-screen/WelcomeScreen";

export function WelcomeScreenDemo() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");

  function close(message: string) {
    setOpen(false);
    setResult(message);
  }

  return (
    <div className="grid w-64 justify-items-center gap-3 rounded-3xl border border-slate-200 bg-white p-6 text-center">
      <p className="text-sm text-slate-600">처음 방문한 사람에게 한 번 보여 줘요</p>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white"
      >
        환영 화면 열기
      </button>
      <p role="status" className="h-4 text-xs text-slate-600">
        {result}
      </p>
      <WelcomeScreen
        open={open}
        title="환영해요"
        body="할 일을 한곳에서 정리해요"
        art={<span className="mx-auto block size-14 rounded-2xl bg-sky-200" />}
        startLabel="시작하기"
        exploreLabel="먼저 둘러볼게요"
        onStart={() => close("시작했어요")}
        onExplore={() => close("둘러보는 중이에요")}
      />
    </div>
  );
}
